import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, Star, Zap, Brain, ShoppingCart, ChessBishop, Eye, Languages, Database, Award } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Kaizen — AI Career Advancement Platform',
    description: 'Full-stack AI career platform built using Next.js. Features an ATS resume scanner, LLM API integrations, keyword-gap reporting, and an AI interview coach. Shipped to production with 50,000+ resume scans.',
    longDescription: 'Kaizen is a comprehensive AI-powered career advancement platform that helps job seekers optimize their resumes and prepare for interviews. The platform includes an ATS-compatible resume scanner that analyzes resumes against job descriptions, LLM-powered keyword gap analysis, personalized interview coaching with AI-generated questions and feedback, and a dashboard for tracking application progress.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Prisma', 'PostgreSQL', 'Vercel', 'Stripe'],
    category: 'Featured',
    featured: true,
    stats: { scans: '50K+', users: '10K+', rating: '4.9/5' },
    links: { live: 'https://kaizen.ai', github: 'https://github.com/naqeeb/kaizen' },
    icon: Brain,
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Altlier — Full-Stack E-Commerce Platform',
    description: 'Complete retail application covering dynamic catalogs, live shopping cart modules, and checkout flows deployed on Vercel.',
    longDescription: 'Altlier is a modern, full-stack e-commerce platform built with a focus on performance and user experience. Features include dynamic product catalogs with real-time search and filtering, a responsive shopping cart with persistent state, secure checkout integration with Stripe, order management dashboard, and admin panel for inventory management.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma', 'PostgreSQL', 'Vercel'],
    category: 'Full-Stack',
    featured: false,
    stats: { products: '500+', orders: '1K+', uptime: '99.9%' },
    links: { live: 'https://altlier.com', github: 'https://github.com/naqeeb/altlier' },
    icon: ShoppingCart,
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    id: 3,
    title: 'Chess Move AI',
    description: 'An interactive web application utilizing position evaluation algorithms to suggest optimal moves in real time.',
    longDescription: 'Chess Move AI is an intelligent chess analysis tool that uses minimax algorithm with alpha-beta pruning and position evaluation heuristics to suggest optimal moves. Features include real-time move suggestions, board visualization, move history, difficulty levels, and the ability to play against the AI or analyze existing positions.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chess.js', 'Web Workers', 'Vercel'],
    category: 'AI/ML',
    featured: false,
    stats: { depth: '18 ply', speed: '<100ms', elo: '2200+' },
    links: { live: 'https://chessmoveai.com', github: 'https://github.com/naqeeb/chess-ai' },
    icon: ChessBishop,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 4,
    title: 'Real-Time Gesture Recognition',
    description: '3D CNN network architecture interpreting real-time spatiotemporal hand gestures for touchless interfaces.',
    longDescription: 'A computer vision system that recognizes hand gestures in real-time using 3D Convolutional Neural Networks. The system processes video streams to detect and classify dynamic hand gestures, enabling touchless control interfaces for applications in accessibility, gaming, and industrial control systems.',
    tech: ['Python', 'TensorFlow', 'OpenCV', '3D CNN', 'MediaPipe', 'NumPy', 'OpenGL'],
    category: 'Computer Vision',
    featured: false,
    stats: { accuracy: '94.2%', latency: '<30ms', gestures: '20+' },
    links: { live: null, github: 'https://github.com/naqeeb/gesture-recognition' },
    icon: Eye,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 5,
    title: 'Contextual Language Transformer Models',
    description: 'Enhancing NLP token behaviors for downstream language understanding benchmarks using transformer architectures.',
    longDescription: 'Research project focused on improving contextual understanding in transformer models. Implemented novel attention mechanisms and training objectives to enhance token-level representations for downstream NLP tasks including sentiment analysis, question answering, and named entity recognition.',
    tech: ['PyTorch', 'Transformers', 'HuggingFace', 'Python', 'WandB', 'CUDA'],
    category: 'NLP',
    featured: false,
    stats: { params: '125M', benchmarks: 'GLUE/SQuAD', improvement: '+3.2%' },
    links: { live: null, github: 'https://github.com/naqeeb/transformer-nlp' },
    icon: Languages,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    title: 'AlexNet Image Classification & Blood Bank System',
    description: 'Hybrid framework covering multi-class computer vision workflows alongside structured SQL backend engines.',
    longDescription: 'A dual-project showcase featuring an AlexNet implementation for multi-class image classification with transfer learning capabilities, and a comprehensive blood bank management system with donor tracking, inventory management, and emergency request handling built with Python and SQL.',
    tech: ['Python', 'TensorFlow', 'AlexNet', 'OpenCV', 'SQL', 'SQLite', 'Tkinter', 'Pandas'],
    category: 'Computer Vision',
    featured: false,
    stats: { classes: '1000+', accuracy: '91.5%', records: '10K+' },
    links: { live: null, github: 'https://github.com/naqeeb/alexnet-bloodbank' },
    icon: Database,
    gradient: 'from-red-500 to-pink-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-zinc-900/30">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
          Projects
        </span>
        <h2 className="section-title">Project Showcase</h2>
        <p className="section-subtitle mt-4">
          A curated selection of my engineering projects spanning AI, full-stack development, and computer vision.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const isFeatured = project.featured
  const colSpan = isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'
  const rowSpan = isFeatured ? 'lg:row-span-2' : ''

  return (
    <motion.article
      className={`relative group ${colSpan} ${rowSpan}`}
      style={{ gridColumn: isFeatured ? '1 / -1' : undefined }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.01 }}
    >
      <div className={`relative h-full min-h-[380px] lg:min-h-[420px] glass-strong rounded-2xl p-6 sm:p-8 flex flex-col overflow-hidden border border-white/5 ${isFeatured ? 'lg:grid lg:grid-cols-3' : ''}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.01\'%3E%3Cpath d=\'M0 0h40v40H0V0zm1 1h38v38H1V1z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="relative z-10 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}>
              <project.icon className="w-7 h-7 text-zinc-950" />
            </div>
            <div className="flex items-center gap-2">
              {project.featured && (
                <motion.span
                  className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 flex items-center gap-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring', damping: 15, stiffness: 100 }}
                >
                  <Star className="w-3 h-3" />
                  Featured
                </motion.span>
              )}
              <span className="badge badge-accent">{project.category}</span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3 leading-tight pr-4">
            {project.title}
          </h3>

          <p className="text-zinc-400 leading-relaxed mb-6 flex-1">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, isFeatured ? 8 : 6).map((tech) => (
              <motion.span
                key={tech}
                className="badge"
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > (isFeatured ? 8 : 6) && (
              <motion.span className="badge text-zinc-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                +{project.tech.length - (isFeatured ? 8 : 6)} more
              </motion.span>
            )}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            {Object.entries(project.stats).map(([key, value]) => (
              <motion.div key={key} className="flex items-center gap-1.5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <span className="text-emerald-400 font-bold text-lg">{value}</span>
                <span className="text-zinc-500 text-sm">{key}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-6">
            {project.links.live && (
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-4 py-2 flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-4 py-2 flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitBranch className="w-4 h-4" />
              Source Code
            </motion.a>
          </div>
        </div>

        {isFeatured && (
          <motion.div className="relative z-10 lg:col-span-2 lg:row-span-2 p-8 border-l border-white/5">
            <h4 className="text-xl font-semibold text-zinc-100 mb-4">Project Details</h4>
            <p className="text-zinc-400 leading-relaxed mb-6">{project.longDescription}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="glass p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-emerald-400">{value}</div>
                  <div className="text-zinc-500 text-sm">{key}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="badge badge-accent">{tech}</span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.article>
  )
}