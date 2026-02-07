import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";

// Announcement component

export default function announcement() {
  return (
    <div className="bg-linear-to-r from-blue-700 via-yellow-400 to-red-600">
      <div className="max-w-350 px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        {/* GRID */}
        <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
          <div className="text-center md:text-start">
            <p className="text-xs text-white/80 uppercase">Preview of Anaden</p>
            <p className="mt-1 text-white font-semibold">
              Find a Job get unlimited. No credit card required
            </p>
          </div>

          <div className="mt-3 text-center md:text-start md:flex md:justify-end md:items-center">
            <Link href={"#"} className={buttonVariants()}>
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
