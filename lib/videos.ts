export type YouTubeVideo = { id: string; title: string; short?: boolean };

export const YOUTUBE_VIDEOS: Record<string, YouTubeVideo[]> = {
  "bodas": [
    { id: "hMx7L5uBbcQ", title: "Boda" },
  ],
  "eventos-musicales": [
    { id: "Yd1qFRUgLoA", title: "Evento Musical" },
  ],
  "presentaciones": [
    { id: "wpSbth8Sf7U", title: "Presentación" },
  ],
  "redes-sociales": [
    { id: "uKY0_f0c-gM", title: "Agencia de IA" },
    { id: "i9LWBery-gA", title: "Automotriz", short: true },
    { id: "Vg88zlYztd0", title: "Cosmetología", short: true },
    { id: "IGartbBwByM", title: "Empresariales", short: true },
    { id: "wX62joAhnAE", title: "Frigorífico", short: true },
    { id: "OkGdnmQNKtI", title: "Gastronomía", short: true },
    { id: "LRs8ARFyFyI", title: "Inmobiliario", short: true },
    { id: "xcFzLOt1-10", title: "Marca de ropa", short: true },
  ],
  "podcast": [],
};
