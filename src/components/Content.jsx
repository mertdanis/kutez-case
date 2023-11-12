import { useState } from "react";
import { useData } from "../store/MainContext";

function Content() {
  const { content, dispatch } = useData();
  const [showCart, setshowCart] = useState(false);

  console.log(showCart);

  return content.map((data) => {
    const { name, price, img } = data;

    return (
      <div key={img} className="flex flex-col my-[30px] gap-1 ">
        <img
          className=" rounded-2xl transition duration-500 hover:scale-105 hover:-translate-y-4  cursor-pointer"
          src={img}
          alt={name}
          onMouseEnter={() => setshowCart(true)}
          onMouseLeave={() => setshowCart(false)}
          onClick={() => {
            dispatch({
              type: "cart/add",
              payload: data,
            });
          }}
        />

        <p>test</p>

        <p>{name}</p>
        <p>${price} USD</p>
      </div>
    );
  });
}

export default Content;
