function EmployeeCard({ name, role, avatar }) {
  return (
    <div className="bg-white border border-divider rounded-[24px] p-6 flex flex-col items-center gap-5" style={{ height: '267px', width: '248px' }}>
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
            src="/assets/icons/Indicator_2.svg"
            alt="Status indicators"
          />
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard
