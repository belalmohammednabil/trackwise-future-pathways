
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                  TrackWise.360
                </h3>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نحلّل بيانات التعليم لنكتشف طاقات الطلاب ونقودهم نحو مستقبل مهني مُشرق
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-300 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">خدماتنا</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">تحليل بصمة الطالب</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">الإرشاد المهني</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">برنامج My Path</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">برنامج ProMap</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">امتحان هولاند</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">الرئيسية</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">من نحن</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">خدماتنا</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors duration-300">فريقنا</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+20 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@trackwise360.com</span>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-5 h-5 text-blue-400 mt-1">📍</div>
                <span className="text-gray-300">القاهرة، مصر</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TrackWise.360. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
