import { motion } from 'framer-motion'
import { Code, Brain, Layers, Database, Globe, Terminal, Zap, Shield } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages & Core',
    icon: Code,
    color: 'from-emerald-500 to-emerald-600',
    skills: ['Python', 'SQL', 'OOP', 'Data Structures & Algorithms', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'ML/AI',
    icon: Brain,
    color: 'from-cyan-500 to-cyan-600',
    skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'Deep Learning', 'NLP', 'Computer Vision', 'Model Lifecycle Management', 'Transformers', '3D CNNs'],
  },
  {
    title: 'Software Engineering',
    icon: Layers,
    color: 'from-blue-500 to-blue-600',
    skills: ['API Integration', 'Full-Stack Web Development', 'Git Version Control', 'Project Documentation', 'REST APIs', 'GraphQL', 'Docker', 'CI/CD'],
  },
  {
    title: 'Data & Platforms',
    icon: Database,
    color: 'from-purple-500 to-purple-600',
    skills: ['Power BI', 'DBMS', 'Computer Networks', 'CM360', 'DV360', 'AWS', 'GCP', 'PostgreSQL', 'MongoDB'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
          Skills
        </span>
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle mt-4">
          A comprehensive breakdown of my technical skillset across multiple domains.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            className="glass p-6 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 + catIndex * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-zinc-950" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className="badge group-hover:border-emerald-400/50 group-hover:text-emerald-400"
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.2 + catIndex * 0.1 + skillIndex * 0.03 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-zinc-100 text-center mb-8">Certifications & Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Goldman Sachs Software Engineering Virtual Internship',
              issuer: 'Forage',
              desc: 'Practical exposure to real-world development tasks including API integration and project documentation.',
              icon: Award,
              color: 'from-amber-500 to-amber-600',
            },
            {
              title: 'AWS Simplilearn - Planning a Machine Learning',
              issuer: 'AWS/Simplilearn',
              desc: 'Completed end-to-end ML workflow, requirement gathering, and model lifecycle management training.',
              icon: Shield,
              color: 'from-orange-500 to-orange-600',
            },
            {
              title: 'Minor Degree in AI and Machine Learning',
              issuer: 'NPTEL and VTU-Online',
              desc: 'Strong academic performance showcasing solid grasp of core AI and ML principles.',
              icon: Zap,
              color: 'from-emerald-500 to-emerald-600',
            },
          ].map((cert, index) => (
            <motion.div
              key={cert.title}
              className="glass p-6 rounded-2xl hover:border-emerald-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0`}>
                  <cert.icon className="w-6 h-6 text-zinc-950" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-zinc-100 mb-1">{cert.title}</h4>
                  <p className="text-emerald-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-zinc-400 text-sm">{cert.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}