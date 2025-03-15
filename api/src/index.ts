import path from "path"
import sharp from "sharp"

import Fastify from "fastify"
import fastifyMultipart from "@fastify/multipart"
import fastifyCors from "@fastify/cors"

import { z } from "zod"

const fastify = Fastify({ logger: true })

// Register CORS plugin
fastify.register(fastifyCors, {
  origin: "*", // Allow all origins
  methods: ["GET", "POST"], // Allow only GET and POST methods
})

// Register multipart plugin with limits
fastify.register(fastifyMultipart, {
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
})

async function convertToWebp(inputBuffer: Buffer): Promise<Buffer> {
  try {
    const outputBuffer = await sharp(inputBuffer).webp().toBuffer()

    // console.log(`Converted image to .webp format`)

    return outputBuffer
  } catch (error) {
    console.error(`Error converting image:`, error)
    throw error
  }
}

const convertSchema = z.object({
  images: z.array(
    z.object({
      filename: z.string().nonempty(),
      data: z.instanceof(Buffer),
    })
  ),
})

fastify.post("/api/convert-images", async (request, reply) => {
  const parts = await request.parts()

  const images: { filename: string; data: Buffer }[] = []

  for await (const part of parts) {
    if (part.type === "file") {
      const buffers: Buffer[] = []

      for await (const chunk of part.file) {
        buffers.push(chunk)
      }

      images.push({
        filename: part.fieldname,
        data: Buffer.concat(buffers),
      })
    }
  }

  const validation = convertSchema.safeParse({ images })

  if (!validation.success) {
    return reply
      .status(400)
      .send({ error: "Invalid input, expected an array of image objects" })
  }

  const convertedImages = []

  for (const image of images) {
    try {
      const outputBuffer = await convertToWebp(image.data)

      convertedImages.push({
        filename: path.parse(image.filename).name + ".webp",
        data: outputBuffer.toString("base64"),
      })
    } catch (error) {
      return reply
        .status(500)
        .send({ error: `Error converting ${image.filename}: ${error}` })
    }
  }

  reply.send({ message: "Images converted successfully", images: convertedImages })
})

const PORT = 3001

fastify.listen({ port: PORT, host: "0.0.0.0" }, (err) => {
  if (err) throw err
  console.log(`server listening on ${PORT}`)
})
