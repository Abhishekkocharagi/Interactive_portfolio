import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Folder, Instagram, Twitter } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Interactive Learning Platform",
      description: "A comprehensive e-learning platform serving test users with progress tracking. Features course access, video lectures, quizzes, and real-time progress tracking for an enhanced learning experience.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/Abhishekkocharagi/Interactive_Learning_platform",
      external: "https://github.com/Abhishekkocharagi/Interactive_Learning_platform"
    },
    {
      title: "Zerodha Stock Market Clone",
      description: "A full-stack stock trading simulation platform inspired by Zerodha. Enables users to view real-time stock prices, manage portfolios, and execute simulated buy/sell orders with a complete MERN stack implementation.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/Abhishekkocharagi",
      external: "https://github.com/Abhishekkocharagi"
    },
    {
      title: "Interactive Portfolio Website",
      description: "A responsive and interactive portfolio website showcasing projects, skills, and achievements. Features smooth navigation, subtle animations, and a contact form built with modern web technologies.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/Abhishekkocharagi/Interactive_portfolio",
      external: "https://github.com/Abhishekkocharagi/Interactive_portfolio"
    }
  ];

  const otherProjects = [
    {
      title: "Algorithm Visualizer",
      description: "Interactive tool for visualizing sorting and searching algorithms to help students understand data structures better.",
      tech: ["JavaScript", "HTML", "CSS"]
    },
    {
      title: "Task Management App",
      description: "A simple yet effective task manager with priority levels and deadline tracking functionality.",
      tech: ["React", "Bootstrap"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with forecasts and location-based weather updates.",
      tech: ["JavaScript", "API Integration"]
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "C"],
    "Web Development": ["HTML", "CSS", "React.js", "Bootstrap"],
    "Tools & Technologies": ["Git", "GitHub", "VS Code", "MongoDB", "Express.js", "Node.js"]
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <div className="w-12 h-12 border-2 border-cyan-400 rounded flex items-center justify-center">
                <span className="text-cyan-400 font-mono text-xl">A</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-cyan-400 transition-colors">
                <span className="text-cyan-400 font-mono mr-2">01.</span>About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-sm hover:text-cyan-400 transition-colors">
                <span className="text-cyan-400 font-mono mr-2">02.</span>Experience
              </button>
              <button onClick={() => scrollToSection('work')} className="text-sm hover:text-cyan-400 transition-colors">
                <span className="text-cyan-400 font-mono mr-2">03.</span>Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-cyan-400 transition-colors">
                <span className="text-cyan-400 font-mono mr-2">04.</span>Contact
              </button>
              <a 
                href="AbhishekKocharagi_Resume.pdf" 
                className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-400/10 transition-all text-sm"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-8"
            >
              <span className={`w-full h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-cyan-400">
                <span className="text-cyan-400 font-mono">01.</span> About
              </button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left hover:text-cyan-400">
                <span className="text-cyan-400 font-mono">02.</span> Experience
              </button>
              <button onClick={() => scrollToSection('work')} className="block w-full text-left hover:text-cyan-400">
                <span className="text-cyan-400 font-mono">03.</span> Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-cyan-400">
                <span className="text-cyan-400 font-mono">04.</span> Contact
              </button>
              <a href="AbhishekKocharagi_Resume.pdf" className="block border border-cyan-400 text-cyan-400 px-4 py-2 rounded text-center">
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Social Links - Left Side */}
      <div className="hidden lg:flex fixed left-8 xl:left-12 bottom-0 flex-col items-center gap-6 z-10">
        <a href="https://github.com/Abhishekkocharagi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <Github size={22} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <Instagram size={22} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <Twitter size={22} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <Linkedin size={22} />
        </a>
        <a href="tel:+916364212971" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <Phone size={22} />
        </a>
        <div className="w-px h-24 bg-slate-400"></div>
      </div>

      {/* Email - Right Side */}
      <div className="hidden lg:flex fixed right-8 xl:right-12 bottom-0 flex-col items-center gap-6 z-10">
        <a 
          href="mailto:abhishekkocharagi@gmail.com" 
          className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all text-sm tracking-wide font-mono"
          style={{ writingMode: 'vertical-rl' }}
        >
          abhishekkocharagi@gmail.com
        </a>
        <div className="w-px h-24 bg-slate-400"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-cyan-400 font-mono mb-6">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4">Abhishek Kocharagi.</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6">I build things for the web.</h2>
          <p className="text-lg text-slate-400 max-w-2xl mb-12">
            I'm a Computer Science Engineering student specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products and learning cutting-edge technologies 
            to create impactful solutions.
          </p>
          <a 
            href="#work" 
            className="inline-block border border-cyan-400 text-cyan-400 px-8 py-4 rounded hover:bg-cyan-400/10 transition-all"
          >
            Check out my projects!
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 lg:px-24 max-w-7xl mx-auto py-24">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-slate-200 mb-12 flex items-center">
            <span className="text-cyan-400 font-mono mr-4">01.</span>
            About Me
            <div className="ml-8 h-px bg-slate-700 flex-1 max-w-xs"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="space-y-4 text-slate-400">
                <p>
                  Hello! I'm Abhishek, a motivated Computer Science Engineering student based in Belagavi, India. 
                  I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                </p>
                <p>
                  My interest in web development started back in my first year when I tried to build my first website — 
                  turns out understanding HTML, CSS, and JavaScript opened up an entire world of possibilities!
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege to work on various academic and personal projects. 
                  My main focus these days is building accessible, inclusive products and digital experiences using modern technologies.
                </p>
                <p>
                  I recently completed certifications in Data Structures & Algorithms and Python, and I'm currently pursuing my B.E. 
                  in Computer Science Engineering at Jain College of Engineering with a CGPA of 8.12.
                </p>
                <p>Here are a few technologies I've been working with recently:</p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {["JavaScript (ES6+)", "React", "Node.js", "MongoDB", "Python", "Java", "HTML & CSS", "Bootstrap"].map((tech, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-cyan-400">▹</span>
                      <span className="text-sm font-mono">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative group w-64 h-64">
                <div className="absolute inset-0 border-2 border-cyan-400 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                <div className="relative w-full h-full bg-cyan-400/20 rounded overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-cyan-400">AK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 lg:px-24 max-w-7xl mx-auto py-24">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-slate-200 mb-12 flex items-center">
            <span className="text-cyan-400 font-mono mr-4">02.</span>
            Education & Certifications
            <div className="ml-8 h-px bg-slate-700 flex-1 max-w-xs"></div>
          </h2>

          <div className="max-w-3xl">
            <div className="border-l-2 border-slate-700 pl-8 space-y-12">
              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold text-slate-200 mb-2">
                  B.E. in Computer Science Engineering
                  <span className="text-cyan-400"> @ Jain College of Engineering</span>
                </h3>
                <p className="text-sm text-slate-400 mb-4 font-mono">2022 - 2026</p>
                <div className="space-y-2 text-slate-400">
                  <p className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Maintaining a CGPA of 8.12 with strong focus on computer science fundamentals</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Actively involved in project-based learning and practical application of theoretical concepts</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Developed multiple full-stack web applications as part of academic curriculum</span>
                  </p>
                </div>
              </div>

              {/* Class XII */}
              <div>
                <h3 className="text-xl font-semibold text-slate-200 mb-2">
                  Class XII (PCMB)
                  <span className="text-cyan-400"> @ MDR PU Science College</span>
                </h3>
                <p className="text-sm text-slate-400 mb-4 font-mono">2020 - 2022</p>
                <div className="space-y-2 text-slate-400">
                  <p className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Achieved 90.16% with strong foundation in Physics, Chemistry, Mathematics, and Biology</span>
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-semibold text-slate-200 mb-2">Certifications</h3>
                <div className="space-y-3 text-slate-400 mt-4">
                  <p className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span><strong>Data Structures & Algorithms in Java</strong> - Apna College</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span><strong>Python for Beginners</strong> - Simplilearn Skillup</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center px-6 lg:px-24 max-w-7xl mx-auto py-24">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-slate-200 mb-12 flex items-center">
            <span className="text-cyan-400 font-mono mr-4">03.</span>
            Some Things I've Built
            <div className="ml-8 h-px bg-slate-700 flex-1 max-w-xs"></div>
          </h2>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={index} className={`grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''}`}>
                  <div className="relative bg-slate-800/50 rounded overflow-hidden h-80">
                    <div className="absolute inset-0 bg-cyan-400/10 hover:bg-transparent transition-all"></div>
                    <div className="w-full h-full flex items-center justify-center">
                      <Folder size={80} className="text-cyan-400/30" />
                    </div>
                  </div>
                </div>
                
                <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''} z-10`}>
                  <p className="text-cyan-400 font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-slate-200 mb-4">{project.title}</h3>
                  <div className="bg-slate-800 p-6 rounded shadow-2xl">
                    <p className="text-slate-400">{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-3 mt-4 font-mono text-sm text-slate-400 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  <div className={`flex gap-4 mt-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400">
                      <Github size={20} />
                    </a>
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="mt-32">
            <h3 className="text-2xl font-bold text-slate-200 mb-12 text-center">Other Noteworthy Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded hover:-translate-y-2 transition-transform">
                  <div className="flex justify-between items-start mb-8">
                    <Folder className="text-cyan-400" size={40} />
                    <div className="flex gap-3">
                      <a href="https://github.com/Abhishekkocharagi" className="text-slate-400 hover:text-cyan-400">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-200 mb-3">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-400">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 lg:px-24 max-w-3xl mx-auto py-24 text-center">
        <div className="w-full">
          <p className="text-cyan-400 font-mono mb-4">04. What's Next?</p>
          <h2 className="text-5xl font-bold text-slate-200 mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-slate-400">
              <Mail className="inline mr-2" size={20} />
              <a href="mailto:abhishekkocharagi@gmail.com" className="text-cyan-400 hover:underline">
                abhishekkocharagi@gmail.com
              </a>
            </p>
            <p className="text-slate-400">
              <Phone className="inline mr-2" size={20} />
              <a href="tel:+916364212971" className="text-cyan-400 hover:underline">
                +91 6364212971
              </a>
            </p>
          </div>
          <a 
            href="mailto:abhishekkocharagi@gmail.com" 
            className="inline-block border border-cyan-400 text-cyan-400 px-8 py-4 rounded hover:bg-cyan-400/10 transition-all"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 text-sm font-mono">
        <div className="space-y-2">
          <p>Designed & Built by Abhishek Kocharagi</p>
          <div className="flex justify-center gap-6 md:hidden mt-4">
            <a href="https://github.com/Abhishekkocharagi" className="hover:text-cyan-400">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com" className="hover:text-cyan-400">
              <Linkedin size={20} />
            </a>
            <a href="mailto:abhishekkocharagi@gmail.com" className="hover:text-cyan-400">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;