import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import MainLogo from "./MainLogo";
import Searchbar from "./Searchbar";
import AuthButton from "./AuthButton";
import { Separator } from "@/components/ui/separator";
import MenuLink from "./MenuLink";
import ThemeSwitcherButton from "./ThemeSwitcherButton";
import CategoryButton from "./CategoryButton";

function Header() {
  return (
    <header className="sticky top-0">
      <Card className="rounded-none shadow-none pt-3 pb-0 gap-0 border-none">
        <CardContent className="app-container flex gap-5 justify-between items-center">
          <MainLogo />
          <Searchbar />
          <AuthButton />
        </CardContent>
        <Separator className="dark:bg-gray-600/50 mt-4 mb-0" />
        <CardFooter className="app-container h-13.5 flex gap-5 justify-between items-center">
          <CategoryButton />
          <MenuLink />
          <ThemeSwitcherButton />
        </CardFooter>
      </Card>
    </header>
  );
}

export default Header;
