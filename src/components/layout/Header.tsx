
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="fixed top-0 w-full bg-white/98 backdrop-blur-xl z-50 shadow-lg border-b border-blue-100/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-6 space-x-reverse">
            {/* Professional Logo */}
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-amber-500 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-amber-500 rounded-2xl blur-xl opacity-40"></div>
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-blue-600 to-amber-500 flex items-center justify-center">
                  <div className="text-white font-bold text-2xl tracking-tight">
                    <span className="block text-center leading-none">T</span>
                    <span className="block text-sm leading-none opacity-90 font-medium">W</span>
                  </div>
                </div>
              </div>
              {/* Enhanced floating dots animation */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full animate-ping shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-md"></div>
            </div>
            
            <div className="text-right">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 bg-clip-text text-transparent leading-tight">
                TrackWise
              </h1>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-tight mt-1">
                نحلّل بيانات التعليم لنكتشف طاقات الطلاب
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold text-base group py-2 px-1"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-amber-600 rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:block">
            <Button className="relative bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white px-8 py-3 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group">
              <span className="relative z-10">ابدأ رحلتك</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} className="text-gray-700" /> : <Menu size={28} className="text-gray-700" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 animate-fade-in bg-white/98 backdrop-blur-xl rounded-2xl mt-3 shadow-2xl border border-gray-100/50">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-semibold text-base px-6 py-4 rounded-xl mx-3"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-6 pt-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white py-4 rounded-full font-bold text-base shadow-xl">
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
