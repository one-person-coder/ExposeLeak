import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

function Searchbar() {
  return (
    <div className="lg:max-w-4xl w-full grow relative overflow-hidden lg:order-0 order-1">
      <Input className="input-style rounded-xl !px-4.5 !py-6" placeholder="Search exclusive content" />
      <Button className="absolute top-[50%] right-0 translate-y-[-50%] rounded-l-none rounded-r-xl p-4 h-full w-14">
        <Search className="!h-6.5 !w-6.5" strokeWidth={3} />
      </Button>
    </div>
  );
}

export default Searchbar;
