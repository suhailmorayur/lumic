// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// // };

// // const categories = ["All", "Wedding", "Fashion", "Nature"];

// // const allImages = [
// //   { id: 1, category: "Wedding" },
// //   { id: 2, category: "Fashion" },
// //   { id: 3, category: "Nature" },
// //   { id: 4, category: "Wedding" },
// //   { id: 5, category: "Fashion" },
// //   { id: 6, category: "Nature" },
// //   { id: 7, category: "Wedding" },
// //   { id: 8, category: "Fashion" },
// //   { id: 9, category: "Nature" },
// // ];

// // const Portfolio = () => {
// //   const [activeCategory, setActiveCategory] = useState("All");
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [visibleCount, setVisibleCount] = useState(6); // Initial visible count

// //   const filteredImages =
// //     activeCategory === "All"
// //       ? allImages
// //       : allImages.filter((img) => img.category === activeCategory);

// //   const visibleImages = filteredImages.slice(0, visibleCount);

// //   const handleLoadMore = () => {
// //     setVisibleCount((prev) => prev + 3);
// //   };

// //   return (
// //     <motion.section
// //       id="portfolio"
// //       className="py-16 px-4 md:px-10 bg-gradient-to-br from-white to-gray-100"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.3 }}
// //       variants={fadeInUp}
// //     >
// //       <div className="text-center mb-10">
// //         <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Portfolio</h2>
// //         <p className="text-gray-500">Explore our diverse creative work</p>
// //       </div>

// //       {/* Category Buttons */}
// //       <div className="flex justify-center gap-4 flex-wrap mb-8">
// //         {categories.map((cat) => (
// //           <button
// //             key={cat}
// //             onClick={() => {
// //               setActiveCategory(cat);
// //               setVisibleCount(6); // Reset visible count on filter change
// //             }}
// //             className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
// //               activeCategory === cat
// //                 ? "bg-black text-white"
// //                 : "bg-white text-gray-700 hover:bg-gray-200"
// //             }`}
// //           >
// //             {cat}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Image Grid */}
// //       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //         {visibleImages.map((img) => (
// //           <motion.div
// //             key={img.id}
// //             className="overflow-hidden rounded-2xl shadow-md cursor-pointer bg-white"
// //             whileHover={{ scale: 1.03 }}
// //             onClick={() => setSelectedImage(img.id)}
// //           >
// //             <img
// //               src={`https://source.unsplash.com/random/600x400?sig=${img.id}&${img.category.toLowerCase()}`}
// //               alt={img.category}
// //               className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
// //             />
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* Load More Button */}
// //       {visibleCount < filteredImages.length && (
// //         <div className="text-center mt-10">
// //           <button
// //             onClick={handleLoadMore}
// //             className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
// //           >
// //             Load More
// //           </button>
// //         </div>
// //       )}

// //       {/* Modal Popup */}
// //       <AnimatePresence>
// //         {selectedImage && (
// //           <motion.div
// //             className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setSelectedImage(null)}
// //           >
// //             <motion.img
// //               src={`https://source.unsplash.com/random/1000x700?sig=${selectedImage}`}
// //               alt="Full Size"
// //               className="max-w-3xl w-full rounded-lg shadow-lg"
// //               initial={{ scale: 0.8 }}
// //               animate={{ scale: 1 }}
// //               exit={{ scale: 0.8 }}
// //               onClick={(e) => e.stopPropagation()}
// //             />
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.section>
// //   );
// // };

// // export default Portfolio;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { image } from "framer-motion/client";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const categories = ["All", "Wedding", "Fashion", "Nature"];

// const allImages = [
//   { id: 1, category: "Wedding",src: "/weddings.jpeg"},
//   { id: 2, category: "Fashion" },
//   { id: 3, category: "Nature" },
//   { id: 4, category: "Wedding" },
//   { id: 5, category: "Fashion" },
//   { id: 6, category: "Nature" },
//   { id: 7, category: "Wedding" },
//   { id: 8, category: "Fashion" },
//   { id: 9, category: "Nature" },
// ];

