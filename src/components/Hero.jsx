import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import SocialLinks from './SocialLinks'
import aasthaImage from '../assets/aastha.png'

const roles = [
  'SOFTWARE DEVELOPER',
  'DATA SCIENTIST',
  'FULL STACK ENGINEER',
  'UI/UX DESIGNER',
]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 2800)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden lg:overflow-visible"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070B12_75%)]" />
      </div>

      <SocialLinks />

      {/* Main Hero */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px] items-center px-5 pt-24 pb-16 sm:px-8 sm:pt-20 lg:px-10 lg:py-0">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[300px_420px_300px] lg:justify-center lg:gap-6 lg:gap-y-0">

          {/* LEFT — NAME */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.2,
            }}
            className="order-2 text-center lg:order-1 lg:text-right"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-cyan-400/80 sm:text-[17px] sm:tracking-[0.3em] lg:text-right">
              Hello, I'm
            </p>

            <h1 className="font-['Space_Grotesk'] text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[5.8rem]">
              <span className="block text-white/90">
                Aastha
              </span>

              <span className="block text-white/90">
                Shanker
              </span>
            </h1>
          </motion.div>

          {/* CENTER — IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
            className="group order-1 flex justify-center lg:order-2 lg:translate-x-24"
          >
            <div className="relative">

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-[-12%]
                  rounded-full
                  bg-cyan-400/[0.07]
                  blur-[55px]
                  transition-all
                  duration-700
                  group-hover:bg-cyan-400/[0.13]
                  sm:inset-[-15%]
                  sm:blur-[80px]
                "
              />

              {/* Image frame */}
              <div
                className="
                  relative
                  h-[390px]
                  w-[275px]
                  overflow-hidden
                  sm:h-[520px]
                  sm:w-[370px]
                  lg:h-[520px]
                  lg:w-[370px]
                  xl:h-[620px]
                  xl:w-[430px]
                "
              >
                <img
                  src={aasthaImage}
                  alt="Aastha Shanker"
                  className="
                    h-full
                    w-full
                    object-cover
                    grayscale
                    transition-all
                    duration-700
                    group-hover:scale-[1.025]
                    group-hover:grayscale-0
                  "
                />

                {/* Cyan X-ray wash */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-cyan-400/0
                    via-cyan-300/0
                    to-cyan-600/20
                    opacity-0
                    mix-blend-screen
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Scan line */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    h-[1px]
                    w-full
                    -translate-y-full
                    bg-cyan-300
                    opacity-0
                    shadow-[0_0_18px_#22d3ee]
                    transition-all
                    duration-1000
                    group-hover:translate-y-[390px]
                    group-hover:opacity-100
                    sm:group-hover:translate-y-[520px]
                    lg:group-hover:translate-y-[520px]
                    xl:group-hover:translate-y-[620px]
                  "
                />

                {/* Subtle border */}
                <div className="pointer-events-none absolute inset-0 border border-white/[0.08] transition-colors duration-500 group-hover:border-cyan-400/20" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — ROLE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.3,
            }}
            className="order-3 text-center lg:translate-x-30 lg:text-left"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/90 sm:mb-5 sm:tracking-[0.35em]">
              I am a
            </p>

            {/* Role */}
            <div className="relative mx-auto min-h-[75px] max-w-[330px] overflow-hidden sm:min-h-[100px] lg:mx-0 lg:min-h-[145px] lg:max-w-none">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{
                    duration: 0.45,
                    ease: 'easeOut',
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    w-full
                    font-['Space_Grotesk']
                    text-[2rem]
                    font-semibold
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-cyan-400
                    sm:text-4xl
                    lg:w-auto
                    lg:text-[3.4rem]
                  "
                >
                  {roles[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <p className="mx-auto max-w-[320px] text-sm leading-6 text-white/70 sm:text-sm lg:mx-0 lg:max-w-[340px] lg:text-white/90">
              Building intelligent, scalable and meaningful digital
              experiences through code, data and design.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero