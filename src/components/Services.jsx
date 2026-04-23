import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Wrench, BatteryCharging, FlipVertical } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Latest Smartphones",
      desc: "Explore a premium collection of the newest models from top brands like Apple, Samsung, and OnePlus.",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=1200&auto=format&fit=crop",
      icon: <Smartphone className="w-6 h-6" />,
      tag: "Sales"
    },
    {
      title: "Expert Device Repair",
      desc: "Fast, reliable screen repairs, battery replacements, and hardware diagnostics by certified technicians.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
      icon: <Wrench className="w-6 h-6" />,
      tag: "Repair"
    },
    {
      title: "Premium Accessories",
      desc: "Elevate your device with high-quality cases, fast chargers, wireless earbuds, and screen protectors.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop",
      icon: <BatteryCharging className="w-6 h-6" />,
      tag: "Accessories"
    },
    {
      title: "Trade-In & Exchange",
      desc: "Get the best market value for your old device when you upgrade instantly to a newer model.",
      image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=1200&auto=format&fit=crop",
      icon: <FlipVertical className="w-6 h-6" />,
      tag: "Exchange"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary"></span>
              <span className="text-xs font-black text-primary uppercase tracking-widest">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-secondary mb-6 tracking-tight leading-tight">
              Complete Mobile <br /> Solutions under <span className="text-primary mt-2 inline-block">One Roof.</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              From acquiring the latest flagship devices to professional servicing and protection,
              we provide an end-to-end premium mobile experience.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            href="#contact"
            className="group flex items-center gap-3 text-secondary font-bold hover:text-primary transition-all mb-2 relative overflow-hidden px-2 py-1"
          >
            <span className="relative z-10 transition-transform group-hover:-translate-x-1">Get an Estimate</span>
            <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </motion.a>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-black/20 z-10" />
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
              </div>

              {/* Tag overlay */}
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-white/30">
                  {service.tag}
                </span>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 transition-all duration-500 ease-[0.21,0.47,0.32,0.98]">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 shadow-lg shadow-primary/30">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {service.title}
                </h3>
                {/* Description is initially slightly transparent and moves up/becomes fully opaque on hover */}
                <p className="text-gray-200 text-sm leading-relaxed font-medium opacity-80 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-100">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
