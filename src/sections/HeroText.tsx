import { motion } from "framer-motion";
import { useState } from "react";

const HeroText = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 text-center px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          {/* Elementos decorativos */}
          <motion.div 
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            <span className="text-4xl text-white">EM</span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hola, soy <span className="text-cyan-300">Elser Manuel</span>
          </motion.h1>

          <motion.div
            className="text-lg md:text-2xl text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <span>Desarrollador Web </span>
            <motion.span 
              className="text-cyan-300 font-medium"
              animate={{ 
                color: ["#22d3ee", "#67e8f9", "#22d3ee"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Full Stack
            </motion.span>
          </motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            Creo experiencias digitales excepcionales con tecnologías modernas y soluciones innovadoras.
          </motion.p>
        </motion.div>
        
        <motion.button
          className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
            isHovered 
              ? "bg-white text-blue-900 shadow-2xl shadow-cyan-500/30 transform -translate-y-1" 
              : "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          Conoce mi trabajo
        </motion.button>
        
        {/* Elemento decorativo de fondo */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;