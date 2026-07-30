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
    <nav className="flex flex-wrap items-center gap-1.5 md:gap-3">
      {TABS.map((tab) => {
        const active = isActive(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={clsx(
              "rounded-md px-2.5 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors md:px-4 md:py-2 md:text-base",
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
