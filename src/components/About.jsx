import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function About() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')

    const handleResize = () => {
      setIsDesktop(mediaQuery.matches)
    }

    handleResize()
    mediaQuery.addEventListener('change', handleResize)

    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#070B12]"
    >
      <div className="relative mx-auto min-h-screen max-w-[1500px] px-5 sm:px-8 lg:px-10">

        {/* PHOTO */}
       {/* PHOTO */}
<motion.div
  initial={{ opacity: 0, x: isDesktop ? -300 : 0 }}
  whileInView={{
    opacity: 1,
    x: isDesktop ? -300 : 0,
  }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 1, ease: 'easeOut' }}
  className="
    relative
    flex
    justify-center
    pt-24
    sm:pt-28
    lg:absolute
    lg:left-1/2
    lg:top-1/2
    lg:block
    lg:-translate-x-1/2
    lg:-translate-y-1/2
    lg:pt-0
  "
>
  <div className="relative">

    {/* Glow */}
    <div
      className="
        absolute
        inset-[-10%]
        rounded-full
        bg-cyan-400/[0.05]
        blur-[55px]
        sm:inset-[-12%]
        sm:blur-[75px]
      "
    />

    {/* Image frame */}
    <div
      className="
        relative
        h-[420px]
        w-[295px]
        overflow-hidden
        sm:h-[520px]
        sm:w-[370px]
        lg:h-[520px]
        lg:w-[370px]
        xl:h-[620px]
        xl:w-[430px]
      "
    >

      {/* BASE — ALWAYS GREYSCALE */}
      <img
        src="/src/assets/aastha.png"
        alt="Aastha Shanker"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          grayscale
        "
      />

      {/* COLOR IMAGE — REVEALED FROM TOP TO BOTTOM */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{
          clipPath: 'inset(0 0 100% 0)',
        }}
        animate={{
          clipPath: [
            'inset(0 0 100% 0)',
            'inset(0 0 0% 0)',
          ],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          repeatDelay: 0.4,
        }}
      >
        <img
          src="/src/assets/aastha.png"
          alt=""
          className="
            h-full
            w-full
            object-cover
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
            mix-blend-screen
          "
        />
      </motion.div>

      {/* SCAN LINE */}
      
      {/* SCAN GLOW */}
      {/* SCAN LINE */}
<motion.div
  className="
    pointer-events-none
    absolute
    left-0
    top-0
    z-20
    h-[1px]
    w-full
    bg-cyan-300
    shadow-[0_0_18px_#22d3ee]
  "
  animate={{
    top: ['0%', '100%', '0%'],
  }}
  transition={{
    duration: 3.8,
    repeat: Infinity,
    ease: 'linear',
    times: [0, 0.96, 1],
  }}
/>
      {/* Subtle border */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-30
          border
          border-white/[0.08]
        "
      />

    </div>
  </div>
</motion.div>


        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: isDesktop ? 300 : 0 }}
          whileInView={{
            opacity: 1,
            x: isDesktop ? 300 : 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: 'easeOut',
          }}
          className="
            relative
            mx-auto
            max-w-[700px]
            pb-20
            pt-16
            sm:pt-20
            lg:absolute
            lg:left-1/2
            lg:top-1/2
            lg:w-[560px]
            lg:max-w-none
            lg:-translate-y-1/2
            lg:pb-0
            lg:pt-0
          "
        >
          {/* Heading */}
          <h2
            className="
              font-['Space_Grotesk']
              text-[2.4rem]
              font-semibold
              leading-[0.98]
              tracking-[-0.04em]
              text-white
              sm:text-[3.2rem]
              lg:text-[3.8rem]
            "
          >
            I BUILD WITH
            <br />
            <span className="text-cyan-400">
              CODE, DATA
            </span>
            <br />
            &amp; CURIOSITY.
          </h2>

          {/* Divider */}
          <div className="mt-7 h-px w-16 bg-cyan-400/50" />

          {/* Paragraph */}
          <div
            className="
              mt-7
              space-y-5
              text-sm
              leading-7
              text-white/55
              sm:text-[15px]
              sm:leading-7
            "
          >
            <p>
              I’m Aastha Shanker, a 3rd-year Computer Science student and
              software developer who enjoys building things, solving problems,
              and turning ideas into meaningful products.
            </p>

            <p>
              I’m naturally curious, enjoy taking on new challenges, and
              believe in taking initiative rather than waiting for
              opportunities. Beyond technology, I’m a public speaker and strong
              communicator, and I enjoy leading, collaborating, and bringing
              people together.
            </p>

            <p>
              I’m always looking to learn, create, and take on challenges that
              push me beyond what I already know.
            </p>
          </div>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download="Aastha-Shanker-Resume.pdf"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="
              mt-9
              inline-flex
              h-[55px]
              w-[130px]
              items-center
              justify-center
              rounded-full
              border-[3px]
              border-cyan-400
              bg-[#0d0818]
              text-xs
              font-bold
              uppercase
              tracking-[0.16em]
              text-cyan-300
              shadow-[inset_8px_-8px_30px_rgba(34,211,238,0.35),0_0_24px_rgba(34,211,238,0.12)]
              transition-all
              duration-300
              hover:bg-cyan-400/[0.08]
              hover:shadow-[inset_8px_-8px_30px_rgba(34,211,238,0.45),0_0_30px_rgba(34,211,238,0.2)]
            "
          >
            Resume
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}

export default About