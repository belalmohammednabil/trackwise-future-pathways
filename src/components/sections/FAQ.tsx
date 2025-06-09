
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from "lucide-react";

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
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50/50 via-white/30 to-blue-100/40 backdrop-blur-sm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-royal-blue/10"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-royal-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-royal-blue/10 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100/90 to-royal-blue/20 px-6 py-3 rounded-full text-royal-blue font-semibold text-sm mb-8 shadow-lg backdrop-blur-sm border border-royal-blue/20">
            <HelpCircle className="w-5 h-5" />
            الأسئلة الشائعة
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-royal-blue via-blue-700 to-blue-600 bg-clip-text text-transparent">
              أسئلة يطرحها
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-royal-blue bg-clip-text text-transparent">
              الطلاب كثيراً
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            إجابات شاملة وواضحة على أهم الأسئلة حول خدماتنا وبرامج التحليل والإرشاد المهني المتطورة
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-blue-200/30 overflow-hidden animate-fade-in-up transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/80"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-8 text-right flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-royal-blue/5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-50/30 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-r from-royal-blue to-blue-600 shadow-lg' 
                      : 'bg-gradient-to-r from-blue-100 to-blue-200 group-hover:from-royal-blue/20 group-hover:to-blue-600/20'
                  }`}>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-white transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-royal-blue transition-transform duration-300 group-hover:text-royal-blue/80" />
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-royal-blue transition-colors duration-300 relative z-10 text-right flex-1 mr-4">
                  {faq.question}
                </h3>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 pt-0 text-gray-700 leading-relaxed text-lg bg-gradient-to-br from-blue-50/30 via-white/20 to-royal-blue/5 backdrop-blur-sm border-t border-blue-200/30">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-inner border border-blue-100/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-blue-50/80 to-royal-blue/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/30 shadow-xl">
            <p className="text-gray-600 mb-6 text-lg">لديك سؤال آخر؟ فريقنا المتخصص هنا لمساعدتك</p>
            <button className="bg-gradient-to-r from-royal-blue to-blue-700 hover:from-blue-800 hover:to-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden group">
              <span className="relative z-10">تواصل معنا الآن</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
