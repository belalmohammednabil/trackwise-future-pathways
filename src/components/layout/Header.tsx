
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "الرئيسية", href: "#home" },
    { name: "خدماتنا", href: "#services" },
    { name: "من نحن", href: "#about" },
    { name: "فريقنا", href: "#team" },
    { name: "امتحان هولاند", href: "/holland-test" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
                TrackWise.360
              </h1>
              <p className="text-sm text-gray-600">نحلّل بيانات التعليم لنكتشف طاقات الطلاب</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              ابدأ رحلتك
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white py-2 rounded-full">
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
