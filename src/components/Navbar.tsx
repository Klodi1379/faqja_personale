"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          YourName
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, 'skills')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, 'experience')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="btn btn-primary"
          >
            Contact Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-dark shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={(e) => scrollToSection(e, 'about')}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={(e) => scrollToSection(e, 'projects')}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={(e) => scrollToSection(e, 'skills')}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={(e) => scrollToSection(e, 'experience')}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="btn btn-primary w-full text-center"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              Contact Me
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
