import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiFastapi,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiFigma
} from "react-icons/si";

const skillLogos = {
  javascript: SiJavascript,
  python: SiPython,
  react: SiReact,
  node: SiNodedotjs,
  fastapi: SiFastapi,
  nextjs: SiNextdotjs,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  pandas: SiPandas,
  numpy: SiNumpy,
  scikit: SiScikitlearn,
  git: SiGit,
  figma: SiFigma,
}

const fruits = [
  { id: 'javascript', x: 94, y: 118, stemX: 94, stemY: 91 },
  { id: 'python', x: 177, y: 82, stemX: 177, stemY: 55 },
  { id: 'react', x: 292, y: 96, stemX: 292, stemY: 68 },
  { id: 'node', x: 414, y: 125, stemX: 414, stemY: 96 },

  { id: 'fastapi', x: 67, y: 204, stemX: 67, stemY: 174 },
  { id: 'nextjs', x: 145, y: 174, stemX: 145, stemY: 145 },
  { id: 'mongodb', x: 349, y: 178, stemX: 349, stemY: 148 },
  { id: 'postgresql', x: 451, y: 216, stemX: 451, stemY: 185 },

  { id: 'pandas', x: 108, y: 285, stemX: 108, stemY: 255 },
  { id: 'numpy', x: 211, y: 267, stemX: 211, stemY: 237 },
  { id: 'scikit', x: 326, y: 282, stemX: 326, stemY: 251 },

  { id: 'git', x: 407, y: 320, stemX: 407, stemY: 290 },
  { id: 'figma', x: 250, y: 350, stemX: 250, stemY: 320 },
]
const skills = [
  { id: 'javascript', name: 'JavaScript' },
  { id: 'python', name: 'Python' },
  { id: 'react', name: 'React' },
  { id: 'node', name: 'Node.js' },
  { id: 'fastapi', name: 'FastAPI' },
  { id: 'mongodb', name: 'MongoDB' },
  { id: 'postgresql', name: 'PostgreSQL' },
  { id: 'pandas', name: 'Pandas' },
  { id: 'numpy', name: 'NumPy' },
  { id: 'scikit', name: 'Scikit-learn' },
  { id: 'git', name: 'Git' },
  { id: 'figma', name: 'Figma' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'express', name: 'Express.js' },
  { id: 'tailwind', name: 'Tailwind CSS' },
  { id: 'sql', name: 'SQL' },
  { id: 'java', name: 'Java' },
  { id: 'cpp', name: 'C++' },
  { id: 'angular', name: 'Angular' },
  { id: 'html', name: 'HTML' },
  { id: 'css', name: 'CSS' },
  
  { id: 'logistic-regression', name: 'Logistic Regression' },
  { id: 'linear-regression', name: 'Linear Regression' },
  { id: 'random-forest', name: 'Random Forest' },
  { id: 'decision-tree', name: 'Decision Tree' },
  { id: 'powerbi', name: 'Power BI' },

]

