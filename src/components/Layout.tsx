import { NavLink, Outlet } from 'react-router-dom'
import { Network, BookOpen, GitBranch, LayoutGrid } from 'lucide-react'

const navItems = [
  { to: '/', label: '知识图谱', icon: Network },
  { to: '/api', label: 'API文档', icon: BookOpen },
  { to: '/inheritance', label: '继承关系', icon: GitBranch },
  { to: '/modules', label: '模块总览', icon: LayoutGrid },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <nav className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-[var(--border)] bg-[var(--bg-nav)]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-screen-2xl items-center px-6">
          <div className="mr-8 flex items-center gap-2">
            <Network className="h-6 w-6 text-[var(--accent)]" />
            <span className="text-lg font-bold tracking-wide text-[var(--accent)]">
              XGame 知识图谱
            </span>
          </div>

          <div className="flex items-center gap-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[var(--accent)] bg-[var(--accent)]/10'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-14">
        <Outlet />
      </main>
    </div>
  )
}
