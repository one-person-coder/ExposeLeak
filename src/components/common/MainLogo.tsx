import { siteName } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

function MainLogo() {
  return (
    <div className="flex gap-1.5">
      <div className="relative h-auto w-12">
        <Link href={"/"}>
          <Image src={"/images/common/main-logo.webp"} fill alt={siteName} />
        </Link>
      </div>
      <div>
        <Link
          href={"/"}
          className="text-2xl sm:text-3xl font-bold font-heading text-primary"
        >
          {siteName}
        </Link>
        <p className="text-accent text-sm">We Expose Every Leak</p>
      </div>
    </div>
  );
}

export default MainLogo;
