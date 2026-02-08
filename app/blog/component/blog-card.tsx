import Image from "next/image";
import imageBlog from "@/public/new partner.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function BlogCard() {
  return (
    <Link href={""}>
      <Card className="flex justify-center p-6 bg-transparent shadow-none">
        <div className="max-w-md w-full">
          <div className="group bg-white rounded-3xl p-3 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* Image */}
            <div className="h-72 w-full overflow-hidden rounded-2xl bg-black">
              <Image
                src={imageBlog}
                alt="Astronaut on the moon – branding article cover"
                width={800}
                height={600}
                className="h-full w-full object-cover object-top grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
            </div>

            {/* Content */}
            <CardContent className="px-5 pb-5 pt-6">
              <CardTitle className="text-2xl font-bold leading-tight text-gray-900">
                Crafting a Timeless Brand Identity
              </CardTitle>

              <CardDescription className="mt-3 text-sm leading-relaxed text-gray-500 line-clamp-3">
                We're a small team in Berlin doing design work for brands that
                want to stand out and create a lasting visual impact.
              </CardDescription>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between text-xs font-semibold text-gray-900">
                <span className="opacity-70">5 min read</span>

                <div className="flex items-center gap-1 text-green-600">
                  <Badge className="">Nouveau</Badge>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </Link>
  );
}
