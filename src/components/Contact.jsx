import { motion } from 'framer-motion'
import { useState } from 'react'

function Contact() {
  const [copied, setCopied] = useState(false)

  const email = 'aastha.shanker2006@gmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Failed to copy email:', error)
    }
  }

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-28 lg:py-32"
    >
      {/* Section Label */}
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center font-['Space_Grotesk'] text-[2.4rem] font-semibold leading-[1] tracking-[-0.035em] sm:text-6xl lg:translate-x-55 lg:translate-y-60 lg:text-7xl"
      >
        Let&apos;s build something
        
        <span className="text-cyan-400"> together.</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mt-6 max-w-xl text-center text-sm leading-7 text-white/50 sm:mt-8 sm:text-base lg:translate-x-135 lg:translate-y-75"
      >
        Have an idea, opportunity, or just want to connect?
        <br />
        I&apos;m always open to interesting conversations and new opportunities.
      </motion.p>

      {/* Contact Links */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-12 max-w-3xl sm:mt-16 lg:translate-y-90 lg:translate-x-115"
      >
        {/* Get In Touch Label */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-cyan-400/50" />

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Get in touch
          </p>
        </div>

        {/* Email */}
        <div className="border-y border-white/[0.08] py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
                Email
              </p>

              <a
                href={`mailto:${email}`}
                className="block max-w-[220px] truncate text-sm font-medium text-white/80 transition-colors duration-300 hover:text-cyan-300 sm:max-w-none sm:text-lg"
              >
                {email}
              </a>
            </div>

            <button
              onClick={copyEmail}
              className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 transition-all duration-300 hover:text-cyan-200"
            >
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aastha-shanker-6aa146304"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between border-b border-white/[0.08] py-6"
        >
          <div className="min-w-0">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
              LinkedIn
            </p>

            <p className="text-base font-medium text-white/75 transition-colors duration-300 group-hover:text-cyan-300 sm:text-lg">
              Let&apos;s connect professionally
            </p>
          </div>

          <span className="text-xl text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300">
            ↗
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/aastha-shanker"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between border-b border-white/[0.08] py-6"
        >
          <div className="min-w-0">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
              GitHub
            </p>

            <p className="text-sm font-medium text-white/75 transition-colors duration-300 group-hover:text-cyan-300 sm:text-lg">
              Explore my projects
            </p>
          </div>

          <span className="text-xl text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300">
            ↗
          </span>
        </a>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href={`mailto:${email}`}
            className="group relative inline-flex h-11 w-44 items-center justify-center gap-3 overflow-hidden rounded-full border border-cyan-400/30 bg-cyan-400/[0.06] px-6 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300 shadow-[inset_0_0_20px_rgba(34,211,238,0.04)] transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/[0.1] hover:shadow-[inset_0_0_25px_rgba(34,211,238,0.08),0_0_30px_rgba(34,211,238,0.08)] sm:w-50 sm:tracking-[0.2em] lg:translate-y-4"
          >
            Let&apos;s Talk

           
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-16 pt-6 text-center sm:mt-28">
        <p className="mx-auto max-w-[280px] text-[9px] font-xl uppercase leading-5 tracking-[0.18em] text-white/25 sm:max-w-none sm:text-[10px] sm:tracking-[0.25em] lg:translate-y-105 lg:translate-x-60">
          © 2026 Aastha Shanker · Built with curiosity &amp; code
        </p>
      </div>
    </section>
  )
}

export default Contact