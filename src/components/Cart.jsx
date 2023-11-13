import React, { useEffect, useState } from "react";
import { useData } from "../store/MainContext";

function Cart() {
  const { cart, dispatch } = useData();

  const totalBalance = cart.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="flex flex-col gap-3 text-2xl w-[20vw] bg-gray-100  h-fit p-3 ">
      <div
        className={`text-center  p-2 ${
          cart.length > 0 ? "border-b-2 border-black" : ""
        }`}
      >
        {cart.length > 0 ? (
          <p className="font-fontTitle">My Cart ({cart.length}) products</p>
        ) : (
          <p>Your Cart is Empty!</p>
        )}
      </div>
      {cart.map((product, i) => {
        const { name, price, img } = product;
        return (
          <div key={img} className="flex items-center justify-between ">
            <img className="w-[20%]" src={img} alt={name} />
            <div className="flex flex-col justify-center items-center gap-2 text-xl ">
              <p>{name}</p>
              <p>${price} USD</p>
            </div>

            <i
              className="fa-regular fa-trash-can cursor-pointer"
              onClick={() =>
                dispatch({
                  type: "cart/del",
                  payload: i,
                })
              }
            ></i>
          </div>
        );
      })}
      {cart.length > 0 ? (
        <div className="flex justify-between py-3">
          <button
            className="bg-orange-500 rounded-2xl text-white p-3 "
            onClick={() => {
              dispatch({
                type: "cart/clear/all",
              });
            }}
          >
            Clear All
          </button>

          <button className="bg-orange-500 rounded-2xl text-white p-3">
            Checkout
          </button>
        </div>
      ) : (
        ""
      )}
      {cart.length > 0 ? (
        <p className="text-center">Total Price is: ${totalBalance} USD</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;
