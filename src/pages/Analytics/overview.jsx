import { ArrowUpRight, Globe, MoreHorizontal, Target, Users, Zap } from 'lucide-react'
import React from 'react'


import { 
  BarChart, 
  Bar, 
  PieChart,
  Pie,
  LineChart,
  Line,
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis 
} from 'recharts'

const barData =[
  {name:'Mon' , value:40},
  {name:'Tue' , value:70},
  {name:'Wed' , value:45},
  {name:'Thu' , value:90},
  {name:'Fri' , value:65},
  {name:'Sat' , value:85},
  {name:'Sun' , value:32},
]

const pieData = [
  {name:'Organic' , value:400, color:'#8B5CF6'},
  {name:'Social'  , value:300, color:'#EC4899'},
  {name:'Direct'  , value:500, color:'#F59E0B'},
]

const topCountries = [
  {name:'United States' , value:'85%', color:'#8B5CF6'},
  {name:'Germany'       , value:'62%', color:'#EC4899'},
  {name:'Japan'         , value:'45%', color:'#F59E0B'},
]

const lineData=[
  {name:'10am',v:400},{name:'12pm',v:300},{name:'2pm',v:600},
  {name:'4pm',v:800},{name:'6pm',v:500},{name:'8pm',v:900},
]

function overview() {
  return (
    <div className= "p-6 bg-slate-50 dark:bg-slate-950 min-h-screen space-y-6">
      {/*Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight tracking-tight uppercase">
            Data <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500 font-outline-2">Insights</span>
          </h1>
          <p className="text-slate-500 font-medium italic">Real-time system intelligence.</p>
        </div>
        <button className="px-6 py-3 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm font-bold text-slate-700 dark:text-slate-200 hover:scale-105 transition-all active:scale-95">Download Report</button>
      </div>

      {/* Top Bentor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-full">
        {/* Main Chart */}
        <div className="md:col-span-2 md:row-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">
                Weekly Revenue
              </p>
              <h2 className="text-4xl font-black text-slate-800 dark:text-white mt-1">
                $42,850
              </h2>
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 p-2 rounded-xl">
              <ArrowUpRight size={24} />
            </div>
          </div>

          <div className="h-64 w-full mt-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill : '#94a3b8'}} />
                <Tooltip cursor={{fill:'transparent'}} content={({active, payload}) => {
                  if(active && payload) return (
                    <div className="bg-slate-900 text-white p-3 rounded-xl text-sm font-bold shadow-2xl">
                      {`$${payload[0].value}k`}
                    </div>
                  );
                  return null;
                }} />
                <Bar dataKey="value" radius={[10,10,10,10]}>
                  {barData.map((entry, index) => (
                   <Cell key={index} fill={(index === 3 || index === 1 || index === 5) ? '#8B5CF6' : '#E2E8F0'} className="dark:fill-slate-700"  />
                  ))}
                </Bar>

              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Users Card */}

        <div className="bg-linear-to-br from-purple-600 via-indigo-700 to-blue-800 rounded-[2.5rem] p-8 text-white flex flex-col jsutify-between shadow-lg shadow-purple-500/30">
          <Users size={32} className="opacity-80" />
          <div>
            <h3 className="text-5xl font-black tracking-tighter">12.5k</h3>
            <p className="text-purple-100 font-medium mt-1">Active Users Today</p>
          </div>
        </div>

        {/* Target Card */}
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col items-center justify-center text-center group">
          <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform">
            <Target size={48} className="text-orange-500 relative z-10" /> 
            <div className="absolute insert-0 bg-orange-500 blur-2xl opacity-20 animate-pulse"></div>
          </div>
          <h3 className="text-xl font-black text-slate-800 dark:text-white mt-4">85% Goal</h3>
          <p className="text-slate-400 text-sm">Monthly Target Reach</p>
        </div>

        {/* Traffic Sources */}
        <div className="md:col-span-2 bg-slate-900 dark:bg-slate-800 rounded-[3rem] p-8 text-white flex items-center justify-between overflow-hidden relative border border-slate-700/50">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Traffic Sources</h3>
            <div className="mt-4 space-y-2">
              {pieData.map(item => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{backgroundColor:item.color, color:item.color}}></div>
                  <span className="text-sm text-slate-400 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-44 w-44 absolute -right-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={50} outerRadius={70} paddingAngle={10} dataKey="value">
                  {pieData.map((entry, index) => 
                  <Cell key={index} fill={entry.color} stroke="none" />
                  )}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* New BOTTOM SECTION (Bento Style Continued) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Global performance (Small Bento Box) */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col justify-between overflow-hidden relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2 text-lg">
                <Globe size={20} className="text-slate-400 cursor-pointer" />Top Regions
              </h3>
              <MoreHorizontal size={20} className="text-slate-400 cursor-pointer" />
            </div>

            <div className="space-y-6">
                  {topCountries.map((country) => (
                   <div key={country.name} className="space-y-2">
                     <div className="flex justify-between text-sm font-bold">
                      <span className="text-slate-600 dark:text-slate-300">{country.name}</span>
                      <span className="text-slate-400">{country.value}</span>
                     </div>

                     <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full rounded-full transition-all duration-1000"
                       style={{width:country.value, backgroundColor:country.color}}
                       ></div>
                     </div>
                   </div> 
                  ))}
            </div>
          </div>

          {/* Real Time System Load */}
          <div className="md:col-span-2 bg-linear-to-r from-slate-100 to-slate-200 dark:from-slate-800/50 dark:to-slate-900/50 rounded-[2.5rem] p-8 border border-white/20 dark:border-slate-700/30 backdrop-blur-md flex-col md:flex-row gap-8 relative overflow-hidden">
            <div className="flex-1 space-y-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl w-fit shadow-sm border border-slate-200 dark:border-slate-700">
                <Zap size={24} className="text-yellow-500 fill-yellow-500"/>
              </div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white leading-tight">System performance is at peak.</h3>
              <p className="text-slate-500 text-sm">Everything looks good! No bottlenecks detected in the last 24 hours.</p>
              <div className="flex gap-4 pt-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase">Latency</span>
                    <span className="text-lg font-black text-emerald-500">24ms</span>
                  </div>
                  <div className="w-[1px] bg-slate-300 dark:bg-slate-700 h-10 self-center"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 upercase">Uptime</span>
                    <span className="text-lg font-black text-slate-800 dark:text-white">99.9%</span>
                  </div>
              </div>
            </div>

            {/* Sparkline Chart */}
            <div className="flex-1 h-full min-h-[150px]">
              <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <Line type="monotone" dataKey="v" stroke="#8B5CF6" strokeWidth={4} dot={false} />
                    <Tooltip content={() => null} />
                  </LineChart>
              </ResponsiveContainer>
            </div>
              {/* Decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

          </div>
      </div>
    </div>
  )
}

export default overview