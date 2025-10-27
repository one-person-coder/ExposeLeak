import { siteName } from "@/lib/constants";
import Link from "next/link";

function FooterBottom() {
  const currentYear = new Date().getUTCFullYear();

  return (
    <div className="w-full">
      <span className="block text-sm text-center text-muted-foreground">
        &copy; {currentYear}{" "}
        <Link href="/" className="hover:underline">
          {siteName}
        </Link>
        . All Rights Reserved.
      </span>
    </div>
  );
}

export default FooterBottom;
