import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Button from '../components/common/Button';

const Contact = () => {

  const [state, handleSubmit] = useForm("mnnkgdnr");

  if (state.succeeded) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center max-w-md"
        >
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaPaperPlane className="text-green-500 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Message Sent!</h2>
          <p className="text-slate-400 mb-6">
            Thanks for reaching out. I'll get back to you as soon as possible.
          </p>
          <Button to="/" variant="primary">Back to Home</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Let's Build Something <br />
            <span className="text-gradient">Extraordinary</span>
          </h1>
          <p className="text-slate-400 text-lg mb-12">
            Whether you have a question, a project proposal, or just want to discuss the latest in tech, my inbox is always open.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold text-lg">Email</h3>
                <a href="mailto:contact@hemjoshi.com.np" className="text-slate-400 hover:text-blue-400 transition-colors">
                  contact@hemjoshi.com.np
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <FaLinkedin size={24} />
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold text-lg">LinkedIn</h3>
                <a href="https://linkedin.com/in/hem-joshii" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-lg text-white">
                <FaGithub size={24} />
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold text-lg">GitHub</h3>
                <a href="https://github.com/HemJoshi111" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  Check my Repositories
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold text-lg">Kathmandu, Nepal</h3>
                <p className="text-slate-400">
                  Available for Remote Work
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="john@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Project Discussion"
              />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;