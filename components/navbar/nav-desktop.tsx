import { Button } from "../ui/button";
import { NavDesktopMenuItem } from "./nav-desktop-menu-item";
import { NavLogo } from "./nav-logo";
import { AuthProps, LogoProps, MenuItem } from "./nav-types";

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
      <Button>Contactez nous</Button>
    </nav>
  );
};
