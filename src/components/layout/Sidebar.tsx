import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Layers,
  Settings,
  HelpCircle,
  ChevronRight,
  Gamepad2,
  FileText,
  Users,
  BarChart3,
} from 'lucide-react'
import clsx from 'clsx'
import { useAppStore } from '../../store/appStore'

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  badge?: number
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
  { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 className="w-5 h-5" /> },
  { id: 'games', label: 'Games', icon: <Gamepad2 className="w-5 h-5" />, badge: 3 },
  { id: 'documents', label: 'Documents', icon: <FileText className="w-5 h-5" /> },
  { id: 'team', label: 'Team', icon: <Users className="w-5 h-5" /> },
  { id: 'components', label: 'Components', icon: <Layers className="w-5 h-5" /> },
]

const bottomNavItems: NavItem[] = [
  { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  { id: 'help', label: 'Help & Support', icon: <HelpCircle className="w-5 h-5" /> },
]

export function Sidebar() {
  const { sidebarOpen, activeSection, setActiveSection } = useAppStore()

  const sidebarVariants = {
    open: { width: 256, transition: { duration: 0.3 } },
    closed: { width: 72, transition: { duration: 0.3 } },
  }

  return (
    <motion.aside
      initial={false}
      animate={sidebarOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      className={clsx(
        'fixed left-0 top-14 bottom-10 z-30',
        'bg-surface border-r border-border',
        'flex flex-col',
        'overflow-hidden'
      )}
    >
      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            isActive={activeSection === item.id}
            isExpanded={sidebarOpen}
            onClick={() => setActiveSection(item.id)}
          />
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-border py-4 px-3 space-y-1">
        {bottomNavItems.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            isActive={activeSection === item.id}
            isExpanded={sidebarOpen}
            onClick={() => setActiveSection(item.id)}
          />
        ))}
      </div>
    </motion.aside>
  )
}

function NavButton({
  item,
  isActive,
  isExpanded,
  onClick,
}: {
  item: NavItem
  isActive: boolean
  isExpanded: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-full flex items-center gap-3',
        'px-3 py-2.5 rounded-lg',
        'transition-all duration-200',
        isActive
          ? 'bg-primary/10 text-primary'
          : 'text-text-dim hover:bg-surface-elevated hover:text-text'
      )}
    >
      <span className="flex-shrink-0">{item.icon}</span>

      <AnimatePresence>
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="flex-1 text-left text-sm font-medium whitespace-nowrap overflow-hidden"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>

      {isExpanded && item.badge && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full"
        >
          {item.badge}
        </motion.span>
      )}

      {isExpanded && isActive && (
        <ChevronRight className="w-4 h-4 text-primary" />
      )}
    </button>
  )
}
