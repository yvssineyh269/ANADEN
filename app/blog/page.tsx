import { Badge } from "@/components/ui/badge";
import BlogCard from "./component/blog-card";

export default function BlogPage() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative mx-auto max-w-7xl space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge
            className="px-3 py-1 text-xs font-semibold uppercase"
            variant="secondary"
          >
            Actualité
          </Badge>

          <h1 className="text-3xl font-bold text-foreground sm:text-5xl lg:text-6xl lg:leading-tight">
            Retouvez toutes les actualitées et avancées de l'
            <span className="text-emerald-500">ANADEN</span> ici
          </h1>
        </div>

        {/* Blog cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}
