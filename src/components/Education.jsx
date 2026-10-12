import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Target, CheckCircle } from 'lucide-react'

const education = [
  {
    degree: 'B.E. in Artificial Intelligence and Machine Learning',
    institution: 'KNSIT, Bangalore',
    period: 'Dec 2021 - June 2025',
    cgpa: '8.08/10',
    coursework: [
      'Data Science',
      'Machine Learning',
      'Deep Learning',
      'Design and Analysis of Algorithms',
      'Principles of AI',
      'Data Structures and its Applications',
      'Advanced AI and ML',
      'Computer Vision',
      'Natural Language Processing',
    ],
    achievements: [
      'Graduated with distinction (CGPA: 8.08/10)',
      'Minor Degree in AI and Machine Learning (NPTEL/VTU)',
      'Goldman Sachs Software Engineering Virtual Internship',
      'AWS Simplilearn - Planning a Machine Learning Course',
    ],
  },
  {
    degree: 'AI and ML with Drone Technology Program',
    institution: 'TIHAN, IIT Hyderabad',
    period: 'Jul 2025 - Feb 2026',
    cgpa: null,
    coursework: [
      'Computer Vision for Autonomous Systems',
      'ML Pipeline Design for Edge Devices',
      'UAV Navigation and Control Systems',
      'Real-time Object Detection and Tracking',
      'Sensor Fusion for Autonomous Navigation',
    ],
    achievements: [
      'Hands-on exposure to computer vision pipelines',
      'ML pipeline designs for UAV-based systems',
      'Autonomous flight platform development',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="section-container">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
          Education
        </span>
        <h2 className="section-title">Academic Background</h2>
        <p className="section-subtitle mt-4">
          Formal education and specialized training in AI, Machine Learning, and Computer Science.
        </p>
      </motion.div>

      <motion.div
        className="space-y-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            className="glass p-6 sm:p-8 rounded-2xl hover:border-emerald-500/30 transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-zinc-950" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">{edu.degree}</h3>
                  <p className="text-emerald-400 font-medium mt-1">{edu.institution}</p>
                </div>
              </div>
              <div className="flex flex-col items-end sm:items-end gap-2 text-right">
                <span className="px-4 py-2 rounded-xl bg-zinc-800 border border-white/5 text-zinc-300 text-sm font-medium">
                  <span className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    {edu.period}
                  </span>
                </span>
                {edu.cgpa && (
                  <span className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold">
                    CGPA: {edu.cgpa}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="flex items-center gap-2 text-zinc-100 font-semibold mb-4">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <motion.span
                      key={course}
                      className="badge"
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.2 }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-zinc-100 font-semibold mb-4">
                  <Award className="w-5 h-5 text-amber-400" />
                  Achievements & Highlights
                </h4>
                <ul className="space-y-3">
                  {edu.achievements.map((achievement, aIndex) => (
                    <motion.li
                      key={aIndex}
                      className="flex items-start gap-3 text-zinc-300 leading-relaxed"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + aIndex * 0.05 }}
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}