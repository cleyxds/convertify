import { useState, useEffect } from 'react';

function UseWindowWidth() {
    const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
}

export default UseWindowWidth;