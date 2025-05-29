
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Phone } from "lucide-react";

export const Team = () => {
  const teamMembers = [
    {
      name: "د. أحمد محمد",
      position: "مدير عام ومتخصص في علم النفس التربوي",
      image: "/placeholder.svg",
      description: "خبرة أكثر من 15 عاماً في الإرشاد النفسي والتربوي",
      specialties: ["علم النفس التربوي", "الإرشاد المهني", "تحليل الشخصية"]
    },
    {
      name: "د. فاطمة أحمد",
      position: "متخصصة في التقييم النفسي والتربوي",
      image: "/placeholder.svg",
      description: "خبيرة في تصميم وتطوير أدوات التقييم النفسي",
      specialties: ["التقييم النفسي", "تطوير المناهج", "البحث العلمي"]
    },
    {
      name: "أستاذ محمد علي",
      position: "مستشار تطوير البرامج التدريبية",
      image: "/placeholder.svg",
      description: "متخصص في تصميم البرامج التدريبية المبتكرة",
      specialties: ["تطوير البرامج", "التدريب", "إدارة المشاريع"]
    },
    {
      name: "د. نورهان سعد",
      position: "متخصصة في الإرشاد الأكاديمي",
      image: "/placeholder.svg",
      description: "خبيرة في توجيه الطلاب نحو المسارات الأكاديمية المناسبة",
      specialties: ["الإرشاد الأكاديمي", "التخطيط المهني", "تطوير المهارات"]
    }
  ];

  return (
    <section id="team" className="py-20 px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-amber-400 p-1">
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-600">
                        {member.name.split(' ')[1]?.charAt(0) || 'A'}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                </div>

                {/* Name and Position */}
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
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
                      className="inline-block bg-gradient-to-r from-blue-100 to-amber-100 text-blue-800 text-xs px-3 py-1 rounded-full m-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Contact Icons */}
                <div className="flex justify-center space-x-4 space-x-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
