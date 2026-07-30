import { getAboutAssets } from "@/lib/media";

export default function AboutPage() {
  const { vertical, horizontal } = getAboutAssets();

  return (
    <div className="ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen">
      {/* Grid que ocupa exactamente el espacio disponible en pantalla */}
      <div className="grid grid-cols-1 md:h-[calc(100svh-10rem)] md:grid-cols-[1fr_420px]">

        {/* Columna izquierda: título + texto + banner */}
        <div className="flex flex-col overflow-hidden">
          <div className="px-6 py-6 md:px-12 md:py-8">
            <h1 className="text-5xl font-bold leading-[0.9] tracking-tight md:text-8xl">
              Sobre Mí
            </h1>
            <p className="mt-4 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-white/70 md:text-base">
              {`Bruno es un fotógrafo, filmmaker y editor de video profesional apasionado por tener una experiencia audiovisual cinemática

Me formé en la Escuela Uruguaya de Fotografía y Video (EUF), donde hice la carrera de fotografía profesional y el curso de audiovisual, donde estudié 3 años con profesionales de varios rubros como películas de Netflix, eventos, bodas, deportes en la televisión y producciones audiovisuales en general.`}
            </p>
          </div>

          {/* Banner horizontal ocupa el espacio restante */}
          <div className="min-h-0 flex-1 overflow-hidden bg-panel">
            {horizontal ? (
              horizontal.kind === "video" ? (
                <video src={horizontal.url} controls className="h-full w-full object-cover" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={horizontal.url}
                  alt="Bruno Michelena"
                  className="h-full w-full object-cover object-[center_35%]"
                />
              )
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="text-sm font-bold uppercase tracking-wide text-white/30">
                  public/media/about/horizontal.*
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Columna derecha: foto vertical ocupa toda la altura */}
        <div className="h-[60vw] overflow-hidden bg-panel md:h-auto">
          {vertical ? (
            vertical.kind === "video" ? (
              <video src={vertical.url} controls className="h-full w-full object-cover" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={vertical.url}
                alt="Bruno Michelena"
                className="h-full w-full object-cover"
              />
            )
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-sm font-bold uppercase tracking-wide text-white/30">
                public/media/about/vertical.*
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
