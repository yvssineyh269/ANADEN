import Image from "next/image";
import HeroImage from "@/public/digital transformation.jpg";

export default function Hero() {
  return (
    <div className="flex flex-wrap" id="hero">
      {/* Hero Title and subTitle */}
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <nav className="flex px-4 justify-between items-center">
            <div className="text-4xl font-bold">
              ANADEN<span className="text-green-700">.</span>
            </div>
          </nav>
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Bâtir les <span className="text-emerald-500">Comores</span> de
                demain grâce au numérique
              </h1>
              <div className="w-20 h-2 bg-emerald-500 my-4"></div>
              <p className="text-xl mb-10">
                L'ANADEN propulse l'innovation numérique aux Comores et connecte
                chaque cytoyen au futur. Modernise les administrations pour un
                develeppement durable.
              </p>
            </div>
          </header>
        </div>
      </div>
      {/* Hero Image */}
      <Image
        src={HeroImage}
        alt="hero-image"
        className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
      />
    </div>
  );
}
