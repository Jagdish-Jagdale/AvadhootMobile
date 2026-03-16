import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Pranav Deshmukh",
      info: "1 review",
      time: "Edited a week ago",
      rating: 5,
      text: "Good quality of product and service",
      initial: "P",
      color: "bg-orange-500"
    },
    {
      name: "Kalpesh Patil",
      info: "1 review",
      time: "6 days ago",
      rating: 5,
      text: "Best Quality product always",
      initial: "K",
      color: "bg-blue-500"
    },
    {
      name: "Chintamani 125",
      info: "2 reviews",
      time: "3 weeks ago",
      rating: 5,
      text: "Good quality product and delivery on time best rate",
      initial: "C",
      color: "bg-purple-500"
    },
    {
      name: "Sanjam Patil",
      info: "1 review",
      time: "a week ago",
      rating: 5,
      text: "Best quality product",
      initial: "S",
      color: "bg-slate-700"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-editorial text-4xl md:text-5xl text-primary mb-6"
          >
            What Our <span className="italic font-light text-gray-400">Curators</span> Say
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-20 h-0.5 bg-primary/10 mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="museum-card bg-bone p-8 rounded-[2rem] flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-black text-xs shadow-sm`}>
                  {review.initial}
                </div>
                <div>
                  <h4 className="text-[13px] font-black text-primary leading-tight">{review.name}</h4>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{review.info}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={10} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-[10px] text-gray-400 font-medium ml-2">{review.time}</span>
                  <span className="bg-gray-100 text-[8px] font-black px-1.5 py-0.5 rounded text-gray-400 ml-auto uppercase tracking-tighter">New</span>
                </div>
                <p className="text-gray-400 text-[13px] leading-relaxed font-light tracking-wide italic">
                  "{review.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
