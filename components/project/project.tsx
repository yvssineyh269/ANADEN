import { projects } from "@/lib/data";
import React from "react";
import ProjectCard from "./project-card";

export default function Projet() {
  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl lg:text-5xl mb-4">
          Nos Projets
        </h2>
        <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
          Découvrez une sélection de projets innovants et impactants que nous
          avons réalisés pour nos clients. Chaque projet reflète notre
          engagement envers l'excellence, la créativité et la satisfaction du
          client.
        </p>
      </div>
      <div className="grid sm:grid-cols-12 gap-6 mt-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            href={project.href}
            gridClass={project.gridClass}
          />
        ))}
      </div>
    </div>
  );
}
