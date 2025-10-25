import Link from "next/link";
import React from "react";

function NavLink() {
  interface NavLink {
    title: string;
    path: string;
  }
  const navLinks: NavLink[] = [
    { title: "Latest Videos", path: "/category/latest-videos" },
    { title: "Trending Videos", path: "/category/trending-videos" },
    { title: "Most Viewed", path: "/category/most-viewed" },
    { title: "Categories", path: "/category" },
  ];

  console.log(navLinks);

  return (
    <div className="hidden lg:flex gap-10">
      {navLinks?.map((link, index) => (
        <Link key={index} href={link?.path} className="text-lg hover:text-primary">
          {link?.title}
        </Link>
      ))}
    </div>
  );
}

export default NavLink;
