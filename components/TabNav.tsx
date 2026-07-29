"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const TABS = [
  { label: "Sobre Mí", href: "/" },
  { label: "Habilidades", href: "/habilidades" },
  { label: "Videos", href: "/videos" },
  { label: "Fotografías", href: "/fotografias" },
  { label: "Equipo", href: "/equipo" },
  { label: "Contacto", href: "/contacto" },
];

export default function TabNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="flex flex-wrap items-center gap-2 md:gap-3">
      {TABS.map((tab) => {
        const active = isActive(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={clsx(
              "rounded-md px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors md:text-base",
              active
                ? "bg-white text-black"
                : "text-white/60 hover:text-white"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
