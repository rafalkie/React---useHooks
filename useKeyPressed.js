import { useState, useEffect } from "react";

function useKeyPressed(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = event => {
    const { key } = event;
    if (key === targetKey && event.ctrlKey) {
      setKeyPressed(true);
    }
  };

  const upHandler = event => {
    const { key } = event;
    if (key === targetKey && event.ctrlKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
}

export default useKeyPressed;
