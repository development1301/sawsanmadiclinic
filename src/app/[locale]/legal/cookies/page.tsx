"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function CookiePolicyPage() {
  const { t, locale } = useLanguage();

  const content = {
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: June 2026",
      intro: "This Cookie Policy explains how Sawsan Madi Clinic uses cookies and similar tracking technologies when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.",
      sections: [
        {
          title: "1. What are cookies?",
          content: "Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information."
        },
        {
          title: "2. Why do we use cookies?",
          content: "We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as 'essential' or 'strictly necessary' cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our site."
        },
        {
          title: "3. How can I control cookies?",
          content: "You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser controls. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted."
        },
        {
          title: "4. Changes to this Cookie Policy",
          content: "We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies."
        }
      ]
    },
    ar: {
      title: "سياسة ملفات تعريف الارتباط",
      lastUpdated: "آخر تحديث: يونيو 2026",
      intro: "تشرح سياسة ملفات تعريف الارتباط هذه كيف تستخدم عيادة سوسن ماضي ملفات تعريف الارتباط وتقنيات التتبع المشابهة عند زيارتك لموقعنا. وتشرح ما هي هذه التقنيات ولماذا نستخدمها، بالإضافة إلى حقوقك في التحكم في استخدامنا لها.",
      sections: [
        {
          title: "1. ما هي ملفات تعريف الارتباط (Cookies)؟",
          content: "ملفات تعريف الارتباط هي ملفات بيانات صغيرة يتم وضعها على جهاز الكمبيوتر أو الجهاز المحمول الخاص بك عند زيارة موقع ويب. تُستخدم ملفات تعريف الارتباط على نطاق واسع من قبل مالكي مواقع الويب لجعل مواقعهم تعمل، أو للعمل بشكل أكثر كفاءة، وكذلك لتوفير معلومات التقارير."
        },
        {
          title: "2. لماذا نستخدم ملفات تعريف الارتباط؟",
          content: "نحن نستخدم ملفات تعريف الارتباط الخاصة بالطرف الأول والطرف الثالث لعدة أسباب. بعض ملفات تعريف الارتباط مطلوبة لأسباب فنية من أجل تشغيل موقعنا، ونشير إليها باسم ملفات تعريف الارتباط \"الأساسية\" أو \"الضرورية للغاية\". تمكننا ملفات تعريف الارتباط الأخرى أيضًا من تتبع واستهداف اهتمامات مستخدمينا لتعزيز التجربة على موقعنا."
        },
        {
          title: "3. كيف يمكنني التحكم في ملفات تعريف الارتباط؟",
          content: "لديك الحق في أن تقرر ما إذا كنت ستقبل أو ترفض ملفات تعريف الارتباط. يمكنك ممارسة حقوقك في ملفات تعريف الارتباط عن طريق تعيين تفضيلاتك في عناصر تحكم متصفح الويب الخاص بك. إذا اخترت رفض ملفات تعريف الارتباط، فلا يزال بإمكانك استخدام موقعنا على الرغم من أن وصولك إلى بعض الوظائف والمناطق في موقعنا قد يكون مقيدًا."
        },
        {
          title: "4. التغييرات على هذه السياسة",
          content: "قد نقوم بتحديث سياسة ملفات تعريف الارتباط هذه من وقت لآخر من أجل عكس التغييرات على ملفات تعريف الارتباط التي نستخدمها أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى. يرجى إعادة زيارة سياسة ملفات تعريف الارتباط هذه بانتظام للبقاء على اطلاع دائم بشأن استخدامنا لها."
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
