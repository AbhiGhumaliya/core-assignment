import { Link, useLocation } from 'react-router-dom'
import MaskIcon from '../../shared/components/MaskIcon'

const navItems = [
  {
    label: 'Home',
    icon: '/assets/icons/home.svg',
    path: '/home',
    hasChevron: false,
  },
  {
    label: 'My Info',
    icon: '/assets/icons/my-info.svg',
    path: '/my-info',
    hasChevron: true,
  },
  {
    label: 'People',
    icon: '/assets/icons/people.svg',
    path: '/people',
    hasChevron: false,
  },
  {
    label: 'Team Management',
    icon: '/assets/icons/team.svg',
    path: '/team-management',
    hasChevron: true,
  },
  {
    label: 'Project Setup',
    icon: '/assets/icons/project-setup.svg',
    path: '/project-setup',
    hasChevron: true,
  },
  {
    label: 'Hiring',
    icon: '/assets/icons/hiring.svg',
    path: '/hiring',
    hasChevron: false,
  },
  {
    label: 'Report',
    icon: '/assets/icons/report.svg',
    path: '/report',
    hasChevron: false,
  },
]

function Sidebar() {
  const location = useLocation()

  return (
    <aside
      className="w-[72px] min-[1000px]:w-[280px] shrink-0 rounded-[20px] flex flex-col pt-8 pb-4 relative overflow-hidden transition-[width] duration-200"
      style={{ backgroundColor: '#3d3936' }}
    >
      {/* Logo */}
      <div className="px-3 min-[1000px]:px-6 mb-8 flex justify-center min-[1000px]:justify-start">
        <img
          src="/assets/icons/logo.svg"
          alt="CORE"
          className="h-8 min-[1000px]:h-11 w-auto object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1 px-2 min-[1000px]:px-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex items-center justify-center min-[1000px]:justify-start gap-0 min-[1000px]:gap-3 px-0 min-[1000px]:px-4 py-[10px] transition-colors rounded-[12px]"
              style={{
                backgroundColor: isActive ? '#ffffff' : 'transparent',
                color: isActive ? '#947550' : '#ffffff',
                height: '53px',
                opacity: isActive ? 1 : 0.6,
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              {/* Active left indicator bar */}
              {isActive && (
                <span
                  className="absolute rounded-r-full min-[1000px]:left-[-16px] left-[-8px]"
                  style={{
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 4,
                    height: 30,
                    backgroundColor: '#ffffff',
                  }}
                />
              )}

              {/* Icon */}
              <MaskIcon
                src={item.icon}
                color={isActive ? '#947550' : '#ffffff'}
                size={20}
              />

              {/* Label - hidden below 1000px */}
              <span
                className="hidden min-[1000px]:inline text-[14px] font-normal flex-1"
                style={{ letterSpacing: '-0.28px', color: isActive ? '#947550' : '#ffffff' }}
              >
                {item.label}
              </span>

              {/* Chevron - hidden below 1000px */}
              {item.hasChevron && (
                <MaskIcon
                  className="hidden min-[1000px]:block"
                  src="/assets/icons/chevron-right.svg"
                  color={isActive ? '#947550' : '#ffffff'}
                  size={12}
                />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Settings at bottom */}
      <Link
        to="/settings"
        className="flex items-center justify-center min-[1000px]:justify-start h-[53px] rounded-[16px] border border-[#FFFFFF1A] p-2 min-[1000px]:p-4 ml-2 mr-2 min-[1000px]:ml-4 min-[1000px]:mr-4 gap-0 min-[1000px]:gap-[10px] transition-colors"
        style={{ color: '#ffffff' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        <MaskIcon src="/assets/icons/settings.svg" color="#ffffff" size={20} />
        <span className="hidden min-[1000px]:inline text-[14px] font-normal" style={{ letterSpacing: '-0.28px' }}>
          Settings
        </span>
      </Link>
    </aside>
  )
}

export default Sidebar
