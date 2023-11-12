import React from "react";

function Header() {
  return (
    <div className="flex justify-between p-3 bg-black text-white">
      <h1 className="uppercase font-bold">my jewelry store</h1>
      <div className="flex gap-6">
        <img src="/my-project/public/Group 3.jpg" alt="search-icon" />
        <img src="/my-project/src/assets/imgs/Group 2.jpg" alt="shop-icon" />
      </div>
    </div>
  );
}

export default Header;
