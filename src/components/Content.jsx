import { useData } from "../store/MainContext";

function Content() {
  const { content, dispatch, filter } = useData();

  return content
    .filter((item) => {
      return filter.toLocaleLowerCase() === ""
        ? item
        : item.name.toLocaleLowerCase().includes(filter);
    })
    .map((data) => {
      const { name, price, img } = data;

      return (
        <div key={img} className="flex flex-col my-[30px] gap-1 font-bold ">
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

          <p className="text-font15">{name}</p>
          <p className=" text-font17">${price} USD</p>
        </div>
      );
    });
}

export default Content;
