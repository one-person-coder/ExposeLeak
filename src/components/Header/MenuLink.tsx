import { MENU_LINKs } from "@/data/data";
import { MenuLinkType } from "@/types/data";
import Link from "next/link";

function MenuLink() {
  const active = "/";
  const getActiveClassName = (href: string) => {
    return active === href ? "border-b-3 dark:border-[#70c4ff] dark:!text-[#70c4ff] border-primary text-primary" : "";
  };
  return (
    <div className="h-full">
      <nav className="h-full">
        <ul className="flex justify-between items-center h-full gap-10">
          {MENU_LINKs?.map((lnk: MenuLinkType, idx: number) => (
            <li key={`${idx}-${lnk.id}`} className="h-full">
              <Link
                href={lnk.href}
                className={`h-full text-lg font-roboto dark:text-gray-300  flex gap-2 items-center justify-center min-w-12 dark:hover:text-[#70c4ff] hover:text-primary 
                  ${getActiveClassName(lnk.href)}`}
              >
                {lnk?.svg && <lnk.svg className="w-6 h-6" strokeWidth={2.5} />}
                {lnk.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MenuLink;
