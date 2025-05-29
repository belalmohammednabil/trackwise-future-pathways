
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, TrendingUp, Users, Brain } from "lucide-react";

const services = [
  "تحليل بصمة الطالب",
  "التقرير الشخصي",
  "الإرشاد المهني",
  "رحلة الكابستون",
  "المعرض الختامي",
  "الأنشطة الإبداعية",
  "مسار TOT",
  "برنامج My Path",
  "برنامج ProMap"
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50 animate-gradient"></div>
      
      {/* Floating Service Bubbles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {services.map((service, index) => {
          const bubbleColors = [
            "bg-gradient-to-br from-blue-400/30 to-blue-500/40 border-blue-300/50 text-blue-700",
            "bg-gradient-to-br from-amber-400/30 to-amber-500/40 border-amber-300/50 text-amber-700",
            "bg-gradient-to-br from-emerald-400/30 to-emerald-500/40 border-emerald-300/50 text-emerald-700",
            "bg-gradient-to-br from-purple-400/30 to-purple-500/40 border-purple-300/50 text-purple-700",
            "bg-gradient-to-br from-rose-400/30 to-rose-500/40 border-rose-300/50 text-rose-700",
            "bg-gradient-to-br from-cyan-400/30 to-cyan-500/40 border-cyan-300/50 text-cyan-700",
            "bg-gradient-to-br from-indigo-400/30 to-indigo-500/40 border-indigo-300/50 text-indigo-700",
            "bg-gradient-to-br from-orange-400/30 to-orange-500/40 border-orange-300/50 text-orange-700",
            "bg-gradient-to-br from-teal-400/30 to-teal-500/40 border-teal-300/50 text-teal-700"
          ];
          
          return (
            <div
              key={index}
              className={`absolute text-xs md:text-sm font-medium backdrop-blur-sm px-4 py-3 rounded-full border-2 animate-float shadow-lg hover:shadow-xl transition-all duration-300 ${bubbleColors[index]}`}
              style={{
                left: `${(index * 11 + 10) % 85}%`,
                top: `${(index * 13 + 15) % 75}%`,
                animationDelay: `${index * 0.8}s`,
                animationDuration: `${8 + (index % 4)}s`,
              }}
            >
              {service}
            </div>
          );
        })}
        
        {/* Additional floating bubbles for visual effect */}
        {Array.from({ length: 12 }).map((_, i) => {
          const decorativeColors = [
            "bg-gradient-to-br from-blue-300/20 to-blue-400/30",
            "bg-gradient-to-br from-amber-300/20 to-amber-400/30",
            "bg-gradient-to-br from-emerald-300/20 to-emerald-400/30",
            "bg-gradient-to-br from-purple-300/20 to-purple-400/30"
          ];
          
          return (
            <div
              key={`bubble-${i}`}
              className={`absolute w-3 h-3 rounded-full animate-float shadow-md ${decorativeColors[i % 4]}`}
              style={{
                left: `${Math.random() * 95}%`,
                top: `${Math.random() * 90}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-amber-100 px-6 py-3 rounded-full text-blue-800 font-semibold text-sm mb-8 animate-fade-in hover:scale-105 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-amber-600" />
            منصة التحليل والإرشاد المهني الأولى في المنطقة العربية
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>

          {/* Main Title with Enhanced Animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up relative">
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 bg-clip-text text-transparent leading-tight">
              TrackWise
            </span>
            
            {/* Animated underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-amber-600 rounded-full animate-shimmer"></div>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
            نحلّل بيانات التعليم لنكتشف طاقات الطلاب ونقودهم نحو مستقبل مهني مُشرق
          </p>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-blue-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">+5000</h3>
              <p className="text-gray-600 font-medium">طالب تم توجيههم</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-amber-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-amber-600 mb-2">95%</h3>
              <p className="text-gray-600 font-medium">نسبة دقة التحليل</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-blue-100/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">9</h3>
              <p className="text-gray-600 font-medium">خدمات متكاملة</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <Button className="bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                ابدأ تحليل شخصيتك الآن
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Button>
            
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
              اكتشف خدماتنا
            </Button>
          </div>

          <div className="mt-16 animate-fade-in" style={{ animationDelay: '1.4s' }}>
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
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
