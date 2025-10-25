import React from "react";
import MainLogo from "../../common/MainLogo";
import SearchBar from "../../common/SearchBar";
import Report from "./Report";
import Separator from "../../ui/Separator";
import HeaderCategories from "./CategoriesDropDown";
import NavLink from "./NavLink";
import Login from "./Login";

function Header() {
  return (
    <div className="bg-surface">
      <div className="app-container flex flex-wrap justify-between gap-y-4 gap-x-6 items-center">
        <MainLogo />
        <SearchBar />
        <Report />
      </div>
      <Separator />
      <div className="app-container flex flex-wrap justify-between gap-y-4 gap-x-6 items-center relative">
        <HeaderCategories />
        <NavLink />
        <Login />
      </div>
    </div>
  );
}

export default Header;
