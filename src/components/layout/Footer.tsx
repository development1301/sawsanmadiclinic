"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const { t, locale } = useLanguage();

  const footerGroups = [
    {
      title: t.footer.company,
      links: [
        { label: t.footer.about, href: `/${locale}/about` },
        { label: t.footer.services, href: `/${locale}/services` },
        { label: t.footer.contact, href: `/${locale}/contact` },
        { label: t.footer.blog, href: `/${locale}/blog` },
      ]
    },
    {
      title: t.footer.treatments,
      links: [
        { label: t.footer.t1, href: `/${locale}/services#acne` },
        { label: t.footer.t2, href: `/${locale}/services#botox` },
        { label: t.footer.t3, href: `/${locale}/services#laser` },
        { label: t.footer.t4, href: `/${locale}/services#antiaging` },
        { label: t.footer.t5, href: `/${locale}/services#prp` },
        { label: t.footer.t6, href: `/${locale}/services#hair_growth` },
        { label: t.footer.t7, href: `/${locale}/services#body_sculpting` },
        { label: t.footer.t8, href: `/${locale}/services#stem_cell` },
        { label: t.footer.t9, href: `/${locale}/services#salmon` },
      ]
    },
    {
      title: t.footer.legal,
      links: [
        { label: t.footer.privacy, href: `/${locale}/legal/privacy` },
        { label: t.footer.terms, href: `/${locale}/legal/terms` },
        { label: t.footer.cookie, href: `/${locale}/legal/cookies` },
      ]
    }
  ];

  return (
    <footer
      id="contact"
      className="bg-[var(--color-dark)] text-white/70"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 group cursor-pointer mb-2">
              <div className="relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
                <Image src="/logo-transparent.png?v=3" alt="Logo" fill className="object-contain" unoptimized={true} />
              </div>
              <span className="text-2xl font-serif text-white group-hover:text-[var(--color-primary)] transition-colors">
                Sawsan Madi Clinic
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
            <div className="flex gap-4 mt-6">
              {/* Map */}
              <a href="https://maps.app.goo.gl/EmCjv6UVtRdLGkZZ9" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/dr.sawsan_madiclinic/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white hover:bg-white/10 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.02-.5-.02-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              {/* Snapchat */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-[#FFFC00] hover:border-[#FFFC00] hover:bg-[#FFFC00]/10 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.126.335C9.728.335 8.163 1.996 8.01 4.542c-.06 1.002.365 2.059 1.168 2.89.84.872 1.986 1.34 2.948 1.34h.003c.962 0 2.108-.468 2.948-1.34.803-.83 1.228-1.888 1.168-2.89-.153-2.546-1.718-4.207-4.119-4.207zm4.33 6.398c-.14-.236-.312-.224-.548-.112-1.048.497-2.456.91-3.782.91-1.327 0-2.735-.413-3.783-.91-.236-.112-.408-.124-.548.112-.556.936-1.503 1.676-2.585 1.966-.516.138-1.072.181-1.62.13-.377-.035-.584.053-.62.336-.048.375.053.792.298 1.229.412.733 1.122 1.312 2.054 1.666.27.103.542.183.824.238.257.05.352.176.31.425-.098.572-.257 1.15-.49 1.696-.34 1.05-.985 1.942-1.892 2.65-.632.493-1.42.875-2.285 1.127-.58.17-1.127.27-1.625.32-.236.023-.393.13-.42.278-.057.306.064.672.336 1.01.25.31.572.587.954.81.422.247.935.438 1.488.552.124.026.216.082.264.168.106.188.232.417.382.684.148.263.303.524.472.783.336.516.736.96 1.18 1.306.746.58 1.618.89 2.545.926.234.01.464-.012.69-.06.27-.058.423-.005.513.14.088.14.223.36.4.654.21.344.478.736.786 1.116.726.892 1.67 1.455 2.76 1.62h.003c1.09-.165 2.034-.728 2.76-1.62.308-.38.576-.772.786-1.116.177-.294.312-.514.4-.654.09-.145.243-.198.513-.14.226.048.456.07.69.06.927-.036 1.799-.346 2.545-.926.444-.346.844-.79 1.18-1.306.169-.259.324-.52.472-.783.15-.267.276-.496.382-.684.048-.086.14-.142.264-.168.553-.114 1.066-.305 1.488-.552.382-.223.704-.5.954-.81.272-.338.393-.704.336-1.01-.027-.148-.184-.255-.42-.278-.498-.05-1.045-.15-1.625-.32-.865-.252-1.653-.634-2.285-1.127-.907-.708-1.552-1.6-1.892-2.65-.233-.546-.392-1.124-.49-1.696-.042-.249.053-.375.31-.425.282-.055.554-.135.824-.238.932-.354 1.642-.933 2.054-1.666.245-.437.346-.854.298-1.229-.036-.283-.243-.371-.62-.336-.548.05-1.104.008-1.62-.13-1.082-.29-2.028-1.03-2.584-1.966z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {footerGroups.map((group, idx) => (
            <div key={idx}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-6">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs">
              © {new Date().getFullYear()} Sawsan Madi Clinic. {t.footer.rights}
            </p>
            <p className="text-xs">
              {t.footer.bottomline}
            </p>
          </div>
          <a 
            href="https://luexedigital.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[11px] text-white/40 hover:text-white/80 transition-colors"
          >
            Designed & Developed by Luexe Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
