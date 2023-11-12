import { useState } from "react";
import { useData } from "../store/MainContext";
import Cart from "./Cart";
import Input from "./Input";

function Header() {
  const { cart, dispatch, isCartOpen } = useData();

  const [showSearch, setshowSearch] = useState(false);

  return (
    <div className="flex justify-between py-3  border-b-2">
      <h1 className="uppercase  text-2xl">my jewelry store</h1>
      <div className="flex relative gap-6  items-center ">
        <div className="relative">
          <img
            onClick={() => {
              setshowSearch(!showSearch);
            }}
            className="cursor-pointer"
            src="/public/imgs/Group 3.jpg"
            alt="search-icon"
          />
          {showSearch && (
            <div className="absolute right-52 -bottom-2">
              <Input
                onChange={(e) => {
                  dispatch({
                    type: "content/filter",
                    payload: e.target.value,
                  });
                }}
              />
            </div>
          )}
        </div>
        <div className="relative">
          <img
            className="cursor-pointer"
            onClick={() => {
              dispatch({
                type: "cart/status",
                payload: !isCartOpen,
              });
            }}
            src="/public/imgs/Group 2.jpg"
            alt="shop-icon"
          />
          {cart.length > 0 ? (
            <p className="  absolute bottom-4 left-1 text-black font-bold">
              {cart.length}
            </p>
          ) : (
            ""
          )}
        </div>

        {isCartOpen && (
          <div className="absolute top-10 z-10 right-0 border-2 border-slate-500">
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
