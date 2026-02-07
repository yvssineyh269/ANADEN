"use client";

import { useState } from "react";
import { AuthProps, LogoProps, MenuItem, MobileExtraLink } from "./nav-types";
import { NavMobileMenuItem } from "./nav-mobile-menu-item";
import { NavLogo } from "./nav-logo";
import { Menu } from "lucide-react";

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
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 p-4">
              <div className="flex flex-col gap-2">
                {menu.map((item) => (
                  <NavMobileMenuItem key={item.title} item={item} />
                ))}
              </div>
              <div className="border-t mt-6 pt-6">
                <div className="grid grid-cols-2 gap-2">
                  {mobileExtraLinks.map((link, idx) => (
                    <a
                      key={idx}
                      className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
                      href={link.url}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={auth.login.url}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 text-sm font-medium transition-colors hover:bg-gray-100"
                >
                  {auth.login.text}
                </a>
                <a
                  href={auth.signup.url}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                >
                  {auth.signup.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
