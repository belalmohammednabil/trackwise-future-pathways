
import { Button } from "@/components/ui/button";
import { ArrowDown, Star, Users, Target } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 bg-clip-text text-transparent">
                TrackWise.360
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
              "نحلّل بيانات التعليم لنكتشف طاقات الطلاب"
            </p>
            <p className="text-xl md:text-2xl text-amber-600 font-medium">
              ونقودهم نحو مستقبل مهني مُشرق
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-scale-in">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-blue-600 mb-2">95%</h3>
              <p className="text-gray-600">نسبة رضا الطلاب</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-blue-600 mb-2">1000+</h3>
              <p className="text-gray-600">طالب تم توجيههم</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Target className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-blue-600 mb-2">85%</h3>
              <p className="text-gray-600">دقة التوجيه المهني</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ابدأ تحليل شخصيتك
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              امتحان هولاند
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
