"use client";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";

function Searchbar() {
  const [value, setValue] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const query = (Array.isArray(params?.query) ? params?.query[0] : params?.query) || "";

  useEffect(() => {
    if (pathname.startsWith("/search")) {
      if (query?.trim()) {
        setValue(query);
      }
    } else {
      setValue("");
    }
  }, [pathname, query]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    router.push(`/search/${value}`);
  };

  return (
    <form className="lg:max-w-4xl w-full grow relative overflow-hidden lg:order-0 order-1" onSubmit={handleSubmit}>
      <Input
        className="input-style rounded-xl !px-4.5 !py-6"
        placeholder="Search exclusive content"
        value={value}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        className="absolute top-[50%] right-0 translate-y-[-50%] rounded-l-none rounded-r-xl p-4 h-full w-14"
      >
        <Search className="!h-6.5 !w-6.5" strokeWidth={3} />
      </Button>
    </form>
  );
}

export default Searchbar;
