import React from "react";
import { useData } from "../store/MainContext";

function Cart() {
  const { cart, dispatch } = useData();

  return (
    <div className="flex flex-col gap-3 text-2xl w-[20vw] bg-slate-100 rounded-2xl h-fit p-3 ">
      <div className="text-center">
        {cart.length > 0 ? (
          <p className="">My Cart ({cart.length}) product</p>
        ) : (
          <p>Your Cart is Empty!</p>
        )}
      </div>
      {cart.map((product) => {
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
                  payload: product,
                })
              }
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
