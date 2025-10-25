"use client";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
} from "@/components/ui/Dropdown";
import React, { useState } from "react";

function HeaderCategories() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  interface Item {
    name: string;
    path: string;
  }

  interface Categories {
    title: string;
    items: Item[];
  }

  const categories: Categories[] = [
    {
      title: "Leaks",
      items: [
        { name: "Data Breaches", path: "/category/data-breaches" },
        { name: "API Leaks", path: "/category/api-leaks" },
        { name: "Cloud Exposures", path: "/category/cloud-exposures" },
        { name: "GitHub Leaks", path: "/category/github-leaks" },
      ],
    },
    {
      title: "Malware",
      items: [
        { name: "Ransomware", path: "/category/ransomware" },
        { name: "Infostealers", path: "/category/infostealers" },
        { name: "Botnets", path: "/category/botnets" },
      ],
    },
    {
      title: "Vulnerabilities",
      items: [
        { name: "Zero Days", path: "/category/zero-days" },
        { name: "CVE Exploits", path: "/category/cve-exploits" },
      ],
    },
    {
      title: "Dark Web",
      items: [
        { name: "Forums", path: "/category/dark-web-forums" },
        { name: "Marketplaces", path: "/category/dark-web-marketplaces" },
      ],
    },
    {
      title: "Phishing",
      items: [
        { name: "Email Attacks", path: "/category/email-phishing" },
        { name: "Clone Sites", path: "/category/clone-sites" },
      ],
    },
    {
      title: "Threat Actors",
      items: [
        { name: "APT Groups", path: "/category/apt-groups" },
        { name: "Hacktivists", path: "/category/hacktivists" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Hacking Tools", path: "/category/hacking-tools" },
        { name: "Exploits", path: "/category/exploits" },
      ],
    },
    {
      title: "Reports",
      items: [
        { name: "Threat Intelligence", path: "/category/threat-intel" },
        { name: "Incident Reports", path: "/category/incident-reports" },
      ],
    },
  ];

  return (
    <Dropdown label="Categories" isOpen={isOpen} toggleIsOpen={toggleDropdown}>
      <DropdownContent className="space-y-6">
        {categories?.map((category, index) => (
          <div key={index}>
            <DropdownLabel key={index}>{category.title}</DropdownLabel>
            <div className="flex gap-3 items-center mt-1.5 flex-wrap">
              {category?.items?.map((item, index) => (
                <DropdownItem key={index}>{item?.name}</DropdownItem>
              ))}
            </div>
          </div>
        ))}
      </DropdownContent>
    </Dropdown>
  );
}

export default HeaderCategories;
