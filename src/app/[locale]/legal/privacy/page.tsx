"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function PrivacyPolicyPage() {
  const { t, locale } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: June 2026",
      intro: "Sawsan Madi Clinic (\"we\", \"our\", or \"us\") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.",
      sections: [
        {
          title: "1. Information We Collect",
          content: "We may collect, use, store and transfer different kinds of personal data about you, including Identity Data (first name, last name), Contact Data (email address, telephone numbers), and Technical Data (IP address, browser type and version)."
        },
        {
          title: "2. How We Use Your Information",
          content: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide and improve our services, manage our relationship with you, and communicate with you about your appointments or inquiries."
        },
        {
          title: "3. Data Security",
          content: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know."
        },
        {
          title: "4. Your Legal Rights",
          content: "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of processing of your personal data."
        }
      ]
    },
    ar: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: يونيو 2026",
      intro: "تحترم عيادة سوسن ماضي (\"نحن\" أو \"الخاص بنا\") خصوصيتك وتلتزم بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية اعتنائنا ببياناتك الشخصية عند زيارتك لموقعنا.",
      sections: [
        {
          title: "1. المعلومات التي نجمعها",
          content: "قد نقوم بجمع واستخدام وتخزين ونقل أنواع مختلفة من البيانات الشخصية عنك، بما في ذلك بيانات الهوية (الاسم الأول واسم العائلة)، وبيانات الاتصال (عنوان البريد الإلكتروني، أرقام الهواتف)، والبيانات التقنية (عنوان IP، نوع المتصفح وإصداره)."
        },
        {
          title: "2. كيف نستخدم معلوماتك",
          content: "لن نستخدم بياناتك الشخصية إلا عندما يسمح لنا القانون بذلك. في أغلب الأحيان، سنستخدم بياناتك الشخصية لتقديم خدماتنا وتحسينها، وإدارة علاقتنا معك، والتواصل معك بشأن مواعيدك أو استفساراتك."
        },
        {
          title: "3. أمن البيانات",
          content: "لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية عن طريق الخطأ أو استخدامها أو الوصول إليها بطريقة غير مصرح بها أو تغييرها أو الكشف عنها. نحن نقصر الوصول إلى بياناتك الشخصية على هؤلاء الموظفين والوكلاء والمقاولين والأطراف الثالثة الأخرى الذين لديهم حاجة عمل لمعرفتها."
        },
        {
          title: "4. حقوقك القانونية",
          content: "في ظل ظروف معينة، لديك حقوق بموجب قوانين حماية البيانات فيما يتعلق ببياناتك الشخصية، بما في ذلك الحق في طلب الوصول إلى بياناتك الشخصية أو تصحيحها أو محوها أو تقييد معالجتها."
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
