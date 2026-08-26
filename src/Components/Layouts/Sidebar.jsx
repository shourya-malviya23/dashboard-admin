import React from "react";
import {
  Bell,
  Calendar,
  ChartBar,
  ChartBarBig,
  ChevronDown,
  ClipboardCheck,
  LayoutDashboard,
  MessagesSquare,
  Rocket,
  Settings,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "Dashboard",
  },

  {
    id: "analytics",
    icon: ChartBarBig,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "report", label: "Report" },
    ],
  },

  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },

  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "3k",
    submenu: [
      { id: "employee", label: "Employee" },
      { id: "admins", label: "Admins" },
      { id: "users", label: "Users" },
    ],
  },

  {
    id: "report",
    icon: ChartBar,
    label: "Report",
    count: "24",
  },

  {
    id: "messages",
    icon: MessagesSquare,
    label: "Messages",
    badge: 2,
  },

  {
    id: "tasks",
    icon: ClipboardCheck,
    label: "Tasks",
    badge: 21,
  },

  {
    id: "notifications",
    icon: Bell,
    label: "Notifications",
    count: 4,
  },

  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

function Sidebar({ collapsed, onToggle, currentPage, onChangePages }) {
  const [expendedItems, setexpendedItem] = React.useState(
    new Set(["analytics"]),
  );

  const toggleExp = (item) => {
    const newExpended = new Set(expendedItems);

    if (newExpended.has(item)) {
      newExpended.delete(item);
    } else {
      newExpended.add(item);
    }

    setexpendedItem(newExpended);
  };

  return (
    <div
      className={`${collapsed ? "w-20" : "w-75 "} transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-r from-blue-400 via-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg ">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-700 dark:text-white">
                MyDash
              </h1>
              <p className="text-xs text-slate-400 dark:text-slate-300">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Nav menu in sidebar */}
      <nav className="flex-1 p-3 space-y-2 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {menuItems.map((item) => {
          const hasSubmenu = !!item.submenu;
          const Icon = item.icon;
          return(
            <div key = {item.id}>
              {hasSubmenu ? (
                <button onClick = {() => toggleExp(item.id)} className={`flex items-center justify-between p-3 rounded-full transition-all duration-200 w-full 
                ${expendedItems.has(item.id)
                  ?"text-cyan-500 bg-slate-100/50 dark:bg-slate-800/50"
                  :"text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }
                `}>
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!collapsed && <span className="font-medium whitespace-nowrap">{item.label}</span>}
                  </div>
                  {!collapsed && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expendedItems.has(item.id) ? "rotate-180" : ""}`} />
                  )}
                </button>
              ) : (
                <NavLink
                 to={`/${item.id}`}
                 className={({isActive}) => `*
                 flex items-center justify-between p-3 rounded-xl transition-all duration-200 w-full
                 ${isActive
                  ? "bg-linear-to-r from-blue-500 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/25"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 "
                 } 
                 `}
                 >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!collapsed &&
                    <> 
                    <span className="font-medium whitespace-nowrap">{item.label}</span>
                    {item.badge && <span className= "px-1.5 py-0.5 text-[10px] bg-red-500 text-white rounded-full animate-pulse ml-auto">{item.badge}</span>}
                    {item.count && <span className= "px-1.5 py-0.5 text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full ml-auto">{item.count}</span>}
                    </>
                    }
                  </div>
                </NavLink>
              )}

              {!collapsed && hasSubmenu && expendedItems.has(item.id) && (
                <div className="mt-2 ml-6 pl-4 border-l border-slate-200 dark:border-slate-800 space-y-1">
                  {item.submenu.map((sub) => (
                    <NavLink key = {sub.id}
                      to={`/${item.id}/${sub.id}`}
                      className={({isActive}) => `
                        block p-2 text-left rounded-lg transition-all w-full
                        ${
                          isActive
                            ? "text-blue-500 font-bold bg-cyan-500/50"
                            : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                        }
                      `}
                      >
                        {sub.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
