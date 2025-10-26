"use client";
import { MENU_LINK } from "@/data/data";
import { urlBuilder } from "@/lib/utils";
import { MenuLinkType } from "@/types/data";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

function MenuLink() {
  const params = useParams();
  const pathname = usePathname();
  let slug = params?.slug;
  let active = "";

  if (Array.isArray(slug)) slug = slug[0];

  if (pathname === "/") {
    active = "/";
  } else if (pathname.startsWith("/categories/") && slug) {
    active = slug;
  } else if (pathname === "/categories") {
    active = "categories";
  }

  if (Array.isArray(active)) active = active[0];

  const isActive = (href: string): boolean => {
    let activeUrl = "/";
    if (active === "/") activeUrl = "/";
    else if (active === "categories") activeUrl = "/categories";
    else activeUrl = urlBuilder("categories", active);
    return activeUrl === href;
  };

  return (
    <div className="h-full lg:block hidden">
      <nav className="h-full">
        <ul className="flex justify-between items-center h-full gap-10">
          {MENU_LINK?.map((lnk: MenuLinkType, idx: number) => (
            <li key={`${idx}-${lnk.id}`} className="h-full">
              <Link
                href={lnk.url}
                className={`relative h-full text-lg font-roboto text-link flex gap-2 items-center justify-center ${
                  isActive(lnk.url) && "text-primary dark:text-primary-light"
                }`}
              >
                {lnk?.svg && <lnk.svg className="w-6 h-6" />}
                {lnk.label}
                {isActive(lnk.url) && (
                  <div className="w-full rounded-full absolute bottom-0 h-1 dark:bg-primary-light bg-primary min-w-12"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MenuLink;
