import { motion } from "framer-motion";

const Tecnologia = () => {
  // Tecnologías organizadas por categoría
  const categoriasTecnologias = [
    {
      nombre: "Frontend",
      color: "from-blue-500 to-cyan-500",
      tecnologias: [
        "Angular", "React", "React Native", "Flutter", 
        "HTML5", "CSS3", "JavaScript", "TypeScript", 
        "Bootstrap", "Material Design"
      ]
    },
    {
      nombre: "Backend",
      color: "from-green-500 to-emerald-500",
      tecnologias: [
        "Java", "Spring Boot", "Node.js", "Express.js", 
        "PHP", "Go", "Akka"
      ]
    },
    {
      nombre: "Bases de Datos",
      color: "from-purple-500 to-pink-500",
      tecnologias: [
        "MySQL", "PostgreSQL", "SQL Server", "Oracle", 
        "MongoDB", "Supabase", "Cassandra DB"
      ]
    },
    {
      nombre: "DevOps & Cloud",
      color: "from-orange-500 to-red-500",
      tecnologias: [
        "Docker", "Kubernetes", "Google Cloud", "Render", 
        "AWS", "GitLab CI", "Git"
      ]
    },
    {
      nombre: "Blockchain & Otros",
      color: "from-indigo-500 to-blue-500",
      tecnologias: [
        "Web3.js", "Ethereum", "Smart Contracts", 
        "Apache Kafka", "Firebase Auth", "Spring Security"
      ]
    }
  ];

  return (
    <section id="tecnologias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tecnologías
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Estas son las tecnologías y herramientas con las que he trabajado a lo largo de mi experiencia como desarrollador Full Stack.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriasTecnologias.map((categoria, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r ${categoria.color} text-white text-sm font-semibold`}>
                {categoria.nombre}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categoria.tecnologias.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tecnologia;