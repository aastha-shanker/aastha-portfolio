import { useState } from 'react'

const workData = [
  {
    role: 'DATA SCIENCE INTERN',
    company: 'NextBext.AI',
    timeline: 'May 2026 — Aug 2026',
  },
  {
    role: 'JR SOFTWARE ASSOCIATE',
    company: 'Donum',
    timeline: 'Nov 2025 — Mar 2026',
  },
]

const coCurricularData = [
  {
    role: 'EVENT HEAD',
    company: 'GeeksForGeeks KIIT',
    timeline: 'Jul 2026 — Present',
  },
  {
    role: 'UI/UX MEMBER',
    company: 'GeeksForGeeks KIIT',
    timeline: 'Nov 2025 — Jul 2026',
  },
  {
    role: 'JR MENTOR – WEB DEVELOPMENT',
    company: 'K1000',
    timeline: 'Nov 2025 — Present',
  },
]

function Experience() {
  const [activeTab, setActiveTab] = useState('work')

  const data =
    activeTab === 'work'
      ? workData
      : coCurricularData

  return (
    <section
  id="experience"
  className="relative bg-[#070B12] pt-64 pb-16 sm:pt-16 sm:pb-20 lg:pt-16 lg:pb-24"
>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-10">

        {/* Heading */}
        <h2
          className="
  text-center
  font-['Space_Grotesk']
 text-[1.75rem]
sm:text-4xl
lg:translate-x-[460px]
lg:text-5xl
  font-semibold
  leading-[1]
  tracking-[-0.035em]
  
  lg:mb-6
  
  lg:text-left
  
"
        >
          MY JOURNEY{' '}
          <span className="text-cyan-400">
            SO FAR.
          </span>
        </h2>

        {/* Toggle */}
        <div
          className="
  mt-8
sm:mt-10
lg:mt-16
lg:translate-x-16
lg:translate-y-2
  flex
  justify-center
  
"
        >
          <div
            className="
              flex
              w-full
              max-w-[360px]
p-1
sm:p-1.5
py-2
text-[10px]
sm:text-xs
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              
            "
          >
            <button
              onClick={() => setActiveTab('work')}
              className={`
                w-1/2
  rounded-full
  px-2
  py-2.5
  text-[10px]
  font-medium
  uppercase
  tracking-[0.08em]
  transition-all
  sm:text-sm
  sm:tracking-[0.2em]
                ${
                  activeTab === 'work'
                    ? 'bg-cyan-400 text-black'
                    : 'text-white/50'
                }
              `}
            >
              Work
            </button>

            <button
              onClick={() => setActiveTab('cocurricular')}
              className={`
                w-1/2
                rounded-full
                py-3
                text-[11px]
                font-medium
                uppercase
                tracking-[0.12em]
                transition-all
                sm:text-sm
                sm:tracking-[0.2em]
                ${
                  activeTab === 'cocurricular'
                    ? 'bg-cyan-400 text-black'
                    : 'text-white/50'
                }
              `}
            >
              Co-Curricular
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div
          className="
            mx-auto
            mt-12
sm:mt-14
lg:mt-16
lg:translate-x-90
lg:translate-y-10
            flex
            justify-center
            
          "
        >
          <div className="w-full max-w-[660px]">

            {data.map((item, index) => (
              <div
                key={index}
                className="
  relative
  flex
  min-h-[115px]
gap-3
sm:min-h-[140px]
sm:gap-6
lg:min-h-[160px]
lg:gap-7
"
              >

                {/* Timeline */}
                <div className="relative flex w-3 shrink-0 justify-center sm:w-4">

                  {/* Dot */}
                  <div
                    className="
                      relative
                      z-10
                      mt-1
                      h-3
                      w-3
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_18px_rgba(34,211,238,0.8)]
                      sm:h-4
                      sm:w-4
                    "
                  />

                  {/* Line */}
                  {index !== data.length - 1 && (
                    <div
                      className="
                        absolute
                        top-3
                        h-[110px]
                        w-px
                        bg-white/10
                        sm:h-[100px]
                        lg:h-[150px]
                      "
                    />
                  )}
                </div>

                {/* Role */}
                <div className="-mt-1 min-w-0 sm:-mt-2">

                  <h3
                    className="
  font-['Space_Grotesk']
  text-lg
  font-semibold
  leading-tight
  text-white
  sm:text-xl
  lg:text-2xl
"
                  >
                    {item.role}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-base
                      text-cyan-400
                      sm:text-lg
                    "
                  >
                    {item.company}
                  </p>

                  <p
                    className="
  mt-2
  text-sm
  uppercase
  tracking-[0.1em]
  text-white/40
  sm:mt-3
  sm:text-base
  sm:tracking-[0.2em]
"
                  >
                    {item.timeline}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
