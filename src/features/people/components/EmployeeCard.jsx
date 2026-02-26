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
      {/* Avatar — pre-composed circular photo + role badge from Figma */}
      <img
        src={avatar}
        alt={name}
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
            src="/assets/icons/Indicator.svg"
            alt="Status indicators"
          />
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard
