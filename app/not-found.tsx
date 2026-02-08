import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import notFound404 from "@/public/404.jpg";

export default function NotFound() {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src={notFound404}
          alt="NotFoundImage"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      <main className="flex flex-1 items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center max-w-md">
          <p className="text-base font-semibold text-emerald-500">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Page Not Found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn&rsquo;t find this page you&rsquo;re looking for.
          </p>
          <div>
            <Link
              href={"/"}
              className={cn(
                buttonVariants({
                  variant: "default",
                  className: "rounded-md gap-4 mt-6",
                }),
              )}
            >
              <HomeIcon />
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
