import { motion } from 'framer-motion'
import { Brain, Eye, Code, Database, Users, Target } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Deep Learning & NLP',
    description: 'Neural network structures and language models for advanced AI applications',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Object detection, gesture tracking, and spatial data processing with 3D CNNs',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Code,
    title: 'Full-Stack Engineering',
    description: 'Shipping scalable, production-ready web apps with modern tech stacks',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Database,
    title: 'Data Pipelines',
    description: 'API integrations, analytics infrastructure, and business intelligence solutions',
    color: 'from-purple-500 to-purple-600',
  },
]

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '6+', label: 'Projects Delivered' },
  { value: '4', label: 'Core Domains' },
  { value: '50K+', label: 'Resume Scans' },
]

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
          About Me
        </span>
        <h2 className="section-title">Professional Summary</h2>
        <p className="section-subtitle mt-4">
          Proficient in Python, TensorFlow, PyTorch, OpenCV, and SQL, with practical software delivery experience spanning API integration, data pipelines, and end-to-end product development.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="space-y-6">
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-zinc-100 mb-4">What I Do</h3>
            <p className="text-zinc-400 leading-relaxed">
              I specialize in building intelligent systems that bridge the gap between cutting-edge AI research and production-ready applications. My expertise spans the full spectrum of machine learning - from designing neural architectures for computer vision and NLP to deploying scalable ML pipelines in cloud environments.
            </p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-zinc-100 mb-4">Current Focus</h3>
            <p className="text-zinc-400 leading-relaxed">
              Currently working as a Media Associate in Ad Operations at Omnicom Group, managing end-to-end digital ad trafficking using CM360 and DV360. Simultaneously building Kaizen - an AI-powered career advancement platform with ATS resume scanning, LLM integrations, and AI interview coaching.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass p-5 rounded-2xl group hover:border-emerald-500/30 transition-all duration-300"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.15 + index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-zinc-950" />
              </div>
              <h4 className="font-semibold text-zinc-100 mb-2">{feature.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="glass p-6 rounded-2xl text-center group hover:border-emerald-500/30 transition-all duration-300"
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <motion.div
              className="text-3xl sm:text-4xl font-bold text-gradient mb-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ delay: 1 + index * 0.2, duration: 2, repeat: Infinity }}
            >
              {stat.value}
            </motion.div>
            <p className="text-zinc-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}