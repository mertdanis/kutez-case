import { useState } from "react";
import { useData } from "../store/MainContext";
import Cart from "./Cart";
import Input from "./Input";

function Header() {
  const { cart, dispatch, isCartOpen } = useData();

  const [showSearch, setshowSearch] = useState(false);

  return (
    <div className="flex  flex-col 2xl:flex-row items-center xl:gap-0 gap-3 xl:justify-between justify-center py-3  ">
      <h1 className="uppercase font-fontTitle text-2xl  ">my jewelry store</h1>
      <div className="flex  gap-4  relative sm:pb-0 2xl:pb-0 lg:pb-6 pb-6 items-center ">
        <div className="relative">
          <img
            onClick={() => {
              dispatch({
                type: "content/filter/clear",
              });
              setshowSearch(!showSearch);
            }}
            className="cursor-pointer mt-1 "
            src="./imgs/Group 3.jpg"
            alt="search-icon"
          />
          {showSearch && (
            <div className="absolute -right-16 -bottom-14  lg:-right-56   2xl:right-48 2xl:-bottom-3 ">
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
            src="./imgs/Group 2.jpg"
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
