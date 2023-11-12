import { useData } from "../store/MainContext";

function Content() {
  const { content } = useData();

  return content.map((data) => {
    const { name, price, img } = data;

    return (
      <div key={img} className="flex flex-col my-[30px]  gap-3">
        <img className="rounded-2xl" src={img} alt={name} />
        <p>{name}</p>
        <p>${price} USD</p>
      </div>
    );
  });
}

export default Content;
