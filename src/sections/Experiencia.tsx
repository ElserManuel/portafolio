import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";

const Experiencia = () => {
  // Datos de experiencia basados en tu CV
  const experiencias = [
    {
      empresa: "Servicio de Ingesta de Datos en Tiempo Real (Binance)",
      cargo: "Desarrollador Backend",
      periodo: "Julio 2025 (3 semanas)",
      ubicacion: "Remoto",
      logros: [
        "Desarrollo de un servicio en Go para la extracción de datos en tiempo real desde la API de Binance mediante WebSocket",
        "Implementación de Cassandra DB para el almacenamiento distribuido y escalable de datos financieros",
        "Creación de un proceso de depuración para consolidar y persistir datos relevantes cada minuto",
        "Dockerización del servicio para facilitar despliegue y portabilidad"
      ],
      tecnologias: ["Go", "WebSocket", "Cassandra DB", "Docker", "APIs Binance"]
    },
    {
      empresa: "Proyecto PRS",
      cargo: "Full Stack Developer",
      periodo: "Agosto 2024 – Junio 2025",
      ubicacion: "Remoto",
      logros: [
        "Desarrollo de microservicios con Spring Boot y comunicación asíncrona con Apache Kafka",
        "Implementación de módulos de datos (personales, vivienda y registros adicionales)",
        "Creación de interfaces de usuario en Angular con diseño modular",
        "Integración de Firebase Authentication para gestión de roles y permisos",
        "Dockerización de servicios y despliegue en la nube mediante Render"
      ],
      tecnologias: ["Spring Boot", "Apache Kafka", "Angular", "Firebase", "Docker", "Render", "Microservicios"]
    },
    {
      empresa: "Ciskou Wallet",
      cargo: "Desarrollador Full Stack",
      periodo: "Mayo 2025 - Julio 2025",
      ubicacion: "Remoto",
      logros: [
        "Implementación de conexión a la red Ethereum mediante Web3.js",
        "Integración de MetaMask para autenticación y firma de transacciones",
        "Gestión de interacción con contratos inteligentes para lectura y envío de ETH",
        "Desarrollo del frontend en Angular con TypeScript"
      ],
      tecnologias: ["Web3.js", "Ethereum", "MetaMask", "Angular", "TypeScript", "Blockchain"]
    },
    {
      empresa: "Edulick – Sistema de Gestión de Cursos",
      cargo: "Practicante Profesional – Desarrollador Full Stack",
      periodo: "Marzo 2024 - Abril 2024 (1 mes)",
      ubicacion: "Remoto",
      logros: [
        "Desarrollo de aplicación web en PHP puro con patrón MVC",
        "Implementación de sistema de autenticación completo con bcrypt",
        "Construcción de CRUD de cursos con paginación dinámica mediante AJAX",
        "Diseño de panel de administración y gestión de perfiles de usuario",
        "Maquetación responsiva con HTML5, CSS3 y JavaScript"
      ],
      tecnologias: ["PHP", "MVC", "MySQL", "JavaScript", "AJAX", "HTML5", "CSS3"]
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experiencia Profesional
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Mi trayectoria como desarrollador Full Stack con experiencia en tecnologías modernas y metodologías ágiles.
        </motion.p>

        <div className="space-y-12">
          {experiencias.map((exp, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-600">{exp.empresa}</h3>
                  <p className="text-lg font-semibold text-gray-800 mt-1">{exp.cargo}</p>
                </div>
                
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-600 text-sm">{exp.periodo}</span>
                  <MapPin className="h-5 w-5 text-gray-500 ml-4 mr-2" />
                  <span className="text-gray-600 text-sm">{exp.ubicacion}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-amber-500" />
                  Logros y Responsabilidades:
                </h4>
                <ul className="list-disc list-inside space-y-1 pl-5">
                  {exp.logros.map((logro, i) => (
                    <li key={i} className="text-gray-600">{logro}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Tecnologías utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tecnologias.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencia;