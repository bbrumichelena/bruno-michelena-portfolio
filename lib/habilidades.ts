export type Habilidad = { name: string; detail: string };
export type HabilidadCategory = { category: string; items: Habilidad[] };

export const HABILIDADES: HabilidadCategory[] = [
  {
    category: "Especialidades",
    items: [
      { name: "Filmmaker", detail: "Dirección y producción audiovisual" },
      { name: "Fotógrafo profesional", detail: "Retrato, producto, eventos y más" },
      { name: "Editor de video", detail: "Narrativa, ritmo y montaje profesional" },
      { name: "Diseño gráfico", detail: "Identidad visual y logos" },
    ],
  },
  {
    category: "Software",
    items: [
      { name: "Adobe Premiere Pro", detail: "Edición y montaje" },
      { name: "Adobe Photoshop", detail: "Retoque y postproducción de fotos" },
      { name: "Adobe After Effects", detail: "Motion graphics y VFX" },
      { name: "Adobe Illustrator", detail: "Diseño de logos e identidad" },
    ],
  },
];
