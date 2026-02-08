import {
  Book,
  Trees,
  Sunset,
  Zap,
  Newspaper,
  HandshakeIcon,
  ShoppingCart,
  Superscript,
  ChevronsRightLeftIcon,
  Archive,
  Home,
  UserRound,
  UsersRound,
  Webhook,
} from "lucide-react";
import { AuthProps, LogoProps, MenuItem, MobileExtraLink } from "./nav-types";
import Image from "next/image";
import { Certificate } from "crypto";

export const defaultLogo: LogoProps = {
  url: "https://www.anaden.org",
  src: "/anaden-logo.jpg",
  alt: "logo",
  title: "ANADEN",
};

export const defaultMenu: MenuItem[] = [
  { title: "Accueil", url: "/" },
  {
    title: "Products",
    url: "#",
    items: [
      {
        title: "Blog",
        description:
          "Les dernières actualités, mises à jour et informations du secteur",
        icon: <Newspaper className="h-5 w-5 shrink-0" />,
        url: "/blog",
      },
      {
        title: "Partenaires",
        description: "Notre mission est d'innover et d'empowerer le monde",
        icon: <HandshakeIcon className="h-5 w-5 shrink-0" />,
        url: "/partners",
      },
      {
        title: "Carrières",
        description:
          "Parcourez les offres d'emploi et découvrez notre espace de travail",
        icon: <Sunset className="h-5 w-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Support",
        description:
          "Contactez notre équipe d'assistance ou rendez-vous sur nos forums communautaires.",
        icon: <Archive className="h-5 w-5 shrink-0" />,
        url: "#",
      },
    ],
  },
  {
    title: "Resources",
    url: "#",
    items: [
      {
        title: "Help Center",
        description: "Trouvez toutes les réponses à vos questions ici même.",
        icon: <Zap className="h-5 w-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Communauté",
        description:
          "Nous sommes là pour s'entreaider ensemble nous irons loin.",
        icon: <UsersRound className="h-5 w-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Statut",
        description: "Vérifiez l'état actuel de nos services et API",
        icon: <Webhook className="h-5 w-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Conditions d'utilisation",
        description:
          "Nos conditions générales d'utilisation expliquées en détail.",
        icon: <Book className="h-5 w-5 shrink-0" />,
        url: "#",
      },
    ],
  },
  // {
  //   title: "Pricing",
  //   url: "#",
  // },
  {
    title: "Blog",
    url: "#",
  },
];

export const defaultMobileExtraLinks: MobileExtraLink[] = [
  { name: "Press", url: "#" },
  { name: "Contact", url: "#" },
  { name: "Imprint", url: "#" },
  { name: "Sitemap", url: "#" },
];

export const defaultAuth: AuthProps = {
  login: { text: "Se connecter", url: "/login" },
};

// ============================================
// LOGO COMPONENT
// ============================================
export const Logo = ({ url, src, alt, title }: LogoProps) => {
  return (
    <a href={url} className="flex items-center gap-2">
      <Image src={src} className="w-8" alt={alt} width={36} height={36} />
      <span className="text-lg font-semibold">{title}</span>
    </a>
  );
};
