import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">GORSE</div>

        {/* Links (desktop) */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <button 
              onClick={() => scrollToSection("inicio")}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection("experiencia")}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Experiencia
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection("proyectos")}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Proyectos
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection("contacto")}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Contacto
            </button>
          </li>
        </ul>

        {/* Botón menú (mobile) */}
        <button
          className="md:hidden text-gray-700 z-60"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú desplegable (mobile) */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out transform ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col items-center justify-center h-full gap-10 text-2xl font-medium">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection("experiencia")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Experiencia
            </button>
            <button 
              onClick={() => scrollToSection("proyectos")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection("contacto")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;