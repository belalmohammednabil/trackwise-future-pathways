
import { BookOpen, Brain, Users, Award, Palette, Trophy, GraduationCap, Briefcase, Target, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Services = () => {
  const [selectedUserType, setSelectedUserType] = useState<'individual' | 'institution' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const individualServices = [
    {
      icon: Brain,
      title: "تحليل بصمة الطالب",
      description: "تحليل شامل لقدرات الطالب ونقاط القوة والميول المهنية باستخدام أدوات علمية معتمدة",
      color: "from-blue-500/20 to-blue-700/30",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-500",
      features: ["تحليل القدرات الذهنية", "السمات الشخصية", "الميول المهنية", "الذكاءات المتعددة"]
    },
    {
      icon: BookOpen,
      title: "التقرير الشخصي",
      description: "تقرير مفصل وشامل عن شخصية الطالب وقدراته مع توصيات عملية للمستقبل",
      color: "from-emerald-500/20 to-emerald-700/30",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-500",
      features: ["تحليل نقاط القوة", "توصيات عملية", "خطة تطوير", "دليل الأهل"]
    },
    {
      icon: Target,
      title: "الإرشاد المهني",
      description: "جلسات فردية مع متخصصين لمساعدة الطالب في اختيار التخصص والمسار المهني",
      color: "from-purple-500/20 to-purple-700/30",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-500",
      features: ["جلسات فردية", "اختيار التخصص", "المنح الدولية", "خطة المستقبل"]
    },
    {
      icon: GraduationCap,
      title: "رحلة التعلم القائم على المشروعات",
      description: "برنامج تدريبي عملي لتطوير مهارات حل المشكلات والتفكير النقدي",
      color: "from-amber-500/20 to-amber-700/30",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-500",
      features: ["منهجية الكابستون", "مشاريع عملية", "تفكير نقدي", "عمل جماعي"]
    },
    {
      icon: Trophy,
      title: "المعرض الختامي",
      description: "معرض احترافي لعرض إنجازات الطلاب أمام الأهالي والخبراء مع شهادات معتمدة",
      color: "from-orange-500/20 to-orange-700/30",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-500",
      features: ["عرض المشاريع", "حضور الخبراء", "شهادات معتمدة", "تقييم احترافي"]
    },
    {
      icon: Palette,
      title: "الأنشطة الإبداعية",
      description: "أنشطة فنية وموسيقية ودرامية لتعزيز التعبير الذاتي والثقة بالنفس",
      color: "from-pink-500/20 to-pink-700/30",
      borderColor: "border-pink-200",
      iconBg: "bg-pink-500",
      features: ["فن تشكيلي", "دراما وتمثيل", "موسيقى", "تعبير ذاتي"]
    }
  ];

  const institutionServices = [
    {
      icon: Building,
      title: "تحليل شامل للمؤسسة",
      description: "تقييم متكامل لقدرات جميع الطلاب في المؤسسة التعليمية مع تقارير إدارية",
      color: "from-slate-500/20 to-slate-700/30",
      borderColor: "border-slate-200",
      iconBg: "bg-slate-500",
      features: ["تحليل جماعي", "تقارير إدارية", "إحصائيات شاملة", "خطط تطوير"]
    },
    {
      icon: Users,
      title: "برامج تدريب المعلمين",
      description: "دورات متخصصة لتدريب الكادر التعليمي على أحدث طرق الإرشاد والتوجيه",
      color: "from-indigo-500/20 to-indigo-700/30",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-500",
      features: ["تدريب الكادر", "ورش عملية", "شهادات معتمدة", "متابعة مستمرة"]
    },
    {
      icon: Award,
      title: "نظام إدارة الطلاب",
      description: "منصة متكاملة لإدارة ومتابعة تطور الطلاب وقدراتهم على مستوى المؤسسة",
      color: "from-cyan-500/20 to-cyan-700/30",
      borderColor: "border-cyan-200",
      iconBg: "bg-cyan-500",
      features: ["منصة إلكترونية", "متابعة مستمرة", "تقارير دورية", "تحليل البيانات"]
    }
  ];

  const handleUserTypeSelect = (type: 'individual' | 'institution') => {
    if (selectedUserType === type) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedUserType(type);
      setIsAnimating(false);
    }, 300);
  };

  const displayedServices = selectedUserType === 'institution' ? institutionServices : individualServices;

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-amber-50/30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.05),transparent_70%)]"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase">
              خدماتنا المتميزة
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-slide-up">
            <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent">
              نكتشف طاقات المستقبل
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in mb-12">
            حلول متكاملة مصممة خصيصاً لتحليل وتطوير القدرات
          </p>

          {/* Enhanced User Type Selection Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-16 max-w-4xl mx-auto">
            {/* Individual Card */}
            <Card 
              onClick={() => handleUserTypeSelect('individual')}
              className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 flex-1 ${
                selectedUserType === 'individual'
                  ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300 shadow-xl ring-2 ring-blue-300'
                  : 'bg-white/80 backdrop-blur-sm border-gray-200 hover:border-blue-200 hover:shadow-lg'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                  selectedUserType === 'individual'
                    ? 'bg-blue-500 shadow-lg'
                    : 'bg-gray-100 group-hover:bg-blue-100'
                }`}>
                  <Users className={`w-10 h-10 transition-colors duration-500 ${
                    selectedUserType === 'individual' ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'
                  }`} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  selectedUserType === 'individual' ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'
                }`}>
                  للأفراد والطلاب
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمات مصممة خصيصاً للطلاب الراغبين في اكتشاف مواهبهم وتحديد مسارهم المهني
                </p>
                {selectedUserType === 'individual' && (
                  <div className="mt-4 text-sm text-blue-600 font-semibold">
                    ✓ تم الاختيار
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Institution Card */}
            <Card 
              onClick={() => handleUserTypeSelect('institution')}
              className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 flex-1 ${
                selectedUserType === 'institution'
                  ? 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-300 shadow-xl ring-2 ring-amber-300'
                  : 'bg-white/80 backdrop-blur-sm border-gray-200 hover:border-amber-200 hover:shadow-lg'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                  selectedUserType === 'institution'
                    ? 'bg-amber-500 shadow-lg'
                    : 'bg-gray-100 group-hover:bg-amber-100'
                }`}>
                  <Building className={`w-10 h-10 transition-colors duration-500 ${
                    selectedUserType === 'institution' ? 'text-white' : 'text-gray-600 group-hover:text-amber-600'
                  }`} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  selectedUserType === 'institution' ? 'text-amber-700' : 'text-gray-800 group-hover:text-amber-600'
                }`}>
                  للمؤسسات التعليمية
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  حلول شاملة للمدارس والجامعات لتطوير نظام الإرشاد المهني وتحليل قدرات الطلاب
                </p>
                {selectedUserType === 'institution' && (
                  <div className="mt-4 text-sm text-amber-600 font-semibold">
                    ✓ تم الاختيار
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Display */}
        {selectedUserType && (
          <div className={`transition-all duration-700 transform ${
            isAnimating ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedServices.map((service, index) => (
                <Card 
                  key={`${selectedUserType}-${index}`}
                  className={`group relative overflow-hidden transition-all duration-700 transform hover:scale-105 bg-white/95 backdrop-blur-sm ${service.borderColor} border-2 shadow-lg hover:shadow-xl animate-fade-in cursor-pointer`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                  
                  <CardContent className="relative p-8 text-center h-full flex flex-col justify-between">
                    {/* Icon */}
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${service.iconBg} flex items-center justify-center transform group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center justify-center space-x-2 space-x-reverse text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <div className={`w-2 h-2 rounded-full ${service.iconBg}`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 ${service.iconBg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        {selectedUserType && (
          <div className="text-center mt-16 animate-fade-in">
            <Button className="bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-3 mx-auto">
              <span>ابدأ رحلة اكتشاف مستقبلك</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm">←</span>
              </div>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
