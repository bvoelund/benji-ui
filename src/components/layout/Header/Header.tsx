import React from "react";
import MenuToggler from "../Menu/MenuToggler";

const Header = () => {
  return (
    <div className="w-full h-40 flex justify-between p-8">
      <div>BenjiUi</div>
      <MenuToggler />
    </div>
  );
};

export default Header;
