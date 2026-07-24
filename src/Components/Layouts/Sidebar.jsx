import React from "react";
import { Rocket } from "lucide-react";

function Sidebar() {
  return (
    <div className="transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-purple-500 rounded-xl flex items-center justify-center shadow-lg ">
            <Rocket className="w-6 h-6 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-700 dark:text-white">
              MyDash
            </h1>
            <p className="text-xs text-slate-400 dark:text-slate-300">
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* Nav menu in sidebar */}
      <nav className="flex-1 p-3 space-y-2 overflow-auto"></nav>
    </div>
  );
}

export default Sidebar;
