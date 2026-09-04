import React from 'react'
import { ShieldAlert, ScanFace, UserPlus } from 'lucide-react'
import AdminCard from '../../Components/Admins/AdminCard'
import SecureFeed from '../../Components/Admins/SecureFeed'

const admins = [
  { id: 1, initials: 'SA', title: 'System Architect', subtitle: 'Root Admin', authLevel: '09', color: 'cyan' },
  { id: 2, initials: 'SL', title: 'Security Lead', subtitle: 'Firewall Manager', authLevel: '09', color: 'purple' },
]

function Admins() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] p-6 md:p-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]">
            <ShieldAlert size={16} />
            Identity Verification Active
            </div>

            <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 bg-slate-800 dark:bg-slate-800 border border-slate-700 text-slate-200 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-700 transition-all">
                <ScanFace size={16} />
                Verify Device
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-red-600/30 transition-all">
                <UserPlus size={16} />
                Add Admin
            </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {admins.map((admin) => (
            <AdminCard key={admin.id} admin={admin} />
          ))}
        </div>

        <SecureFeed />
      </div>
    </div>
  )
}

export default Admins