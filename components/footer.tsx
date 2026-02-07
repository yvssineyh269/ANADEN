import Image from "next/image";
import Logo from "@/public/anaden-logo.jpg";
import Link from "next/link";
import { ChevronUp, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-6">
      <div className="px-4 sm:px-6 lg:px-8 pb-16 pt-16 mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex items-start gap-4">
          {/* logo section du pied de page */}
          <div className="flex items-center gap-2 cursor-pointer rounded-lg">
            <Image
              src={Logo}
              alt="ANADEN Logo"
              className="h-14 w-auto rounded-lg shadow-md"
            />
          </div>

          {/* information section du pied de page */}
          <div>
            <p className="text-lg font-semibold">
              ANADEN © - Tous droits réservés
            </p>
            <p>Office 302, Moroni</p>
            <Link href={""} className="hover:text-green-400">
              <p>Moroni Canal V boulvard Aboul Anziz</p>
            </Link>
            <Link
              href={""}
              className="inline-block gap-1 text-blue-500 mt-2 justify-center items-center hover:underline"
            >
              Plus de bureaux →
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          {/* Chevron du pied de page (retour en haut de la page) */}
          <Link href={"/#hero"}>
            <div className="flex items-center gap-2 rounded-full px-4 py-2 hover:bg-primary">
              <span className="text-xl">
                <ChevronUp className="size-4 animate-bounce" />
              </span>
            </div>
          </Link>

          {/* les liens des réseaux sociaux du pied de page */}
          <div className="flex gap-4 text-2xl">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-10 w-10 hover:text-blue-500 transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-10 w-10 hover:text-pink-500 transition-colors" />
            </Link>
            <Link
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <Linkedin className="h-10 w-10 hover:text-gray-500 transition-colors" />
            </Link>
          </div>

          <div>
            <Link
              href={"https://yh-portfolio-962.web.app/"}
              className="cursor-pointer hover:transition-all"
            >
              <p>Développé par YH</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
