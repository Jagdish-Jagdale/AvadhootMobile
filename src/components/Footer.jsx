import React from "react";
import { Smartphone, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/avdhootlogo.png" alt="Avadhoot Mobile" className="h-10 w-auto" />
              <div className="flex flex-col justify-center">
                <span className="text-xl font-black leading-none tracking-tight text-white uppercase">
                  AVADHOOT
                </span>
                <span className="text-[10px] font-bold text-primary tracking-widest mt-1">
                  MOBILE GALLERY
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8 max-w-sm">
              Redefining the standard of mobile excellence and technical service for discerning clients worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-primary transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-sm font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Shop No. 2, 1084 E Ward, Rajarampuri, Kolhapur, Maharashtra 416005</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-primary shrink-0" />
                <span>9850012344</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:avadhootmobiles@gmail.com" className="hover:text-white transition-colors">avadhootmobiles@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Avadhoot Mobile. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Built with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
