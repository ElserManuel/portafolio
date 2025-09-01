import Navbar from "./sections/Navbar";
import HeroText from "./sections/HeroText";
import Tecnologia from "./sections/Tecnologia";
import Experiencia from "./sections/Experiencia";
import Proyectos from "./sections/Proyectos";
import Contacto from "./sections/Contacto";

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
      <Proyectos />
      
      {/* Sección de contacto */}
      <Contacto />
    </div>
  );
};

export default App;