import { motion } from 'framer-motion'
import { Mail, Phone, Link2, GitBranch, Heart, Code, Brain } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-zinc-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-bold text-zinc-100">
                <span className="text-gradient">N</span>aqeeb
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              AI/ML Engineer & Full-Stack Developer building intelligent systems and exceptional digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ahmed.naqeebkhan@gmail.com"
                className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span>ahmed.naqeebkhan@gmail.com</span>
              </a>
              <a
                href="tel:+919945499841"
                className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group"
              >
                <Phone className="w-5 h-5" />
                <span>+91 9945499841</span>
              </a>
              <a
                href="https://linkedin.com/in/naqeeb-ahmed-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group"
              >
                <Link2 className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/naqeeb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group"
              >
                <GitBranch className="w-5 h-5" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-zinc-400 hover:text-emerald-400 transition-colors">Home</a>
              <a href="#about" className="text-zinc-400 hover:text-emerald-400 transition-colors">About</a>
              <a href="#experience" className="text-zinc-400 hover:text-emerald-400 transition-colors">Experience</a>
              <a href="#skills" className="text-zinc-400 hover:text-emerald-400 transition-colors">Skills</a>
              <a href="#projects" className="text-zinc-400 hover:text-emerald-400 transition-colors">Projects</a>
              <a href="#education" className="text-zinc-400 hover:text-emerald-400 transition-colors">Education</a>
              <a href="#contact" className="text-zinc-400 hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-zinc-500 text-sm">
            © {currentYear} Naqeeb Ahmed Khan. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-zinc-500 text-sm">Built with</span>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-zinc-400 text-sm">React</span>
            </div>
            <div className="flex items-center gap-1">
              <Code className="w-4 h-4 text-cyan-400" />
              <span className="text-zinc-400 text-sm">Tailwind</span>
            </div>
            <div className="flex items-center gap-1">
              <Brain className="w-4 h-4 text-emerald-400" />
              <span className="text-zinc-400 text-sm">Framer Motion</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}