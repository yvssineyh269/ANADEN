import { ProjectType } from "@/components/project/project-type";

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "Projet Diaspora",
    image: "/men-anaden.jpg",
    href: "#",
    gridClass:
      "sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3",
    // Grande carte centrale qui commence à la colonne 3 sur grand écran
  },
  {
    id: "2",
    title: "Women in engineering",
    image: "/men-anaden.jpg",
    href: "#",
    gridClass:
      "sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3",
    // Carte moyenne à droite, alignée en bas
  },
  {
    id: "3",
    title: "Pride 2021",
    image: "/men-anaden.jpg",
    href: "#",
    gridClass: "col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4",
    // Carte large qui prend plus d'espace sur mobile et tablette
  },
  {
    id: "4",
    title: "Innovation Tech",
    image: "/men-anaden.jpg",
    href: "#",
    gridClass: "col-span-12 sm:col-span-4 md:col-span-6 lg:col-span-5",
    // Carte avec proportions inversées entre tablette et desktop
  },
  {
    id: "5",
    title: "Digital Transformation",
    image: "/men-anaden.jpg",
    href: "#",
    gridClass:
      "col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-3 lg:row-span-1",
    // Petite carte compacte sur grand écran
  },
];
