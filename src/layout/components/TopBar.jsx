import { useLocation } from 'react-router-dom'

const routeTitles = {
  '/people': 'People',
  '/home': 'Home',
  '/my-info': 'My Info',
  '/team-management': 'Team Management',
  '/project-setup': 'Project Setup',
  '/hiring': 'Hiring',
  '/report': 'Report',
  '/settings': 'Settings',
}

function TopBar() {
  const location = useLocation()
  const pageTitle = routeTitles[location.pathname] || 'CORE HR';

  return (
    <div className="flex items-center justify-between h-20 shrink-0 bg-white rounded-[20px] py-6 px-4">
      {/* Page title */}
      <h1
        className="text-[18px] font-medium text-dark"
        style={{ letterSpacing: '-0.36px' }}
      >
        {pageTitle}
      </h1>

      {/* Right section */}
      <div className="flex items-center gap-3">
        {/* Timezone + clock container */}
        <div
          className="flex items-center gap-2 rounded-full px-4 py-[10px] border border-divider cursor-pointer"
        >
          {/* MST label */}
          <span
            className="text-[14px] font-medium"
            style={{ letterSpacing: '-0.28px', color: '#000000' }}
          >
            MST
          </span>
        </div>
        <div
          className="flex items-center gap-2 rounded-full px-4 py-[10px] border border-divider cursor-pointer"
        >
          {/* Clock group + edit */}
          <div className="flex items-center gap-4">
            {/* Clock icon + time */}
            <div className="flex items-center gap-[8px]">
              <img
                src="/assets/icons/clock.svg"
                alt="Clock"
                className="w-6 h-6"
              />
              <span
                className="text-[18px] font-medium text-dark"
                style={{ letterSpacing: '-0.36px' }}
              >
                {/* {time} */}
                02:03:02
              </span>
            </div>
            {/* Edit icon */}
            <img
              src="/assets/icons/edit.svg"
              alt="Edit"
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* Notification — SVG has its own circle border art; no extra CSS border */}
        <button className="shrink-0 flex items-center justify-center cursor-pointer">
          <img
            src="/assets/icons/notification.svg"
            alt="Notifications"
            className="w-12 h-12"
          />
        </button>

        {/* User avatar */}
        <img
          src="/assets/images/user-avatar.jpg"
          alt="User"
          className="w-12 h-12 rounded-full object-cover shrink-0 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default TopBar
