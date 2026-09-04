import React from 'react'
import { Terminal } from 'lucide-react'

const feedLines = [
  { text: 'admin_nexus:~ system_init --verified', color: 'text-cyan-600 dark:text-cyan-400' },
  { text: 'auth_module: biometric_match_found(99.8%)', color: 'text-purple-600 dark:text-purple-400' },
  { text: 'admin_nexus:~ awaiting_instruction...', color: 'text-slate-400 dark:text-slate-500' },
]

function SecureFeed() {
  return (
    <div className="bg-white dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 shadow-sm dark:shadow-none">
      <div className="flex items-center justify-between mb-6">
        <h3 className="flex items-center gap-2 text-slate-500 dark:text-slate-300 font-bold text-sm uppercase tracking-widest">
          <Terminal size={16} className="text-slate-400 dark:text-slate-500" />
          Live_Secure_Feed
        </h3>
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
        </div>
      </div>

      <div className="font-mono text-sm space-y-3">
        {feedLines.map((line, i) => (
          <p key={i} className={line.color}>{line.text}</p>
        ))}
      </div>
    </div>
  )
}

export default SecureFeed