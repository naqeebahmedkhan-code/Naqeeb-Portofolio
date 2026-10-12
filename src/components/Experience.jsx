import { motion } from 'framer-motion'
import { Building2, MapPin, Calendar, Briefcase, GraduationCap, Award } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Media Associate - Ad Operations',
    company: 'Omnicom Group',
    location: 'Bangalore, India',
    period: 'Dec 2025 - Present',
    type: 'work',
    highlights: [
      'Managed end-to-end digital ad operations using CM360 and DV360',
      'Handled ad trafficking, creative setup, tag implementation, and campaign QA',
      'Monitored delivery, pacing, and tracking accuracy across campaigns',
      'Collaborated with internal teams to resolve discrepancies and ensure on-time launches',
    ],
  },
  {
    id: 2,
    role: 'AI & ML with Drone Technology Program',
    company: 'TIHAN, IIT Hyderabad',
    location: 'Hyderabad, India',
    period: 'Jul 2025 - Feb 2026',
    type: 'education',
    highlights: [
      'Hands-on exposure to computer vision pipelines and ML model design',
      'Worked on UAV-based autonomous flight platforms and navigation systems',
      'Developed real-time object detection and tracking for drone applications',
      'Built ML pipelines for aerial imagery processing and analysis',
    ],
  },
  {
    id: 3,
    role: 'AI / Machine Learning Engineer',
    company: 'Rooman Technologies',
    location: 'Bangalore, India',
    period: 'Nov 2024 - Feb 2025',
    type: 'work',
    highlights: [
      'Real-world data analysis, visualization, and ML modeling structures',
      'Built predictive models using TensorFlow, PyTorch, and scikit-learn',
      'Developed NLP pipelines for text classification and sentiment analysis',
      'Created data dashboards with Power BI for stakeholder reporting',
    ],
  },
  {
    id: 4,
    role: 'Technical Intern - Founder\'s Office',
    company: 'KIS Group - Sustainability',
    location: 'Bangalore, India',
    period: 'Dec 2024 - Apr 2025',
    type: 'work',
    highlights: [
      'Designed and tested technical solutions for renewable energy systems',
      'Built custom data automation tools and research pipelines in Python',
      'Developed internal reporting mechanisms and data handling workflows',
      'Conducted technical research for sustainability initiatives',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-zinc-900/30">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
          Experience
        </span>
        <h2 className="section-title">Professional Journey</h2>
        <p className="section-subtitle mt-4">
          A timeline of my professional growth across AI/ML engineering, research, and ad operations.
        </p>
      </motion.div>

      <motion.div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 via-cyan-500/30 to-transparent" />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="absolute left-0 top-2 flex items-center justify-center">
                <motion.div
                  className={`w-4 h-4 rounded-full border-4 ${
                    exp.type === 'work' 
                      ? 'bg-emerald-500 border-emerald-500' 
                      : 'bg-cyan-500 border-cyan-500'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring', damping: 15, stiffness: 100 }}
                />
              </div>

              <motion.div
                className="glass p-6 rounded-2xl hover:border-emerald-500/30 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">{exp.role}</h3>
                    <p className="text-emerald-400 font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-500 text-sm whitespace-nowrap">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    exp.type === 'work'
                      ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                      : 'bg-purple-500/10 border border-purple-500/20 text-purple-400'
                  }`}>
                    {exp.type === 'work' ? <Briefcase className="w-3 h-3 mr-1" /> : <GraduationCap className="w-3 h-3 mr-1" />}
                    {exp.type === 'work' ? 'Professional' : 'Education'}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      className="flex items-start gap-3 text-zinc-300 leading-relaxed"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + hIndex * 0.05 + 0.3 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}