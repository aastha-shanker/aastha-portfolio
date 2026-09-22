import { motion } from 'framer-motion'

const navItems = [
  'About',
  'Experience',
  'Projects',
  'Skills',
  'Contact',
]

function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full bg-[#070B12]/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-[1500px] translate-x-3 items-center justify-between px-5 py-5 sm:px-8 lg:translate-x-6 lg:px-24 lg:py-7">

        {/* Logo */}
        <a
          href="#home"
          className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight px-6"
        >
          AS<span className="text-cyan-400">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="mt-4 text-medium text-white/50 transition-colors duration-300 hover:text-cyan-400"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Contact */}
        
      </nav>
    </motion.header>
  )
}

export default Navbar