import React, { useEffect, useState } from "react";
import { useData } from "../store/MainContext";

function Cart() {
  const { cart, dispatch } = useData();

  const totalBalance = cart.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="flex flex-col gap-3 sm:text-2xl text-xl sm:w-[20vw]  bg-gray-100  sm:p-3 px-[50px] py-5">
      <div
        className={`text-center  p-2 ${
          cart.length > 0 ? "border-b-2 border-black" : ""
        }`}
      >
        {cart.length > 0 ? (
          <p className="font-fontTitle">My Cart ({cart.length}) Products</p>
        ) : (
          <p>Your Cart is Empty!</p>
        )}
      </div>
      {cart.map((product, i) => {
        const { name, price, img } = product;
        return (
          <div
            key={img}
            className="flex flex-col xl:flex-row text-center xl:text-start items-center justify-between xl:gap-0 gap-3"
          >
            <img className="xl:w-[20%] w-[60%]" src={img} alt={name} />
            <div className="flex flex-col justify-center items-center sm:gap-2 gap-0 text-[16px] sm:text-xl ">
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
        <div className="flex flex-col  xl:flex-row   gap-3 justify-between py-3">
          <button
            className="bg-orange-500 rounded-2xl text-white p-1 sm:p-3"
            onClick={() => {
              dispatch({
                type: "cart/clear/all",
              });
            }}
          >
            Clear All
          </button>

          <button className="bg-orange-500 rounded-2xl text-white p-1 sm:p-3">
            Checkout
          </button>
        </div>
      ) : (
        ""
      )}
      {cart.length > 0 ? (
        <p className="text-center sm:text-xl text-[16px] font-bold">
          Total Price is: ${totalBalance} USD
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;
