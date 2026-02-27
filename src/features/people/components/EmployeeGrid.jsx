import EmployeeCard from './EmployeeCard'

function EmployeeGrid({ employees }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 items-start">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={employee.name}
          role={employee.role}
          avatar={employee.avatar}
        />
      ))}
    </div>
  )
}

export default EmployeeGrid
