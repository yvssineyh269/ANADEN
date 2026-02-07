import { Book, Trees, Sunset, Zap } from "lucide-react";
import { AuthProps, LogoProps, MenuItem, MobileExtraLink } from "./nav-types";
import Image from "next/image";

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
        icon: <Book className="h-5 w-5 shrink-0" />,
        url: "/blog",
      },
      {
        title: "Partenaires",
        description: "Notre mission est d'innover et d'empowerer le monde",
        icon: <Trees className="h-5 w-5 shrink-0" />,
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
        icon: <Zap className="h-5 w-5 shrink-0" />,
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
        title: "Contactez-nous",
        description: "Nous sommes là pour répondre à toutes vos questions.",
        icon: <Sunset className="h-5 w-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Statut",
        description: "Vérifiez l'état actuel de nos services et API",
        icon: <Trees className="h-5 w-5 shrink-0" />,
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
  login: { text: "Log in", url: "#" },
  signup: { text: "Sign up", url: "#" },
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
