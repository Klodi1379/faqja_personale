const About = () => {
  return (
    <section id="about" className="section bg-light dark:bg-dark/90">
      <div className="container mx-auto p-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate software developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I enjoy creating
              seamless, user-friendly experiences that solve real-world problems.
            </p>

            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I believe in writing clean, maintainable code and following best practices.
              My development philosophy centers around creating solutions that are not only
              functional but also scalable, secure, and optimized for performance.
            </p>

            <h3 className="text-2xl font-bold mb-4">What I Value</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white dark:bg-dark p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-primary mb-2">Clean Code</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Writing readable, maintainable, and well-structured code.
                </p>
              </div>
              <div className="bg-white dark:bg-dark p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-primary mb-2">User Experience</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Creating intuitive and enjoyable interfaces for users.
                </p>
              </div>
              <div className="bg-white dark:bg-dark p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-primary mb-2">Performance</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Optimizing for speed and efficiency in all applications.
                </p>
              </div>
              <div className="bg-white dark:bg-dark p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-primary mb-2">Continuous Learning</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Always expanding my knowledge and staying current with technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600 text-lg">About Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
