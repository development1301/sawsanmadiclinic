"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function TermsOfServicePage() {
  const { t, locale } = useLanguage();

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: June 2026",
      intro: "Welcome to Sawsan Madi Clinic. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing this website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws."
        },
        {
          title: "2. Medical Disclaimer",
          content: "The content on our website is provided for general informational purposes only and is not intended as medical advice. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or treatment."
        },
        {
          title: "3. Appointments and Cancellations",
          content: "When booking an appointment, you agree to provide accurate and complete information. If you need to cancel or reschedule, we request at least 24 hours notice to accommodate other patients."
        },
        {
          title: "4. Intellectual Property",
          content: "The materials contained in this website are protected by applicable copyright and trademark law. You may not modify, copy, reproduce, or distribute any materials without our prior written consent."
        }
      ]
    },
    ar: {
      title: "شروط الخدمة",
      lastUpdated: "آخر تحديث: يونيو 2026",
      intro: "مرحباً بكم في عيادة سوسن ماضي. من خلال الوصول إلى أو استخدام موقعنا وخدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءتها بعناية.",
      sections: [
        {
          title: "1. قبول الشروط",
          content: "من خلال الوصول إلى هذا الموقع، فإنك توافق على الالتزام بشروط الخدمة هذه، وجميع القوانين واللوائح المعمول بها، وتوافق على أنك مسؤول عن الامتثال لأي قوانين محلية معمول بها."
        },
        {
          title: "2. إخلاء المسؤولية الطبية",
          content: "يتم توفير المحتوى الموجود على موقعنا لأغراض إعلامية عامة فقط ولا يُقصد به أن يكون نصيحة طبية. اطلب دائمًا نصيحة طبيبك أو غيره من مقدمي الرعاية الصحية المؤهلين بشأن أي أسئلة قد تكون لديك بخصوص حالة طبية أو علاج."
        },
        {
          title: "3. المواعيد والإلغاءات",
          content: "عند حجز موعد، فإنك توافق على تقديم معلومات دقيقة وكاملة. إذا كنت بحاجة إلى إلغاء أو إعادة جدولة الموعد، نطلب إشعارًا مسبقًا قبل 24 ساعة على الأقل لاستيعاب المرضى الآخرين."
        },
        {
          title: "4. الملكية الفكرية",
          content: "المواد الموجودة في هذا الموقع محمية بموجب قانون حقوق الطبع والنشر والعلامات التجارية المعمول به. لا يجوز لك تعديل أو نسخ أو إعادة إنتاج أو توزيع أي مواد دون موافقة كتابية مسبقة منا."
        }
      ]
    }
  };

  const data = locale === "ar" ? content.ar : content.en;

  return (
    <div className="pt-32 pb-20 px-4 md:px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-dark)] mb-4">{data.title}</h1>
      <p className="text-[var(--color-body)] text-sm mb-12">{data.lastUpdated}</p>
      
      <div className="prose prose-lg max-w-none text-[var(--color-dark)]/80">
        <p className="mb-8">{data.intro}</p>
        
        {data.sections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-dark)]">{section.title}</h2>
            <p className="leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
