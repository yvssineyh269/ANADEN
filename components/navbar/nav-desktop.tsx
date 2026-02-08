import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { NavDesktopMenuItem } from "./nav-desktop-menu-item";
import { NavLogo } from "./nav-logo";
import { AuthProps, LogoProps, MenuItem } from "./nav-types";
import { cn } from "@/lib/utils";
import { LogIn, Phone } from "lucide-react";

export const NavDesktop = ({
  logo,
  menu,
}: {
  logo: LogoProps;
  menu: MenuItem[];
  auth: AuthProps;
}) => {
  return (
    <nav className="hidden justify-between lg:flex">
      <div className="flex items-center gap-6">
        <NavLogo {...logo} />
        <div className="flex items-center gap-1">
          {menu.map((item) => (
            <NavDesktopMenuItem key={item.title} item={item} />
          ))}
        </div>
      </div>
      <div className="items-center gap-2 flex">
        <Link
          href={"#"}
          className={cn(buttonVariants({ className: "bg-emerald-500 gap-2" }))}
        >
          <Phone />
          {/* Contactez nous */}
        </Link>
        <Link
          href={"#"}
          className={cn(buttonVariants({ className: "bg-emerald-500" }))}
        >
          <LogIn />
        </Link>
      </div>
    </nav>
  );
};
