import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">

            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        Available for Hire
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-bold text-slate-100 leading-tight tracking-tight mb-6">
                        Engineering <br />
                        <span className="text-gradient">Digital Reality</span>
                    </h1>

                    <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                        I am a <span className="text-slate-200 font-semibold">Computer Engineer</span> specializing in building exceptional digital experiences. I merge clean code with modern design.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button to="/projects" className="bg-blue-600 hover:bg-blue-500 text-white border-0">
                            View Projects
                        </Button>
                        <Button to="/contact" variant="outline" className="border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 hover:bg-transparent">
                            Contact Me
                        </Button>
                    </div>

                    {/* Social Proof / Tech Stack Icons */}
                    <div className="mt-10 flex items-center gap-6 text-slate-500">
                        <span className="text-sm font-mono uppercase tracking-widest">Tech Stack</span>
                        <div className="h-px w-12 bg-slate-800"></div>
                        <div className="flex gap-4 text-2xl">
                            <FaCode className="hover:text-blue-400 transition-colors" />
                            <FaGithub className="hover:text-white transition-colors" />
                            <FaLinkedin className="hover:text-blue-500 transition-colors" />
                        </div>
                    </div>
                </motion.div>

                {/* Right: Visual Element (Abstract Code Card) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    <div className="relative z-10 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-auto text-xs text-slate-500 font-mono">Developer.jsx</span>
                        </div>
                        <div className="font-mono text-sm space-y-2">
                            <div className="text-purple-400">const <span className="text-blue-400">engineer</span> = <span className="text-yellow-300">{"{"}</span></div>
                            <div className="pl-4 text-slate-300">name: <span className="text-green-400">"Hem Joshi"</span>,</div>
                            <div className="pl-4 text-slate-300">role: <span className="text-green-400">"Full Stack Developer"</span>,</div>
                            <div className="pl-4 text-slate-300">skills: <span className="text-yellow-300">[</span></div>
                            <div className="pl-8 text-green-400">"React", "Node.js", "System Design"</div>
                            <div className="pl-4 text-yellow-300">],</div>
                            <div className="pl-4 text-slate-300">hardWorker: <span className="text-orange-400">true</span></div>
                            <div className="text-yellow-300">{"}"};</div>
                        </div>
                    </div>

                    {/* Decorative Elements behind card */}
                    <div className="absolute -top-4 -right-4 w-full h-full border-2 border-slate-800 rounded-2xl -z-10" />
                    <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-slate-800 rounded-2xl -z-10" />
                </motion.div>

            </div>
        </div>
    );
};

export default Home;