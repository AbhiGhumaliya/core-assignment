import { useState } from 'react'
import MaskIcon from '../../../shared/components/MaskIcon'

function SearchAndActions() {
  const [activeView, setActiveView] = useState('menu')

  return (
    <div className="flex items-center justify-between gap-4 shrink-0 p-6">
      {/* Search bar */}
      <div className="flex items-center gap-3 border border-[#E5E5E4] rounded-[40px] h-[48px] px-4 flex-1 max-w-[336px]">
        <img src="/assets/icons/search.svg" alt="" className="w-4 h-4 shrink-0" />
        <span
          className="text-[14px] font-normal"
          style={{ letterSpacing: '-0.28px', color: 'rgba(61, 57, 54, 0.60)' }}
        >
          Search by Employee Name or Number
        </span>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-[16px] h-[48px] shrink-0">
        {/* Download + Filter */}
        <div className="flex items-center gap-[8px]">
          <button className="flex items-center justify-center h-12 w-12 rounded-xl border border-[#E5E5E4] cursor-pointer">
            <MaskIcon src="/assets/icons/download.svg" color="#3d3936" size={24} />
          </button>
          <button className="flex items-center justify-center h-12 w-12 rounded-xl border border-[#E5E5E4] cursor-pointer">
            <MaskIcon src="/assets/icons/filter.svg" color="#3d3936" size={20} />
          </button>
        </div>

        {/* Add button — dark rounded square with white + icon */}
        <button
          className="w-12 h-12 flex items-center justify-center rounded-[14px] shrink-0 cursor-pointer cursor-pointer"
          style={{ backgroundColor: '#3d3936' }}
        >
          <MaskIcon src="/assets/icons/add.svg" color="#ffffff" size={16} />
        </button>

        {/* View toggle — SVG is self-contained with border; no extra CSS border needed */}
        <div className="h-[48px] w-[136px] rounded-[14px] border border-[#E5E5E4] p-1 gap-1 flex items-center">
          <button
            type="button"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-[12px] p-2 gap-[10px] shrink-0 cursor-pointer"
            style={{ backgroundColor: activeView === 'menu' ? '#3d3936' : 'transparent' }}
            onClick={() => setActiveView('menu')}
          >
            <MaskIcon src="/assets/icons/menu.svg" color={activeView === 'menu' ? '#ffffff' : '#3d3936'} size={24} />
          </button>
          <button
            type="button"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-[12px] p-2 gap-[10px] shrink-0 cursor-pointer"
            style={{ backgroundColor: activeView === 'group' ? '#3d3936' : 'transparent' }}
            onClick={() => setActiveView('group')}
          >
            <MaskIcon src="/assets/icons/Group.svg" color={activeView === 'group' ? '#ffffff' : '#3d3936'} size={24} />
          </button>
          <button
            type="button"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-[12px] p-2 gap-[10px] shrink-0 cursor-pointer"
            style={{ backgroundColor: activeView === 'stroke' ? '#3d3936' : 'transparent' }}
            onClick={() => setActiveView('stroke')}
          >
            <MaskIcon src="/assets/icons/Stroke_Icons.svg" color={activeView === 'stroke' ? '#ffffff' : '#3d3936'} size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchAndActions
