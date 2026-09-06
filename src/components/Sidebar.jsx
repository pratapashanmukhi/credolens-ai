import React from 'react';
import { 
  LayoutDashboard, ShieldAlert, BarChart3, Sliders, Scale, FileText, 
  Bot, ShieldCheck, ChevronRight, UserCheck, Activity, Building2, Layers,
  Terminal, Sparkles, Command
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, selectedCompany, onOpenUpload }) {
  const navItems = [
    { id: 'overview', label: 'Overview & Decision', icon: LayoutDashboard, shortcut: '1' },
    { id: 'forensics', label: 'Forensic Radar', icon: ShieldAlert, badge: selectedCompany.status === 'REJECTED' ? '3 Flags' : null, shortcut: '2' },
    { id: 'cashflow', label: 'Cashflow & DSCR', icon: BarChart3, shortcut: '3' },
    { id: 'simulator', label: 'Underwriting Lab', icon: Sliders, shortcut: '4' },
    { id: 'policy', label: 'Policy Checklist', icon: Scale, shortcut: '5' },
    { id: 'cam', label: 'Credit Memo (CAM)', icon: FileText, shortcut: '6' },
    { id: 'copilot', label: 'Underwriter Copilot', icon: Bot, highlight: true, shortcut: '7' },
  ];

  return (
    <aside className="w-64 bg-[#090d16] border-r border-[#1a2233] text-slate-300 flex flex-col justify-between shrink-0 h-screen sticky top-0 select-none">
      
      {/* Brand & Organization Header */}
      <div>
        <div className="p-4 border-b border-[#1a2233] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#131b2e] border border-[#243147] flex items-center justify-center text-blue-400 font-black text-sm">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-100 tracking-tight flex items-center gap-1.5">
                <span>CredoLens</span>
                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[#131b2e] text-blue-400 border border-[#243147]">
                  OS
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono">Credit Risk Engine</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-2.5 space-y-1">
          <div className="px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-500 font-mono">
            Workspaces
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#151e30] text-slate-100 border border-[#26354d] shadow-xs'
                    : 'text-slate-400 hover:bg-[#111724] hover:text-slate-200 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-blue-400' : item.highlight ? 'text-blue-400/80' : 'text-slate-500'}`} />
                  <span className="truncate">{item.label}</span>
                </div>
                
                <div className="flex items-center gap-1.5 shrink-0">
                  {item.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded font-mono bg-red-950/80 text-red-400 border border-red-900/60">
                      {item.badge}
                    </span>
                  )}
                  <span className="text-[9px] font-mono text-slate-600 hidden sm:inline">
                    {item.shortcut}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer: Officer & Engine Telemetry */}
      <div className="p-3 border-t border-[#1a2233] bg-[#070a12]/80 space-y-2">
        <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono px-1">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Multi-Agent Engine</span>
          </span>
          <span>4 Active</span>
        </div>

        <div className="p-2 rounded-lg bg-[#111622] border border-[#1a2233] flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-blue-950 border border-blue-800/60 flex items-center justify-center text-blue-400 font-bold text-[10px]">
            SP
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold text-slate-200 truncate">Shanmukhi Pratapa</div>
            <div className="text-[9px] text-slate-500 truncate font-mono">Lead Underwriter</div>
          </div>
        </div>
      </div>

    </aside>
  );
}