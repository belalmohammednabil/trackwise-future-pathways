
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  const features = [
    "تحليل علمي دقيق لشخصية الطالب",
    "أدوات تقييم معتمدة دولياً",
    "فريق متخصص من الخبراء",
    "برامج مصممة خصيصاً للطلاب العرب",
    "متابعة مستمرة وتقييم دوري",
    "شراكات مع مؤسسات تعليمية رائدة"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-amber-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
                من نحن؟
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              نحن فريق من المتخصصين في علم النفس التربوي والإرشاد المهني، نؤمن بأن كل طالب لديه طاقات وقدرات فريدة تستحق الاكتشاف والتطوير. 
              نستخدم أحدث الأدوات العلمية والتقنيات المتطورة لتحليل بيانات التعليم وتقديم رؤى دقيقة حول مسار كل طالب.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              اكتشف المزيد
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </div>

          {/* Image/Visual */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-amber-200 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold text-white">360°</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">رؤية شاملة</h3>
                  <p className="text-gray-600">نحلل جميع جوانب شخصية الطالب</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
