import { motion, AnimatePresence } from 'framer-motion';
import { MoreHorizontal, Search, Target, Zap, Plus, Clock, UserPlus } from 'lucide-react';
import React from 'react';

function Tasks() {
  const [activeTab, setActiveTab] = React.useState('Active');
  const [query, setQuery] = React.useState('');

  const taskList = [
    { id: 1, title: 'Revenue Audit', time: '10:30 AM', priority: 'Critical', color: '#f43f5e', category: 'Finance', status: 'Active' },
    { id: 2, title: 'User Sync v2', time: '01:45 PM', priority: 'Urgent', color: '#6366f1', category: 'DEV', status: 'Active' },
    { id: 3, title: 'System Health', time: '04:00 PM', priority: 'Normal', color: '#10b981', category: 'Maintenance', status: 'Active' },
    { id: 4, title: 'API Documentation', time: 'Tomorrow', priority: 'Low', color: '#94a3b8', category: 'Docs', status: 'Upcoming' },
    { id: 5, title: 'Design Review', time: 'Fri, 9:00 AM', priority: 'Normal', color: '#f59e0b', category: 'Design', status: 'Upcoming' },
    { id: 6, title: 'Onboarding Flow', time: 'Yesterday', priority: 'Low', color: '#8b5cf6', category: 'DEV', status: 'Completed' },
  ];

  const recentActivity = [
    { id: 1, icon: Clock, text: 'Revenue Audit', meta: '2m ago' },
    { id: 2, icon: UserPlus, text: 'New member joined User Sync', meta: '1h ago' },
  ];

  const dailyGoalPercent = 72;
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (dailyGoalPercent / 100) * circumference;

  const filteredTasks = taskList
    .filter((task) => task.status === activeTab)
    .filter((task) =>
      query.trim() === ''
        ? true
        : task.title.toLowerCase().includes(query.toLowerCase()) ||
          task.category.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#08090a] text-slate-900 dark:text-slate-200 font-sans p-4 md:p-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Tasks
            </h1>
            <p className="text-slate-500 text-sm font-medium">
              September 04, 2026
            </p>
          </div>

          <div className="space-y-2">
            {['Active', 'Upcoming', 'Completed'].map((status) => (
              <button
                key={status}
                onClick={() => setActiveTab(status)}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-xl text-sm font-semibold transition-all
                ${
                  activeTab === status
                    ? 'bg-white dark:bg-white/10 text-indigo-600 dark:text-white shadow-md dark:shadow-xl border border-slate-200 dark:border-white/10'
                    : 'text-slate-500 hover:text-indigo-500 dark:hover:text-slate-500'
                }
                `}
              >
                {status}
                {activeTab === status && (
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                )}
              </button>
            ))}
          </div>

          <div className="p-6 bg-linear-to-br from-indigo-600 to-violet-700 rounded-[2rem] text-white shadow-2xl shadow-indigo-500/30">
            <Zap className="mb-4" size={24} fill="currentColor" />
            <p className="text-xs font-bold opacity-80 uppercase tracking-wider mb-1">
              Pro Tip
            </p>
            <p className="text-sm leading-relaxed">
              You have 3 critical tasks ending today. Prioritize the Revenue
              Audit.
            </p>
          </div>
        </div>

        {/* Main Column: Search + Task List */}
        <div className="lg:col-span-6 space-y-6">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tasks....."
              className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all text-sm text-slate-900 dark:text-white placeholder-slate-400"
            />
          </div>

          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredTasks.length === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-slate-400 px-2 py-6 text-center"
                >
                  No tasks here yet.
                </motion.p>
              )}
              {filteredTasks.map((task, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05 }}
                  key={task.id}
                  className="group flex items-center justify-between p-5 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/[0.06] hover:border-indigo-200 dark:hover:border-white/10 transition-all cursor-pointer shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-black border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: task.color }}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-sm">
                        {task.title}
                      </p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">
                        {task.category} • {task.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-[10px] font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-md bg-slate-50 dark:bg-transparent">
                      {task.priority}
                    </span>
                    <MoreHorizontal
                      size={18}
                      className="text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-bold text-lg text-slate-900 dark:text-white">
                Daily Goal
              </h2>
              <Target size={20} className="text-indigo-500" />
            </div>
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-slate-100 dark:text-white/5"
                />
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  className="text-indigo-500 transition-all duration-700"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  {dailyGoalPercent}%
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase">
                  Done
                </span>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm py-3.5 rounded-2xl hover:opacity-90 transition-opacity">
              <Plus size={16} />
              Add Mission
            </button>
          </div>

          <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm dark:shadow-none">
            <div className="flex items-center gap-2 mb-6">
              <Clock size={16} className="text-indigo-500" />
              <h2 className="font-bold text-sm text-slate-900 dark:text-white">
                Recent Activity
              </h2>
            </div>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div key={item.id}>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item.text}
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    {item.meta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;