import { NavLink } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const SideBar = () => {
  return (
    <aside className="grid col-span-2 bg-light-gray h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5">
      <nav className="flex flex-col space-y-3">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              'p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all truncate',
              {
                'bg-dark-gray text-white': isActive,
              }
            )
          }
        >
          <div className="flex gap-6">
            <LayoutDashboard />
            Dashboard
          </div>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              'p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all truncate',
              {
                'bg-dark-gray text-white': isActive,
              }
            )
          }
        >
          Add Service
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              'p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all truncate',
              {
                'bg-dark-gray text-white': isActive,
              }
            )
          }
        >
          Service List
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideBar;
