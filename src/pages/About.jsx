import { motion } from 'framer-motion';
import { FaGraduationCap, FaServer, FaCode, FaLaptopCode, FaFileDownload } from 'react-icons/fa';
import Button from '../components/common/Button';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left: Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative lg:sticky lg:top-24"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm aspect-[4/5] shadow-2xl">
            <img
              src="https://res.cloudinary.com/dfm0chulq/image/upload/v1764179055/jmczfl2hrhpyxrzqrqqs.png"
              alt="Hem Raj Joshi"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
              <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-lg">
                <p className="text-slate-400 text-xs font-mono mb-1">CURRENTLY</p>
                <p className="text-green-400 font-semibold flex items-center gap-2 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Open to Full Stack Roles
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 w-full h-full border border-slate-800/50 rounded-2xl -z-10 bg-slate-900/30 backdrop-blur-sm" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-cyan-400"></span>
              About Me
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6 leading-tight">
              Engineering Logic Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Creative Design</span>
            </h1>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a <strong className="text-slate-200">Computer Engineering graduate</strong> from Pokhara University, Nepal with a passion for building robust, scalable web applications. My background isn't just in coding—it's in engineering systems that work efficiently and reliably.
              </p>
              <p>
                While I specialize in the <strong className="text-slate-200">MERN Stack</strong> (MongoDB, Express, React, Node.js), my foundation is built on deep computer science principles—Data Structures, Algorithms, OOP, and System Design. This allows me to write code that is not only functional but also optimized and maintainable.
              </p>
            </div>
          </motion.div>

          {/* Education & Core Competencies Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-colors group">
              <FaGraduationCap className="text-3xl text-cyan-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-slate-200 font-bold mb-1">B.E. Computer Engineering</h3>
              <p className="text-sm text-slate-500">Pokhara University (3.35 CGPA)</p>
              <p className="text-xs text-slate-600 mt-2 font-mono">2021 - 2025</p>
            </div>

            <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-purple-500/30 transition-colors group">
              <FaServer className="text-3xl text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-slate-200 font-bold mb-1">Backend Architecture</h3>
              <p className="text-sm text-slate-500">REST APIs, JWT, Database Design</p>
              <p className="text-xs text-slate-600 mt-2 font-mono">Node.js & Express</p>
            </div>

            <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-pink-500/30 transition-colors group">
              <FaCode className="text-3xl text-pink-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-slate-200 font-bold mb-1">Frontend Engineering</h3>
              <p className="text-sm text-slate-500">Responsive, Interactive UIs</p>
              <p className="text-xs text-slate-600 mt-2 font-mono">React, Redux & Tailwind</p>
            </div>

            <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-orange-500/30 transition-colors group">
              <FaLaptopCode className="text-3xl text-orange-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-slate-200 font-bold mb-1">Problem Solving</h3>
              <p className="text-sm text-slate-500">DSA & Logical Optimization</p>
              <p className="text-xs text-slate-600 mt-2 font-mono">Java & C++ Roots</p>
            </div>
          </motion.div>

          {/* Core Values / What I Bring */}
          <motion.div variants={itemVariants} className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 rounded-l-xl" />
            <h3 className="text-xl font-bold text-slate-200 mb-3">What I Bring to the Table</h3>
            <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span>A deep understanding of the <strong>Software Development Lifecycle (SDLC)</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span>Experience managing projects with <strong>Agile/Scrum</strong> methodologies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span>A commitment to writing clean, readable, and well-documented code.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span>Enthusiasm for <strong>Open Source</strong> collaboration and continuous learning.</span>
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <Button to="/contact" variant="primary" className="shadow-lg shadow-cyan-500/20">
              Let's Connect
            </Button>

            <Button
              href="/resume.pdf"
              variant="outline"
              download="Hem_Joshi_Resume.pdf"
              className="gap-2 group"
            >
              <FaFileDownload className="group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;