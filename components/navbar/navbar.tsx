import {
  defaultAuth,
  defaultLogo,
  defaultMenu,
  defaultMobileExtraLinks,
} from "./nav-data";
import { NavDesktop } from "./nav-desktop";
import { NavMobile } from "./nav-mobile";
// import { AuthProps, LogoProps, MenuItem } from "./nav-types";
import { AuthProps, LogoProps, MenuItem, MobileExtraLink } from "./nav-types";

export interface Navbar1Props {
  logo?: LogoProps;
  menu?: MenuItem[];
  mobileExtraLinks?: MobileExtraLink[];
  auth?: AuthProps;
}

export const Navbar = ({
  logo = defaultLogo,
  menu = defaultMenu,
  mobileExtraLinks = defaultMobileExtraLinks,
  auth = defaultAuth,
}: Navbar1Props) => {
  return (
    <section className="py-4">
      <div className="max-w-350 px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <NavDesktop logo={logo} menu={menu} auth={auth} />
        <NavMobile
          logo={logo}
          menu={menu}
          mobileExtraLinks={mobileExtraLinks}
          auth={auth}
        />
      </div>
    </section>
  );
};
