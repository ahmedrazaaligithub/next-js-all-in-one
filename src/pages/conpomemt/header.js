import React, { useState } from "react";
import Button from "./button";

const Header = () => {
  const [counter, setCounter] = useState(0);
  const plusCount = () => {
    setCounter(counter + 1);
  };
  const minusCount = () => {
    counter > 0 && setCounter(counter - 1);
  };
  return (
    <>
      <Button
        onclick={plusCount}
        className={
          "bg-transparent text-5xl border-x-2 border-stone-400  rounded-3xl text-stone-400"
        }
      >
        +
      </Button>
      <p className="font-bold text-5xl mx-3">{counter}</p>
      <Button
        onclick={minusCount}
        className={
          "bg-transparent text-5xl border-y-2 border-stone-400  rounded-3xl text-stone-400"
        }
      >
        -
      </Button>
    </>
  );
};

export default Header;
