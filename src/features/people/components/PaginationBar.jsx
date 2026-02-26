import { useState, useRef, useEffect } from 'react'
import MaskIcon from '../../../shared/components/MaskIcon'

const ROWS_PER_PAGE_OPTIONS = [10, 25, 50, 100]

const optionStyle = 'text-[14px] font-normal text-dark py-2 px-3 cursor-pointer hover:bg-[#F5F5F4] first:rounded-t-[11px] last:rounded-b-[11px] transition-colors'
const optionLetterSpacing = { letterSpacing: '-0.28px' }

function PaginationBar() {
  const [rowsPerPage, setRowsPerPage] = useState(100)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownOpen])

  return (
    <div className="flex items-center gap-8 shrink-0 p-3 h-[61px]">
      {/* Rows per page */}
      <div className="flex items-center gap-4 h-[37px]">
        <span className="text-[14px] font-medium text-dark" style={optionLetterSpacing}>
          Rows per page:
        </span>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen((o) => !o)}
            className="flex items-center justify-center gap-3 h-[37px] w-[76px] rounded-[12px] border border-[#E5E5E4] py-2 px-3 cursor-pointer bg-white text-left"
          >
            <span className="text-[14px] font-normal text-dark flex-1 min-w-0 text-center" style={optionLetterSpacing}>
              {rowsPerPage}
            </span>
            <MaskIcon
              src="/assets/icons/chevron-down.svg"
              color="#3d3936"
              size={10}
              className={`shrink-0 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {dropdownOpen && (
            <div
              className="absolute bottom-full left-0 mb-1 w-[76px] rounded-[12px] border border-[#E5E5E4] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] z-10 overflow-hidden"
              role="listbox"
            >
              {ROWS_PER_PAGE_OPTIONS.map((n) => (
                <button
                  key={n}
                  type="button"
                  role="option"
                  aria-selected={rowsPerPage === n}
                  onClick={() => {
                    setRowsPerPage(n)
                    setDropdownOpen(false)
                  }}
                  className={`${optionStyle} w-full text-center ${rowsPerPage === n ? 'bg-[#F5F5F4] font-medium' : ''}`}
                  style={optionLetterSpacing}
                >
                  {n}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Page range + prev/next */}
      <div className="flex items-center gap-4 h-[37px]">
        <span className="text-[14px] font-normal text-dark" style={optionLetterSpacing}>
          1-100 of 500
        </span>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center p-[4px] rounded border-dark/60 cursor-pointer">
            <MaskIcon
              src="/assets/icons/chevron-left.svg"
              color="rgba(61, 57, 54, 0.60)"
              size={10}
            />
          </button>
          <button className="flex items-center justify-center p-[4px] rounded border-dark cursor-pointer">
            <MaskIcon
              src="/assets/icons/chevron-right-sm.svg"
              color="#3d3936"
              size={10}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaginationBar
