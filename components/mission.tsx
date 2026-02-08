import Image from "next/image";
import AboutImage from "@/public/women-anaden.jpg";
import { Blocks, Brain, SatelliteDish, ShipWheel } from "lucide-react";

const data = [
  {
    title: "Create Minds",
    description:
      "Nous choisissons ANADEN avec soin, nos collaborateurs sont la clé d'un travail bien fait.",
    icon: <Brain />,
  },
  {
    title: "E-Gouvernace",
    description:
      "Digitaliser les services publics pour faciliter les démarches des citoyens et des entreprises.",
    icon: <ShipWheel />,
  },
  {
    title: "Infrastructures",
    description:
      "Développer une connectivité robuste et accessible sur l'ensemble du territoire nationnal.",
    icon: <Blocks />,
  },
  {
    title: "Inclusion & Talents",
    description:
      "Promouvoir la formation de la jeunesse comorienne au metier du futur et encourager l'entrepreunariat tech.",
    icon: <SatelliteDish />,
  },
];

export default function Mission() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="aspect-w-16 aspect-h-7">
        <Image
          src={AboutImage}
          alt="about-image-women-anaden"
          className="w-full object-cover rounded-xl"
        />
      </div>

      {/* GRID */}
      <div className="lg:mt-6 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h1 className="font-bold text-2xl md:text-3xl text-gray-800">
            Le moteur de la transformation digitale aux Comores
          </h1>
          <p className="mt-2 md:mt-4 text-gray-500">
            L'agence Nationale du Developpement Numérique (ANADEN) est l'organe
            central chargé de piloter la stratégie nationale du numérique. Nous
            travaillons à réduire la fracture digitale, à sécuriser notre
            cyberespace et à faire du numérique un levier de croissance
            économique pour l'Union des Comores.
          </p>
        </div>

        <div className="lg:col-span-2 bg-emerald-100 rounded-2xl">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12 px-4 py-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 bg-white px-2 py-3 rounded-2xl"
              >
                <div>{item.icon}</div>

                <div className="grow">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
