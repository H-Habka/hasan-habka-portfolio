export default function LinesPlanFallback() {
  return (
    <svg
      className="lines-plan-fallback"
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M90 430 C 220 390, 420 360, 600 358 C 820 356, 980 390, 1120 470"
        stroke="#e07a3d"
        strokeWidth="2.2"
      />
      <path
        d="M110 470 C 260 500, 430 518, 600 516 C 790 514, 980 488, 1100 430"
        stroke="#f0a06a"
        strokeWidth="1.4"
        opacity="0.75"
      />
      {[180, 300, 420, 540, 660, 780, 900, 1020].map((x) => (
        <path
          key={x}
          d={`M ${x} 250 C ${x - 18} 340, ${x - 10} 410, ${x} 500`}
          stroke="#f3efe6"
          strokeWidth="1"
          opacity="0.28"
        />
      ))}
      <path
        d="M160 290 C 340 250, 560 238, 760 250 C 920 260, 1040 300, 1100 350"
        stroke="#f3efe6"
        strokeWidth="1.2"
        opacity="0.45"
      />
      <path
        d="M200 560 H 1040"
        stroke="#e07a3d"
        strokeWidth="1"
        opacity="0.35"
        strokeDasharray="8 10"
      />
    </svg>
  )
}
