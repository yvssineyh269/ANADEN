import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
//   description: string;
  image: string;
  href: string;
  gridClass: string;
}

export default function ProjectCard({
  title,
//   description,
  image,
  href,
  gridClass,
}: ProjectCardProps) {
  return (
    <div className={gridClass}>
      <Link
        href={href}
        className="group relative block rounded-xl overflow-hidden focus:outline-hidden"
      >
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 end-0 start-0 p-2 sm:p-4">
          <span className={cn(buttonVariants({ variant: "outline" }))}>
            {title}
          </span>
        </div>
      </Link>
    </div>
  );
}
