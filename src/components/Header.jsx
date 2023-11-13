import { useState } from "react";
import { useData } from "../store/MainContext";
import Cart from "./Cart";
import Input from "./Input";

function Header() {
  const { cart, dispatch, isCartOpen } = useData();

  const [showSearch, setshowSearch] = useState(false);

  return (
    <div className="flex flex-col 2xl:flex-row items-center xl:gap-0 gap-3 xl:justify-between justify-center py-3  ">
      <h1 className="uppercase font-fontTitle text-2xl  ">my jewelry store</h1>
      <div className="flex  gap-4  relative sm:py-0 pb-6  items-center ">
        <div className="relative">
          <img
            onClick={() => {
              dispatch({
                type: "content/filter/clear",
              });
              setshowSearch(!showSearch);
            }}
            className="cursor-pointer mt-1 "
            src="/public/imgs/Group 3.jpg"
            alt="search-icon"
          />
          {showSearch && (
            <div className="absolute xl:right-48 xl:-bottom-3  -right-16 -bottom-14 ">
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
          <div className="absolute top-10 z-10 sm:right-0 -right-20 border-2 border-black">
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
