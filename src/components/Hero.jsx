import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [ripples, setRipples] = useState([]);
  // const maxRipples = 50; // Limit concurrent ripples for performance

  const addRipple = useCallback(
    (e) => {
      // if (ripples.length >= maxRipples) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple = {
        id: Date.now() + Math.random(), // More unique ID
        x,
        y,
      };

      setRipples((prev) => [...prev, newRipple]);
    },
    [ripples.length]
  );

  const removeRipple = useCallback((id) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
  }, []);

  return (
    <section
      className="h-screen flex items-center justify-center px-4 text-center overflow-hidden"
      onMouseMove={addRipple}
    >
      {/* Dynamic Ripples */}
      {ripples.map(({ id, x, y }) => (
        <motion.div
          key={id}
          className="absolute bg-linear-to-r from-pink/20 to-purple/30 border border-purple rounded-full pointer-events-none"
          // className="absolute bg-transparent/80 border-2 border-black rounded-full shadow-xl pointer-events-none"
          style={{
            left: `${x}px`,
            top: `${y}px`,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ opacity: 0.9 }}
          animate={{
            width: 180,
            height: 180,
            scale: 1.2,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 1, 0.35, 0.8],
          }}
          onAnimationComplete={() => removeRipple(id)}
        />
      ))}

      {/* Content */}
      <div className="max-w-4xl space-y-4">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center border-dashed border-1 gap-2 px-6 py-2 text-sm bg-blur rounded-full "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          UI/UX & Product Designer
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-bold text-5xl md:text-5xl lg:text-7xl text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          Venkatesh Kesanakurthi
        </motion.h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 max-w-2xl mx-auto mb-6 leading-tight">
          <span className="font-serif italic text-gray-900">Designing</span>
          <span className="font-bold text-gray-900"> with humans</span>
          <span className="font-serif italic text-gray-900">
            {" "}
            at the centre.
          </span>
        </p>

        {/* Description */}
        <p className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
          Creative and detail-oriented UI/UX Designer with 4+ years of
          experience crafting intuitive digital experiences across web and
          mobile platforms. Proven ability to translate user needs into elegant
          design solutions.
        </p>

        {/* CTA Button */}
        <a
          href="mailto:iamvenkateshkvs@gmail.com"
          className="my-6 bg-gradient-to-br from-black to-purple inline-flex items-center gap-2 text-white rounded-full py-3 px-10 font-semibold transition-all hover:border-1 border-dashed translate-y-1"
        >
          Available for Full-time
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

// import { useState, useCallback } from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const [ripples, setRipples] = useState([]);

//   const addRipple = useCallback((e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setRipples((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       },
//     ]);
//   }, []);

//   const removeRipple = (id) => {
//     setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
//   };

//   return (
//     <section
//       className="h-screen flex justify-self-center mx-auto p-4 align-center  text-center"
//       onMouseMove={addRipple}
//     >
//       {/* Dynamic Ripples */}
//       {ripples.map(({ id, x, y }) => (
//         <motion.div
//           key={id}
//           className="absolute bg-tansparent rounded-full border border-black-500 shadow-lg"
//           style={{ left: x, top: y }}
//           initial={{  opacity: 0.9 }}
//           animate={{
//             width: 180,
//             height: 180,
//             opacity: 0,
//           }}
//           transition={{
//             duration: 1.2,
//             ease: [0.25, 1, 0.36, 0.8],
//           }}
//           onAnimationComplete={() => removeRipple(id)}
//         />
//       ))}

//       {/* Title with badge */}
//       <div className=" m-auto">
//         <motion.div
//           className="bg-linear-to-t from-purple-600 to-blue-500 inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-br from-blue-500 to-violet-600 text-white text-sm font-medium rounded-full m-6"
//           initial={{ opacity: 0, scale: 0.9, y: 30 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           whileHover={{ scale: 1.05, rotateX: 5 }}
//         >
//           UI/UX & Product Designer
//         </motion.div>

//         {/* Name */}
//         <h1 className="font-inter font-bold mb-3 md:text-6xl text-black ">
//           Venkatesh Kesanakurthi
//         </h1>

//         {/* Tagline */}
//         <p className="font-inter text-4xl md:text-3xl font-light text-gray-600 mb-8 mx-auto leading-1.5em">
//           {" "}
//           <span className="font-instrument italic text-black">
//             Designing
//           </span>{" "}
//           <span className="font-inter font-bold text-black">with humans</span>{" "}
//           <span className="font-inter font-bold text-black">at the </span>
//           <span className="font-instrument italic text-black">centre.</span>
//         </p>

//         {/* Description */}
//         <p className="text-gray-500 mb-12 mx-auto max-w-lg leading-relaxed">
//           Creative and detail-oriented UI/UX Designer with 4+ years of
//           experience crafting intuitive digital experiences across web and
//           mobile platforms. Proven ability to translate user needs into elegant
//           design solutions using modern design tools and front-end technologies.
//           Strong collaboration with cross-functional teams to deliver
//           user-centered products that drive engagement and usability.
//         </p>

//         {/* CTA Button */}
//         <a
//           href="mailto:iamvenkateshkvs@gmail.com"
//           className="inline-flex items-center gap-3 bg-black text-white px-10 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
//         >
//           Available for Full-time
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M17 8l4 4m0 0l-4 4m4-4H3"
//             />
//           </svg>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
