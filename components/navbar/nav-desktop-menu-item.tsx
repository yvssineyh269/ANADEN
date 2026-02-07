"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { MenuItem } from "./nav-types";
import Link from "next/link";
import { Button } from "../ui/button";

export const NavDesktopMenuItem = ({ item }: { item: MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.items) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Button className="inline-flex h-10 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900">
          {item.title}
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
        {isOpen && (
          <div className="absolute left-0 top-full z-50 mt-1 w-80 rounded-md border bg-white p-3 shadow-lg">
            <ul>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                    href={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-gray-600">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      className="inline-flex h-10 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
      href={item.url}
    >
      {item.title}
    </a>
  );
};
