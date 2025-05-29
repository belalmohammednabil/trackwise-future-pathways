
import { Button } from "@/components/ui/button";
import { ArrowDown, Star, Users, Target, Sparkles, TrendingUp, Award } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-amber-400/5 rounded-full blur-2xl animate-spin-slow"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-20 animate-float">
          <div className="w-12 h-12 bg-blue-500/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-blue-500" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-14 h-14 bg-amber-500/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
            <TrendingUp className="w-7 h-7 text-amber-500" />
          </div>
        </div>
        <div className="absolute top-1/2 right-32 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 bg-green-500/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
            <Award className="w-5 h-5 text-green-500" />
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700">أكثر من 1000 طالب تم توجيههم بنجاح</span>
          </div>

          {/* Main Title */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 bg-clip-text text-transparent animate-gradient">
                TrackWise.360
              </span>
            </h1>
            <div className="space-y-4">
              <p className="text-3xl md:text-4xl text-gray-800 font-bold leading-tight">
                "نحلّل بيانات التعليم لنكتشف طاقات الطلاب"
              </p>
              <p className="text-2xl md:text-3xl text-amber-600 font-semibold">
                ونقودهم نحو مستقبل مهني مُشرق ✨
              </p>
            </div>
          </div>

          {/* Enhanced Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-amber-400 to-amber-500 p-4 rounded-2xl">
                    <Star className="w-12 h-12 text-white mx-auto" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">95%</h3>
                <p className="text-gray-600 font-semibold">نسبة رضا الطلاب والأهالي</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full animate-width-95"></div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl">
                    <Users className="w-12 h-12 text-white mx-auto" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">1000+</h3>
                <p className="text-gray-600 font-semibold">طالب تم توجيههم وتطويرهم</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-width-85"></div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl">
                    <Target className="w-12 h-12 text-white mx-auto" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">90%</h3>
                <p className="text-gray-600 font-semibold">دقة التوجيه المهني</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-width-90"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 min-w-[250px] overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2 space-x-reverse">
                <span>ابدأ تحليل شخصيتك</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Sparkles className="w-4 h-4" />
                </div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              className="group relative border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25 min-w-[250px] bg-white/80 backdrop-blur-sm"
            >
              <span className="flex items-center space-x-2 space-x-reverse">
                <span>امتحان هولاند</span>
                <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Target className="w-4 h-4" />
                </div>
              </span>
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
            {[
              { icon: "🎯", text: "تحليل دقيق" },
              { icon: "📊", text: "تقارير شاملة" },
              { icon: "🎓", text: "إرشاد مهني" },
              { icon: "🚀", text: "مستقبل مشرق" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <p className="text-gray-700 font-semibold text-sm">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="inline-flex flex-col items-center space-y-2">
              <span className="text-gray-500 text-sm font-medium">اكتشف المزيد</span>
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
