
import { BookOpen, Brain, Users, Award, Palette, Trophy, GraduationCap, Briefcase, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "تحليل بصمة الطالب",
      description: "تحليل شامل لقدرات الطالب ونقاط القوة والميول المهنية باستخدام أدوات علمية معتمدة",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "التقرير الشخصي",
      description: "تقرير مفصل وشامل عن شخصية الطالب وقدراته مع توصيات عملية للمستقبل",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Target,
      title: "الإرشاد المهني",
      description: "جلسات فردية مع متخصصين لمساعدة الطالب في اختيار التخصص والمسار المهني المناسب",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: GraduationCap,
      title: "رحلة التعلم القائم على المشروعات",
      description: "برنامج تدريبي عملي لتطوير مهارات حل المشكلات والتفكير النقدي",
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: Trophy,
      title: "المعرض الختامي",
      description: "معرض احترافي لعرض إنجازات الطلاب أمام الأهالي والخبراء",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "الأنشطة الإبداعية",
      description: "أنشطة فنية وموسيقية ودرامية لتعزيز التعبير الذاتي والثقة",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Users,
      title: "My Path - المرحلة الإعدادية",
      description: "برنامج متكامل لطلاب الإعدادي لاكتشاف القدرات والميول",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Briefcase,
      title: "ProMap - المرحلة الثانوية",
      description: "برنامج شامل لطلاب الثانوي للتخطيط الأكاديمي والمهني",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "مسار TOT",
      description: "تدريب المدربين في منهجية الكابستون والإرشاد المهني",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
              خدماتنا المتميزة
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتخصصة لتحليل وتطوير قدرات الطلاب وتوجيههم نحو مستقبل مهني ناجح
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
