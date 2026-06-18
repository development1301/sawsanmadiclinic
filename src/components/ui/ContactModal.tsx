"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

// Global event to open the contact modal
export const openContactModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-contact"));
  }
};

export function ContactModal() {
  const { t, locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-contact", handleOpen);
    return () => window.removeEventListener("open-contact", handleOpen);
  }, []);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 m-auto z-[101] w-[90%] max-w-lg h-fit max-h-[90vh] overflow-y-auto bg-white/90 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white p-8 md:p-10"
            dir={dir}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              style={{ [locale === "ar" ? "left" : "right"]: "1.5rem", [locale === "ar" ? "right" : "auto"]: "auto" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1L13 13M1 13L13 1" />
              </svg>
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif text-[var(--color-primary-dark)] mb-2">
                {t.contactPage?.title || "Book a Consultation"}
              </h2>
              <p className="text-[var(--color-body)] text-sm">
                {locale === "ar" ? "تواصل معنا عبر القنوات التالية" : "Reach out to us directly through the channels below."}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/96512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[var(--color-tan)] hover:border-[var(--color-primary)] transition-colors group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-green-50 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-[var(--color-dark)]">{locale === "ar" ? "واتساب" : "WhatsApp"}</span>
                  <span className="text-sm text-[var(--color-body)]">+965 1234 5678</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/dr.sawsan_madiclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[var(--color-tan)] hover:border-[var(--color-primary)] transition-colors group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 group-hover:bg-pink-100 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-[var(--color-dark)]">Instagram</span>
                  <span className="text-sm text-[var(--color-body)]">@dr.sawsan_madiclinic</span>
                </div>
              </a>

              {/* Snapchat */}
              <a
                href="https://snapchat.com/add/dr.sawsan_madi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[var(--color-tan)] hover:border-[var(--color-primary)] transition-colors group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-500 group-hover:bg-yellow-100 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.18.232c-2.316-.296-4.595.668-5.897 2.493-1.026 1.439-1.396 3.255-1.396 5.378 0 .445.021.84.053 1.155.053.473-.095.736-.379 1.115-.431.579-1.283 1.346-2.22 1.631a1.218 1.218 0 00-.862 1.272 1.385 1.385 0 001.294 1.052c.241.011 1.052.011 2.062.242 1.052.242 1.61 1.094 1.652 1.178.115.178.178.431.147.662-.126 1.094-1.125 3.376-2.009 4.333a1.9 1.9 0 00-.515 1.483 1.366 1.366 0 001.283 1.157c1.336 0 2.829-.989 3.566-1.578.126-.095.347-.2.526-.2.158 0 .42.063.515.126 1.683 1.02 3.639 1.546 5.67 1.546h.179c1.977 0 3.902-.484 5.564-1.462.116-.063.368-.137.526-.137.189 0 .42.105.547.21 1.136.852 2.377 1.557 3.555 1.557.81 0 1.325-.568 1.367-1.314.032-.505-.189-1.02-.631-1.368-1.052-1.052-1.893-2.903-2.02-3.839-.032-.231.032-.515.168-.694.042-.084.6-1.01 1.767-1.304a1.272 1.272 0 00.957-1.23c-.01-.653-.526-1.168-1.21-1.189-1.252-.053-2.314-.147-2.735-.452-.252-.19-.494-.652-.441-1.104.042-.316.073-.705.073-1.147 0-2.03-.336-3.797-1.336-5.238C16.892.748 14.62-.052 12.18.232z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-[var(--color-dark)]">Snapchat</span>
                  <span className="text-sm text-[var(--color-body)]">@dr.sawsan_madi</span>
                </div>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@dr.sawsan_madiclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[var(--color-tan)] hover:border-[var(--color-primary)] transition-colors group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-black/5 rounded-full flex items-center justify-center text-black group-hover:bg-black/10 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-[var(--color-dark)]">TikTok</span>
                  <span className="text-sm text-[var(--color-body)]">@dr.sawsan_madiclinic</span>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://maps.app.goo.gl/EmCjv6UVtRdLGkZZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[var(--color-tan)] hover:border-[var(--color-primary)] transition-colors group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[var(--color-primary-10)] rounded-full flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-[var(--color-dark)]">{t.contactPage?.location || "Our Location"}</span>
                  <span className="text-sm text-[var(--color-body)]">Sawsan Madi Clinic, Kuwait</span>
                </div>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
