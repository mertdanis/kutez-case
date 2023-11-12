import React, { useEffect, useState } from "react";
import { useData } from "../store/MainContext";

function Cart() {
  const [total, setTotal] = useState();

  const { cart, dispatch } = useData();

  const totalBalance = cart.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="flex flex-col gap-3 text-2xl w-[20vw] bg-gray-100 rounded-2xl h-fit p-3 ">
      <div className="text-center border-b-2 border-black p-2">
        {cart.length > 0 ? (
          <p className="">My Cart ({cart.length}) product</p>
        ) : (
          <p>Your Cart is Empty!</p>
        )}
      </div>
      {cart.map((product, i) => {
        const { name, price, img } = product;
        return (
          <div key={img} className="flex justify-between ">
            <img className="w-[20%]" src={img} alt={name} />
            <div className="flex flex-col justify-center items-center gap-2 text-xl ">
              <p>{name}</p>
              <p>${price} USD</p>
            </div>
            <button
              onClick={() =>
                dispatch({
                  type: "cart/del",
                  payload: i,
                })
              }
            >
              X
            </button>
          </div>
        );
      })}
      <p className="text-center">Total Price is: ${totalBalance} USD</p>
    </div>
  );
}

export default Cart;
