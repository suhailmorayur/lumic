// import React from "react";
// import { FaCameraRetro } from "react-icons/fa";
// import { motion } from "framer-motion";

// const servicesList = [
//   {
//     title: "Corporate Events",
//     image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
//   },
//   {
//     title: "Exhibitions",
//     image: "https://images.unsplash.com/photo-1607083206173-bd46b1b68279",
//   },
//   {
//     title: "Head Shots",
//     image: "https://images.unsplash.com/photo-1589571894960-20bbe2828b27",
//   },
//   {
//     title: "Fashion",
//     image: "https://images.unsplash.com/photo-1520975922203-8bdf03bcd1ec",
//   },
//   {
//     title: "AD Shoot",
//     image: "https://images.unsplash.com/photo-1598514982901-e1c54efc0c79",
//   },
//   {
//     title: "Wedding",
//     image: "https://images.unsplash.com/photo-1520986606214-8b456906c813",
//   },
//   {
//     title: "Real Estate",
//     image: "https://images.unsplash.com/photo-1560185008-b03839e3b8f5",
//   },
//   {
//     title: "Birthday Shoot",
//     image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
//   },
//   {
//     title: "Food Photography",
//     image: "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da",
//   },
// ];

// const getDirection = (index) => {
//   const col = index % 3;
//   if (col === 0) return { x: -100, y: 0 }; // left column
//   if (col === 1) return { x: 0, y: 100 };  // center column (bottom)
//   return { x: 100, y: 0 };                 // right column
// };

// const Services = () => (
//   <motion.section
//     id="services"
//     className="py-20 px-4 bg-gray-100"
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }}
//   >
//     <div className="max-w-6xl mx-auto text-center">
//       <motion.h3
//         className="text-4xl font-extrabold mb-4 text-gray-800"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Our Services
//       </motion.h3>
//       <p className="text-gray-600 mb-12 max-w-xl mx-auto">
//         Capturing professional moments tailored for all your creative and corporate needs.
//       </p>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {servicesList.map((service, i) => {
//           const direction = getDirection(i);
//           return (
//             <motion.div
//               key={i}
//               className="relative h-64 rounded-2xl shadow-lg overflow-hidden group"
//               initial={{ opacity: 0, x: direction.x, y: direction.y }}
//               whileInView={{ opacity: 1, x: 0, y: 0 }}
//               transition={{ delay: i * 0.05, duration: 0.6 }}
//               viewport={{ once: true, amount: 0.2 }}
//               whileHover={{ scale: 1.03 }}
//             >
//               {/* Background Image */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center transform transition-transform group-hover:scale-105"
//                 style={{ backgroundImage: `url(${service.image})` }}
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

//               {/* Content */}
//               <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
//                 <FaCameraRetro className="text-yellow-400 text-3xl mb-3" />
//                 <h4 className="text-xl font-semibold mb-1">{service.title}</h4>
//                 <p className="text-sm">Creative photography tailored to your vision.</p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   </motion.section>
// );

// export default Services;


import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { motion } from "framer-motion";

const servicesList = [
  {
    title: "Corporate Events",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
  },
  {
    title: "Exhibitions",
    image: "https://images.unsplash.com/photo-1607083206173-bd46b1b68279",
  },
  {
    title: "Head Shots",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828b27",
  },
  {
    title: "Fashion",
    image: "https://images.unsplash.com/photo-1520975922203-8bdf03bcd1ec",
  },
  {
    title: "AD Shoot",
    image: "https://images.unsplash.com/photo-1598514982901-e1c54efc0c79",
  },
  {
    title: "Wedding",
    image: "https://images.unsplash.com/photo-1520986606214-8b456906c813",
  },
  {
    title: "Real Estate",
    image: "https://images.unsplash.com/photo-1560185008-b03839e3b8f5",
  },
  {
    title: "Birthday Shoot",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    title: "Food Photography",
    image: "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da",
  },
];

const Services = () => (
  <section id="services" className="py-20 px-4 bg-gray-100">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h3
        className="text-4xl font-extrabold mb-4 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h3>
      <p className="text-gray-600 mb-12 max-w-xl mx-auto">
        Capturing professional moments tailored for all your creative and corporate needs.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesList.map((service, i) => (
          <motion.div
            key={i}
            className="relative h-64 rounded-2xl shadow-lg overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${service.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
              <FaCameraRetro className="text-yellow-400 text-3xl mb-3" />
              <h4 className="text-xl font-semibold mb-1">{service.title}</h4>
              <p className="text-sm">Creative photography tailored to your vision.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
