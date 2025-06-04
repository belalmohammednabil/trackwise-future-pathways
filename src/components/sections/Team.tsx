
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Phone, Award, Users, BookOpen, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

export const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    {
      name: "د. أحمد محمد",
      position: "مدير عام ومتخصص في علم النفس التربوي",
      image: "/placeholder.svg",
      description: "خبرة أكثر من 15 عاماً في الإرشاد النفسي والتربوي مع أكثر من 5000 طالب تم توجيههم بنجاح",
      specialties: ["علم النفس التربوي", "الإرشاد المهني", "تحليل الشخصية"],
      experience: "15+ سنة",
      achievements: "5000+ طالب",
      education: "دكتوراه علم النفس",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "د. فاطمة أحمد",
      position: "متخصصة في التقييم النفسي والتربوي",
      image: "/placeholder.svg",
      description: "خبيرة في تصميم وتطوير أدوات التقييم النفسي مع خبرة في أكثر من 50 مؤسسة تعليمية",
      specialties: ["التقييم النفسي", "تطوير المناهج", "البحث العلمي"],
      experience: "12+ سنة",
      achievements: "50+ مؤسسة",
      education: "دكتوراه التقييم النفسي",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "أستاذ محمد علي",
      position: "مستشار تطوير البرامج التدريبية",
      image: "/placeholder.svg",
      description: "متخصص في تصميم البرامج التدريبية المبتكرة مع أكثر من 100 برنامج تدريبي ناجح",
      specialties: ["تطوير البرامج", "التدريب", "إدارة المشاريع"],
      experience: "10+ سنة",
      achievements: "100+ برنامج",
      education: "ماجستير إدارة التدريب",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "د. نورهان سعد",
      position: "متخصصة في الإرشاد الأكاديمي",
      image: "/placeholder.svg",
      description: "خبيرة في توجيه الطلاب نحو المسارات الأكاديمية المناسبة مع معدل نجاح 95% في التوجيه المهني",
      specialties: ["الإرشاد الأكاديمي", "التخطيط المهني", "تطوير المهارات"],
      experience: "8+ سنة",
      achievements: "95% نجاح",
      education: "دكتوراه الإرشاد الأكاديمي",
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <section id="team" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">
            فريق الخبراء
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-transparent">
              نخبة من المتخصصين
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            فريق من الخبراء المتميزين في مجال علم النفس التربوي والإرشاد المهني لخدمة رؤيتكم التعليمية
          </p>
        </div>

        {/* Main Team Display */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Featured Member Card */}
            <div className="order-2 lg:order-1">
              <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700">
                <div className={`absolute inset-0 bg-gradient-to-br ${teamMembers[activeIndex].color} opacity-5`}></div>
                <CardContent className="p-8 relative">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${teamMembers[activeIndex].color} p-1 shadow-lg`}>
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <img 
                          src={teamMembers[activeIndex].image} 
                          alt={teamMembers[activeIndex].name}
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = 'none';
                            const nextElement = target.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <span className="text-3xl font-bold text-gray-600">
                            {teamMembers[activeIndex].name.split(' ')[1]?.charAt(0) || 'A'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 right-1/2 transform translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">
                      {teamMembers[activeIndex].name}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">
                      {teamMembers[activeIndex].position}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {teamMembers[activeIndex].description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                      <Award className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-blue-800">{teamMembers[activeIndex].experience}</div>
                      <div className="text-xs text-blue-600">خبرة</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                      <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-green-800">{teamMembers[activeIndex].achievements}</div>
                      <div className="text-xs text-green-600">إنجازات</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                      <BookOpen className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-purple-800">دكتوراه</div>
                      <div className="text-xs text-purple-600">مؤهل</div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">التخصصات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {teamMembers[activeIndex].specialties.map((specialty, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary"
                          className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-blue-100 hover:to-blue-200 hover:text-blue-800 transition-all duration-300"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="flex justify-center gap-3">
                    <button className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                      <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </button>
                    <button className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                      <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </button>
                    <button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                      <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Team Grid */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                  <Card 
                    key={member.name}
                    className={`cursor-pointer transition-all duration-500 hover:scale-105 border-0 shadow-lg hover:shadow-xl ${
                      index === activeIndex 
                        ? 'ring-2 ring-blue-500 ring-offset-2 shadow-2xl scale-105' 
                        : 'hover:ring-2 hover:ring-blue-300 hover:ring-offset-1'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${member.color} p-0.5 mb-3`}>
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.display = 'none';
                              const nextElement = target.nextElementSibling as HTMLElement;
                              if (nextElement) {
                                nextElement.style.display = 'flex';
                              }
                            }}
                          />
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <span className="text-lg font-bold text-gray-600">
                              {member.name.split(' ')[1]?.charAt(0) || 'A'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h4 className="font-bold text-sm mb-1 text-gray-800">{member.name}</h4>
                      <p className="text-xs text-gray-600 leading-tight">
                        {member.position.split(' ').slice(0, 3).join(' ')}...
                      </p>
                      <div className="flex justify-center mt-2">
                        <Briefcase className={`w-4 h-4 ${index === activeIndex ? 'text-blue-600' : 'text-gray-400'} transition-colors duration-300`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600 text-sm">سنوات خبرة</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
            <div className="text-gray-600 text-sm">طالب تم توجيههم</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
            <div className="text-gray-600 text-sm">برنامج تدريبي</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-amber-600 mb-2">95%</div>
            <div className="text-gray-600 text-sm">معدل النجاح</div>
          </div>
        </div>
      </div>
    </section>
  );
};
