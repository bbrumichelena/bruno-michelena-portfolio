const WHATSAPP_NUMBER = "59892328738";
const EMAIL = "brmichelena@gmail.com";

export default function ContactoPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold leading-[0.9] tracking-tight md:text-8xl">
        Contacto
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
        ¿Tenés un proyecto en mente? Escribime y te respondo a la brevedad.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-between rounded-xl border border-line bg-panel p-6 transition-colors hover:border-white/40"
        >
          <span className="text-xs font-bold uppercase tracking-wide text-white/40">
            WhatsApp
          </span>
          <span className="mt-4 text-xl font-black">Escribime directo</span>
        </a>

        <a
          href={`mailto:${EMAIL}`}
          className="flex flex-col justify-between rounded-xl border border-line bg-panel p-6 transition-colors hover:border-white/40"
        >
          <span className="text-xs font-bold uppercase tracking-wide text-white/40">
            Email
          </span>
          <span className="mt-4 text-xl font-black">{EMAIL}</span>
        </a>
      </div>
    </div>
  );
}
