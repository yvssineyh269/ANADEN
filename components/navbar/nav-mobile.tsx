"use client";

import { useState } from "react";
// import { AuthProps, LogoProps, MenuItem } from "./nav-types";
import { AuthProps, LogoProps, MenuItem, MobileExtraLink } from "./nav-types";
import { NavMobileMenuItem } from "./nav-mobile-menu-item";
import { NavLogo } from "./nav-logo";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export const NavMobile = ({
  logo,
  menu,
  mobileExtraLinks,
  auth,
}: {
  logo: LogoProps;
  menu: MenuItem[];
  mobileExtraLinks: MobileExtraLink[];
  auth: AuthProps;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <div className="flex items-center justify-between">
        <NavLogo {...logo} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-100"
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex h-full flex-col overflow-y-auto">
            <div className="flex items-center justify-between border-b p-4">
              <NavLogo {...logo} />
              <Button
                onClick={() => setIsOpen(false)}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    className:
                      "inline-flex items-center justify-center rounded-md cursor-pointer border border-gray-300 hover:bg-gray-100",
                  }),
                )}
              >
                <X className="h-4 w-4 text-black" />
              </Button>
            </div>
            <div className="flex-1 p-4">
              <div className="flex flex-col gap-2">
                {menu.map((item) => (
                  <NavMobileMenuItem key={item.title} item={item} />
                ))}
              </div>
              <div className="border-t mt-6 pt-6">
                {/* <div className="grid grid-cols-2 gap-2">
                  {mobileExtraLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div> */}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={auth.login.url}
                  className={cn(
                    buttonVariants({
                      className:
                        "inline-flex h-10 items-center bg-emerald-500 justify-center rounded-md border border-gray-300 px-4 text-sm font-medium transition-colors hover:bg-gray-100",
                    }),
                  )}
                >
                  {auth.login.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
