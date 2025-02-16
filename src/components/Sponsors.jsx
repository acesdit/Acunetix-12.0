import React from "react";
// import { motion } from "framer-motion";
// import abhi from "../assets/abhi.png";
// import yash from "../assets/yash.png";
// import akanksha from "../assets/akansha.png";

// const sponsorsData = [
//   {
//     name: "Abhishek",
//     image: abhi,
//     description: "Abhi is Our Platinum Sponsor. He will be our prime sponsor for the entire event.",
//   },
//   {
//     name: "Yash",
//     image: yash,
//     description: "Yash is Our Gold Sponsor. He will be our secondary sponsor for the entire event.",
//   },
//   {
//     name: "Akanksha",
//     image: akanksha,
//     description: "Akanksha is Our Silver Sponsor. She will be our tertiary sponsor for the entire event.",
//   },
//   {
//     name: "Abhishek",
//     image: abhi,
//     description: "Abhi is Our Platinum Sponsor. He will be our prime sponsor for the entire event.",
//   },
//   {
//     name: "Yash",
//     image: yash,
//     description: "Yash is Our Gold Sponsor. He will be our secondary sponsor for the entire event.",
//   },
//   {
//     name: "Akanksha",
//     image: akanksha,
//     description: "Akanksha is Our Silver Sponsor. She will be our tertiary sponsor for the entire event.",
//   },
// ];

// const Sponsors = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-12">
//       <h1 className="text-4xl font-bold mb-10">OUR SPONSORS</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {sponsorsData.map((sponsor, index) => (
//           <motion.div
//             key={index}
//             className="relative w-64 h-80 bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
//             whileHover={{ rotateY: 15, scale: 1.05 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//           >
//             {/* Front Side (Image) */}
//             <motion.div className="absolute inset-0 flex items-center justify-center p-4 bg-gray-700"
//               initial={{ opacity: 1 }}
//               whileHover={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <img src={sponsor.image} alt={sponsor.name} className="w-32" />
//             </motion.div>

//             {/* Back Side (Description) */}
//             <motion.div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-800 text-center"
//               initial={{ opacity: 0 }}
//               whileHover={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h2 className="text-xl font-semibold mb-2">{sponsor.name}</h2>
//               <p className="text-sm text-gray-300">{sponsor.description}</p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sponsors;


import { useState } from "react";
import { motion } from "framer-motion";

const sponsors = [
  { name: "Google", image: "https://storage.googleapis.com/gd-prod/images/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.60c498c559810aa0.webp" },
  { name: "Microsoft", image: "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1024x376.jpg" },
  { name: "Amazon", image: "https://img.freepik.com/premium-vector/amazon-logotype-white-background-logo-internet-service-sale-goods-online-store-platform-arrow-free-shipping-worldwide-shopping-editorial_661108-8065.jpg" },
  { name: "Facebook", image: "https://cdn.pixabay.com/photo/2021/11/11/12/41/facebook-6786210_1280.png" },
];

export default function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState(sponsors.length > 0 ? sponsors[0] : null);
  const [hoveredSponsor, setHoveredSponsor] = useState(null);

  return (
    <div className="flex flex-col h-screen bg-black text-white p-8 items-center justify-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center">OUR SPONSORS</h1>
      
      <div className="flex flex-col md:flex-row w-full items-center justify-center">
        {/* Left Side - Sponsors List */}
        <div className="w-full md:w-1/4 flex flex-col space-y-4 border-b md:border-b-0 md:border-r border-gray-700 pb-4 md:pb-0 pr-0 md:pr-4 text-center md:text-left">
          {sponsors.map((sponsor) => (
            <motion.button
              key={sponsor.name}
              onClick={() => setSelectedSponsor(sponsor)}
              onMouseEnter={() => setHoveredSponsor(sponsor)}
              onMouseLeave={() => setHoveredSponsor(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-lg transition-all duration-300 font-semibold hover:bg-gray-700 ${
                selectedSponsor?.name === sponsor.name ? "bg-gray-700" : ""
              }`}
            >
              {sponsor.name}
            </motion.button>
          ))}
        </div>

        {/* Right Side - Image Frame */}
        <div className="w-full md:w-3/4 flex justify-center items-center mt-4 md:mt-0">
          {(hoveredSponsor || selectedSponsor) && (
            <motion.img
              key={(hoveredSponsor || selectedSponsor).name}
              src={(hoveredSponsor || selectedSponsor).image}
              alt={(hoveredSponsor || selectedSponsor).name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg shadow-lg w-full md:w-3/4 h-auto object-cover border border-gray-700"
            />
          )}
        </div>
      </div>
    </div>
  );
}
