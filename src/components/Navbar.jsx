import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

function Navbar() {
  const [active, setActive] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (item) => {
    setActive(item)
    setIsOpen(false)
  }

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          const nextActive = navItems.find(
            (item) => item.toLowerCase() === visibleEntry.target.id,
          )

          if (nextActive) {
            setActive(nextActive)
          }
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-2 top-0 z-50 px-0 pt-4 sm:inset-x-7 sm:px-8 sm:pt-6 lg:px-10"
    >
      <nav className="mx-auto flex max-w-[1200px] flex-col rounded-2xl border border-white/10 bg-[#0A0F14]/80 px-4 py-3 backdrop-blur-xl sm:px-8 sm:py-5 lg:px-10 lg:py-5">
        <div className="flex min-h-9 w-full items-center justify-between sm:min-h-11">
        
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="translate-x-0 font-['Space_Grotesk'] text-lg font-bold tracking-tight text-white transition-colors duration-300 hover:text-cyan-200 sm:translate-x-2 sm:text-2xl"
          >
            AS<span className="text-cyan-300">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 md:flex md:-translate-x-6 lg:gap-9">
            {navItems.map((item) => {
              const isActive = active === item

              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 lg:px-5 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/60 hover:text-cyan-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -inset-x-4 inset-y-0 -z-10 rounded-full border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.2)] lg:-inset-x-5"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  {item}
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80 transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-300 md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 flex flex-col border-t border-white/10 pt-4">
                {navItems.map((item) => {
                  const isActive = active === item

                  return (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => handleNavClick(item)}
                       className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                        isActive
                          ? 'bg-cyan-400/10 text-cyan-300'
                          : 'text-white/60 hover:text-cyan-200'
                      }`}
                    >
                      {item}
                    </a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Navbar
