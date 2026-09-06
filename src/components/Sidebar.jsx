import React from 'react';
import { 
  LayoutDashboard, ShieldAlert, BarChart3, Sliders, Scale, FileText, 
  Bot, ShieldCheck, ChevronRight, UserCheck, Activity, Building2, Layers
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, selectedCompany, onOpenUpload }) {
  const navItems = [
    { id: 'overview', label: 'Overview & Decision', icon: LayoutDashboard },
    { id: 'forensics', label: 'Forensic & Fraud Radar', icon: ShieldAlert, badge: selectedCompany.status === 'REJECTED' ? '3 Flags' : null },
    { id: 'cashflow', label: 'Cashflow & DSCR Matrix', icon: BarChart3 },
    { id: 'simulator', label: 'Underwriting & Stress Lab', icon: Sliders },
    { id: 'policy', label: 'Policy & Compliance Rules', icon: Scale },
    { id: 'cam', label: 'Credit Appraisal Memo (CAM)', icon: FileText },
    { id: 'copilot', label: 'Underwriter Copilot AI', icon: Bot, highlight: true },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 text-slate-300 flex flex-col justify-between shrink-0 h-screen sticky top-0">
      
      {/* Brand & Organization */}
      <div>
        <div className="p-5 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-md">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                <span>CredoLens</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-blue-950 text-blue-400 border border-blue-800/60 font-semibold">
                  SaaS
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Enterprise Credit OS</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-3 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
            Underwriting Suite
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : item.highlight ? 'text-blue-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-red-950 text-red-400 border border-red-800'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* User / Officer Profile & System Status */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-xs">
            SP
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white truncate">Shanmukhi Pratapa</div>
            <div className="text-[10px] text-slate-400 truncate flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span>Senior Credit Analyst</span>
            </div>
          </div>
        </div>
      </div>

    </aside>
  );
}