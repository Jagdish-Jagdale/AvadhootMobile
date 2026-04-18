import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="py-32 bg-primary">
      <div className="container mx-auto px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-editorial text-4xl md:text-5xl text-bone mb-6 italic">The Inner Circle.</h2>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto font-light text-lg tracking-wide">
            Subscribe to receive private invitations to flagship unveilings and boutique collection early-accesss.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto relative">
            <input
              type="email"
              placeholder="Email your address"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-8 py-5 text-[13px] text-bone focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-light tracking-widest placeholder:text-gray-700"
            />
            <button className="w-full md:w-auto bg-bone text-primary px-10 py-5 rounded-xl font-black text-[9px] uppercase tracking-[0.3em] hover:bg-white hover:scale-[1.02] transition-all duration-500 whitespace-nowrap">
              Submit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
