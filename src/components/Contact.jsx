import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-gray-200/40 border border-gray-100 flex flex-col lg:flex-row gap-16">

          {/* Form Side */}
          <div className="flex-1">
            <h2 className="text-4xl font-black text-secondary mb-4 tracking-tight">Get in Touch</h2>
            <p className="text-gray-500 font-medium mb-10">We'd love to hear from you. Fill out the form below and our team will get back to you shortly.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Message</label>
                <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="flex-[0.6] bg-secondary text-white p-12 rounded-[2rem] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Shop No. 2, 1084 E Ward,<br />Rajarampuri, Kolhapur,<br />Maharashtra 416005</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone Number</h4>
                    <p className="text-gray-400 text-sm">9850012344</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Address</h4>
                    <p className="text-gray-400 text-sm">
                      <a href="mailto:avadhootmobiles@gmail.com" className="hover:text-white transition-colors">avadhootmobiles@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
