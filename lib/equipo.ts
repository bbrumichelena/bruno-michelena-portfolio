export type EquipoItem = { name: string; detail: string };
export type EquipoCategory = { category: string; items: EquipoItem[] };

export const EQUIPO: EquipoCategory[] = [
  {
    category: "Cámara y Óptica",
    items: [
      { name: "Sony A7V", detail: "Full frame" },
      { name: "Lente Zoom Estándar 24-70mm F2.8 Serie GMaster", detail: "Full frame" },
      { name: "Sony 28-70mm f/3.5", detail: "Lente kit" },
      { name: "Yongnuo 50mm f/1.8", detail: "Enfoque manual" },
    ],
  },
  {
    category: "Audio",
    items: [
      { name: "Hollyland LARK M2", detail: "x3 inalámbricos de solapa" },
    ],
  },
  {
    category: "Estabilizador",
    items: [
      { name: "FeiyuTech SCORP-C2", detail: "Gimbal 3 ejes" },
    ],
  },
];
