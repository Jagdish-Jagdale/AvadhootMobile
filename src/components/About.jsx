import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle decorative background blur */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Store Image with Professional Decor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative max-w-xl mx-auto lg:mx-0"
          >
            {/* The offset background design square */}
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-blue-100/50 to-transparent rounded-2xl -z-10" />
            
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50 relative group">
              {/* Blue tint overlay that fades on hover */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10"/>
              
              <img 
                src="https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1800&auto=format&fit=crop" 
                alt="Avadhoot Mobile Store" 
                className="w-full aspect-video lg:aspect-[4/5] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 relative z-0"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 hidden sm:flex z-20">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Established</p>
                <p className="text-xl font-black text-secondary leading-none">Since 2014</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Information with Line Design Structure */}
          <div className="flex-[1.2] w-full text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Small horizontal content line above heading */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-0.5 bg-primary"></span>
                <span className="text-xs font-black text-primary uppercase tracking-widest">About Our Store</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-secondary mb-6 tracking-tight leading-[1.1]">
                Redefining the <br className="hidden lg:block"/> 
                <span className="text-primary">Mobile Experience</span>
              </h2>
              
              <p className="text-gray-500 font-medium leading-relaxed mb-10 text-lg">
                For over a decade, we have been the premier destination for technology 
                enthusiasts. We don't just sell devices—we provide comprehensive solutions 
                tailored to connect you with the world seamlessly.
              </p>

              {/* Vertical timeline/feature list with connecting lines */}
              <div className="space-y-6 mb-12">
                {[
                  {
                    title: "Premium Selection",
                    desc: "An exclusive, curated collection of the industry's finest devices."
                  },
                  {
                    title: "Expert Servicing",
                    desc: "Certified technicians ready to restore and optimize your technology."
                  },
                  {
                    title: "Client-First Approach",
                    desc: "Unwavering commitment to quality and lifetime satisfaction."
                  }
                ].map((item, idx, arr) => (
                  <div key={idx} className="flex gap-5 relative">
                    {/* Vertical connecting line below the icon */}
                    {idx !== arr.length - 1 && (
                      <div className="absolute top-8 left-[11px] w-0.5 h-12 bg-gray-200" />
                    )}
                    
                    <div className="shrink-0 mt-0.5 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      </div>
                    </div>
                    
                    <div className="pb-2">
                      <h4 className="text-base font-bold text-secondary mb-1">{item.title}</h4>
                      <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimalist Stats with horizontal dividing line */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4 pr-8 border-r border-gray-200">
                  <h4 className="text-4xl font-black text-secondary">
                    10<span className="text-primary">+</span>
                  </h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-snug">Years<br/>Exp</p>
                </div>
                <div className="flex items-center gap-4">
                  <h4 className="text-4xl font-black text-secondary">
                    5K<span className="text-primary">+</span>
                  </h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-snug">Happy<br/>Clients</p>
                </div>
              </div>
              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
