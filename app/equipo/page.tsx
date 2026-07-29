import { EQUIPO } from "@/lib/equipo";

export default function EquipoPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold leading-[0.9] tracking-tight md:text-8xl">
        Equipo
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
        El equipo con el que trabajo en cada proyecto, foto y video.
      </p>

      <div className="mt-12 flex flex-col gap-10">
        {EQUIPO.map((group) => (
          <div key={group.category}>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wide text-white/40">
              {group.category}
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-line bg-panel p-5"
                >
                  <p className="font-bold leading-snug">{item.name}</p>
                  <p className="mt-1 text-sm text-white/40">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
