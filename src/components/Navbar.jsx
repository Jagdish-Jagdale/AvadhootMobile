import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/assets/avdhootlogo.png" alt="Avadhoot Mobile" className="h-12 w-auto" />
          <div className="flex flex-col justify-center">
            <span className={`text-xl font-black leading-none tracking-tight ${scrolled ? 'text-secondary' : 'text-white'}`}>
              AVADHOOT
            </span>
            <span className="text-[10px] font-bold text-primary tracking-widest mt-1">
              MOBILE GALLERY
            </span>
          </div>
        </div>

        {/* Desktop Links (Pushed to the end by justify-between since Action Button is removed) */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-semibold">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`${scrolled ? 'text-gray-600 hover:text-primary' : 'text-gray-200 hover:text-white'} transition-colors`}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`${scrolled ? 'text-secondary' : 'text-white'}`}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 font-semibold hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