const leaves = [
  // ─────────────── TOP ───────────────
  [48, 94, -25], [61, 78, 20], [75, 66, -15], [89, 82, 35],
  [102, 62, -30], [116, 72, 18], [130, 54, -20], [145, 67, 28],
  [160, 48, -18], [176, 58, 32], [192, 45, -25], [208, 63, 20],
  [224, 51, -15], [240, 66, 30], [257, 48, -25], [273, 60, 18],
  [289, 45, -20], [305, 62, 30], [321, 51, -25], [337, 68, 20],
  [354, 55, -18], [370, 70, 30], [387, 58, -25], [404, 76, 20],
  [421, 67, -18], [438, 84, 30], [454, 75, -25], [470, 96, 20],

  // ───────────── UPPER LEFT ─────────────
  [38, 111, 25], [53, 124, -30], [69, 109, 18], [84, 119, -25],
  [99, 105, 32], [114, 119, -18], [129, 101, 25], [145, 113, -30],
  [161, 94, 20], [177, 108, -25], [193, 97, 30], [210, 112, -20],
  [226, 101, 25], [242, 116, -30],

  // ───────────── UPPER RIGHT ─────────────
  [273, 108, 22], [289, 96, -25], [306, 113, 30], [323, 101, -18],
  [340, 116, 25], [357, 103, -30], [374, 119, 20], [391, 108, -25],
  [408, 124, 30], [425, 111, -18], [442, 130, 25], [458, 119, -30],
  [474, 137, 20], [487, 151, -25],

  // ───────────── MIDDLE LEFT ─────────────
  [42, 142, -20], [58, 153, 30], [74, 138, -28], [91, 151, 20],
  [108, 137, -18], [125, 153, 32], [142, 138, -25], [159, 151, 20],
  [176, 136, -30], [193, 151, 25], [210, 137, -20], [228, 153, 30],
  [245, 139, -25],

  // ───────────── MIDDLE RIGHT ─────────────
  [270, 143, 20], [287, 130, -25], [304, 148, 30], [321, 136, -18],
  [338, 153, 25], [355, 139, -30], [372, 155, 20], [389, 143, -25],
  [406, 160, 30], [423, 146, -20], [440, 164, 25], [457, 151, -30],
  [474, 170, 20], [488, 181, -25],

  // ───────────── CENTER DENSITY ─────────────
  [52, 171, 25], [69, 181, -20], [87, 166, 32], [104, 180, -25],
  [121, 168, 20], [138, 183, -30], [155, 169, 25], [172, 185, -18],
  [189, 171, 30], [206, 185, -25], [223, 169, 20], [240, 184, -30],
  [257, 171, 25], [274, 185, -20], [291, 170, 30], [308, 184, -25],
  [325, 171, 20], [342, 186, -30], [359, 172, 25], [376, 188, -20],
  [393, 174, 30], [410, 190, -25], [427, 177, 20], [444, 193, -30],
  [461, 181, 25], [478, 199, -20],

  // ───────────── LOWER LEFT ─────────────
  [61, 201, -25], [79, 214, 30], [97, 199, -18], [115, 216, 25],
  [133, 202, -30], [151, 218, 20], [169, 203, -25], [187, 220, 30],
  [205, 205, -20], [223, 221, 25], [241, 208, -30],

  // ───────────── LOWER RIGHT ─────────────
  [269, 209, 20], [287, 196, -25], [305, 214, 30], [323, 202, -20],
  [341, 219, 25], [359, 205, -30], [377, 222, 20], [395, 208, -25],
  [413, 225, 30], [431, 212, -20], [449, 229, 25], [467, 217, -30],
  [483, 235, 20],

  // ───────────── OUTER LEFT ─────────────
  [27, 126, -35], [32, 151, 20], [39, 178, -25],
  [48, 199, 30], [57, 219, -20], [72, 234, 25],
  [91, 241, -30], [111, 235, 20], [132, 244, -25],

  // ───────────── OUTER RIGHT ─────────────
  [489, 116, 30], [496, 142, -25], [501, 168, 20],
  [497, 194, -30], [492, 216, 25], [483, 242, -20],
  [465, 252, 30], [443, 246, -25], [420, 254, 20],

  // ───────────── LOWER CANOPY ─────────────
  [96, 258, -25], [116, 270, 30], [137, 258, -20],
  [158, 273, 25], [180, 260, -30], [202, 276, 20],
  [224, 262, -25], [246, 278, 30], [268, 263, -20],
  [290, 278, 25], [312, 264, -30], [334, 280, 20],
  [356, 266, -25], [378, 282, 30], [400, 269, -20],
  [422, 284, 25], [444, 271, -30],

  // ───────────── RANDOM FILL ─────────────
  [82, 96, 15], [122, 91, -35], [154, 82, 28],
  [187, 77, -18], [219, 86, 32], [251, 79, -25],
  [282, 83, 20], [314, 77, -30], [347, 88, 25],
  [379, 84, -20], [411, 94, 30], [445, 105, -25],

  [70, 130, 25], [101, 125, -20], [134, 132, 30],
  [166, 124, -25], [198, 130, 20], [231, 126, -30],
  [266, 132, 25], [299, 126, -20], [333, 134, 30],
  [367, 129, -25], [400, 138, 20], [434, 132, -30],

  [84, 187, -20], [119, 192, 30], [153, 188, -25],
  [187, 195, 20], [221, 191, -30], [255, 198, 25],
  [289, 192, -20], [323, 199, 30], [357, 194, -25],
  [391, 201, 20], [425, 196, -30], [457, 204, 25],

  // ─────────────── EXTRA TOP CROWN ───────────────
[30, 78, -30], [45, 62, 18], [62, 51, -20],
[80, 43, 30], [101, 38, -25], [123, 44, 20],
[145, 34, -30], [168, 39, 25], [191, 31, -18],
[214, 40, 30], [237, 33, -25], [260, 42, 20],
[283, 31, -30], [306, 39, 25], [329, 32, -20],
[352, 43, 30], [375, 34, -25], [398, 45, 20],
[421, 38, -30], [443, 50, 25], [464, 47, -20],
[483, 62, 30], [497, 80, -25],

// extra upper clusters
[48, 48, 35], [72, 34, -20], [94, 29, 25],
[119, 27, -30], [143, 24, 20], [169, 26, -25],
[196, 22, 30], [223, 28, -20], [250, 25, 25],
[277, 23, -30], [304, 27, 20], [331, 24, -25],
[358, 29, 30], [385, 26, -20], [412, 31, 25],
[439, 35, -30], [464, 42, 20],

// ─────────────── EXTRA LOWER FOLIAGE ───────────────
[50, 245, -25], [65, 260, 30], [82, 276, -20],
[101, 288, 25], [123, 299, -30], [145, 292, 20],
[168, 305, -25], [190, 294, 30], [213, 310, -20],
[236, 300, 25], [259, 314, -30], [282, 301, 20],
[305, 315, -25], [328, 304, 30], [351, 318, -20],
[374, 307, 25], [397, 320, -30], [420, 310, 20],
[443, 322, -25], [464, 304, 30], [480, 286, -20],

// lower outer edges
[35, 225, 30], [43, 250, -25], [48, 278, 20],
[58, 300, -30], [72, 318, 25], [91, 329, -20],
[114, 337, 30], [139, 329, -25], [163, 341, 20],
[188, 334, -30], [214, 345, 25], [240, 337, -20],
[268, 349, 30], [295, 338, -25], [321, 347, 20],
[347, 339, -30], [374, 350, 25], [400, 340, -20],
[426, 348, 30], [451, 336, -25], [474, 318, 20],
[490, 294, -30],

// ───────────── TOP-CENTER CROWN ─────────────
[205, 24, -20],
[220, 18, 25],
[235, 28, -30],
[250, 17, 20],
[265, 27, -25],
[280, 19, 30],
[295, 29, -20],

[214, 39, 30],
[228, 34, -18],
[243, 43, 25],
[258, 35, -30],
[273, 44, 20],
[288, 36, -25],

[220, 54, -25],
[237, 50, 30],
[254, 58, -20],
[271, 51, 25],
[287, 57, -30],

[229, 70, 20],
[247, 66, -25],
[265, 73, 30],
[282, 67, -20],
]

