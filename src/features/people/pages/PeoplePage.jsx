import SearchAndActions from '../components/SearchAndActions'
import EmployeeGrid from '../components/EmployeeGrid'
import PaginationBar from '../components/PaginationBar'
import employees from '../data/employees'

function PeoplePage() {
  return (
    <div className="flex-1 bg-white rounded-[20px] flex flex-col overflow-hidden min-h-0">
      {/* Search + Actions */}
      <SearchAndActions />

      {/* Employee grid — scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scrollbar-hide pl-6 pr-6">
        <EmployeeGrid employees={employees} />
      </div>

      {/* Pagination */}
      <PaginationBar />
    </div>
  )
}

export default PeoplePage
