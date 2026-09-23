import { useState } from 'react'
import { motion } from 'framer-motion'

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const SendIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
)

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.77 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.46 5.94c-.77.35-1.6.58-2.46.68a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.85-2.72 1.05a4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.71 4.24 4.24 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98A8.6 8.6 0 0 1 2 18.58a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.19-6.53 12.19-12.2 0-.19 0-.37-.01-.56a8.7 8.7 0 0 0 2.13-2.2 8.53 8.53 0 0 1-2.41.66Z" />
  </svg>
)

const FileTextIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
    <path d="M14 2v6h6" />
    <path d="M10 12H8" />
    <path d="M16 16H8" />
    <path d="M16 20H8" />
  </svg>
)

const socials = [
  { icon: GithubIcon, href: '#', label: 'GitHub' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
  { icon: MailIcon, href: '#', label: 'Email' },
  { icon: FileTextIcon, href: '#', label: 'Resume' },
]

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-cyan-400/15 bg-white/[0.03] p-6 sm:p-8 space-y-5 backdrop-blur-md"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full rounded-2xl border border-cyan-400/15 bg-white/5 px-5 py-4 text-white placeholder-white/40 outline-none transition-colors duration-300 focus:border-cyan-300/50 focus:bg-white/[0.07]"
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full rounded-2xl border border-cyan-400/15 bg-white/5 px-5 py-4 text-white placeholder-white/40 outline-none transition-colors duration-300 focus:border-cyan-300/50 focus:bg-white/[0.07]"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows={6}
          className="w-full resize-y rounded-2xl border border-cyan-400/15 bg-white/5 px-5 py-4 text-white placeholder-white/40 outline-none transition-colors duration-300 focus:border-cyan-300/50 focus:bg-white/[0.07]"
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400/90 py-4 font-medium text-[#0A0F14] transition-colors duration-300 hover:bg-cyan-300"
        >
          <SendIcon className="h-[18px] w-[18px]" />
          Send Message
        </button>
      </motion.form>

      <div className="mt-10 flex flex-col items-center gap-5">
        <span className="text-sm text-white/50">Or find me on</span>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/15 bg-white/5 text-white transition-colors duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactForm