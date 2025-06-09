
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "ما هو تحليل بصمة الطالب؟",
    answer: "تحليل بصمة الطالب هو عملية شاملة لدراسة شخصية الطالب وقدراته واهتماماته ونمط تعلمه، باستخدام أدوات علمية معتمدة لتحديد المسار المهني الأنسب له."
  },
  {
    question: "كم يستغرق التحليل والحصول على النتائج؟",
    answer: "عادة ما يستغرق التحليل من 45-60 دقيقة، وتحصل على النتائج والتقرير المفصل خلال 24-48 ساعة من إكمال الاختبارات."
  },
  {
    question: "هل الاختبارات معتمدة علمياً؟",
    answer: "نعم، جميع اختباراتنا وأدوات التقييم معتمدة دولياً ومبنية على أسس علمية مدروسة في علم النفس التربوي والإرشاد المهني."
  },
  {
    question: "ما الفئات العمرية المناسبة للبرنامج؟",
    answer: "برامجنا مصممة للطلاب من سن 14-25 سنة، بدءاً من المرحلة الثانوية وحتى الجامعة والدراسات العليا."
  },
  {
    question: "هل يمكن إعادة الاختبار إذا لم أكن راضياً عن النتائج؟",
    answer: "نعم، يمكن إعادة الاختبار مرة واحدة مجاناً خلال 30 يوماً إذا كنت غير راض عن النتائج، مع جلسة استشارية إضافية."
  },
  {
    question: "هل تقدمون متابعة بعد التحليل؟",
    answer: "نعم، نقدم متابعة دورية لمدة 6 أشهر تشمل جلسات إرشادية ومراجعة للخطة المهنية وتحديثها حسب تطور الطالب."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50/80 to-blue-100/60 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 px-4 py-2 rounded-full text-royal-blue font-medium text-sm mb-6">
            <HelpCircle className="w-4 h-4" />
            الأسئلة الشائعة
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-royal-blue to-blue-600 bg-clip-text text-transparent">
              أسئلة يطرحها الطلاب كثيراً
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            إجابات شاملة على أهم الأسئلة حول خدماتنا وبرامج التحليل والإرشاد المهني
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200/50 overflow-hidden animate-fade-in-up transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-right flex items-center justify-between hover:bg-blue-50/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-royal-blue transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-royal-blue transition-transform duration-300" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-royal-blue transition-colors duration-300">
                  {faq.question}
                </h3>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-gradient-to-r from-blue-50/30 to-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-600 mb-6">لديك سؤال آخر؟ نحن هنا لمساعدتك</p>
          <button className="bg-gradient-to-r from-royal-blue to-blue-700 hover:from-blue-800 hover:to-blue-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            تواصل معنا الآن
          </button>
        </div>
      </div>
    </section>
  );
};
