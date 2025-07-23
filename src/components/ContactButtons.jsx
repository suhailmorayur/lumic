// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

// const ContactButtons = () => {
//   return (
//     <div className="fixed bottom-4 right-4 flex flex-col items-center gap-3 z-50">
//       {/* Call Button */}
//       <a
//         href="tel:+971529493286"
//         className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
//         title="Call Us"
//       >
//         <FaPhoneAlt />
//       </a>

//       {/* Email Button */}
//       <a
//         href="mailto:info@example.com"
//         className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
//         title="Email Us"
//       >
//         <FaEnvelope />
//       </a>

//       {/* WhatsApp Button */}
//       <a
//         href="https://wa.me/971529493286" // Change to your number with country code
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg"
//         title="WhatsApp Us"
//       >
//         <FaWhatsapp />
//       </a>
//     </div>
//   );
// };

// export default ContactButtons;


import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-4 flex flex-col items-center gap-3 z-[9999]">
      <a
        href="tel:+971529493286"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white shadow-md transition duration-300"
        title="Call Us"
      >
        <FaPhoneAlt />
      </a>

      <a
        href="mailto:info@example.com"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-md transition duration-300"
        title="Email Us"
      >
        <FaEnvelope />
      </a>

      <a
        href="https://wa.me/971529493286"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 text-white shadow-md transition duration-300"
        title="WhatsApp Us"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ContactButtons;
