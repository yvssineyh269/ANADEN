import Image from "next/image";
import Link from "next/link";
import { LogoProps } from "./nav-types";

export const NavLogo = ({ url, src, alt, title }: LogoProps) => {
  return (
    <Link href={url} className="flex items-center gap-2">
      <Image src={src} className="w-8" alt={alt} width={36} height={36} />
      <span className="text-lg font-semibold">{title}</span>
    </Link>
  );
};
