import { motion } from 'framer-motion';
import { FaGraduationCap, FaServer, FaCodeBranch } from 'react-icons/fa';
import Button from '../components/common/Button';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">

            <img
              src="https://res.cloudinary.com/dfm0chulq/image/upload/v1764179055/jmczfl2hrhpyxrzqrqqs.png"
              alt="Profile"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />

            {/* Overlay Info Card */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 to-transparent">
              <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800">
                <p className="text-slate-400 text-sm font-mono">Current Status</p>
                <p className="text-green-400 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Open to Opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Abstract Shapes */}
          <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-slate-800 rounded-2xl -z-10" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">About Me</h2>
          <h1 className="text-4xl font-bold text-slate-100 mb-6">
            Bridging <span className="text-gradient">Systems Engineering</span> & Modern Web
          </h1>

          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              I am a <span className="text-slate-200 font-semibold">Computer Engineering graduate</span> with a strong foundation in software design, systems architecture, and data structures. Unlike many developers who focus solely on syntax, I focus on the underlying logic and efficiency of the code I write.
            </p>
            <p>
              My journey started with low-level concepts—OOP in Java, DBMS, and Operating Systems. Today, I apply that rigorous engineering mindset to the <span className="text-slate-200">MERN Stack</span>, building scalable, user-centric web applications.
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-8">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-colors">
              <FaGraduationCap className="text-3xl text-blue-500 mb-3" />
              <h3 className="text-slate-200 font-bold">Engineering Degree</h3>
              <p className="text-sm text-slate-500">Comprehensive CS Foundation</p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-colors">
              <FaServer className="text-3xl text-purple-500 mb-3" />
              <h3 className="text-slate-200 font-bold">System Design</h3>
              <p className="text-sm text-slate-500">Scalable Architecture Focus</p>
            </div>
          </div>

          <Button to="/contact" variant="primary">
            Let's Connect
          </Button>
        </motion.div>

      </div>
    </div>
  );
};

export default About;