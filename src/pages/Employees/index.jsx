import React from 'react'
import { Sparkles } from 'lucide-react'
import TeamMemberCard from '../../Components/Users/TeamMemberCard'
import EmployeeProfileModal from '../../Components/Users/EmployeeProfileModal'

const teamMembers = [
  { id: 1, initials: 'LW', name: 'Lina Watts', role: 'UX Designer', location: 'London, UK', status: 'Focusing', score: 95, color: 'purple',
    bio: 'A key member of our design team, known for crafting intuitive and delightful user experiences across the platform.' },
  { id: 2, initials: 'DM', name: 'David Miller', role: 'DevOps', location: 'Berlin, DE', status: 'In Office', score: 88, color: 'blue',
    bio: 'One of our most dedicated members, specializing in DevOps. Consistently achieving over 88% efficiency in project delivery.' },
  { id: 3, initials: 'SK', name: 'Sarah Khan', role: 'Lead PM', location: 'Dubai, UAE', status: 'Traveling', score: 92, color: 'pink',
    bio: 'Leads cross-functional teams with precision, keeping every project on track no matter the time zone.' },
  { id: 4, initials: 'JW', name: 'James Wilson', role: 'Security', location: 'NYC, USA', status: 'Active', score: 99, color: 'teal',
    bio: 'Guards the platform around the clock, with a track record of zero major incidents in the last two years.' },
]

function Employees() {
  const [selectedMember, setSelectedMember] = React.useState(null)
  const [activeTab, setActiveTab] = React.useState('talents')

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] p-6 md:p-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400 mb-2">
                <Sparkles size={14} /> Intelligence System
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                <span className="text-slate-900 dark:text-white">TEAM </span>
                <span className="text-slate-300 dark:text-slate-500">VIEW</span>
            </h1>
          </div>

          <div className="flex bg-slate-100 dark:bg-slate-900 rounded-full p-1 border border-slate-200 dark:border-slate-800 w-fit">
            <button
              onClick={() => setActiveTab('talents')}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                activeTab === 'talents' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              All Talents
            </button>
            <button
              onClick={() => setActiveTab('departments')}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                activeTab === 'departments' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Departments
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} onOpenProfile={setSelectedMember} />
          ))}
        </div>
      </div>

      <EmployeeProfileModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  )
}

export default Employees