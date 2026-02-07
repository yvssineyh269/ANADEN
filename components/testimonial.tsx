import React from "react";
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Testimonial() {
  return (
    <div className="bg-teal-700 text-white">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
        <blockquote className="max-w-4xl mx-auto">
          <p className="mb-6 md:text-lg">
            <span className="font-semibold">Monsieur,</span>
            <span className="text-neutral-300"> CEO at ANADEN Ceremony</span>
          </p>

          <p className="text-xl sm:text-2xl md:text-3xl md:leading-normal">
            {/* Je suis absolument impressionné par le niveau de soin et d'attention
            aux détails dont l'équipe de Preline a fait preuve dans ce projet et
            je peux garantir que nous ferons à nouveau appel à eux. */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            nesciunt! Minus placeat consectetur, commodi nulla dolore soluta
            ipsum nesciunt distinctio perferendis a perspiciatis magnam impedit
            dicta voluptas! Dolores, officiis praesentium?
          </p>

          <footer className="mt-6 md:mt-10 ">
            <div className="border-neutral-700">
              <Link
                href={"#"}
                className="rounded-full group inline-flex items-center gap-x-3 text-neutral-400 text-sm focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
              >
                <span className="size-8 md:size-10 flex flex-col justify-center items-center bg-white text-black rounded-full group-hover:bg-black group-hover:text-white transition">
                  <Play />
                </span>
                Watch video
              </Link>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
