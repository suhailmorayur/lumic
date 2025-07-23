// import React from "react";
// import { Parallax } from "react-parallax";
// import { motion } from "framer-motion";

// const fadeInLeft = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };

// const About = () => (
//   <Parallax
//     bgImage="/photography_design.jpg" // Replace with your image
//     strength={300}
//     bgImageStyle={{ objectFit: "cover" }}
//   >
//     <section id="about" className="p-10 text-gray-800 bg-white/80 backdrop-blur-md">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Image */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInLeft}
//           className="flex justify-center"
//         >
//           <img
//             src="https://via.placeholder.com/400x300"
//             alt="Photographer"
//             className="rounded-xl shadow-lg max-w-full h-auto"
//           />
//         </motion.div>

//         {/* Content */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInRight}
//           className="text-center md:text-left"
//         >
//           <h3 className="text-3xl font-semibold mb-4">About Us</h3>
//           <p className="text-lg mb-6">
//             Based in the UAE, I’m a passionate professional photographer dedicated to freezing
//             life’s most precious moments in vivid clarity and emotion.
//           </p>

//           {/* Stats */}
//           <div className="flex justify-center md:justify-start gap-8 mb-6">
//             <motion.div whileHover={{ scale: 1.05 }} className="text-center">
//               <h4 className="text-2xl font-bold text-black">8+</h4>
//               <p className="text-sm text-gray-600">Years Experience</p>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.05 }} className="text-center">
//               <h4 className="text-2xl font-bold text-black">200+</h4>
//               <p className="text-sm text-gray-600">Projects Done</p>
//             </motion.div>
//           </div>

//           {/* CTA Button */}
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             href="#portfolio"
//             className="inline-block bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-800 transition"
//           >
//             View Portfolio
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   </Parallax>
// );

// export default About;
// import React from "react";
// import { motion } from "framer-motion";

// const fadeInLeft = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };

// const About = () => (
//   <section
//     id="about"
//     className="p-10 text-gray-800 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')] bg-repeat"
//   >
//     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//       {/* Image Section */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInLeft}
//         className="flex justify-center"
//       >
//         <img
//           src="https://via.placeholder.com/400x300" // Replace with your image URL
//           alt="Photographer"
//           className="rounded-xl shadow-lg max-w-full h-auto"
//         />
//       </motion.div>

//       {/* Text Section */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInRight}
//         className="text-center md:text-left"
//       >
//         <h3 className="text-3xl font-semibold mb-4">About Me</h3>
//         <p className="text-lg mb-6">
//           Based in the UAE, I’m a passionate professional photographer dedicated
//           to freezing life’s most precious moments in vivid clarity and emotion.
//         </p>

//         {/* Stats */}
//         <div className="flex justify-center md:justify-start gap-8 mb-6">
//           <motion.div whileHover={{ scale: 1.05 }} className="text-center">
//             <h4 className="text-2xl font-bold text-black">8+</h4>
//             <p className="text-sm text-gray-600">Years Experience</p>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.05 }} className="text-center">
//             <h4 className="text-2xl font-bold text-black">200+</h4>
//             <p className="text-sm text-gray-600">Projects Done</p>
//           </motion.div>
//         </div>

//         {/* CTA Button */}
//         <motion.a
//           whileHover={{ scale: 1.05 }}
//           href="#portfolio"
//           className="inline-block bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-800 transition"
//         >
//           View Portfolio
//         </motion.a>
//       </motion.div>
//     </div>
//   </section>
// );

// export default About;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="about"
      className="p-10 text-gray-800 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')] bg-repeat"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="flex justify-center"
        >
          <img
            src="/camera.jpg"
            alt="Photographer"
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="text-center md:text-left"
        >
          <h3 className="text-3xl font-semibold mb-4">About Us</h3>
          <p className="text-lg mb-4">
            Based in the UAE, I’m a passionate professional photographer dedicated
            to freezing life’s most precious moments in vivid clarity and emotion.
          </p>
          <p className="text-lg mb-6">
            <strong>Professional Photography & Videography Services for Your Upcoming Dubai Event:</strong><br />
            Lumic Production is a media production company based in Dubai, specializing in capturing stunning moments and creating memorable visuals for various events. If you're planning an upcoming event in Dubai and need high-quality photography or videography services, I would be delighted to assist.
            We provide a range of services tailored to your needs to ensure your event is beautifully documented.
            Please feel free to reach out if you have any questions or would like to discuss how we can contribute to making your event special.
          </p>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-8 mb-6">
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <h4 className="text-2xl font-bold text-black">8+</h4>
              <p className="text-sm text-gray-600">Years Experience</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <h4 className="text-2xl font-bold text-black">200+</h4>
              <p className="text-sm text-gray-600">Projects Done</p>
            </motion.div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#portfolio"
              className="inline-block bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-800 transition"
            >
              View Portfolio
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/971501234567" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-black text-black px-6 py-2 rounded-full shadow hover:bg-black hover:text-white transition"
            >
              <FaWhatsapp size={18} />
              Contact Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
