import Navbar from "./sections/Navbar";
import HeroText from "./sections/HeroText";
import Tecnologia from "./sections/Tecnologia";
import Experiencia from "./sections/Experiencia";

const App = () => {
  return (
    <div className="relative">
      {/* Navegación */}
      <Navbar />

      {/* Secciones */}
      <section id="inicio">
        <HeroText />
      </section>
      
      {/* Sección de tecnologías */}
      <Tecnologia />
      
      {/* Sección de experiencia */}
      <Experiencia />
      
      {/* Sección de proyectos */}
      <section id="proyectos" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Proyectos</h2>
          <p className="text-center text-gray-600">Contenido de proyectos...</p>
        </div>
      </section>
      
      {/* Sección de contacto */}
      <section id="contacto" className="min-h-screen bg-white flex items-center justify-center">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contacto</h2>
          <p className="text-center text-gray-600">Contenido de contacto...</p>
        </div>
      </section>
    </div>
  );
};

export default App;