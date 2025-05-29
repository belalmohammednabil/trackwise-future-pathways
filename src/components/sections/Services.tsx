
import { BookOpen, Brain, Users, Award, Palette, Trophy, GraduationCap, Briefcase, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Brain,
      title: "تحليل بصمة الطالب",
      description: "تحليل شامل لقدرات الطالب ونقاط القوة والميول المهنية باستخدام أدوات علمية معتمدة مثل MBTI وDISC واختبار هولاند",
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      features: ["تحليل القدرات الذهنية", "السمات الشخصية", "الميول المهنية", "الذكاءات المتعددة"]
    },
    {
      icon: BookOpen,
      title: "التقرير الشخصي",
      description: "تقرير مفصل وشامل عن شخصية الطالب وقدراته مع توصيات عملية للمستقبل الأكاديمي والمهني",
      color: "from-amber-500 to-amber-600",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      features: ["تحليل نقاط القوة", "توصيات عملية", "خطة تطوير", "دليل الأهل"]
    },
    {
      icon: Target,
      title: "الإرشاد المهني",
      description: "جلسات فردية مع متخصصين لمساعدة الطالب في اختيار التخصص والمسار المهني المناسب مع دعم تقديم المنح",
      color: "from-blue-600 to-indigo-600",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      features: ["جلسات فردية", "اختيار التخصص", "المنح الدولية", "خطة المستقبل"]
    },
    {
      icon: GraduationCap,
      title: "رحلة التعلم القائم على المشروعات",
      description: "برنامج تدريبي عملي لتطوير مهارات حل المشكلات والتفكير النقدي من خلال منهجية الكابستون",
      color: "from-amber-600 to-orange-600",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      features: ["منهجية الكابستون", "مشاريع عملية", "تفكير نقدي", "عمل جماعي"]
    },
    {
      icon: Trophy,
      title: "المعرض الختامي",
      description: "معرض احترافي لعرض إنجازات الطلاب أمام الأهالي والخبراء مع شهادات معتمدة",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      features: ["عرض المشاريع", "حضور الخبراء", "شهادات معتمدة", "تقييم احترافي"]
    },
    {
      icon: Palette,
      title: "الأنشطة الإبداعية",
      description: "أنشطة فنية وموسيقية ودرامية لتعزيز التعبير الذاتي والثقة بالنفس والذكاء العاطفي",
      color: "from-amber-500 to-yellow-500",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      features: ["فن تشكيلي", "دراما وتمثيل", "موسيقى", "تعبير ذاتي"]
    },
    {
      icon: Users,
      title: "My Path - المرحلة الإعدادية",
      description: "برنامج متكامل لطلاب الإعدادي لاكتشاف القدرات والميول مع تنمية المهارات الحياتية",
      color: "from-indigo-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
      features: ["اكتشاف القدرات", "مهارات حياتية", "مشروع عملي", "معرض ختامي"]
    },
    {
      icon: Briefcase,
      title: "ProMap - المرحلة الثانوية",
      description: "برنامج شامل لطلاب الثانوي للتخطيط الأكاديمي والمهني مع إعداد السيرة الذاتية والمقابلات",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      features: ["تخطيط أكاديمي", "سيرة ذاتية", "مقابلات شخصية", "منح دولية"]
    },
    {
      icon: Award,
      title: "مسار TOT",
      description: "تدريب المدربين في منهجية الكابستون والإرشاد المهني لإعداد جيل جديد من المرشدين المعتمدين",
      color: "from-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      features: ["تدريب مدربين", "منهجية الكابستون", "إرشاد مهني", "اعتماد دولي"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-amber-50/50">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase">
              خدماتنا المتميزة
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 bg-clip-text text-transparent">
              نكتشف طاقات المستقبل
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            تسعة حلول متكاملة مصممة خصيصاً لتحليل وتطوير قدرات الطلاب وتوجيههم نحو مستقبل مهني ناجح
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden transition-all duration-700 transform hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl animate-fade-in cursor-pointer ${
                hoveredCard === index ? 'ring-4 ring-blue-300/50' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardContent className="relative p-8 text-center h-full flex flex-col justify-between">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className={`flex items-center justify-center space-x-2 space-x-reverse text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0`}
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center justify-center space-x-4 space-x-reverse bg-gradient-to-r from-blue-600 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <span>ابدأ رحلة اكتشاف مستقبلك</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm">←</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
