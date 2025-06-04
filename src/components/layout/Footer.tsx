
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-slate-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent font-serif">
                TrackWise
              </h3>
              <p className="text-gray-300 leading-relaxed">
                منصة التحليل والإرشاد المهني الرائدة في المنطقة العربية، نساعد الطلاب على اكتشاف طاقاتهم وتحقيق أهدافهم المهنية.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 space-x-reverse">
              {[
                { icon: Facebook, color: "hover:text-blue-400" },
                { icon: Twitter, color: "hover:text-sky-400" },
                { icon: Instagram, color: "hover:text-pink-400" },
                { icon: Linkedin, color: "hover:text-blue-500" }
              ].map(({ icon: Icon, color }, index) => (
                <div 
                  key={index}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/20 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-300">روابط سريعة</h4>
            <ul className="space-y-3">
              {["الرئيسية", "خدماتنا", "عن الشركة", "فريق العمل", "تواصل معنا"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-300">خدماتنا</h4>
            <ul className="space-y-3">
              {[
                "تحليل بصمة الطالب",
                "الإرشاد المهني",
                "التقرير الشخصي",
                "برنامج My Path",
                "برنامج ProMap"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-300">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-gray-300">+966 50 123 4567</span>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-gray-300">info@trackwise.sa</span>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2024 TrackWise. جميع الحقوق محفوظة
            </p>
            <div className="flex space-x-8 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
