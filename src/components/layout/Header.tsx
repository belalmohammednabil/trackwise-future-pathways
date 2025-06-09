
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 shadow-lg border-b border-blue-200/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
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
              <h1 className="text-xl md:text-2xl font-bold text-royal-blue leading-tight">
                TrackWise
              </h1>
              <p className="text-xs text-gray-600 font-medium leading-tight">
                Social Innovators
              </p>
            </div>
          </div>

          {/* Desktop Navigation - moved to the left */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse mr-auto ml-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-royal-blue transition-all duration-300 font-medium text-sm group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-royal-blue to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

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
                  className="text-gray-700 hover:text-royal-blue hover:bg-blue-50 transition-all duration-300 font-medium px-4 py-3 rounded-lg mx-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
