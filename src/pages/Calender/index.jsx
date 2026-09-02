import { CalculatorIcon, ChevronLeft, ChevronRight, Clock, MoreHorizontal, Plus } from 'lucide-react'
import React from 'react'

function Calender() {

  const days=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const calenderDays=Array.from({length:31},(_, i) => i + 1);
  const events = [
  { time: '10:00 AM', title: 'Design Review', type: 'Work', attendees: 3, color: 'bg-purple-500' },
  { time: '01:30 PM', title: 'Client Review', type: 'Marketing', attendees: 5, color: 'bg-blue-500' },
  { time: '04:00 PM', title: 'Project Review', type: 'Development', attendees: 2, color: 'bg-pink-500' },
]
  return (
    <div className='p-6 bg-slate-50 dark:bg-slate-950 min-h-screen space-y-6'>

      {/* Header Section */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
        <div>
          <h1 className='text-3xl font-black text-slate-800 dark:text-white tracking-tight'>MY
            <span className='text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500'>SCHEDULE</span>
          </h1>
          <p className='text-slate-500 font-medium italic'>Manage your tie and events efficiently</p>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex bg-white dark:bg-slate-900 rounded-xl p-1 border border-slate-200 dark:border-slate-800'>
            <button className='px-4 py-2 text-sm font-bold bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-800 dark:text-white transition-all'>Month</button>
            <button className='px-4 py-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-all'>Week</button>
            <button className='px-4 py-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-all'>Day</button>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-500/30 hover:scale-105 transition-all active:scale-95">
            <Plus size={18} />New Event
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

        {/* Main Calender Grid (Bento Box) */}
        <div className='lg:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800'>
          <div className='flex items-center justify-between mb-8'>
            <h2 className="dark:text-slate-400"><CalculatorIcon className='text-purple-600'/> January 2026</h2>
            <div className='flex gap-2'>
              <button className='p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all text-slate-400 '><ChevronLeft/></button>
              <button className='p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all text-slate-400 '><ChevronRight/></button>
            </div>
          </div>

          <div className='grid grid-cols-7 gap-4 mb-4'>
            {days.map(day=>(
              <div key={day} className='text-center text-xs font-black text-slate-400 uppercase tracking-widest'>{day}</div>
            ))}
          </div>

          <div className='grid grid-cols-7 gap-2'>
            {Array.from({length:3}).map((_,i)=><div key={i} className='h-24 opacity-0'></div>)}

            {calenderDays.map(day=>(
              <div key={day} className={`h-24 p-3 rounded-2xl border transition-all cursor-pointer group ${
                day === 17
                ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-105 z-10'
                : 'bg-slate-50 dark:bg-slate-800/50 border-transparent hover:border-indigo-300 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-300'
              }`}>
                <span className='text-sm font-black'>{day}</span>
                {day === 17 && <div className='mt-2 text-[10px] font-bold bg-white/20 p-1 rounded'>3 Meetings</div>}
                {day === 20 && <div className='mt-2 h-1.5 w-1.5 bg-pink-500 rounded-full'></div>}
              </div>
            ))}
          </div>
        </div>

         {/* Daily Events & Tasks (Bento Box) */}
          <div className='space-y-6'>
            {/* Today's Overview */}
            <div className='bg-linear-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] p-8 text-white shadow-xl shadow-indigo-500/30 '>
                <h3 className='text-lg font-bold mb-1'>Today's Overview</h3>
                <p className='text-indigo-100 text-sm opacity-80 mb-6'>Saturday, 17 Jan 2026</p>
                <div className='space-y-4'>
                  <div className='bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10'>
                    <div className='flex justify-between items-center'>
                      <span className='text-xs font-bold uppercase opacity-60'>Completed Tasks</span>
                      <span className='text-2xl font-black'>85%</span>
                    </div>
                    <div className='w-full bg-white/20 h-1.5 rounded-full mt-2'>
                      <div className='bg-white h-full rounded-full w-[85%]'></div>
                    </div>
                  </div>
                </div>
            </div>

              {/* Upcoming Events List */}
              <div className='bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden relative'>
                <div className='flex justify-between items-center mb-6'>
                  <h3 className='font-black text-slate-800 dark:text-white text-lg tracking-tight'>UPCOMING</h3>
                  <button className='text-slate-400 hover:text-slate-600 transition-colors'><MoreHorizontal /></button>
                </div>

                <div className='space-y-6'>
                  {events.map((event, index) => (
                    <div key={index} className='flex gap-4 group'>
                      <div className='flex flex-col items-center'>
                        <div className={`w-3 h-3 rounded-full ${event.color} ring-4 ring-slate-100 dark:ring-slate-800 group-hover:scale-125 transition-transform`}></div>
                        <div className='w-[2px] h-full bg-slate-100 dark:bg-slate-800 mt-2'></div>
                      </div>
                      <div className='flex-1 pb-6'>
                        <div className='flex items-center gap-2 text-slate-400 text-xs font-bold mb-1 uppercase tracking-tighter'>
                          <Clock size={12} />{event.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
          </div>
      </div>

    </div>
  )
}

export default Calender