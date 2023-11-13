import { useState } from "react";
import { useData } from "../store/MainContext";

function Content() {
  const { content, dispatch, filter } = useData();

  const [show, setShow] = useState(false);

  return content
    .filter((item) => {
      return filter.toLocaleLowerCase() === ""
        ? item
        : item.name.toLocaleLowerCase().includes(filter);
    })
    .map((data, i) => {
      const { name, price, img } = data;

      return (
        <div key={img} className="flex flex-col my-[30px] gap-1  ">
          <img
            className=" rounded-2xl transition duration-500 hover:scale-105 hover:-translate-y-4  cursor-pointer"
            src={img}
            alt={name}
            onClick={() => {
              dispatch({
                type: "cart/add",
                payload: data,
              });
            }}
          />
          <p className={` ${show ? "block" : "hidden"}`}>Add to Cart</p>

          <p className="text-font15">{name}</p>
          <p
            className="hover:cursor-pointer text-font17"
            onClick={() => setShow(!show)}
          >
            ${price} USD
          </p>
        </div>
      );
    });
}

export default Content;