function Leaf({ x, y, rotation, index }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: 0.35 + index * 0.012,
      }}
      style={{
        transformOrigin: `${x}px ${y}px`,
      }}
    >
      {/* glow */}
      <ellipse
        cx={x}
        cy={y}
        rx="11"
ry="5"
        transform={`rotate(${rotation} ${x} ${y})`}
        fill="#22d3ee"
        opacity="0.08"
        className="blur-[5px]"
      />

      {/* leaf */}
      <ellipse
        cx={x}
        cy={y}
        rx="8"
ry="3.5"
        transform={`rotate(${rotation} ${x} ${y})`}
        fill="#dffcff"
        opacity="0.72"
      />

      {/* cyan edge */}
      <ellipse
        cx={x}
        cy={y}
        rx="10"
        ry="3.5"
        transform={`rotate(${rotation} ${x} ${y})`}
        fill="none"
        stroke="#22d3ee"
        strokeWidth="0.9"
        opacity="0.8"
      />

      {/* leaf vein */}
      <path
        d={`M ${x - 7} ${y} Q ${x} ${y - 1} ${x + 8} ${y}`}
        transform={`rotate(${rotation} ${x} ${y})`}
        stroke="#22d3ee"
        strokeWidth="0.7"
        opacity="0.65"
      />
    </motion.g>
  )
}

