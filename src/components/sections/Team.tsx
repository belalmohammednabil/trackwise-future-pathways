
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: "د. أحمد محمد",
      position: "مدير عام ومتخصص في علم النفس التربوي",
      image: "/placeholder.svg",
      description: "خبرة أكثر من 15 عاماً في الإرشاد النفسي والتربوي",
      specialties: ["علم النفس التربوي", "الإرشاد المهني", "تحليل الشخصية"],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "د. فاطمة أحمد",
      position: "متخصصة في التقييم النفسي والتربوي",
      image: "/placeholder.svg",
      description: "خبيرة في تصميم وتطوير أدوات التقييم النفسي",
      specialties: ["التقييم النفسي", "تطوير المناهج", "البحث العلمي"],
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "أستاذ محمد علي",
      position: "مستشار تطوير البرامج التدريبية",
      image: "/placeholder.svg",
      description: "متخصص في تصميم البرامج التدريبية المبتكرة",
      specialties: ["تطوير البرامج", "التدريب", "إدارة المشاريع"],
      color: "from-blue-600 to-amber-500"
    },
    {
      name: "د. نورهان سعد",
      position: "متخصصة في الإرشاد الأكاديمي",
      image: "/placeholder.svg",
      description: "خبيرة في توجيه الطلاب نحو المسارات الأكاديمية المناسبة",
      specialties: ["الإرشاد الأكاديمي", "التخطيط المهني", "تطوير المهارات"],
      color: "from-amber-600 to-blue-500"
    }
  ];

  // Auto-rotate carousel every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <section id="team" className="py-20 px-4 bg-gradient-to-br from-blue-50/50 via-white to-amber-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
              فريقنا المتميز
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نخبة من الخبراء والمتخصصين في مجال علم النفس التربوي والإرشاد المهني
          </p>
        </div>

        {/* Enhanced Team Grid Display */}
        <div className="max-w-7xl mx-auto">
          {/* Navigation Dots */}
          <div className="flex justify-center mb-8 space-x-2 space-x-reverse">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-600 to-amber-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name}
                className={`transition-all duration-700 ease-in-out hover:shadow-2xl bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:scale-105 ${
                  index === currentIndex ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                }`}
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  {/* Profile Circle */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${member.color} p-1 animate-pulse-glow`}>
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
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xl font-bold text-gray-600">
                            {member.name.split(' ')[1]?.charAt(0) || 'A'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>

                  {/* Name and Position */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-amber-600 font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Specialties */}
                    <div className="mb-4">
                      {member.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="inline-block bg-gradient-to-r from-blue-100 to-amber-100 text-blue-800 text-xs px-2 py-1 rounded-full m-1"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Icons */}
                  <div className="flex justify-center space-x-3 space-x-reverse mt-auto">
                    <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                      <Linkedin className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-9 h-9 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-9 h-9 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Auto-rotate indicator */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              يتم التبديل تلقائياً كل 10 ثواني
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
