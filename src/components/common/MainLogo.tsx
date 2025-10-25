import Image from "next/image";
import { siteName } from "@/lib/constants";
import Link from "next/link";

function MainLogo() {
  return (
    <div className="flex gap-1 items-center">
      <div className="h-13 lg:h-14 w-11 lg:w-12 relative">
        <Image src={"/images/common/dark-logo.webp"} fill alt={siteName} />
      </div>
      <div className="flex flex-col">
        <Link href={"/"} className="text-2xl sm:text-3xl font-roboto font-bold text-[#0072c4] dark:text-primary-light">
          ExposeLeak
        </Link>
        <span className="text-sm text-[#000000] dark:text-[#56fdb5] ml-0.5 font-body dark:font-roboto">
          We Expose Every Leaks
        </span>
      </div>
    </div>
  );
}

export default MainLogo;
