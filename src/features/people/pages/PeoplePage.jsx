import { useMemo, useState } from 'react'
import SearchAndActions from '../components/SearchAndActions'
import EmployeeGrid from '../components/EmployeeGrid'
import NoSearchResults from '../components/NoSearchResults'
import PaginationBar from '../components/PaginationBar'
import employees from '../data/employees'

function PeoplePage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEmployees = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return employees
    return employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(q) ||
        emp.role.toLowerCase().includes(q) ||
        String(emp.id).includes(q)
    )
  }, [searchQuery])

  return (
    <div className="flex-1 bg-white rounded-[20px] flex flex-col overflow-hidden min-h-0">
      {/* Search + Actions */}
      <SearchAndActions searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Employee grid — scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scrollbar-hide pl-6 pr-6">
        {filteredEmployees.length === 0 && searchQuery.trim() ? (
          <NoSearchResults />
        ) : (
          <EmployeeGrid employees={filteredEmployees} />
        )}
      </div>

      {/* Pagination */}
      <PaginationBar />
    </div>
  )
}

export default PeoplePage
