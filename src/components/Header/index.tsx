import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import MainLogo from "../common/MainLogo";
import Searchbar from "./Searchbar";
import AuthButton from "./AuthButton";
import MenuLink from "./MenuLink";
import ThemeSwitcherButton from "./ThemeSwitcherButton";
import CategoryButton from "./CategoryButton";
import CustomSeparator from "../common/Separator";

function Header() {
  return (
    <header className="sticky top-0 z-20">
      <Card className="rounded-none shadow-none pt-3 pb-0 gap-0 border-none px-0">
        <CardContent className="app-container px-0 flex flex-wrap lg:flex-nowrap gap-5 justify-between items-center app-padding">
          <MainLogo />
          <Searchbar />
          <AuthButton />
        </CardContent>
        <CustomSeparator />
        <CardFooter className="px-0 app-container h-13.5 flex gap-5 justify-between items-center app-padding">
          <CategoryButton />
          <MenuLink />
          <ThemeSwitcherButton />
        </CardFooter>
      </Card>
    </header>
  );
}

export default Header;