function Fruit({ fruit, index, active, onHover, onLeave }) {
  const Icon = skillLogos[fruit.id]
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.8 + index * 0.06,
        ease: 'backOut',
      }}
      style={{
        transformOrigin: `${fruit.x}px ${fruit.y}px`,
      }}
      className="cursor-pointer"
onMouseEnter={onHover}
onMouseLeave={onLeave}
animate={{
  scale: active ? 1.12 : 1,
  y: active ? -3 : 0,
}}
    >
      {/* hanging stem */}
      <path
        d={`
          M ${fruit.stemX} ${fruit.stemY}
          C ${fruit.stemX - 2} ${fruit.stemY + 8}
            ${fruit.x + 2} ${fruit.y - 15}
            ${fruit.x} ${fruit.y - 11}
        `}
        stroke="#dffcff"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* cyan stem glow */}
      <path
        d={`
          M ${fruit.stemX} ${fruit.stemY}
          C ${fruit.stemX - 2} ${fruit.stemY + 8}
            ${fruit.x + 2} ${fruit.y - 15}
            ${fruit.x} ${fruit.y - 11}
        `}
        stroke="#22d3ee"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* outer glow */}
<circle
  cx={fruit.x}
  cy={fruit.y}
  r={active ? 42 : 34}
  fill={active ? '#ffffff' : '#22d3ee'}
  opacity={active ? 0.22 : 0.12}
  className="blur-[14px]"
/>

{/* fruit body */}
{/* fruit body */}
<circle
  cx={fruit.x}
  cy={fruit.y}
  r="24"
  fill="#0d141f"
  stroke="#f4f7fb"
  strokeWidth="2.2"
/>

{/* cyan ring */}
<circle
  cx={fruit.x}
  cy={fruit.y}
  r="19"
  fill="none"
  stroke="#22d3ee"
  strokeWidth={active ? 2.4 : 1.8}
opacity={active ? 1 : 0.9}
/>

{/* logo */}
<foreignObject
  x={fruit.x - 12}
  y={fruit.y - 12}
  width="24"
  height="24"
>
  <div className="flex h-full w-full items-center justify-center">
    <Icon
      size={18}
      className={active ? 'text-cyan-300' : 'text-white'}
    />
  </div>
</foreignObject>
    </motion.g>
  )
}

