import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";

const Proyectos = () => {
  // Datos de proyectos
  const proyectos = [
    {
      titulo: "Servicio de Ingesta de Datos Binance",
      descripcion: "Servicio en Go para extracción de datos en tiempo real desde la API de Binance mediante WebSocket con almacenamiento en Cassandra DB.",
      imagen: "/api/placeholder/600/400", // Reemplaza con tu imagen
      tipo: "imagen", // "imagen" o "video"
      tecnologias: ["Go", "WebSocket", "Cassandra DB", "Docker"],
      demoUrl: "#",
      repoUrl: "#",
      destacado: true
    },
    {
      titulo: "Sistema PRS - Microservicios",
      descripcion: "Plataforma modular con microservicios Spring Boot, Apache Kafka y frontend en Angular con autenticación Firebase.",
      imagen: "/api/placeholder/600/400", // Reemplaza con tu imagen
      tipo: "imagen",
      tecnologias: ["Spring Boot", "Apache Kafka", "Angular", "Firebase", "Docker"],
      demoUrl: "#",
      repoUrl: "#",
      destacado: true
    },
    {
      titulo: "Ciskou Wallet - Blockchain",
      descripcion: "Billetera digital con conexión a Ethereum mediante Web3.js, integración MetaMask y gestión de contratos inteligentes.",
      imagen: "/api/placeholder/600/400", // Reemplaza con tu imagen
      tipo: "imagen",
      tecnologias: ["Web3.js", "Ethereum", "Angular", "TypeScript", "Blockchain"],
      demoUrl: "#",
      repoUrl: "#",
      destacado: true
    },
    {
      titulo: "Edulick - Gestión de Cursos",
      descripcion: "Sistema de gestión académico desarrollado en PHP puro con patrón MVC, autenticación segura y AJAX.",
      imagen: "/api/placeholder/600/400", // Reemplaza con tu imagen
      tipo: "imagen",
      tecnologias: ["PHP", "MVC", "MySQL", "JavaScript", "AJAX"],
      demoUrl: "#",
      repoUrl: "#",
      destacado: false
    },
    {
      titulo: "API RESTful - Ecommerce",
      descripcion: "API completa para sistema de ecommerce con Spring Boot, JWT authentication y documentación Swagger.",
      video: "#", // Reemplaza con URL de video
      tipo: "video",
      tecnologias: ["Spring Boot", "JWT", "MySQL", "Swagger", "REST API"],
      demoUrl: "#",
      repoUrl: "#",
      destacado: false
    },
    {
      titulo: "App Móvil - Task Manager",
      descripcion: "Aplicación móvil para gestión de tareas desarrollada con Flutter y Firebase como backend.",
      imagen: "/api/placeholder/600/400", // Reemplaza con tu imagen
      tipo: "imagen",
      tecnologias: ["Flutter", "Firebase", "Dart", "Material Design"],
      demoUrl: "#",
      repoUrl: "#",
      destacado: false
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Proyectos Destacados
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Algunos de los proyectos en los que he trabajado, demostrando mis habilidades en desarrollo full stack y tecnologías modernas.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Contenedor de imagen/video */}
              <div className="relative h-48 overflow-hidden">
                {proyecto.tipo === "video" ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Play className="h-12 w-12 mx-auto mb-2" fill="white" />
                      <p className="text-sm">Video demostrativo</p>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={proyecto.imagen} 
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                
                {/* Overlay con botones */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <motion.a
                    href={proyecto.demoUrl}
                    className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  
                  <motion.a
                    href={proyecto.repoUrl}
                    className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>

                {/* Badge destacado */}
                {proyecto.destacado && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Destacado
                  </div>
                )}
              </div>
              
              {/* Contenido del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{proyecto.titulo}</h3>
                <p className="text-gray-600 mb-4 text-sm">{proyecto.descripcion}</p>
                
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Botones */}
                <div className="flex gap-3">
                  <a
                    href={proyecto.demoUrl}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={proyecto.repoUrl}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-300"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">¿Interesado en ver más proyectos?</p>
          <motion.a
            href="#contacto"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-2" size={20} />
            Ver más en GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Proyectos;