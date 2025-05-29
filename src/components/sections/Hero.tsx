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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Enhanced Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50 animate-gradient"></div>
      
      {/* Enhanced Floating Service Bubbles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {services.map((service, index) => {
          const bubbleColors = [
            "bg-gradient-to-br from-blue-500/40 to-blue-600/50 border-blue-400/60 text-blue-800 shadow-blue-200/50",
            "bg-gradient-to-br from-amber-500/40 to-amber-600/50 border-amber-400/60 text-amber-800 shadow-amber-200/50",
            "bg-gradient-to-br from-emerald-500/40 to-emerald-600/50 border-emerald-400/60 text-emerald-800 shadow-emerald-200/50",
            "bg-gradient-to-br from-purple-500/40 to-purple-600/50 border-purple-400/60 text-purple-800 shadow-purple-200/50",
            "bg-gradient-to-br from-rose-500/40 to-rose-600/50 border-rose-400/60 text-rose-800 shadow-rose-200/50",
            "bg-gradient-to-br from-cyan-500/40 to-cyan-600/50 border-cyan-400/60 text-cyan-800 shadow-cyan-200/50",
            "bg-gradient-to-br from-indigo-500/40 to-indigo-600/50 border-indigo-400/60 text-indigo-800 shadow-indigo-200/50",
            "bg-gradient-to-br from-orange-500/40 to-orange-600/50 border-orange-400/60 text-orange-800 shadow-orange-200/50",
            "bg-gradient-to-br from-teal-500/40 to-teal-600/50 border-teal-400/60 text-teal-800 shadow-teal-200/50"
          ];
          
          return (
            <div
              key={index}
              className={`absolute text-sm md:text-base font-bold backdrop-blur-lg px-6 py-4 rounded-full border-2 animate-float shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 ${bubbleColors[index]}`}
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
        
        {/* Enhanced decorative bubbles */}
        {Array.from({ length: 15 }).map((_, i) => {
          const decorativeColors = [
            "bg-gradient-to-br from-blue-400/30 to-blue-500/40 shadow-blue-200/30",
            "bg-gradient-to-br from-amber-400/30 to-amber-500/40 shadow-amber-200/30",
            "bg-gradient-to-br from-emerald-400/30 to-emerald-500/40 shadow-emerald-200/30",
            "bg-gradient-to-br from-purple-400/30 to-purple-500/40 shadow-purple-200/30"
          ];
          
          return (
            <div
              key={`bubble-${i}`}
              className={`absolute w-4 h-4 rounded-full animate-float shadow-lg backdrop-blur-sm ${decorativeColors[i % 4]}`}
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
          {/* Enhanced Hero Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100/90 to-amber-100/90 backdrop-blur-lg px-8 py-4 rounded-full text-blue-800 font-bold text-base mb-10 animate-fade-in hover:scale-105 transition-all duration-300 shadow-xl border border-blue-200/50">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            منصة التحليل والإرشاد المهني الأولى في المنطقة العربية
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          </div>

          {/* Main Title with Enhanced Animation */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-10 animate-slide-up relative">
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 bg-clip-text text-transparent leading-tight drop-shadow-lg">
              TrackWise
            </span>
            
            {/* Enhanced animated underline */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-blue-600 to-amber-600 rounded-full animate-shimmer shadow-lg"></div>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-14 max-w-4xl mx-auto leading-relaxed animate-fade-in font-medium" style={{ animationDelay: '0.5s' }}>
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

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <Button className="bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                ابدأ تحليل شخصيتك الآن
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Button>
            
            <Button variant="outline" className="border-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl">
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
