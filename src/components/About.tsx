import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1593442257276-1895e27c8ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzY3NzcxNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Developer workspace"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              I'm a passionate JavaScript developer with over 5 years of experience building 
              modern web applications. My journey in web development started with a curiosity 
              about how things work on the internet, and it has evolved into a fulfilling career.
            </p>
            <p className="text-lg text-gray-700">
              I specialize in creating responsive, user-friendly interfaces using React, Vue.js, 
              and other cutting-edge technologies. I'm committed to writing clean, maintainable 
              code and following best practices in software development.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me contributing to open-source projects, 
              learning new technologies, or sharing my knowledge through technical blogs 
              and mentoring junior developers.
            </p>
            
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