function SkillTree() {
  const [activeSkill, setActiveSkill] = useState(null)
  return (
    
    <div
      id="skills"

     className="relative mx-auto flex max-w-[1050px] flex-col items-center justify-center gap-8 px-5 pt-0 pb-44 lg:flex-row lg:gap-0 lg:-mt-10 lg:px-0 lg:py-0">
      
      {/* Tree */}
      <div className="relative h-[350px] w-full max-w-[350px] sm:h-[430px] sm:max-w-[430px] lg:h-[470px] lg:w-[460px] lg:max-w-full">
      {/* tree atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-cyan-400/[0.055] blur-[70px] sm:h-[340px] sm:w-[340px] sm:blur-[95px]" />
<div>
        

        <h2 className="mb-8 text-center font-['Space_Grotesk'] text-[1.75rem] font-semibold leading-[1] tracking-[-0.035em] sm:mb-10 sm:text-4xl lg:translate-x-[15rem] lg:text-5xl">
  Technologies I <span className="text-cyan-400"> build </span>with
</h2>
      </div>
      <svg
      
        viewBox="0 0 520 550"
        className="relative h-full w-full overflow-visible translate-y-5 sm:translate-y-8 lg:translate-y-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ================================================= */}
        {/* LEAVES — BEHIND THE TREE                         */}
        {/* ================================================= */}
<defs>
  <clipPath id="treeCanopy">
    <path
      d="
        M 22 245
        C 18 210 30 175 48 145
        C 32 112 52 72 86 58
        C 91 28 126 12 158 27
        C 185 5 220 10 240 30
C 260 4 292 8 310 30
C 325 15 340 20 350 40
        C 365 18 406 30 413 61
        C 451 53 480 79 474 111
        C 502 131 503 172 483 195
        C 499 228 482 263 456 277
        C 449 310 414 329 382 318
        C 359 345 317 340 294 321
        C 263 345 222 341 201 320
        C 168 340 130 327 119 301
        C 84 314 49 294 48 264
        C 29 264 21 256 22 245
        Z
      "
    />
  </clipPath>
</defs>
        <g clipPath="url(#treeCanopy)">
  {leaves.map(([x, y, rotation], index) => (
    <Leaf
      key={`${x}-${y}`}
      x={x}
      y={y}
      rotation={rotation}
      index={index}
    />
  ))}
</g>


        {/* ================================================= */}
        {/* TREE GLOW                                        */}
        {/* ================================================= */}

        {/* thick cyan outer trunk */}
        <path
          d="
            M 256 480
            C 246 444 244 414 250 382
            C 257 349 248 321 254 292
            C 261 262 251 238 259 208
            C 266 179 260 151 256 124
            C 253 96 257 70 263 42
          "
          fill="none"
          stroke="#22d3ee"
          strokeWidth="28"
          strokeLinecap="round"
          opacity="0.13"
          className="blur-[12px]"
        />

        {/* main trunk */}
        <path
          d="
            M 256 480
            C 246 444 244 414 250 382
            C 257 349 248 321 254 292
            C 261 262 251 238 259 208
            C 266 179 260 151 256 124
            C 253 96 257 70 263 42
          "
          fill="none"
          stroke="#f4f7fb"
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* cyan center */}
        <path
          d="
            M 256 480
            C 246 444 244 414 250 382
            C 257 349 248 321 254 292
            C 261 262 251 238 259 208
            C 266 179 260 151 256 124
            C 253 96 257 70 263 42
          "
          fill="none"
          stroke="#22d3ee"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.8"
          className="drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
        />

        {/* ================================================= */}
        {/* MAJOR BRANCHES                                   */}
        {/* ================================================= */}

        <g
          fill="none"
          stroke="#f4f7fb"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* left main */}
          <path
            d="
              M 252 368
              C 226 350 204 330 184 307
              C 161 282 137 268 111 253
              C 88 240 72 222 60 202
            "
            strokeWidth="13"
          />

          {/* right main */}
          <path
            d="
              M 253 360
              C 282 344 307 326 330 303
              C 355 278 378 258 401 237
              C 423 217 440 207 453 208
            "
            strokeWidth="13"
          />

          {/* upper left */}
          <path
            d="
              M 258 286
              C 233 270 211 248 193 224
              C 175 201 155 180 136 162
              C 117 143 102 123 94 101
            "
            strokeWidth="10"
          />

          {/* upper right */}
          <path
            d="
              M 260 282
              C 288 264 310 242 326 218
              C 341 195 354 176 368 151
              C 382 130 397 117 414 124
            "
            strokeWidth="10"
          />

          {/* crown left */}
          <path
            d="
              M 261 214
              C 237 198 218 177 207 153
              C 196 128 187 102 181 78
            "
            strokeWidth="7"
          />

          {/* crown right */}
          <path
            d="
              M 261 210
              C 278 190 289 167 293 143
              C 297 121 297 103 294 91
            "
            strokeWidth="7"
          />
        </g>

        {/* cyan highlights on major branches */}
        <g
          fill="none"
          stroke="#22d3ee"
          strokeLinecap="round"
          opacity="0.8"
          className="drop-shadow-[0_0_7px_rgba(34,211,238,0.85)]"
        >
          <path
            d="
              M 252 368
              C 226 350 204 330 184 307
              C 161 282 137 268 111 253
              C 88 240 72 222 60 202
            "
            strokeWidth="4"
          />

          <path
            d="
              M 253 360
              C 282 344 307 326 330 303
              C 355 278 378 258 401 237
              C 423 217 440 207 453 208
            "
            strokeWidth="4"
          />

          <path
            d="
              M 258 286
              C 233 270 211 248 193 224
              C 175 201 155 180 136 162
              C 117 143 102 123 94 101
            "
            strokeWidth="3"
          />

          <path
            d="
              M 260 282
              C 288 264 310 242 326 218
              C 341 195 354 176 368 151
              C 382 130 397 117 414 124
            "
            strokeWidth="3"
          />
        </g>

        {/* ================================================= */}
        {/* SMALL TWIGS                                      */}
        {/* ================================================= */}

        <g
          fill="none"
          stroke="#f4f7fb"
          strokeLinecap="round"
          strokeWidth="3"
          opacity="0.9"
        >
          <path d="M 111 253 C 98 233 82 218 67 204" />
          <path d="M 137 268 C 126 250 117 230 108 205" />
          <path d="M 184 307 C 192 287 203 271 211 255" />
          <path d="M 193 224 C 177 205 160 190 145 174" />

          <path d="M 330 303 C 325 285 325 269 326 251" />
          <path d="M 378 258 C 393 239 404 222 414 204" />
          <path d="M 401 237 C 418 222 434 211 451 207" />

          <path d="M 326 218 C 334 195 342 177 349 158" />
          <path d="M 354 176 C 374 154 394 137 414 124" />

          <path d="M 207 153 C 196 126 188 100 177 82" />
          <path d="M 293 143 C 294 121 295 105 292 91" />
        </g>

        {/* ================================================= */}
        {/* ROOTS                                            */}
        {/* ================================================= */}

        {/* ================================================= */}
{/* ROOTS                                            */}
{/* ================================================= */}

