"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { type Treatment } from "@/lib/data/treatments";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface TreatmentAccordionProps {
  treatments: Treatment[];
}

export function TreatmentAccordion({ treatments }: TreatmentAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const { locale } = useLanguage();

  return (
    <div className="flex flex-col divide-y divide-[var(--color-tan)]">
      {treatments.map((t) => {
        const isOpen = openId === t.id;
        return (
          <div key={t.id} className="group">
            <button
              onClick={() => setOpenId(isOpen ? null : t.id)}
              className="w-full flex items-center justify-between py-6 px-2 text-left hover:bg-[var(--color-primary-6)] transition-colors rounded-lg"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-tan)] shrink-0">
                  {t.icon}
                </span>
                <span className="text-2xl md:text-3xl font-serif text-[var(--color-primary-dark)]">
                  {t.title}
                </span>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[var(--color-primary)] text-2xl font-light w-8 h-8 flex items-center justify-center shrink-0"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row items-start gap-6 pb-6 px-2">
                    <div className="flex-1">
                      <p className="text-[var(--color-body)] text-base leading-relaxed mb-4">
                        {t.description}
                      </p>

                      {/* Expanded Information */}
                      {(t.duration || t.recoveryTime || t.benefits) && (
                        <div className="flex flex-col gap-4 mb-6">
                          <div className="flex flex-wrap gap-4">
                            {t.duration && (
                              <div className="flex items-center gap-2 bg-[var(--color-primary-6)] px-3 py-1.5 rounded-full">
                                <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-xs font-semibold text-[var(--color-primary-dark)]">{t.duration}</span>
                              </div>
                            )}
                            {t.recoveryTime && (
                              <div className="flex items-center gap-2 bg-[var(--color-primary-6)] px-3 py-1.5 rounded-full">
                                <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="text-xs font-semibold text-[var(--color-primary-dark)]">{t.recoveryTime}</span>
                              </div>
                            )}
                          </div>
                          
                          {t.benefits && t.benefits.length > 0 && (
                            <ul className="space-y-1.5 mt-2">
                              {t.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-[var(--color-body)]">
                                  <svg className="w-4 h-4 mt-0.5 text-[var(--color-amber)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}

                      <a
                        href={`/${locale}/services#${t.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold border border-[var(--color-primary-50)] text-[var(--color-primary)] px-4 py-2 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
                      >
                        View Full Details
                      </a>
                    </div>
                    <div className="w-full md:w-48 h-36 relative rounded-[var(--radius-lg)] overflow-hidden shrink-0">
                      <Image
                        src={t.imageUrl}
                        alt={t.title}
                        fill
                        className="object-cover"
                        sizes="192px"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
