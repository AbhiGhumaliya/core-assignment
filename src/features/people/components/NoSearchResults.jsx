function NoSearchResults() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-6 min-h-[200px]">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <p
          className="w-full text-[16px] font-medium text-center"
          style={{ letterSpacing: '-0.32px', color: '#3d3936' }}
        >
          No employees found
        </p>
        <p
          className="w-full text-[14px] font-normal mt-1 text-center"
          style={{ letterSpacing: '-0.28px', color: 'rgba(61, 57, 54, 0.60)' }}
        >
          Try adjusting your search by name, role or number
        </p>
      </div>
    </div>
  )
}

export default NoSearchResults
