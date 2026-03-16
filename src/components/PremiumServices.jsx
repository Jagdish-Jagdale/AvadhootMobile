import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PremiumServices = () => {
  const services = [
    {
      title: "The Workshop",
      desc: "Precision restoration of heritage hardware using artisan tools and original components.",
      image: "/assets/luxe_repair.png",
      color: "bg-[#2d7a7d]"
    },
    {
      title: "The Exchange",
      desc: "An effortless transition service for curators looking to elevate their collection.",
      image: "/assets/luxe_tradein.png",
      color: "bg-white"
    },
    {
      title: "The Objects",
      desc: "A dedicated collection of bespoke accessories designed for the minimalist aesthetic.",
      image: "/assets/luxe_accessories.png",
      color: "bg-white"
    }
  ];

  return (
    <section className="py-24 bg-bone">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-editorial text-4xl md:text-5xl text-primary mb-6">Service as an Art Form</h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed tracking-wide">
              We extend our philosophy of excellence beyond the acquisition, ensuring 
              your collection remains in pristine condition for a lifetime.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2.5 text-primary text-[9px] uppercase font-black tracking-[0.3em] hover:gap-4 transition-all group border-b border-primary/20 pb-1.5">
            Explore All Services <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className={`${service.color} rounded-[2.5rem] overflow-hidden aspect-[3/4] mb-8 relative flex items-center justify-center p-12 transition-all duration-700 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.03)] border border-gray-100/50`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {i === 0 && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-10 text-center">
                    <h3 className="text-editorial text-3xl text-white italic">Preserve.</h3>
                  </div>
                )}
                {i === 1 && (
                  <div className="absolute top-10 left-10 opacity-30">
                    <h3 className="text-editorial text-3xl text-gray-400 italic font-thin">Curate.</h3>
                  </div>
                )}
              </div>
              <h3 className="text-editorial text-xl text-primary mb-4">{service.title}</h3>
              <p className="text-gray-400 text-[13px] leading-[1.7] font-light tracking-wide">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
