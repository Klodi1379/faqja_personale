import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-light to-white dark:from-dark dark:to-dark/80">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">Hello, I&apos;m</span> <br />
              <span className="text-foreground">Your Name</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Software Developer specializing in Web Application Development
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
              I build modern, responsive, and user-friendly web applications with a focus on clean code, performance, and exceptional user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link href="/#contact" className="btn btn-outline">
                Contact Me
              </Link>
              <a
                href="/resume.pdf"
                className="btn bg-dark text-white hover:bg-dark/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600 text-lg">Your Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
