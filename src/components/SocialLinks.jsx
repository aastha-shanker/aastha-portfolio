const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/aastha-shanker',
    icon: (
      <svg
        viewBox="0 0 30 30"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.018c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.338c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.339-.012 2.419-.012 2.748 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.018C22 6.484 17.523 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aastha-shanker-6aa146304',
    icon: (
      <svg
        viewBox="0 0 30 30"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V8.998h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.267 2.37 4.267 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.56 20.452h3.554V8.998H3.56v11.454Z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:aastha.shanker2006@gmail.com',
    icon: (
      <svg
        viewBox="0 0 30 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
]

function SocialLinks() {
  return (
    <div className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex xl:left-8">

      <div className="mb-2 h-16 w-px bg-white/10" />

      {socialLinks.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          aria-label={name}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-white/35 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-400"
        >
          {icon}
        </a>
      ))}

      <div className="mt-2 h-16 w-px bg-white/10" />
    </div>
  )
}

export default SocialLinks