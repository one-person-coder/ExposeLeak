"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    router.push(`/search/${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex grow-1 max-w-2xl lg:min-w-md min-w-full order-1 lg:order-none"
    >
      <div className="relative w-full">
        <Search className="absolute top-[50%] text-gray-300 -translate-y-[50%] left-[15px]" />
        <Input
          type="text"
          placeholder={"Search exclusive content"}
          className="py-3 px-4 pl-13 !w-full rounded-l-full focus-primary-ring text-gray-100"
          onChange={handleSearchChange}
          value={query}
        />
      </div>
      <Button className="text-gray-100 !py-[6px] rounded-r-full w-[100px] focus:!ring-0 shadow-md">
        Search
      </Button>
    </form>
  );
}

export default SearchBar;
