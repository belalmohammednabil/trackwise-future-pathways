
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, GraduationCap, ArrowLeft, Star, Clock, Award } from "lucide-react";

export const Programs = () => {
  const programs = [
    {
      icon: Users,
      title: "My Path",
      subtitle: "المرحلة الإعدادية",
      duration: "2-3 شهور",
      sessions: "12 جلسة",
      price: "تواصل معنا",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop",
      color: "from-indigo-500 to-purple-500",
      features: [
        "تحليل شامل لشخصية الطالب",
        "تقرير شخصي احترافي",
        "جلسات إرشاد مهني فردية",
        "ورش تنمية المهارات الحياتية",
        "مشروع عملي مصغر",
        "ورش الفنون والدراما",
        "معرض ختامي"
      ],
      highlights: ["مناسب للأعمار 12-15 سنة", "شهادة معتمدة", "متابعة بعد البرنامج"]
    },
    {
      icon: Briefcase,
      title: "ProMap",
      subtitle: "المرحلة الثانوية",
      duration: "3-6 شهور",
      sessions: "20 جلسة",
      price: "تواصل معنا",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=400&fit=crop",
      color: "from-purple-500 to-pink-500",
      features: [
        "تحليل شامل للشخصية والقدرات",
        "خطة أكاديمية ومهنية متكاملة",
        "إعداد السيرة الذاتية",
        "تدريب على المقابلات الشخصية",
        "دعم تقديم المنح الدولية",
        "مشروع تخرج متقدم",
        "شبكة تواصل مهنية"
      ],
      highlights: ["للثانوي العام والفني", "فرص تدريب", "مسارات دولية"]
    },
    {
      icon: GraduationCap,
      title: "مدرسة تصنع المستقبل",
      subtitle: "باقة المدارس",
      duration: "عام دراسي كامل",
      sessions: "حسب الحاجة",
      price: "عرض خاص",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop",
      color: "from-emerald-500 to-teal-500",
      features: [
        "اختبار قدرات شامل لجميع الطلاب",
        "تقارير فردية وجماعية",
        "ورش إرشادية للطلاب",
        "برنامج كابستون مصغر",
        "تدريب المعلمين",
        "معرض ختامي بالمدرسة",
        "شهادة اعتماد للمدرسة"
      ],
      highlights: ["للمدارس الإعدادية", "تدريب الكادر", "نظام متكامل"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-amber-400/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase">
              برامجنا التطويرية
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
              رحلة تعلم مصممة خصيصاً لكل مرحلة
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            ثلاثة برامج متكاملة تغطي جميع المراحل العمرية من الإعدادية حتى الثانوية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-80`}></div>
                
                {/* Icon */}
                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-6 right-6 left-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-white/90 text-lg">{program.subtitle}</p>
                </div>
              </div>

              <CardContent className="p-8">
                {/* Program Details */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Award className="w-4 h-4" />
                    <span>{program.sessions}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-start space-x-3 space-x-reverse text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-8">
                  {program.highlights.map((highlight, highlightIndex) => (
                    <div 
                      key={highlightIndex}
                      className={`inline-block bg-gradient-to-r ${program.color} text-white text-xs px-3 py-1 rounded-full m-1`}
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-800">{program.price}</span>
                    <div className={`text-sm text-transparent bg-gradient-to-r ${program.color} bg-clip-text font-semibold`}>
                      ابدأ الآن
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                  >
                    <span>اشترك في البرنامج</span>
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Button>
                </div>
              </CardContent>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r ${program.color} rounded-lg transition-all duration-500`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
