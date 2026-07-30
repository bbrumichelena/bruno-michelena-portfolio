export type YouTubeVideo = { id?: string; src?: string; poster?: string; title: string; short?: boolean };

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
    { id: "uKY0_f0c-gM", title: "Agencia de IA", short: true },
    { src: "/media/videos/redes-sociales/Automotriz_web.mp4", poster: "/media/videos/redes-sociales/Automotriz_poster.jpg", title: "Automotriz", short: true },
    { id: "Vg88zlYztd0", title: "Cosmetología", short: true },
    { id: "IGartbBwByM", title: "Empresariales", short: true },
    { id: "wX62joAhnAE", title: "Frigorífico", short: true },
    { src: "/media/videos/redes-sociales/GASTRONOMIA_web.mp4", poster: "/media/videos/redes-sociales/GASTRONOMIA_poster.jpg", title: "Gastronomía", short: true },
    { id: "LRs8ARFyFyI", title: "Inmobiliario", short: true },
    { src: "/media/videos/redes-sociales/Marca de ropa_web.mp4", poster: "/media/videos/redes-sociales/Marca de ropa_poster.jpg", title: "Marca de ropa", short: true },
  ],
  "podcast": [],
};
