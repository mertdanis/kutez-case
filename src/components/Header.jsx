function Header() {
  return (
    <div className="flex justify-between p-3 items-center ">
      <h1 className="uppercase  text-2xl">my jewelry store</h1>
      <div className="flex  gap-6">
        <img src="/public/imgs/Group 3.jpg" alt="search-icon" />
        <img src="/public/Group 2.jpg" alt="shop-icon" />
      </div>
    </div>
  );
}

export default Header;
