import { useState } from "react";

function MyButton() {
  const [counter, setCounter] = useState(100);

  const onClickButton = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <button onClick={onClickButton}> MyButton </button>
      <p>{counter}</p>
    </>
  );
}

export default MyButton;
