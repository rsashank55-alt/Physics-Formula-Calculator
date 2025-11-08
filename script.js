const formulas = [
  {
    id: "force",
    title: "Force",
    chip: "Newton's 2nd Law",
    description:
      "Relates mass and acceleration to the applied force. Perfect for rocket launches or car pushes.",
    symbol: "F = m × a",
    units: "Newtons (N)",
    inputs: [
      {
        id: "mass",
        label: "Mass",
        placeholder: "e.g. 70",
        unit: "kg",
        min: 0,
      },
      {
        id: "acceleration",
        label: "Acceleration",
        placeholder: "e.g. 3.5",
        unit: "m/s²",
        min: 0,
      },
    ],
    calculate: ({ mass, acceleration }) => mass * acceleration,
    explain: ({ mass, acceleration }, result) => [
      `We started with Newton's second law: <strong>${"F = m × a"}</strong>.`,
      `By plugging in mass <strong>${mass} kg</strong> and acceleration <strong>${acceleration} m/s²</strong>, we compute <strong>F = ${mass} × ${acceleration}</strong>.`,
      `Multiplying gives <strong>${result.toFixed(2)} N</strong>, which means that's the amount of push needed for that acceleration.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene force-scene" role="img" aria-label="Rocket lifting off due to force">
        <defs>
          <linearGradient id="rocketGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="100%" stop-color="#d1d5ff" />
          </linearGradient>
        </defs>
        <rect width="320" height="220" fill="none" />
        <g class="stars">
          <circle cx="40" cy="30" r="2"/>
          <circle cx="90" cy="80" r="1.6"/>
          <circle cx="280" cy="60" r="2.2"/>
          <circle cx="250" cy="150" r="1.8"/>
          <circle cx="60" cy="160" r="1.4"/>
        </g>
        <g class="rocket">
          <polygon points="160,60 140,110 180,110" fill="url(#rocketGradient)" />
          <rect x="143" y="110" width="34" height="50" rx="6" fill="url(#rocketGradient)" />
          <polygon points="143,130 123,155 143,155" fill="#ff8b4c" />
          <polygon points="177,130 197,155 177,155" fill="#ff8b4c" />
          <circle cx="160" cy="130" r="8" fill="#6c63ff" />
        </g>
        <g class="exhaust">
          <path d="M160 160 L150 210 L170 210 Z" fill="#ffb347" opacity="0.9"/>
          <path d="M160 160 L155 210 L165 210 Z" fill="#ffd194" opacity="0.7"/>
        </g>
        <g class="thrust-lines">
          <line x1="130" y1="190" x2="120" y2="220" stroke="#6c63ff" stroke-width="2"/>
          <line x1="190" y1="190" x2="200" y2="220" stroke="#6c63ff" stroke-width="2"/>
        </g>
      </svg>
    `,
  },
  {
    id: "kinetic-energy",
    title: "Kinetic Energy",
    chip: "Energy of Motion",
    description:
      "Measures how much energy an object holds while moving. Think speeding cars or flying baseballs.",
    symbol: "KE = ½ m v²",
    units: "Joules (J)",
    inputs: [
      {
        id: "mass",
        label: "Mass",
        placeholder: "e.g. 0.145",
        unit: "kg",
        min: 0,
      },
      {
        id: "velocity",
        label: "Velocity",
        placeholder: "e.g. 38",
        unit: "m/s",
        min: 0,
      },
    ],
    calculate: ({ mass, velocity }) => 0.5 * mass * velocity * velocity,
    explain: ({ mass, velocity }, result) => [
      `Kinetic energy follows <strong>KE = ½ × m × v²</strong>.`,
      `We square the velocity first: <strong>v² = ${velocity}² = ${(velocity * velocity).toFixed(
        2
      )}</strong>.`,
      `Then multiply by half the mass: <strong>½ × ${mass} × ${(velocity * velocity).toFixed(
        2
      )} = ${result.toFixed(2)} J</strong>.`,
      `So the moving object stores <strong>${result.toFixed(
        2
      )} Joules</strong> of energy.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene kinetic-scene" role="img" aria-label="Rolling sphere gaining kinetic energy">
        <rect width="320" height="220" fill="none" />
        <g class="terrain">
          <path d="M0 170 Q120 120 220 150 T320 140 L320 220 L0 220 Z" fill="rgba(108,99,255,0.15)" />
        </g>
        <g class="motion-line">
          <line x1="50" y1="150" x2="270" y2="150" stroke="#5ad1a6" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 10"/>
        </g>
        <g class="rolling-ball">
          <circle cx="90" cy="150" r="26" fill="#ffb347" />
          <circle cx="90" cy="150" r="14" fill="#ffe4c7" />
        </g>
        <g class="speed-trails">
          <line x1="120" y1="135" x2="170" y2="135" stroke="#ff6f61" stroke-width="3" stroke-linecap="round"/>
          <line x1="130" y1="160" x2="185" y2="160" stroke="#ff6f61" stroke-width="3" stroke-linecap="round"/>
        </g>
      </svg>
    `,
  },
  {
    id: "potential-energy",
    title: "Gravitational Potential",
    chip: "Stored Energy",
    description:
      "Energy stored by lifting something against gravity. Ideal for roller coasters or dropped objects.",
    symbol: "PE = m g h",
    units: "Joules (J)",
    inputs: [
      {
        id: "mass",
        label: "Mass",
        placeholder: "e.g. 2.5",
        unit: "kg",
        min: 0,
      },
      {
        id: "height",
        label: "Height",
        placeholder: "e.g. 12",
        unit: "m",
        min: 0,
      },
      {
        id: "gravity",
        label: "Gravity (optional)",
        placeholder: "Default 9.81",
        unit: "m/s²",
        min: 0,
        optional: true,
        defaultValue: 9.81,
      },
    ],
    calculate: ({ mass, height, gravity = 9.81 }) => mass * gravity * height,
    explain: ({ mass, height, gravity = 9.81 }, result) => [
      `Potential energy is <strong>PE = m × g × h</strong>.`,
      `We multiply mass <strong>${mass} kg</strong> by gravity <strong>${gravity} m/s²</strong>, giving <strong>${(
        mass * gravity
      ).toFixed(2)}</strong>.`,
      `Now multiply by height <strong>${height} m</strong> to get <strong>${result.toFixed(
        2
      )} J</strong>.`,
      `This is the energy waiting to convert into motion if the object falls.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene potential-scene" role="img" aria-label="Platform with weight showing potential energy">
        <rect width="320" height="220" fill="none" />
        <g class="platform">
          <rect x="40" y="160" width="240" height="12" rx="6" fill="rgba(90,209,166,0.2)" />
          <rect x="140" y="80" width="40" height="80" rx="12" fill="#6c63ff" />
        </g>
        <g class="weight">
          <rect x="130" y="50" width="60" height="60" rx="12" fill="#ff616d" />
          <text x="160" y="88" text-anchor="middle" font-size="18" fill="#fff">m</text>
        </g>
        <g class="height-arrow">
          <line x1="210" y1="50" x2="210" y2="160" stroke="#ffd166" stroke-width="4" stroke-linecap="round"/>
          <polygon points="210,40 202,58 218,58" fill="#ffd166"/>
          <polygon points="210,170 202,152 218,152" fill="#ffd166"/>
        </g>
        <text x="228" y="110" font-size="16" fill="#ffd166">h</text>
      </svg>
    `,
  },
  {
    id: "momentum",
    title: "Momentum",
    chip: "Inertia in Motion",
    description:
      "Captures how difficult it is to stop a moving object. Helpful for collisions and impact studies.",
    symbol: "p = m × v",
    units: "kg·m/s",
    inputs: [
      {
        id: "mass",
        label: "Mass",
        placeholder: "e.g. 0.45",
        unit: "kg",
        min: 0,
      },
      {
        id: "velocity",
        label: "Velocity",
        placeholder: "e.g. 27",
        unit: "m/s",
        min: 0,
      },
    ],
    calculate: ({ mass, velocity }) => mass * velocity,
    explain: ({ mass, velocity }, result) => [
      `Momentum uses <strong>p = m × v</strong>.`,
      `We insert mass <strong>${mass} kg</strong> and velocity <strong>${velocity} m/s</strong>.`,
      `Multiplying them yields <strong>${result.toFixed(
        2
      )} kg·m/s</strong>, representing the object's motion punch.`,
      `Higher mass or speed, bigger momentum — tougher to bring to rest.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene momentum-scene" role="img" aria-label="Cart moving showing momentum">
        <rect width="320" height="220" fill="none" />
        <g class="track">
          <rect x="40" y="160" width="240" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
          <line x1="60" y1="170" x2="260" y2="170" stroke="#6c63ff" stroke-width="2" stroke-dasharray="12 8"/>
        </g>
        <g class="cart">
          <rect x="110" y="120" width="100" height="40" rx="12" fill="#ffd166" />
          <circle cx="130" cy="165" r="14" fill="#2d3056" />
          <circle cx="190" cy="165" r="14" fill="#2d3056" />
          <circle cx="130" cy="165" r="6" fill="#9ee7ff" />
          <circle cx="190" cy="165" r="6" fill="#9ee7ff" />
        </g>
        <g class="momentum-arrows">
          <line x1="230" y1="140" x2="280" y2="140" stroke="#ff6f61" stroke-width="4" stroke-linecap="round"/>
          <polygon points="280,140 268,132 268,148" fill="#ff6f61"/>
          <line x1="230" y1="150" x2="270" y2="150" stroke="#ff6f61" stroke-width="4" stroke-linecap="round"/>
        </g>
      </svg>
    `,
  },
  {
    id: "work",
    title: "Work",
    chip: "Energy Transfer",
    description:
      "Measures the energy transferred when a force moves something over a distance.",
    symbol: "W = F × d",
    units: "Joules (J)",
    inputs: [
      { id: "force", label: "Force", placeholder: "e.g. 120", unit: "N", min: 0 },
      { id: "distance", label: "Distance", placeholder: "e.g. 8", unit: "m", min: 0 },
    ],
    calculate: ({ force, distance }) => force * distance,
    explain: ({ force, distance }, result) => [
      `We begin with <strong>W = F × d</strong> — work equals force times distance.`,
      `Multiply force <strong>${force} N</strong> by distance <strong>${distance} m</strong>.`,
      `That gives <strong>${result.toFixed(2)} J</strong>, the energy delivered by the push.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene work-scene" role="img" aria-label="Worker pushing a box">
        <rect width="320" height="220" fill="none" />
        <g class="ground">
          <rect x="30" y="170" width="260" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
        </g>
        <g class="box">
          <rect x="70" y="120" width="80" height="60" rx="10" fill="#ffb347" />
          <rect x="70" y="120" width="80" height="20" rx="10" fill="#ffd68a" />
        </g>
        <g class="person">
          <circle cx="60" cy="120" r="12" fill="#6c63ff" />
          <rect x="54" y="130" width="12" height="40" rx="6" fill="#6c63ff" />
          <rect x="50" y="162" width="8" height="25" rx="4" fill="#5ad1a6" />
          <rect x="66" y="162" width="8" height="25" rx="4" fill="#5ad1a6" />
        </g>
        <g class="force-arrow">
          <line x1="160" y1="150" x2="240" y2="150" stroke="#ff6f61" stroke-width="5" stroke-linecap="round" />
          <polygon points="240,150 225,140 225,160" fill="#ff6f61" />
        </g>
      </svg>
    `,
  },
  {
    id: "power",
    title: "Power",
    chip: "Rate of Work",
    description:
      "Shows how fast energy is transferred. Useful for engines or appliances.",
    symbol: "P = W ÷ t",
    units: "Watts (W)",
    inputs: [
      { id: "work", label: "Work", placeholder: "e.g. 4500", unit: "J", min: 0 },
      { id: "time", label: "Time", placeholder: "e.g. 12", unit: "s", min: 0.0001 },
    ],
    calculate: ({ work, time }) => work / time,
    explain: ({ work, time }, result) => [
      `Power is <strong>P = W ÷ t</strong> — energy spent per second.`,
      `Divide work <strong>${work} J</strong> by time <strong>${time} s</strong>.`,
      `Result: <strong>${result.toFixed(2)} W</strong>, the rate energy is used.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene power-scene" role="img" aria-label="Turbine spinning to show power">
        <rect width="320" height="220" fill="none" />
        <g class="turbine">
          <circle cx="160" cy="120" r="18" fill="#2d3056" />
          <g class="blades">
            <polygon points="160,120 160,60 178,96" fill="#9ee7ff" />
            <polygon points="160,120 220,120 184,138" fill="#9ee7ff" />
            <polygon points="160,120 160,180 142,144" fill="#9ee7ff" />
            <polygon points="160,120 100,120 136,102" fill="#9ee7ff" />
          </g>
        </g>
        <circle cx="160" cy="120" r="60" fill="rgba(108,99,255,0.15)" />
        <g class="energy-rings">
          <circle cx="160" cy="120" r="80" fill="none" stroke="#ffd166" stroke-width="2" stroke-dasharray="12 16" />
        </g>
      </svg>
    `,
  },
  {
    id: "pressure",
    title: "Pressure",
    chip: "Force per Area",
    description:
      "Helps understand how force spreads out over surfaces like tires or pistons.",
    symbol: "P = F ÷ A",
    units: "Pascals (Pa)",
    inputs: [
      { id: "force", label: "Force", placeholder: "e.g. 900", unit: "N", min: 0 },
      { id: "area", label: "Area", placeholder: "e.g. 0.25", unit: "m²", min: 0.0001 },
    ],
    calculate: ({ force, area }) => force / area,
    explain: ({ force, area }, result) => [
      `Pressure follows <strong>P = F ÷ A</strong>.`,
      `Divide force <strong>${force} N</strong> by surface area <strong>${area} m²</strong>.`,
      `That yields <strong>${result.toFixed(2)} Pa</strong>, the squeeze on the surface.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene pressure-scene" role="img" aria-label="Piston compressing fluid">
        <rect width="320" height="220" fill="none" />
        <g class="chamber">
          <rect x="90" y="60" width="140" height="120" rx="18" fill="rgba(94,186,255,0.2)" stroke="#5ad1a6" stroke-width="2"/>
        </g>
        <g class="piston">
          <rect x="110" y="40" width="100" height="30" rx="10" fill="#ff6f61" />
          <rect x="120" y="70" width="80" height="30" rx="8" fill="#ffd166" />
        </g>
        <g class="pressure-arrows">
          <line x1="120" y1="120" x2="90" y2="120" stroke="#6c63ff" stroke-width="4" stroke-linecap="round"/>
          <line x1="200" y1="120" x2="230" y2="120" stroke="#6c63ff" stroke-width="4" stroke-linecap="round"/>
          <line x1="160" y1="90" x2="160" y2="70" stroke="#6c63ff" stroke-width="4" stroke-linecap="round"/>
          <line x1="160" y1="150" x2="160" y2="170" stroke="#6c63ff" stroke-width="4" stroke-linecap="round"/>
        </g>
      </svg>
    `,
  },
  {
    id: "density",
    title: "Density",
    chip: "Mass per Volume",
    description:
      "Reveals how tightly matter is packed. Great for comparing materials.",
    symbol: "ρ = m ÷ V",
    units: "kg/m³",
    inputs: [
      { id: "mass", label: "Mass", placeholder: "e.g. 540", unit: "kg", min: 0 },
      { id: "volume", label: "Volume", placeholder: "e.g. 0.7", unit: "m³", min: 0.0001 },
    ],
    calculate: ({ mass, volume }) => mass / volume,
    explain: ({ mass, volume }, result) => [
      `Density uses <strong>ρ = m ÷ V</strong>.`,
      `Divide mass <strong>${mass} kg</strong> by volume <strong>${volume} m³</strong>.`,
      `The result <strong>${result.toFixed(2)} kg/m³</strong> tells how compact the material is.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene density-scene" role="img" aria-label="Fluid layers illustrating density">
        <rect width="320" height="220" fill="none" />
        <g class="beaker">
          <rect x="110" y="50" width="100" height="130" rx="20" fill="none" stroke="#9ee7ff" stroke-width="3"/>
        </g>
        <g class="layers">
          <rect x="120" y="150" width="80" height="20" fill="#ff616d" />
          <rect x="120" y="130" width="80" height="20" fill="#ffd166" />
          <rect x="120" y="110" width="80" height="20" fill="#5ad1a6" />
        </g>
        <g class="bubbles">
          <circle cx="150" cy="100" r="6" fill="#9ee7ff" />
          <circle cx="180" cy="90" r="4" fill="#9ee7ff" />
          <circle cx="170" cy="70" r="5" fill="#9ee7ff" />
        </g>
      </svg>
    `,
  },
  {
    id: "ohms-law",
    title: "Ohm's Law",
    chip: "Voltage Drop",
    description:
      "Links voltage, current, and resistance in electric circuits.",
    symbol: "V = I × R",
    units: "Volts (V)",
    inputs: [
      { id: "current", label: "Current", placeholder: "e.g. 2.2", unit: "A", min: 0 },
      { id: "resistance", label: "Resistance", placeholder: "e.g. 18", unit: "Ω", min: 0 },
    ],
    calculate: ({ current, resistance }) => current * resistance,
    explain: ({ current, resistance }, result) => [
      `Ohm's law is <strong>V = I × R</strong>.`,
      `Multiply current <strong>${current} A</strong> by resistance <strong>${resistance} Ω</strong>.`,
      `We get <strong>${result.toFixed(2)} V</strong>, the needed voltage.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene ohms-scene" role="img" aria-label="Circuit showing voltage">
        <rect width="320" height="220" fill="none" />
        <g class="wire">
          <rect x="60" y="100" width="200" height="40" rx="20" fill="rgba(255,255,255,0.1)" />
        </g>
        <g class="resistor">
          <rect x="140" y="100" width="80" height="40" rx="16" fill="#ffb347" />
          <path d="M150 120 h10 l5 -10 l10 20 l10 -20 l5 10 h10" stroke="#ff6f61" stroke-width="4" fill="none" />
        </g>
        <g class="current-dots">
          <circle cx="80" cy="120" r="6" fill="#5ad1a6" />
          <circle cx="110" cy="120" r="6" fill="#5ad1a6" />
          <circle cx="230" cy="120" r="6" fill="#5ad1a6" />
          <circle cx="260" cy="120" r="6" fill="#5ad1a6" />
        </g>
      </svg>
    `,
  },
  {
    id: "electrical-power",
    title: "Electrical Power",
    chip: "Bright Output",
    description:
      "Shows how much electrical energy flows each second.",
    symbol: "P = V × I",
    units: "Watts (W)",
    inputs: [
      { id: "voltage", label: "Voltage", placeholder: "e.g. 120", unit: "V", min: 0 },
      { id: "current", label: "Current", placeholder: "e.g. 0.8", unit: "A", min: 0 },
    ],
    calculate: ({ voltage, current }) => voltage * current,
    explain: ({ voltage, current }, result) => [
      `Electrical power uses <strong>P = V × I</strong>.`,
      `Multiply voltage <strong>${voltage} V</strong> by current <strong>${current} A</strong>.`,
      `We obtain <strong>${result.toFixed(2)} W</strong>, the device output.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene elec-power-scene" role="img" aria-label="Light bulb glowing">
        <rect width="320" height="220" fill="none" />
        <g class="bulb">
          <ellipse cx="160" cy="110" rx="32" ry="40" fill="#ffd166" />
          <ellipse cx="160" cy="110" rx="20" ry="26" fill="#fff5cc" />
          <rect x="146" y="146" width="28" height="30" rx="8" fill="#9ee7ff" />
        </g>
        <g class="glow">
          <circle cx="160" cy="110" r="60" fill="rgba(255,209,102,0.18)" />
          <circle cx="160" cy="110" r="90" fill="rgba(255,209,102,0.08)" />
        </g>
      </svg>
    `,
  },
  {
    id: "electric-charge",
    title: "Electric Charge",
    chip: "Flow Over Time",
    description:
      "Measures how much charge flows when current runs for a duration.",
    symbol: "Q = I × t",
    units: "Coulombs (C)",
    inputs: [
      { id: "current", label: "Current", placeholder: "e.g. 1.5", unit: "A", min: 0 },
      { id: "time", label: "Time", placeholder: "e.g. 45", unit: "s", min: 0 },
    ],
    calculate: ({ current, time }) => current * time,
    explain: ({ current, time }, result) => [
      `Charge collected follows <strong>Q = I × t</strong>.`,
      `Multiply current <strong>${current} A</strong> by time <strong>${time} s</strong>.`,
      `You get <strong>${result.toFixed(2)} C</strong> of charge.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene charge-scene" role="img" aria-label="Charges moving along a conductor">
        <rect width="320" height="220" fill="none" />
        <g class="conductor">
          <rect x="60" y="120" width="200" height="30" rx="15" fill="rgba(108,99,255,0.2)" />
        </g>
        <g class="charge-dots">
          <circle cx="90" cy="135" r="7" fill="#ff6f61" />
          <circle cx="140" cy="135" r="7" fill="#ff6f61" />
          <circle cx="190" cy="135" r="7" fill="#ff6f61" />
          <circle cx="240" cy="135" r="7" fill="#ff6f61" />
        </g>
        <g class="flow-arrow">
          <line x1="80" y1="175" x2="240" y2="175" stroke="#5ad1a6" stroke-width="4" stroke-linecap="round" />
          <polygon points="240,175 228,167 228,183" fill="#5ad1a6" />
        </g>
      </svg>
    `,
  },
  {
    id: "wave-speed",
    title: "Wave Speed",
    chip: "Motion of Waves",
    description:
      "Connects frequency and wavelength to show how fast waves travel.",
    symbol: "v = f × λ",
    units: "m/s",
    inputs: [
      { id: "frequency", label: "Frequency", placeholder: "e.g. 60", unit: "Hz", min: 0 },
      { id: "wavelength", label: "Wavelength", placeholder: "e.g. 0.8", unit: "m", min: 0 },
    ],
    calculate: ({ frequency, wavelength }) => frequency * wavelength,
    explain: ({ frequency, wavelength }, result) => [
      `Wave speed follows <strong>v = f × λ</strong>.`,
      `Multiply frequency <strong>${frequency} Hz</strong> by wavelength <strong>${wavelength} m</strong>.`,
      `This yields <strong>${result.toFixed(2)} m/s</strong>, the wave's travel speed.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene wave-scene" role="img" aria-label="Sine wave illustrating wave speed">
        <rect width="320" height="220" fill="none" />
        <g class="wave-line">
          <path d="M40 140 C80 80, 120 80, 160 140 S240 200, 280 140" stroke="#9ee7ff" stroke-width="5" fill="none" />
        </g>
        <g class="wave-dots">
          <circle cx="80" cy="110" r="6" fill="#ffd166" />
          <circle cx="160" cy="140" r="6" fill="#ffd166" />
          <circle cx="240" cy="110" r="6" fill="#ffd166" />
        </g>
      </svg>
    `,
  },
  {
    id: "wave-period",
    title: "Wave Period",
    chip: "Time for Cycle",
    description:
      "Tells how long a repeating wave takes for one cycle.",
    symbol: "T = 1 ÷ f",
    units: "Seconds (s)",
    inputs: [{ id: "frequency", label: "Frequency", placeholder: "e.g. 2.5", unit: "Hz", min: 0.0001 }],
    calculate: ({ frequency }) => 1 / frequency,
    explain: ({ frequency }, result) => [
      `Period is <strong>T = 1 ÷ f</strong>.`,
      `Take the reciprocal of frequency <strong>${frequency} Hz</strong>.`,
      `You get <strong>${result.toFixed(2)} s</strong> for one full oscillation.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene period-scene" role="img" aria-label="Clock hand showing period">
        <rect width="320" height="220" fill="none" />
        <g class="clock">
          <circle cx="160" cy="120" r="50" fill="rgba(255,255,255,0.12)" stroke="#6c63ff" stroke-width="3" />
          <circle cx="160" cy="120" r="4" fill="#ffd166" />
          <line x1="160" y1="120" x2="160" y2="80" stroke="#ffd166" stroke-width="4" stroke-linecap="round" />
          <line x1="160" y1="120" x2="200" y2="120" stroke="#ff616d" stroke-width="4" stroke-linecap="round" />
        </g>
      </svg>
    `,
  },
  {
    id: "gravity",
    title: "Gravitational Force",
    chip: "Universal Pull",
    description:
      "Calculates the attraction between two masses at a distance.",
    symbol: "F = G m₁ m₂ ÷ r²",
    units: "Newtons (N)",
    inputs: [
      {
        id: "mass1",
        label: "Mass 1",
        placeholder: "e.g. 5.97e24",
        unit: "kg",
        min: 0,
      },
      {
        id: "mass2",
        label: "Mass 2",
        placeholder: "e.g. 80",
        unit: "kg",
        min: 0,
      },
      {
        id: "distance",
        label: "Separation",
        placeholder: "e.g. 6.37e6",
        unit: "m",
        min: 0.0001,
      },
      {
        id: "gravityConstant",
        label: "Gravitational Constant",
        placeholder: "Default 6.674e-11",
        unit: "N·m²/kg²",
        optional: true,
        defaultValue: 6.674e-11,
        min: 0,
      },
    ],
    calculate: ({ mass1, mass2, distance, gravityConstant = 6.674e-11 }) =>
      (gravityConstant * mass1 * mass2) / (distance * distance),
    explain: ({ mass1, mass2, distance, gravityConstant = 6.674e-11 }, result) => [
      `Newton's law of gravity: <strong>F = G × m₁ × m₂ ÷ r²</strong>.`,
      `Multiply the masses: <strong>${mass1} × ${mass2}</strong> and the constant <strong>${gravityConstant}</strong>.`,
      `Divide by distance squared <strong>${distance}² = ${(distance * distance).toExponential(2)}</strong> to get <strong>${result.toExponential(
        2
      )} N</strong>.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene gravity-scene" role="img" aria-label="Planets attracting each other">
        <rect width="320" height="220" fill="none" />
        <g class="planet planet-one">
          <circle cx="100" cy="120" r="30" fill="#5ad1a6" />
        </g>
        <g class="planet planet-two">
          <circle cx="220" cy="120" r="20" fill="#ff6f61" />
        </g>
        <g class="gravity-lines">
          <line x1="120" y1="120" x2="200" y2="120" stroke="#ffd166" stroke-width="4" stroke-dasharray="12 8"/>
        </g>
      </svg>
    `,
  },
  {
    id: "thermal-energy",
    title: "Thermal Energy",
    chip: "Heating Up",
    description:
      "Finds the energy needed to change temperature of a substance.",
    symbol: "Q = m c ΔT",
    units: "Joules (J)",
    inputs: [
      { id: "mass", label: "Mass", placeholder: "e.g. 0.5", unit: "kg", min: 0 },
      {
        id: "specificHeat",
        label: "Specific Heat",
        placeholder: "e.g. 4186",
        unit: "J/kg·°C",
        min: 0,
      },
      {
        id: "deltaTemp",
        label: "Temperature Change",
        placeholder: "e.g. 25",
        unit: "°C",
      },
    ],
    calculate: ({ mass, specificHeat, deltaTemp }) => mass * specificHeat * deltaTemp,
    explain: ({ mass, specificHeat, deltaTemp }, result) => [
      `Thermal energy follows <strong>Q = m × c × ΔT</strong>.`,
      `Multiply mass <strong>${mass} kg</strong> with specific heat <strong>${specificHeat} J/kg·°C</strong>.`,
      `Then multiply by temperature change <strong>${deltaTemp}°C</strong> to get <strong>${result.toFixed(
        2
      )} J</strong>.`,
    ],
    illustration: () => `
      <svg viewBox="0 0 320 220" class="scene thermal-scene" role="img" aria-label="Thermometer rising">
        <rect width="320" height="220" fill="none" />
        <g class="thermometer">
          <rect x="150" y="60" width="20" height="110" rx="10" fill="rgba(255,255,255,0.15)" />
          <circle cx="160" cy="170" r="20" fill="#ff6f61" />
        </g>
        <g class="mercury">
          <rect x="154" y="110" width="12" height="60" rx="6" fill="#ffd166" />
          <circle cx="160" cy="170" r="12" fill="#ffd166" />
        </g>
        <g class="heat-waves">
          <path d="M110 70 q10 10 0 20" stroke="#ffb347" stroke-width="3" fill="none" />
          <path d="M210 90 q10 10 0 20" stroke="#ffb347" stroke-width="3" fill="none" />
        </g>
      </svg>
    `,
  },
];

const floatingEmojis = ["🚀", "⚛️", "⚙️", "🧪", "🌌", "📐"];

const state = {
  activeFormula: null,
  toastStep: 0,
  toastVisible: false,
  lastFocusElement: null,
};

const form = document.getElementById("inputForm");
const formulaCardsContainer = document.getElementById("formulaCards");
const illustrationContainer = document.getElementById("illustration");
const illustrationTitle = document.getElementById("illustrationTitle");
const calculateButton = document.getElementById("calculateButton");
const calculatorTitle = document.getElementById("calculatorTitle");
const interactionModal = document.getElementById("interactionModal");
const interactiveArea = document.querySelector(".interactive-area");
const resultCard = document.getElementById("resultCard");
const resultBadge = document.getElementById("resultBadge");
const resultValue = document.getElementById("resultValue");
const resultUnits = document.getElementById("resultUnits");
const explanationList = document.getElementById("explanation");
const tourButton = document.getElementById("tourButton");
const resultArea = document.querySelector(".result-area");
const closeModalButton = document.getElementById("closeModal");

const toast = document.createElement("div");
toast.className = "tour-toast";
document.body.appendChild(toast);

function createEmojiSparkles() {
  floatingEmojis.forEach((emoji, index) => {
    const span = document.createElement("span");
    span.className = "emoji-flare";
    span.textContent = emoji;
    span.style.setProperty("--delay", `${index * 1.2}s`);
    document.body.appendChild(span);
  });
}

function hideToast() {
  toast.classList.remove("visible");
  state.toastVisible = false;
}

function updateToast(step) {
  const steps = [
    {
      title: "Welcome!",
      text: "Pick any animated card to start exploring a formula.",
    },
    {
      title: "Inputs",
      text: "Fill the values in the right column. Invalid entries will glow red.",
    },
    {
      title: "Explanations",
      text: "Hit calculate to get a step-by-step story of the math.",
    },
  ];
  const current = steps[step] || steps[0];
  toast.innerHTML = `
    <div><strong>${current.title}</strong></div>
    <div class="toast-step">${current.text}</div>
    <div class="toast-controls">
      <button class="toast-button" data-action="prev">Back</button>
      <button class="toast-button" data-action="next">Next</button>
      <button class="toast-button" data-action="close">Got it</button>
    </div>
  `;
  toast.classList.add("visible");
  state.toastVisible = true;
}

function attachToastEvents() {
  toast.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (!action) return;
    if (action === "next") {
      state.toastStep = (state.toastStep + 1) % 3;
      updateToast(state.toastStep);
    } else if (action === "prev") {
      state.toastStep = (state.toastStep + 2) % 3;
      updateToast(state.toastStep);
    } else if (action === "close") {
      hideToast();
    }
  });
}

function renderCards() {
  const template = document.getElementById("cardTemplate");
  formulas.forEach((formula) => {
    const clone = template.content.cloneNode(true);
    const article = clone.querySelector(".formula-card");
    article.dataset.formula = formula.id;
    article.tabIndex = 0;
    article.setAttribute("role", "button");
    article.setAttribute("aria-pressed", "false");
    article.querySelector(".card-title").textContent = formula.title;
    article.querySelector(".card-chip").textContent = formula.symbol;
    article.querySelector(".card-description").textContent =
      formula.description;
    const selectButton = clone.querySelector(".select-button");
    selectButton.setAttribute("type", "button");
    selectButton.dataset.formula = formula.id;
    formulaCardsContainer.appendChild(clone);
  });
}

function handleCardClick(event) {
  const targetButton = event.target.closest(".select-button");
  if (targetButton && targetButton.dataset.formula) {
    event.preventDefault();
    selectFormula(targetButton.dataset.formula);
    return;
  }

  const card = event.target.closest(".formula-card");
  if (!card) return;
  event.preventDefault();
  selectFormula(card.dataset.formula);
}

function handleCardKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".formula-card");
  if (!card) return;
  event.preventDefault();
  selectFormula(card.dataset.formula);
}

function openInteractionModal() {
  if (!interactionModal) return;
  interactionModal.classList.add("active");
  interactionModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeInteractionModal() {
  if (!interactionModal) return;
  interactionModal.classList.remove("active");
  interactionModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (state.lastFocusElement) {
    state.lastFocusElement.focus({ preventScroll: true });
    state.lastFocusElement = null;
  }
}

function selectFormula(formulaId, options = {}) {
  const formula = formulas.find((entry) => entry.id === formulaId);
  if (!formula) return;

  state.activeFormula = formula;
  calculatorTitle.textContent = `${formula.title} inputs`;
  illustrationTitle.textContent = formula.title;
  illustrationContainer.innerHTML = formula.illustration();

  document.querySelectorAll(".formula-card").forEach((card) => {
    const isActive = card.dataset.formula === formulaId;
    card.classList.toggle("active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });

  renderInputs(formula);
  calculateButton.disabled = false;
  resultBadge.classList.add("hidden");
  resultValue.textContent = "—";
  resultUnits.textContent = "";
  explanationList.innerHTML = "";
  interactiveArea?.classList.add("active");
  resultArea?.classList.add("active");

  if (!options.silent) {
    state.lastFocusElement =
      document.querySelector(`.formula-card[data-formula="${formulaId}"]`) || null;
    openInteractionModal();
  }

  const firstInput = form.querySelector("input");
  if (firstInput) {
    setTimeout(() => firstInput.focus({ preventScroll: true }), 250);
  }
}

function renderInputs(formula) {
  form.innerHTML = "";
  formula.inputs.forEach((input) => {
    const group = document.createElement("div");
    group.className = "input-group";
    const label = document.createElement("label");
    label.setAttribute("for", input.id);
    label.innerHTML = `${input.label} <span class="unit">${input.unit}</span>`;
    const inputField = document.createElement("input");
    inputField.type = "number";
    inputField.id = input.id;
    inputField.name = input.id;
    inputField.min = input.min ?? "";
    inputField.step = "any";
    inputField.placeholder = input.placeholder || "";
    inputField.required = !input.optional;
    if (input.defaultValue !== undefined) {
      inputField.value = input.defaultValue;
    }
    inputField.addEventListener("input", () => {
      inputField.classList.remove("invalid");
    });
    group.appendChild(label);
    group.appendChild(inputField);
    form.appendChild(group);
  });
}

function readInputs() {
  if (!state.activeFormula) return null;
  const values = {};
  let valid = true;
  state.activeFormula.inputs.forEach((input) => {
    const field = document.getElementById(input.id);
    if (!field) return;
    const { value } = field;
    if (!value && input.optional) {
      values[input.id] = input.defaultValue;
      return;
    }
    if (value.trim() === "") {
      field.classList.add("invalid");
      valid = false;
      return;
    }
    const numericValue = Number(value);
    if (!Number.isFinite(numericValue) || numericValue < (input.min ?? -Infinity)) {
      field.classList.add("invalid");
      valid = false;
      return;
    }
    values[input.id] = numericValue;
  });
  return valid ? values : null;
}

function animateResult() {
  resultCard.classList.remove("pop");
  void resultCard.offsetWidth;
  resultCard.classList.add("pop");

  resultBadge.classList.remove("hidden");
  resultBadge.textContent = "Fresh";
  resultBadge.classList.remove("flash");
  void resultBadge.offsetWidth;
  resultBadge.classList.add("flash");
}

function buildExplanation(steps) {
  explanationList.innerHTML = "";
  steps.forEach((step) => {
    const div = document.createElement("div");
    div.className = "explanation-step";
    div.innerHTML = step;
    explanationList.appendChild(div);
  });
}

function calculate() {
  if (!state.activeFormula) return;
  const data = readInputs();
  if (!data) return;

  const result = state.activeFormula.calculate(data);
  animateResult();
  resultValue.textContent = result.toFixed(2);
  resultUnits.textContent = state.activeFormula.units;
  buildExplanation(state.activeFormula.explain(data, result));
}

function init() {
  renderCards();
  formulaCardsContainer.addEventListener("click", handleCardClick);
  formulaCardsContainer.addEventListener("keydown", handleCardKeydown);
  closeModalButton?.addEventListener("click", () => closeInteractionModal());
  interactionModal?.addEventListener("click", (event) => {
    if (event.target.dataset.close === "true") {
      closeInteractionModal();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeInteractionModal();
    }
  });
  createEmojiSparkles();
  attachToastEvents();
  selectFormula(formulas[0].id, { silent: true });
  tourButton.addEventListener("click", () => {
    state.toastStep = 0;
    updateToast(state.toastStep);
  });
  calculateButton.addEventListener("click", (event) => {
    event.preventDefault();
    calculate();
  });
}

document.addEventListener("DOMContentLoaded", init);

