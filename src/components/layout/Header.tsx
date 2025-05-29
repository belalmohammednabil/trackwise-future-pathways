
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "الرئيسية", href: "#home" },
    { name: "خدماتنا", href: "#services" },
    { name: "برامجنا", href: "#programs" },
    { name: "من نحن", href: "#about" },
    { name: "فريقنا", href: "#team" },
    { name: "امتحان هولاند", href: "/holland-test" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-lg border-b border-blue-100/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Professional Logo */}
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-amber-500 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-amber-500 rounded-xl blur-md opacity-50"></div>
                <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-blue-600 to-amber-500 flex items-center justify-center">
                  <div className="text-white font-bold text-xl tracking-tight">
                    <span className="block text-center leading-none">T</span>
                    <span className="block text-xs leading-none opacity-90">360</span>
                  </div>
                </div>
              </div>
              {/* Floating dots animation */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="text-right">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 bg-clip-text text-transparent leading-tight">
                TrackWise.360
              </h1>
              <p className="text-xs md:text-sm text-gray-600 font-medium leading-tight">
                نحلّل بيانات التعليم لنكتشف طاقات الطلاب
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-amber-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="relative bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden group">
              <span className="relative z-10">ابدأ رحلتك</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in bg-white/95 backdrop-blur-lg rounded-lg mt-2 shadow-xl border border-gray-100">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium px-4 py-3 rounded-lg mx-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white py-3 rounded-full font-semibold shadow-lg">
                  ابدأ رحلتك
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