{/* Soft cyan root glow */}
<g
  fill="none"
  stroke="#22d3ee"
  strokeLinecap="round"
  opacity="0.18"
  className="blur-[5px]"
>
  <path
    d="M 250 410 C 231 424 212 439 191 449 C 176 457 160 468 143 480"
    strokeWidth="10"
  />

  <path
    d="M 260 412 C 278 427 297 439 317 448 C 335 456 352 469 370 482"
    strokeWidth="10"
  />

  <path
    d="M 253 425 C 240 441 227 452 211 463 C 201 470 191 477 181 488"
    strokeWidth="7"
  />

  <path
    d="M 266 424 C 279 441 291 451 306 461 C 319 470 332 480 342 491"
    strokeWidth="7"
  />
</g>

{/* Main roots */}
<g
  fill="none"
  stroke="#f4f7fb"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* far left */}
  <path
    d="
      M 251 407
      C 232 420 214 432 196 441
      C 178 450 159 463 143 480
    "
    strokeWidth="7"
  />

  {/* left middle */}
  <path
    d="
      M 252 414
      C 238 430 226 442 211 452
      C 198 461 190 473 181 488
    "
    strokeWidth="5"
  />

  {/* left short root */}
  <path
    d="
      M 249 420
      C 233 429 220 435 207 437
      C 194 440 185 446 174 452
    "
    strokeWidth="3.5"
  />

  {/* right main */}
  <path
    d="
      M 262 409
      C 280 421 298 433 317 442
      C 336 451 353 466 370 482
    "
    strokeWidth="7"
  />

  {/* right middle */}
  <path
    d="
      M 265 417
      C 279 431 291 441 306 451
      C 321 462 333 476 342 491
    "
    strokeWidth="5"
  />

  {/* right short root */}
  <path
    d="
      M 268 420
      C 282 429 295 434 309 438
      C 321 442 331 449 341 457
    "
    strokeWidth="3.5"
  />

  {/* tiny left root */}
  <path
    d="
      M 239 425
      C 224 432 211 439 200 448
      C 191 456 181 460 169 463
    "
    strokeWidth="2.5"
  />

  {/* tiny right root */}
  <path
    d="
      M 274 426
      C 287 433 299 440 309 448
      C 319 456 330 460 341 464
    "
    strokeWidth="2.5"
  />
