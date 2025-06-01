
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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

  // Auto-rotate carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <section id="team" className="py-12 md:py-20 px-4 bg-gradient-to-br from-blue-50/50 via-white to-amber-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
              فريقنا المتميز
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            نخبة من الخبراء والمتخصصين في مجال علم النفس التربوي والإرشاد المهني
          </p>
        </div>

        {/* Enhanced Team Carousel Display */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="gap-2 md:gap-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={member.name} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card 
                    className={`transition-all duration-700 ease-in-out hover:shadow-2xl bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:scale-105 h-full ${
                      index === currentIndex ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                    }`}
                  >
                    <CardContent className="p-4 md:p-6 text-center h-full flex flex-col">
                      {/* Profile Circle */}
                      <div className="relative mb-4 md:mb-6">
                        <div className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto rounded-full bg-gradient-to-r ${member.color} p-1 animate-pulse-glow`}>
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
                              <span className="text-base md:text-lg lg:text-xl font-bold text-gray-600">
                                {member.name.split(' ')[1]?.charAt(0) || 'A'}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                      </div>

                      {/* Name and Position */}
                      <div className="flex-grow space-y-2 md:space-y-3">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-xs md:text-sm text-amber-600 font-semibold leading-tight">
                          {member.position}
                        </p>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                          {member.description}
                        </p>

                        {/* Specialties */}
                        <div className="py-2 md:py-3">
                          <div className="flex flex-wrap justify-center gap-1">
                            {member.specialties.map((specialty, idx) => (
                              <span 
                                key={idx}
                                className="inline-block bg-gradient-to-r from-blue-100 to-amber-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Contact Icons */}
                      <div className="flex justify-center space-x-2 space-x-reverse mt-auto pt-2">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                          <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                          <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                          <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
