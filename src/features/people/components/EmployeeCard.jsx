// Design spec: 1440×1024 viewport → card 248px × 267px. Responsive: scales down on smaller screens, stays fixed on larger.
const CARD_WIDTH = 248
const CARD_HEIGHT = 267

function EmployeeCard({ name, role, avatar }) {
  return (
    <div
      className="bg-white border border-divider rounded-[24px] p-6 flex flex-col items-center gap-5 shrink-0"
      style={{
        width: 'min(248px, 100%)',
        aspectRatio: `${CARD_WIDTH} / ${CARD_HEIGHT}`,
      }}
    >
      {/* Avatar — lazy load and async decode to avoid blocking; explicit size reduces layout shift */}
      <img
        src={avatar}
        alt={name}
        width={133}
        height={133}
        loading="lazy"
        decoding="async"
        className="w-[133px] h-[133px] object-contain shrink-0"
      />

      {/* Info */}
      <div className="flex flex-col items-center gap-1 w-full text-center">
        {/* Name */}
        <span
          className="text-[16px] font-medium text-dark"
          style={{ letterSpacing: '-0.32px' }}
        >
          {name}
        </span>

        {/* Role + indicator */}
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-[14px] font-normal text-primary"
            style={{ letterSpacing: '-0.28px' }}
          >
            {role}
          </span>
          <img
            src="/assets/icons/Indicators.svg"
            alt="Status indicators"
            width={49}
            height={10}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard
