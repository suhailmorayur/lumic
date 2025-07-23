import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhyBest = () => (
  <motion.section
    id="why-best"
    className="bg-yellow-50 py-16 px-8 text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <h3 className="text-3xl font-semibold mb-6">Why Choose Me?</h3>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        { title: "Experience", desc: "10+ years of professional photography across genres." },
        { title: "Creativity", desc: "Artistic vision tailored to every unique client story." },
        { title: "Client Focus", desc: "I listen, adapt and deliver exactly what you envision." },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="bg-white p-6 rounded shadow text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="mb-2 flex justify-center">
            <FaStar className="text-yellow-500 text-2xl" />
          </div>
          <h4 className="font-bold mb-1">{item.title}</h4>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default WhyBest;
