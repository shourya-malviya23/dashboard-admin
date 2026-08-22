import React from "react";
import "./App.css";
import Sidebar from "./Components/Layouts/Sidebar";
import Header from "./Components/Layouts/Header";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Analytics/overview"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("dashboard");
  return (
    <Router>
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          currentPage={currentPage}
          onChangePages={setCurrentPage}
        />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header  sidebarCollapsed = {sidebarCollapsed} onToggleSidebar = {() => setSidebarCollapsed(!sidebarCollapsed)}/>

        <main className="flex-1 overflow-y-auto bg-transparent">
          <div className="p-5 space-y-5 ">
            <Routes>
              <Route path = "/" element={<Dashboard/>}/>
              <Route path = "/analytics/overview" element={<Overview/>}/>
              <Route path = "*" element={<Dashboard/>}/>

            </Routes>
          </div>
        </main>
        </div>
      </div>
    </div>
      </Router>
  );
}
export default App;
