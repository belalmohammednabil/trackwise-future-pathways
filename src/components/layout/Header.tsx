
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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-lg border-b border-blue-100/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            {/* Updated Logo with the uploaded image */}
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-1">
                <img 
                  src="/lovable-uploads/2f9c3c01-cf18-4b54-907a-9f18e9e19d9c.png" 
                  alt="TrackWise Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            
            <div className="text-right">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 bg-clip-text text-transparent leading-tight">
                TrackWise
              </h1>
              <p className="text-xs text-gray-600 font-medium leading-tight">
                Social Innovators
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
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

          {/* Enhanced CTA Button with better contrast */}
          <div className="hidden lg:block">
            <Button className="relative bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group border border-blue-600">
              <span className="relative z-10">ابدأ رحلتك</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
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
                <Button className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white py-3 rounded-full font-semibold shadow-lg border border-blue-600">
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
