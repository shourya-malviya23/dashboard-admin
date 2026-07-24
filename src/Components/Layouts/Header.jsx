import React from "react";
import {
  Menu,
  Search,
  Sun,
  Moon,
  Bell,
  User,
  ChevronDown,
  Settings,
  LogOut,
} from "lucide-react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const applyTheme = (isDark) => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const getInitialTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      return true;
    }
    if (localStorage.getItem("theme") === "light") {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = React.useState(getInitialTheme);

  React.useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
  };

  return (
    <div className="bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/40 dark:border-slate-700/50 px-5 py-5">
      <div className="flex items-center justify-between">
        {/* left items */}
        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1 max-w-md mx-9">
            <div className="relative">
              <Search className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Right items */}
        <div className="flex items-center space-x-2">
          {/* Theme toggle  (Light/Dark) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            title={isDarkMode ? "Switch To Light Mode" : "Switch To Dark Mode"}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Notifications Icon */}
          <button
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300
        hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors relative"
          >
            <Bell className="w-5 h-5" />
            {/* notification Badge */}
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full ring-2 ring-white dark:ring-slate-900 bg-red-500 "></span>
          </button>
          {/* User profile and dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-1 p-1 pr-2 rounded-full text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-transparent"
            >
              {/* User image/icon */}
              <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center ">
                <User className="w-4 h-4 text-slate-600 dark:text-slate-300 " />
              </div>

              {/* Dropdown arrow */}
              <ChevronDown
                className={`w-4 h-4 transform transition-transform ${isMenuOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {/* Dropdown menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl py-1 border border-slate-200 dark:border-slate-700 ">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 "
                >
                  <Settings className="w-4 h-4 mr-2 " />
                  Settings
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 "
                >
                  <User className="w-4 h-4 mr-2 " />
                  My Account
                </a>
                <div className="border-t border-slate-200 dark:border-slate-700 "></div>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-right flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
