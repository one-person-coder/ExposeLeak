import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

function Searchbar() {
  return (
    <div className="max-w-4xl grow relative overflow-hidden">
      <Input
        className="dark:!bg-background bg-secondary px-4.5 py-6 rounded-xl !text-[1rem] focus-visible:ring-0 focus-visible:shadow-none dark:focus-visible:border-gray-600 border-2 border-transparent w-full"
        placeholder="Search exclusive content"
      />
      <Button className="absolute top-[50%] right-0 translate-y-[-50%] rounded-l-none rounded-r-xl p-4 h-full w-14">
        <Search className="!h-6.5 !w-6.5" strokeWidth={3} />
      </Button>
    </div>
  );
}

export default Searchbar;
