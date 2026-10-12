import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Link2, GitBranch, Send, Copy, Check, Loader2, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  const contactInfo = [
    {
      label: 'Email',
      value: 'ahmed.naqeebkhan@gmail.com',
      icon: Mail,
      color: 'from-emerald-500 to-cyan-500',
      copyText: 'Email copied!',
    },
    {
      label: 'Phone',
      value: '+91 9945499841',
      icon: Phone,
      color: 'from-cyan-500 to-blue-500',
      copyText: 'Phone copied!',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/naqeeb-ahmed-khan',
      icon: Link2,
      color: 'from-blue-500 to-indigo-500',
      copyText: 'LinkedIn URL copied!',
      link: 'https://linkedin.com/in/naqeeb-ahmed-khan',
    },
    {
      label: 'GitHub',
      value: 'github.com/naqeeb',
      icon: GitBranch,
      color: 'from-zinc-500 to-zinc-600',
      copyText: 'GitHub URL copied!',
      link: 'https://github.com/naqeeb',
    },
  ]

  return (
    <section id="contact" className="section-container bg-zinc-900/30">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
          Contact
        </span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle mt-4">
          Have a project in mind or want to collaborate? I\'d love to hear from you.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <motion.div className="space-y-6">
          <motion.div
            className="glass p-6 rounded-2xl flex items-center gap-3 mb-6"
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-medium text-sm">Available for New Opportunities</span>
          </motion.div>

          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                className="glass p-5 rounded-xl group hover:border-emerald-500/30 transition-all duration-300 flex items-center gap-4"
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-zinc-950" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-zinc-500 text-sm">{item.label}</p>
                  <p className="text-zinc-100 font-medium truncate">{item.value}</p>
                </div>
                <button
                  onClick={() => handleCopy(item.value, item.copyText)}
                  className="p-2 rounded-lg bg-zinc-800 border border-white/5 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 flex-shrink-0"
                  aria-label={`Copy ${item.label}`}
                >
                  {copied === item.copyText ? (
                    <Check className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="glass p-6 rounded-2xl"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="flex items-center gap-2 text-zinc-100 font-semibold mb-4">
              <MapPin className="w-5 h-5 text-emerald-400" />
              Location
            </h3>
            <p className="text-zinc-400">Bangalore, India</p>
            <p className="text-zinc-500 text-sm mt-1">Open to remote opportunities worldwide</p>
          </motion.div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass p-6 sm:p-8 rounded-2xl space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-field"
                placeholder="Your name"
                required
                disabled={status === 'submitting'}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-field"
                placeholder="your@email.com"
                required
                disabled={status === 'submitting'}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="input-field min-h-[150px] resize-y"
              placeholder="Tell me about your project, opportunity, or just say hi..."
              required
              disabled={status === 'submitting'}
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary w-full sm:w-auto group flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : status === 'success' ? (
              <>
                <Check className="w-5 h-5" />
                Sent Successfully!
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>

          <p className="text-zinc-500 text-sm text-center">
            By submitting this form, you agree to receive email communications from me.
          </p>
        </motion.form>
      </motion.div>
    </section>
  )
}