import { useData } from "../store/MainContext";
import Cart from "./Cart";

function Header() {
  const { cart, dispatch, isCartOpen } = useData();

  console.log(isCartOpen);
  return (
    <div className="flex justify-between py-3 items-center border-b-2">
      <h1 className="uppercase  text-2xl">my jewelry store</h1>
      <div className="flex relative gap-6">
        <img
          className="cursor-pointer"
          src="/public/imgs/Group 3.jpg"
          alt="search-icon"
        />
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
        <div className="absolute top-10  z-10 right-0 border-2 border-slate-500">
          {isCartOpen && <Cart />}
        </div>
      </div>
    </div>
  );
}

export default Header;
