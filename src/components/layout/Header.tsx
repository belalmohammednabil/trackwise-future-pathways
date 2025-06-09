
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
    <header className="fixed top-0 w-full bg-blue-500/20 backdrop-blur-xl z-50 shadow-2xl border-b border-royal-blue/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="relative">
              <div className="w-12 h-12 bg-white/90 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-1 border border-royal-blue/20">
                <img 
                  src="/lovable-uploads/2f9c3c01-cf18-4b54-907a-9f18e9e19d9c.png" 
                  alt="TrackWise Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            
            <div className="text-right">
              <h1 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                TrackWise
              </h1>
              <p className="text-xs text-blue-100 font-medium leading-tight">
                Social Innovators
              </p>
            </div>
          </div>

          {/* Desktop Navigation - moved to the left with better spacing */}
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse mr-auto ml-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white/90 hover:text-white transition-all duration-300 font-medium text-sm group px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-blue-200 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm border border-white/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in bg-blue-600/30 backdrop-blur-xl rounded-lg mt-2 shadow-2xl border border-royal-blue/30">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium px-4 py-3 rounded-lg mx-2 backdrop-blur-sm"
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
