function Input({ onChange }) {
  return (
    <input
      onChange={onChange}
      className=" bg-gray-100 w-[30vw]   text-center p-2 outline-none focus:bg-gray-300 transition duration-300"
      type="text"
      placeholder="Search a Jewelry!"
    />
  );
}

export default Input;