// const Portfolio = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [visibleCount, setVisibleCount] = useState(6);

//   const filteredImages =
//     activeCategory === "All"
//       ? allImages
//       : allImages.filter((img) => img.category === activeCategory);

//   const visibleImages = filteredImages.slice(0, visibleCount);

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => prev + 3);
//   };

//   return (
//     <motion.section
//       id="portfolio"
//       className="py-16 px-4 bg-gradient-to-br from-white to-gray-100"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={fadeInUp}
//     >
//       <div className="max-w-screen-xl mx-auto">
//         {/* Title */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Portfolio</h2>
//           <p className="text-gray-500">Explore our diverse creative work</p>
//         </div>

//         {/* Category Buttons */}
//         <div className="flex justify-center gap-4 flex-wrap mb-8">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => {
//                 setActiveCategory(cat);
//                 setVisibleCount(6);
//               }}
//               className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
//                 activeCategory === cat
//                   ? "bg-black text-white"
//                   : "bg-white text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Image Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {visibleImages.map((img) => (
//             <motion.div
//               key={img.id}
//               className="overflow-hidden rounded-2xl shadow-md cursor-pointer bg-white"
//               whileHover={{ scale: 1.03 }}
//               onClick={() => setSelectedImage(img.id)}
//             >
//               <img
//                 src={`https://source.unsplash.com/random/600x400?sig=${img.id}&${img.category.toLowerCase()}`}
//                 alt={img.category}
//                 className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         {visibleCount < filteredImages.length && (
//           <div className="text-center mt-10">
//             <button
//               onClick={handleLoadMore}
//               className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
//             >
//               Load More
//             </button>
//           </div>
//         )}

//         {/* Modal Popup */}
//         <AnimatePresence>
//           {selectedImage && (
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedImage(null)}
//             >
//               <motion.img
//                 src={`https://source.unsplash.com/random/1000x700?sig=${selectedImage}`}
//                 alt="Full Size"
//                 className="max-w-3xl w-full rounded-lg shadow-lg"
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.8 }}
//                 onClick={(e) => e.stopPropagation()}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.section>
//   );
// };

// export default Portfolio;



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const categories = ["All", "Wedding", "Fashion", "Nature"];

// ✅ Replace with your own images
const allImages = [
  { id: 1, category: "Wedding", src: "/weddings.jpeg" },
  { id: 2, category: "Fashion", src: "/weddings.jpeg" },
  { id: 3, category: "Nature", src: "/weddings.jpeg" },
  { id: 4, category: "Wedding", src: "/weddings.jpeg" },
  { id: 5, category: "Fashion", src: "/weddings.jpeg" },
  { id: 6, category: "Nature", src: "/weddings.jpeg" },
  { id: 7, category: "Fashion", src: "/weddings.jpeg" },
  { id: 8, category: "Fashion", src: "/weddings.jpeg" },
  { id: 9, category: "Fashion", src: "/weddings.jpeg" },
  { id: 10, category: "Fashion", src: "/weddings.jpeg" },
  { id: 11, category: "Fashion", src: "/weddings.jpeg" },
  { id: 12, category: "Fashion", src: "/weddings.jpeg" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredImages =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <motion.section
      id="portfolio"
      className="py-16 px-4 bg-gradient-to-br from-white to-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Portfolio</h2>
          <p className="text-gray-500">Explore our creative work</p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleImages.map((img) => (
            <motion.div
              key={img.id}
              className="overflow-hidden rounded-2xl shadow-md cursor-pointer bg-white"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.category}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredImages.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              Load More
            </button>
          </div>
        )}

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage.src}
                alt="Full Size"
                className="max-w-3xl w-full rounded-lg shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Portfolio;
