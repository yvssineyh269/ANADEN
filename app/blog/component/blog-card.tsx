import ImageGrid from "./image-grid";

export default function HeroLeft() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#0e1628] to-[#1b1533]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-2 lg:gap-16">
        {/* Left content */}
        <div className="text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            We’re changing <br />
            the way people <br />
            connect
          </h1>

          <p className="mt-6 max-w-xl text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
            qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
            occaecat fugiat aliqua.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <button className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition">
              Get started
            </button>

            <a
              href="#"
              className="flex items-center gap-1 text-sm font-semibold text-white hover:underline"
            >
              Live demo <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Right images */}
        <ImageGrid />
      </div>
    </section>
  );
}
