function Input({ onChange }) {
  return (
    <input
      onChange={onChange}
      className=" bg-gray-100 w-[30vw]  border-r-2 text-center p-2 outline-none "
      type="text"
      placeholder="Search a Jewelry!"
    />
  );
}

export default Input;
