
import { motion } from 'framer-motion'
import { useState } from 'react'
const SCRIPT_URL = import.meta.env.VITE_CONTACT_API_URL

const MailIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const SendIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
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
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
    <path d="M14 2v6h6" />
    <path d="M10 12H8" />
    <path d="M16 16H8" />
    <path d="M16 20H8" />
  </svg>
)

function Contact() {
  const email = 'aastha.shanker2006@gmail.com'

  const [submitStatus, setSubmitStatus] = useState('idle')


  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

 const handleSubmit = async (e) => {
  e.preventDefault()

  setSubmitStatus('sending')

  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(form),
    })

    setSubmitStatus('sent')

    setForm({
      name: '',
      email: '',
      message: '',
    })

    setTimeout(() => {
      setSubmitStatus('idle')
    }, 1800)

  } catch (error) {
    console.error('Error:', error)
    setSubmitStatus('error')

    setTimeout(() => {
      setSubmitStatus('idle')
    }, 2000)
  }
}
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8 sm:py-20 lg:translate-x-20 lg:translate-y-60 lg:px-16 lg:py-32"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center sm:mb-16 lg:mb-32"
      >
        <h2 className="font-['Space_Grotesk'] text-[2rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          Let&apos;s build something
          <span className="text-cyan-400"> together.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-white/50 sm:mt-6 sm:text-sm lg:translate-x-65">
          Have an idea, opportunity, or just want to connect?
          <br className="hidden sm:block" />
          I&apos;m always open to interesting conversations and new
          opportunities.
        </p>
      </motion.div>

      {/* Main Contact Area */}

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
        {/* LEFT SIDE */}

        
          {/* Label */}

          
           

        {/* RIGHT SIDE — FORM */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full"
        >
          <form
            onSubmit={handleSubmit}
            className="w-full rounded-3xl border border-cyan-400/15 bg-white/[0.03] p-5 backdrop-blur-md sm:p-8 md:p-10 lg:translate-x-75 lg:translate-y-10 lg:p-16"
          >
            {/* Form Header */}

            <div className="mb-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                Send a message
              </p>

              <h3 className="mt-2 font-['Space_Grotesk'] text-xl font-semibold text-white sm:text-2xl">
                Tell me what&apos;s on your mind.
              </h3>
            </div>

            {/* Name */}

            <div className="space-y-2">
              <label
                htmlFor="contact-name"
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40"
              >
                Name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full rounded-2xl border border-cyan-400/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-cyan-300/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-cyan-300/20 sm:px-5 sm:py-4"
              />
            </div>

            {/* Email */}

            <div className="mt-5 space-y-2">
              <label
                htmlFor="contact-email"
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40"
              >
                Email
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-2xl border border-cyan-400/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-cyan-300/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-cyan-300/20 sm:px-5 sm:py-4"
              />
            </div>

            {/* Message */}

            <div className="mt-5 space-y-2">
              <label
                htmlFor="contact-message"
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a little about your idea..."
                rows={5}
                required
                className="w-full resize-none rounded-2xl border border-cyan-400/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-cyan-300/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-cyan-300/20 sm:px-5 sm:py-4"
              />
            </div>

            {/* Submit */}

            <motion.button
  type="submit"
  disabled={submitStatus === 'sending'}
  whileTap={{ scale: 0.98 }}
  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400/90 py-3.5 text-sm font-semibold text-[#0A0F14] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] disabled:cursor-not-allowed disabled:opacity-70 sm:py-4"
>
  {submitStatus === 'sending' ? (
    <>
      <motion.span
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="h-[17px] w-[17px] rounded-full border-2 border-[#0A0F14]/30 border-t-[#0A0F14]"
      />
      Sending...
    </>
  ) : submitStatus === 'sent' ? (
    <>
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className="text-base font-bold"
      >
        ✓
      </motion.span>
      Sent
    </>
  ) : submitStatus === 'error' ? (
    <>
      <span className="text-base font-bold">!</span>
      Try Again
    </>
  ) : (
    <>
      <SendIcon className="h-[17px] w-[17px]" />
      Send Message
    </>
  )}
</motion.button>
          </form>

          {/* Social Icons */}

          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 lg:translate-x-70 lg:translate-y-15">
            <span className="text-xs text-white/40 sm:text-sm">
              Or find me on
            </span>

            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://github.com/aastha-shanker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/15 bg-white/5 text-white transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 sm:h-11 sm:w-11"
              >
                <GithubIcon className="h-[17px] w-[17px]" />
              </a>

              <a
                href="https://www.linkedin.com/in/aastha-shanker-6aa146304"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/15 bg-white/5 text-white transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 sm:h-11 sm:w-11"
              >
                <LinkedinIcon className="h-[17px] w-[17px]" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/15 bg-white/5 text-white transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 sm:h-11 sm:w-11"
              >
                <TwitterIcon className="h-[17px] w-[17px]" />
              </a>

              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/15 bg-white/5 text-white transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 sm:h-11 sm:w-11"
              >
                <MailIcon className="h-[17px] w-[17px]" />
              </a>

              <a
                href="#"
                aria-label="Resume"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/15 bg-white/5 text-white transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 sm:h-11 sm:w-11"
              >
                <FileTextIcon className="h-[17px] w-[17px]" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}

      <div className="mt-16 border-t border-white/[0.06] pt-6 sm:mt-20 lg:translate-y-25">
        <p className="text-center text-[8px] font-medium uppercase leading-5 tracking-[0.16em] text-white/25 sm:text-[9px] sm:tracking-[0.22em]">
          © 2026 Aastha Shanker · Built with curiosity &amp; code
        </p>
      </div>
    </section>
  )
}

export default Contact

