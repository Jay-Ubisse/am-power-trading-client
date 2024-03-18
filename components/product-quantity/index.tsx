import { useState } from "react";

export const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  function handleDecrement() {
    if (quantity == 1) return;
    setQuantity(quantity - 1);
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleChange() {
    console.log(quantity);
  }

  return (
    <div className="border border-slate-800 w-fit px-2">
      <span onClick={handleDecrement} className="font-light">
        -
      </span>
      <input
        type="text"
        value={quantity}
        onChange={handleChange}
        className="focus:outline-none text-center w-12"
      />
      <span onClick={handleIncrement} className="font-light">
        +
      </span>
    </div>
  );
};
