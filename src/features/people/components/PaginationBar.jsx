import MaskIcon from '../../../shared/components/MaskIcon'

function PaginationBar() {
  return (
    <div className="flex items-center gap-8 shrink-0 p-3 h-[61px]">
      {/* Rows per page */}
      <div className="flex items-center gap-4 h-[37px]">
        <span
          className="text-[14px] font-medium text-dark"
          style={{ letterSpacing: '-0.28px' }}
        >
          Rows per page:
        </span>
        <div className="flex items-center justify-center gap-3 h-[37px] w-[76px] rounded-[12px] border border-[#E5E5E4] py-2 px-3 cursor-pointer">
          <span
            className="text-[14px] font-normal text-dark"
            style={{ letterSpacing: '-0.28px' }}
          >
            100
          </span>
          <MaskIcon
            src="/assets/icons/chevron-down.svg"
            color="#3d3936"
            size={10}
          />
        </div>
      </div>

      {/* Page range + prev/next */}
      <div className="flex items-center gap-4 h-[37px]">
        <span
          className="text-[14px] font-normal text-dark"
          style={{ letterSpacing: '-0.28px' }}
        >
          1-100 of 500
        </span>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center p-[6px] rounded border-dark/60">
            <MaskIcon
              src="/assets/icons/chevron-left.svg"
              color="rgba(61, 57, 54, 0.60)"
              size={8}
            />
          </button>
          <button className="flex items-center justify-center p-[6px] rounded border-dark">
            <MaskIcon
              src="/assets/icons/chevron-right-sm.svg"
              color="#3d3936"
              size={8}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaginationBar
