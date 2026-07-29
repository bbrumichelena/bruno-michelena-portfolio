import { getAboutAssets } from "@/lib/media";

export default function AboutPage() {
  const { vertical, horizontal } = getAboutAssets();

  return (
    <div className="ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen">
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-[900px_1fr] md:grid-rows-[auto_auto] md:gap-x-16">
        <div className="px-6 pt-6 md:col-start-1 md:row-start-1 md:px-12 md:pt-14">
          <h1 className="text-6xl font-bold leading-[0.9] tracking-tight md:text-9xl">
            Sobre Mí
          </h1>
          <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-relaxed text-white/70 md:text-lg">
            {`Bruno es un fotógrafo, filmmaker y editor de video profesional apasionado por tener una experiencia audiovisual cinemática

Me formé en la Escuela Uruguaya de Fotografía y Video (EUF), donde hice la carrera de fotografía profesional y el curso de audiovisual, donde estudié 3 años con profesionales de varios rubros como películas de Netflix, eventos, bodas, deportes en la televisión y producciones audiovisuales en general.`}
          </p>
        </div>

        <div className="h-[220px] overflow-hidden bg-panel md:col-start-1 md:row-start-2 md:h-[260px]">
          {horizontal ? (
            horizontal.kind === "video" ? (
              <video
                src={horizontal.url}
                controls
                className="h-full w-full object-cover"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={horizontal.url}
                alt="Bruno Michelena"
                className="h-full w-full object-cover object-[center_35%]"
              />
            )
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-white/50">
                Próximamente
              </p>
              <p className="mt-1 text-xs text-white/30">
                public/media/about/horizontal.*
              </p>
            </div>
          )}
        </div>

        <div className="h-[320px] overflow-hidden bg-panel md:col-start-2 md:row-start-1 md:row-span-2 md:h-auto">
          {vertical ? (
            vertical.kind === "video" ? (
              <video
                src={vertical.url}
                controls
                className="h-full w-full object-cover"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={vertical.url}
                alt="Bruno Michelena"
                className="h-full w-full object-cover"
              />
            )
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-white/50">
                Próximamente
              </p>
              <p className="mt-1 text-xs text-white/30">
                public/media/about/vertical.*
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
