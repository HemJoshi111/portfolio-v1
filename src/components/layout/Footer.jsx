import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-slate-100 font-mono">
              Joshi<span className="text-blue-500">.dev</span>
            </Link>
            <p className="mt-4 text-slate-400 max-w-xs">
              A computer engineer building scalable, user-centric web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link to="/skills" className="text-slate-400 hover:text-blue-400 transition-colors">Skills</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/HemJoshi111" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-xl">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/hem-joshii" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors text-xl">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/I.am.HemJoshi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors text-xl">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/hemzocee" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Hem Joshi. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-1">
            Built with <FaHeart className="text-red-500/50" /> By Hem Joshi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;