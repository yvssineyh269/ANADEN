"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { MenuItem } from "./nav-types";
import Link from "next/link";

export const NavMobileMenuItem = ({ item }: { item: MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.items) {
    return (
      <div className="border-b border-gray-200">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between py-3 font-semibold text-left"
        >
          {item.title}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {isOpen && (
          <div className="pb-3">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-gray-100"
                href={subItem.url}
              >
                {subItem.icon}
                <div>
                  <div className="text-sm font-semibold">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-sm leading-snug text-gray-600">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.url}
      className="block py-3 font-semibold border-b border-gray-200"
    >
      {item.title}
    </Link>
  );
};