</g>

{/* Cyan root highlights */}
<g
  fill="none"
  stroke="#22d3ee"
  strokeLinecap="round"
  opacity="0.8"
  className="drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]"
>
  <path
    d="M 251 407 C 232 420 214 432 196 441 C 178 450 159 463 143 480"
    strokeWidth="1.5"
  />

  <path
    d="M 252 414 C 238 430 226 442 211 452 C 198 461 190 473 181 488"
    strokeWidth="1"
  />

  <path
    d="M 262 409 C 280 421 298 433 317 442 C 336 451 353 466 370 482"
    strokeWidth="1.5"
  />

  <path
    d="M 265 417 C 279 431 291 441 306 451 C 321 462 333 476 342 491"
    strokeWidth="1"
  />

  <path
    d="M 239 425 C 224 432 211 439 200 448 C 191 456 181 460 169 463"
    strokeWidth="0.8"
  />

  <path
    d="M 274 426 C 287 433 299 440 309 448 C 319 456 330 460 341 464"
    strokeWidth="0.8"
  />
</g>

        {/* ================================================= */}
        {/* FRUITS                                           */}
        {/* ================================================= */}

        {fruits.map((fruit, index) => (
  <Fruit
    key={fruit.id}
    fruit={fruit}
    index={index}
    active={activeSkill === fruit.id}
    onHover={() => setActiveSkill(fruit.id)}
    onLeave={() => setActiveSkill(null)}
  />
))}
              </svg>
      </div>
      {/* Active skill connector */}


      {/* Skill panel */}
      <div className="w-full max-w-[330px] shrink-0 text-center lg:w-[330px] lg:max-w-none lg:translate-y-[8rem] lg:translate-x-[5rem]">
        <div
  className={`
    relative overflow-hidden rounded-2xl border mt-4 w-full min-h-[320px] px-3 pb-5 pt-4 sm:rounded-3xl sm:min-h-[340px] sm:px-5 lg:w-[560px] lg:h-[360px] lg:px-0 lg:pb-8
    backdrop-blur-xl
    transition-all duration-500
    ${
      activeSkill
        ? 'border-cyan-400/20 bg-cyan-400/[0.035] shadow-[inset_0_0_40px_rgba(34,211,238,0.045),0_0_35px_rgba(34,211,238,0.035)]'
        : 'border-white/10 bg-white/[0.025] shadow-[inset_0_0_30px_rgba(34,211,238,0.025)]'
    }
  `}
>
 <motion.div
  animate={{
    opacity: activeSkill ? 1 : 0,
    x: activeSkill ? '100%' : '-100%',
  }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-cyan-300/[0.06] to-transparent blur-xl lg:w-[35rem]"
/>         
          <div className="mb-4">
            <p className="text-[13px] font-bold uppercase tracking-[0.24em] text-cyan-400 text-center translate-y-1">
              Technical Skills
            </p>
           
          </div>

          <div className="grid grid-cols-2 gap-2 translate-y-1 sm:grid-cols-3 sm:gap-2.5 lg:translate-x-1">
            {skills.map((skill) => (
              <div
  key={skill.id}
  className={`
    flex h-9 items-center justify-center rounded-xl border px-2.5 py-1.5 text-center sm:h-10 lg:ml-2 lg:h-8 lg:w-[10rem] lg:px-3 lg:py-4
    ${
      activeSkill === skill.id
        ? 'border-cyan-400/60 bg-cyan-400/[0.08] shadow-[0_0_22px_rgba(34,211,238,0.18)]'
        : 'border-white/[0.07] bg-white/[0.02]'
    }
  `}
>
  <span
    className={`
      text-[11px] font-semibold transition-colors duration-300 sm:text-xs
      ${
        activeSkill === skill.id
          ? 'text-cyan-300'
          : 'text-white/65'
      }
    `}
  >
    {skill.name}
  </span>
</div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
export default SkillTree
