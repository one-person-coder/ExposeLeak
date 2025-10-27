import { FOOTER_MENU_LINK } from "@/data/data";
import { MenuLinkType } from "@/types/data";
import Link from "next/link";
import React from "react";

function FooterHeader() {
  return (
    <div className="w-full">
      <nav className="w-full">
        <ul className="flex flex-wrap justify-center items-center h-full gap-x-10 gap-y-4">
          {FOOTER_MENU_LINK?.map((lnk: MenuLinkType, idx: number) => (
            <li key={`${idx}-${lnk.id}`} className="h-full">
              <Link
                href={lnk.url}
                className={`relative h-full hover:underline font-roboto text-link flex gap-2 items-center justify-center`}
              >
                {lnk.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default FooterHeader;
