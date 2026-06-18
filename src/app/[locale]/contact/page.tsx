"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const { t } = useLanguage();
  const cp = t.contactPage;
  const [state, handleSubmit] = useForm('meewdvjy');

  return (
    <main className="min-h-screen bg-[var(--color-cream-light)] pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center gap-4"
        >
          <SectionBadge label={cp.title} />
          <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-primary-dark)]">
            {cp.title}
          </h1>
          <p className="text-[var(--color-body)] max-w-2xl mx-auto text-lg">
            {cp.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Pane - Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Location Card */}
            <motion.a
              href={cp.address}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] border border-[var(--color-tan)] hover:border-[var(--color-primary-50)] transition-colors group flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-[var(--color-primary-6)] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[var(--color-primary-dark)] mb-1">{cp.location}</h3>
                <p className="text-sm text-[var(--color-body)] leading-relaxed">View on Google Maps &rarr;</p>
              </div>
            </motion.a>

            {/* WhatsApp Card */}
            <motion.a
              href="#"
              onClick={(e) => e.preventDefault()}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] border border-[var(--color-tan)] hover:border-[#25D366] transition-colors group flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-[var(--color-primary-6)] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-colors">
                <svg className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[var(--color-primary-dark)] mb-1">{cp.whatsapp}</h3>
                <p className="text-sm text-[var(--color-body)] leading-relaxed">{cp.whatsappDesc}</p>
              </div>
            </motion.a>

            {/* Instagram Card */}
            <motion.a
              href="https://www.instagram.com/dr.sawsan_madiclinic/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] border border-[var(--color-tan)] hover:border-[#E1306C] transition-colors group flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-[var(--color-primary-6)] rounded-full flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-[#FD1D1D] group-hover:to-[#833AB4] transition-all">
                <svg className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[var(--color-primary-dark)] mb-1">{cp.instagram}</h3>
                <p className="text-sm text-[var(--color-body)] leading-relaxed">{cp.instagramDesc}</p>
              </div>
            </motion.a>

            {/* TikTok Card */}
            <motion.a
              href="https://www.tiktok.com/@dr.sawsan_madiclinic"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] border border-[var(--color-tan)] hover:border-black transition-colors group flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-[var(--color-primary-6)] rounded-full flex items-center justify-center shrink-0 group-hover:bg-black transition-all">
                <svg className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.23-1.9 1.48-4.4 2.1-6.73 1.71-2.4-.41-4.57-1.78-5.92-3.79-1.42-2.1-1.78-4.83-1.07-7.24.62-2.1 2.05-3.88 3.99-4.82 2.06-.98 4.54-1.14 6.7-.42v4.26c-1.28-.52-2.8-.46-3.95.27-.92.59-1.5 1.58-1.68 2.65-.22 1.34.2 2.79 1.25 3.59.88.66 2.12.82 3.16.48 1.48-.48 2.4-1.95 2.45-3.51.04-4.89.01-9.79.03-14.69.01-1.03.01-2.06.01-3.09z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[var(--color-primary-dark)] mb-1">{cp.tiktok}</h3>
                <p className="text-sm text-[var(--color-body)] leading-relaxed">{cp.tiktokDesc}</p>
              </div>
            </motion.a>
          </div>

          {/* Right Pane - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-[var(--radius-card)] shadow-[var(--shadow-card)] border border-[var(--color-tan)]"
          >
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-4 text-center">
                <div className="w-16 h-16 bg-[var(--color-primary-10)] text-[var(--color-primary)] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-serif text-[var(--color-primary-dark)]">Thank You!</h3>
                <p className="text-[var(--color-body)]">Your message has been successfully sent. We will get back to you shortly.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" action="https://formspree.io/f/meewdvjy" method="POST" onSubmit={(e) => {
                // Ensure native form submission works as a fallback, or handle React 19 event properly
                handleSubmit(e);
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-primary-dark)]">{cp.formName}</label>
                    <input type="text" name="name" className="w-full px-4 py-3 rounded-lg border border-[var(--color-tan)] bg-[var(--color-cream-light)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-50)] transition-all" placeholder="Jane Doe" required />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-red-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-primary-dark)]">{cp.formPhone}</label>
                    <input type="tel" name="phone" className="w-full px-4 py-3 rounded-lg border border-[var(--color-tan)] bg-[var(--color-cream-light)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-50)] transition-all" placeholder="+1 (555) 000-0000" required />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-sm text-red-500" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[var(--color-primary-dark)]">{cp.formEmail}</label>
                  <input type="email" name="email" className="w-full px-4 py-3 rounded-lg border border-[var(--color-tan)] bg-[var(--color-cream-light)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-50)] transition-all" placeholder="jane@example.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-500" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[var(--color-primary-dark)]">{cp.formService}</label>
                  <select name="service" defaultValue="" className="w-full px-4 py-3 rounded-lg border border-[var(--color-tan)] bg-[var(--color-cream-light)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-50)] transition-all appearance-none" required>
                    <option value="" disabled>Select a treatment...</option>
                    <option value="Acne and skin health">Acne and skin health</option>
                    <option value="Botox and filler">Botox and filler</option>
                    <option value="Laser treatments">Laser treatments</option>
                    <option value="Anti-aging">Anti-aging</option>
                    <option value="PRP therapy">PRP therapy</option>
                    <option value="Hair growth treatments">Hair growth treatments</option>
                    <option value="Body sculpting treatments">Body sculpting treatments</option>
                    <option value="Stem cell & PDRN treatments">Stem cell & PDRN treatments</option>
                    <option value="Salmon DNA (Rejuran) treatments">Salmon DNA (Rejuran) treatments</option>
                  </select>
                    <ValidationError prefix="Service" field="service" errors={state.errors} className="text-sm text-red-500" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[var(--color-primary-dark)]">{cp.formMessage}</label>
                  <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-[var(--color-tan)] bg-[var(--color-cream-light)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-50)] transition-all resize-none" placeholder="Tell us what you are looking for..." required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-red-500" />
                </div>

                {state.errors && (
                  <div className="text-red-500 text-sm mt-1">
                    Please fix the errors above or try again later.
                  </div>
                )}

                <button type="submit" disabled={state.submitting} className="mt-2 w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-amber)] text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-[0_8px_30px_var(--color-primary-50)] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed">
                  {state.submitting ? "Sending..." : cp.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
