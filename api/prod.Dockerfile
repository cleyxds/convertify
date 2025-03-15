FROM node:lts-alpine

ENV NODE_ENV production

WORKDIR /home/application

COPY package.json yarn.lock ./

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build

USER node

EXPOSE 3001

CMD ["node", "build/index.js"]
