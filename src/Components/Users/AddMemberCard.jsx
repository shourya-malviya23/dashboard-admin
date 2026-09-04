import React from 'react'
import { UserPlus } from 'lucide-react'

function AddMemberCard({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center min-h-[280px] hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all"
    >
      <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
        <UserPlus size={22} />
      </div>
      <h3 className="text-slate-800 dark:text-white font-bold mt-4">Grow your team</h3>
      <p className="text-slate-400 text-xs mt-1 max-w-[160px]">Invite more members to join.</p>
    </button>
  )
}

export default AddMemberCard