import React from 'react'
import UserCard from '../../Components/Users/UserCard'
import AddMemberCard from '../../Components/Users/AddMemberCard'

const members = [
  { id: 1, initials: 'AS', name: 'Alexander Smith', department: 'Creative', tier: 'Pro', color: 'purple', online: true },
  { id: 2, initials: 'SJ', name: 'Sarah Johnson', department: 'Engineering', tier: 'Pro', color: 'blue', online: false },
  { id: 3, initials: 'MC', name: 'Michael Chen', department: 'Growth', tier: 'Pro', color: 'teal', online: false },
  { id: 4, initials: 'ER', name: 'Elena Rodriguez', department: 'Security', tier: 'Pro', color: 'orange', online: true },
]

function Members() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] p-6 md:p-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <UserCard key={member.id} user={member} />
          ))}
          <AddMemberCard onClick={() => console.log('invite clicked')} />
        </div>
      </div>
    </div>
  )
}

export default Members