import { motion } from 'framer-motion'

import agnidrishtiImage from '../assets/projects/agnidrishti.png'
import koshImage from '../assets/projects/kosh.png'
import scholarMatchImage from '../assets/projects/scholarmatch.png'
import attendwiseImage from '../assets/projects/attendwise.png'
import estateXImage from '../assets/projects/estatex.png'
import insightEDImage from '../assets/projects/insightED.png'

const projects = [
  {
    number: '01',
    title: 'InsightED',
    description:
      'AI-powered student management platform inspired by Google Classroom, featuring assignments, attendance, performance analytics, and AI-driven insights to help students and educators track and improve academic progress.',
    image: insightEDImage,
    tech: ['React', 'FastAPI', 'Machine Learning', 'PostgreSQL', 'SQLAlchemy'],
    github: 'https://github.com/aastha-shanker/InsightED',
    live: null,
    status: 'ONGOING',
  },
  {
    number: '02',
    title: 'AgniDrishti',
    description:
      'AgniDrishti is an end-to-end platform designed to help detect, classify, visualize, and monitor potential fire events using satellite-derived data and machine learning.',
    image: agnidrishtiImage,
    tech: ['FastAPI', 'Next.js', 'PostGIS'],
    github: 'https://github.com/AbhitanshShahi/SIH_2026',
    live: 'https://agnidrishti-v1.vercel.app/',
  },
  {
    number: '03',
    title: 'KOSH',
    description:
      'KOSH is a full-stack web application that demonstrates user authentication, backend API development, and frontend-backend integration. The project focuses on building a real-world structure similar to production applications.',
    image: koshImage,
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/aastha-shanker/KOSH',
    live: null,
  },
  {
    number: '04',
    title: 'ScholarMatch',
    description:
      'ScholarMatch is a Python-based data analysis and student intelligence system that evaluates academic performance using statistics, similarity analysis, and visualization.',
    image: scholarMatchImage,
    tech: [
      'Python',
      'Pandas',
      'Streamlit',
      'Matplotlib',
      'Linear Regression',
    ],
    github: 'https://github.com/aastha-shanker/ScholarMatch',
    live: null,
  },
  {
    number: '05',
    title: 'AttendWise',
    description:
      'A Machine Learning powered web application that predicts whether a student is eligible to sit for exams based on subject-wise attendance.',
    image: attendwiseImage,
    tech: [
      'Python',
      'Pandas',
      'Scikit-Learn',
      'Streamlit',
      'Logistic Regression',
    ],
    github: 'https://github.com/aastha-shanker/AttendWise',
    live: 'https://attendwise-hh8x5o9ebt4pr2kshtbxpu.streamlit.app/',
  },
  {
    number: '06',
    title: 'EstateX',
    description:
      'A data-driven real estate application for exploring and analyzing property information.',
    image: estateXImage,
    tech: ['Python', 'Streamlit', 'Pandas', 'Linear Regression'],
    github: 'https://github.com/aastha-shanker/EstateX',
    live: 'https://estatex-4vfuk9eji8qmefti3cn5se.streamlit.app/',
  },
]

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.018c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.338c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.339-.012 2.419-.012 2.748 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.018C22 6.484 17.523 2 12 2Z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

function ProjectCard({ project, duplicate = false }) {
  return (
    <motion.article
      key={`${project.number}-${duplicate ? 'duplicate' : 'original'}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="group flex w-[255px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:w-[320px] lg:w-[380px]"
    >
      {/* Project Image */}
       <div className="p-3 pb-0 sm:p-4 sm:pb-0">
        <div className="relative h-[155px] overflow-hidden rounded-xl border border-white/10 bg-[#0B111A] sm:h-[205px]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-['Space_Grotesk'] text-5xl font-semibold text-white/[0.08]">
                {project.number}
              </span>
            </div>
          )}

          {/* Number */}
          <span className="absolute right-4 top-4 text-xs tracking-[0.2em] text-white/40">
            {project.number}
          </span>

          {/* Hover Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-cyan-400/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Scan Line */}
          <div className="pointer-events-none absolute left-0 top-0 h-px w-full -translate-y-full bg-cyan-300 opacity-0 shadow-[0_0_15px_#22d3ee] transition-all duration-1000 group-hover:translate-y-[155px] group-hover:opacity-100 sm:group-hover:translate-y-[205px]" />

          {/* Border */}
          <div className="pointer-events-none absolute inset-0 border border-white/[0.06] transition-colors duration-500 group-hover:border-cyan-400/20" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-3 pb-5 sm:gap-4 sm:p-4 sm:pb-6 sm:translate-x-1.5">
        <div className="flex flex-col gap-3">

          {/* Title + Ongoing */}
          <div className="flex items-start justify-between gap-1">
            <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400 sm:text-xl">
              {project.title}
            </h3>

            {project.status && (
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.15em] text-cyan-400 w-16 text-center -translate-x-2">
                {project.status}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-[11px] leading-5 text-white/50 sm:text-xs sm:leading-6">
            {project.description}
          </p>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-white/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Links */}
        <div className="flex gap-3 translate-y-[-5px]">
          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[72px] items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-white/60 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
          >
            <GithubIcon />
            GitHub
          </a>

          {/* Live */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[70px] items-center justify-center gap-1.5 rounded-full bg-cyan-400 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-cyan-300"
            >
              Live
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function Projects() {
 return (
  <section
    id="projects"
    className="relative min-h-screen overflow-hidden bg-[#070B12] pt-10 pb-0 lg:overflow-visible lg:translate-x-[2.5rem] lg:translate-y-[3rem]"
  >
    <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-16">

      {/* Heading */}
      <div>
        

        <h2 className="mb-6 text-center font-['Space_Grotesk'] text-[1.9rem] font-semibold leading-[1] tracking-[-0.035em] sm:mb-8 sm:text-4xl lg:text-5xl">
          THINGS I'VE
          <span className="text-cyan-400"> BUILT.</span>
        </h2>
      </div>

      <div className="h-3" />

      {/* Infinite Project Movement */}
      <div className="overflow-hidden pb-6">
        <div className="project-track flex w-max">

          {/* First Set */}
          <div className="flex shrink-0 gap-4 sm:gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
              />
            ))}

            {/* Gap */}
            <div className="w-6 shrink-0" />
          </div>

          {/* Duplicate Set */}
          <div className="flex shrink-0 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={`duplicate-${project.number}`}
                project={project}
                duplicate
              />
            ))}

            {/* Gap */}
            <div className="w-6 shrink-0" />
          </div>

        </div>
      </div>

      
    </div>

    {/* Infinite Animation */}
    <style>{`
      @keyframes projectScroll {
        from {
          transform: translateX(0);
        }

        to {
          transform: translateX(-50%);
        }
      }

      .project-track {
  animation: projectScroll 45s linear infinite;
}

@media (min-width: 1024px) {
  .project-track {
    animation-duration: 35s;
  }
}

      .project-track:hover {
        animation-play-state: paused;
      }
    `}</style>
  </section>
)
}

export default Projects
