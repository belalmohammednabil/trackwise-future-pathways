
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Sparkles,
  TrendingUp,
  User,
  FileText,
  Compass,
  Trophy,
  Lightbulb,
  GraduationCap,
  Map,
  Target,
} from "lucide-react";

const services = [
  { name: "تحليل بصمة الطالب", icon: User, color: "text-blue-600" },
  { name: "التقرير الشخصي", icon: FileText, color: "text-green-600" },
  { name: "الإرشاد المهني", icon: Compass, color: "text-purple-600" },
  { name: "رحلة الكابستون", icon: Trophy, color: "text-yellow-600" },
  { name: "الأنشطة الإبداعية", icon: Lightbulb, color: "text-orange-600" },
  { name: "مسار TOT المعرض الختامي", icon: GraduationCap, color: "text-indigo-600" },
  { name: "برنامج My Path", icon: Map, color: "text-red-600" },
  { name: "برنامج ProMap", icon: Target, color: "text-cyan-600" },
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50 animate-gradient"></div>

      {/* Floating Service Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          const isLeft = index < 4;

          const verticalOffset = 30 + (index % 4) * 12;

          return (
            <div
              key={index}
              className="absolute flex items-center gap-3 text-sm font-medium bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 shadow-lg animate-float hover:shadow-xl transition-all duration-300"
              style={{
                left: `${
                  isLeft
                    ? 8 + Math.sin((index % 4) * 1 + Math.PI) * 4
                    : 78 + Math.sin((index % 4) * 1) * 4
                }%`,
                top: `${verticalOffset}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${16 + (index % 3) * 2}s`,
                zIndex: 5,
              }}
            >
              <IconComponent className={`w-5 h-5 ${service.color}`} />
              <span className="text-gray-700">{service.name}</span>
            </div>
          );
        })}

        {/* Small decorative bubbles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-400/20 to-amber-400/20 rounded-full animate-float"
            style={{
              left: `${12 + (i * 6) % 76}%`,
              top: `${30 + (i * 9) % 50}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${14 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-amber-100 px-6 py-3 rounded-full text-blue-800 font-semibold text-sm mb-8 animate-fade-in hover:scale-105 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-amber-600" />
            منصة التحليل والإرشاد المهني الأولى في المنطقة العربية
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 animate-slide-up relative tracking-tight">
            <span className="block bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent leading-tight font-serif">
              TrackWise
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-amber-600 rounded-full animate-shimmer"></div>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            نحلّل بيانات التعليم لنكتشف طاقات الطلاب ونقودهم نحو مستقبل مهني مُشرق
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in"
            style={{ animationDelay: "1.1s" }}
          >
            <Button className="bg-gradient-to-r from-slate-700 to-blue-600 hover:from-slate-800 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                ابدأ تحليل شخصيتك الآن
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Button>

            <Button
              variant="outline"
              className="border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              اكتشف خدماتنا
            </Button>
          </div>

          {/* Trust Logos */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "1.4s" }}>
            <p className="text-gray-500 text-sm mb-6">موثوق من قبل أفضل المؤسسات التعليمية</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-gray-500">مدرسة</span>
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-gray-500">جامعة</span>
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-gray-500">معهد</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
