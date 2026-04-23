import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-24 pb-20 overflow-hidden"
    >
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          /* Placeholder background image - replace with your uploaded image path */
          src="https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1800&auto=format&fit=crop"
          alt="Store Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Black Overlay: Adjust opacity by changing bg-black/70 to a different value like /60 or /80 */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 mt-10">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-8 backdrop-blur-sm"
          >
            Welcome to Avadhoot Mobile
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter"
          >
            The Future of <br className="hidden md:block" />
            <span className="text-primary">Connectivity</span> in <br className="hidden md:block" />
            Your Hands.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Experience the pinnacle of mobile technology with our curated
            collection of premium smartphones and bespoke services tailored
            for the modern professional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-sm shadow-xl shadow-primary/30 hover:bg-blue-600 transition-all hover:scale-105">
              Explore Collection
            </button>
            <button className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-sm backdrop-blur-sm shadow-sm hover:bg-white/20 transition-all hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
