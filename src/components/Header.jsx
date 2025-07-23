// import React from "react";

// const Header = () => (
//   <header className="bg-black text-white p-4 sticky top-0 z-50 shadow">
//     <div className="max-w-6xl mx-auto flex justify-between items-center">
//       <h1 className="text-2xl font-bold">PhotoVision</h1>
//       <nav className="space-x-6 text-sm">
//         <a href="#about" className="hover:text-yellow-500">About</a>
//         <a href="#services" className="hover:text-yellow-500">Services</a>
//         <a href="#portfolio" className="hover:text-yellow-500">Portfolio</a>
//         <a href="#why-best" className="hover:text-yellow-500">Why Us</a>
//         <a href="#contact" className="hover:text-yellow-500">Contact</a>
//       </nav>
//     </div>
//   </header>
// );

// export default Header;

// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <header className="bg-black text-white p-4 sticky top-0 z-50 shadow">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">PhotoVision</h1>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-6 text-sm">
//           <a href="#about" className="hover:text-yellow-500">About</a>
//           <a href="#services" className="hover:text-yellow-500">Services</a>
//           <a href="#portfolio" className="hover:text-yellow-500">Portfolio</a>
//           <a href="#why-best" className="hover:text-yellow-500">Why Us</a>
//           <a href="#contact" className="hover:text-yellow-500">Contact</a>
//         </nav>

//         {/* Hamburger Menu Button */}
//         <button
//           className="md:hidden text-xl transition-transform duration-300"
//           onClick={toggleMenu}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-300 overflow-hidden ${
//           menuOpen ? "max-h-96 py-4" : "max-h-0"
//         }`}
//       >
//         <nav className="flex flex-col items-center space-y-4 text-sm">
//           <a href="#about" onClick={toggleMenu} className="hover:text-yellow-500">About</a>
//           <a href="#services" onClick={toggleMenu} className="hover:text-yellow-500">Services</a>
//           <a href="#portfolio" onClick={toggleMenu} className="hover:text-yellow-500">Portfolio</a>
//           <a href="#why-best" onClick={toggleMenu} className="hover:text-yellow-500">Why Us</a>
//           <a href="#contact" onClick={toggleMenu} className="hover:text-yellow-500">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const menuVariants = {
//   hidden: { x: "100%" },
//   visible: {
//     x: 0,
//     transition: {
//       type: "tween",
//       duration: 0.3,
//       when: "beforeChildren",
//       staggerChildren: 0.1, // stagger links
//     },
//   },
//   exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
// };

// const linkVariants = {
//   hidden: { x: 30, opacity: 0 },
//   visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
// };

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const links = [
//     { href: "#about", label: "About" },
//     { href: "#services", label: "Services" },
//     { href: "#portfolio", label: "Portfolio" },
//     { href: "#why-best", label: "Why Us" },
//     { href: "#contact", label: "Contact" },
//   ];

//   return (
//     <header className="bg-black text-white p-4 sticky top-0 z-50 shadow">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">PhotoVision</h1>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6 text-sm">
//           {links.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="hover:text-yellow-500"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         {/* Hamburger Icon */}
//         <button onClick={toggleMenu} className="md:hidden text-xl z-50">
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu + Backdrop */}
//       <AnimatePresence>
//         {menuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={toggleMenu}
//             />

//             {/* Slide-in Mobile Menu with Staggered Links */}
//             <motion.div
//               className="fixed top-0 right-0 w-64 h-full bg-black text-white p-6 z-50"
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               <motion.nav className="flex flex-col space-y-6 text-base">
//                 {links.map((link) => (
//                   <motion.a
//                     key={link.href}
//                     href={link.href}
//                     onClick={toggleMenu}
//                     variants={linkVariants}
//                     className="hover:text-yellow-500"
//                   >
//                     {link.label}
//                   </motion.a>
//                 ))}
//               </motion.nav>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

// Framer Motion Variants
const menuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: "100%",
    transition: { type: "tween", duration: 0.3 },
  },
};

const linkVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#why-best", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Shrink header on scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`bg-black text-white sticky top-0 z-50 shadow transition-all duration-300 ${
        isScrolled ? "py-2 shadow-md backdrop-blur" : "py-4"
      }`}
      animate={{ height: isScrolled ? "60px" : "80px" }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Animated Logo */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl font-bold"
        >
          Lumic Production House
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-yellow-500">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-xl z-50">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu & Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Slide-in Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-black text-white p-6 z-50"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.nav className="flex flex-col space-y-6 text-base">
                {links.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    variants={linkVariants}
                    className="hover:text-yellow-500"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

