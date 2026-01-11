import { motion } from 'framer-motion'
import { Menu, Settings, Bell, Search, User } from 'lucide-react'
import clsx from 'clsx'
import { useAppStore } from '../../store/appStore'

export function MenuBar() {
  const { toggleSidebar } = useAppStore()

  return (
    <motion.header
      initial={{ y: -56 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50',
        'h-14 px-4',
        'bg-surface/95 backdrop-blur-sm',
        'border-b border-border',
        'flex items-center justify-between'
      )}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className={clsx(
            'p-2 rounded-lg',
            'hover:bg-surface-elevated',
            'transition-colors duration-200'
          )}
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5 text-text-dim" />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">SK</span>
          </div>
          <span className="font-semibold text-text hidden sm:block">Skeleton</span>
        </div>
      </div>

      {/* Center Section - Search */}
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div
          className={clsx(
            'flex items-center gap-2 w-full',
            'px-4 py-2 rounded-lg',
            'bg-surface-elevated border border-border',
            'focus-within:border-primary transition-colors'
          )}
        >
          <Search className="w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search..."
            className={clsx(
              'flex-1 bg-transparent',
              'text-sm text-text placeholder:text-text-muted',
              'outline-none'
            )}
          />
          <kbd className="hidden lg:inline-flex items-center px-2 py-0.5 text-xs text-text-muted bg-background rounded">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <button
          className={clsx(
            'p-2 rounded-lg',
            'hover:bg-surface-elevated',
            'transition-colors duration-200',
            'relative'
          )}
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-text-dim" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </button>

        <button
          className={clsx(
            'p-2 rounded-lg',
            'hover:bg-surface-elevated',
            'transition-colors duration-200'
          )}
          aria-label="Settings"
        >
          <Settings className="w-5 h-5 text-text-dim" />
        </button>

        <button
          className={clsx(
            'ml-2 p-1 rounded-full',
            'bg-surface-elevated border border-border',
            'hover:border-primary transition-colors'
          )}
          aria-label="User menu"
        >
          <User className="w-6 h-6 text-text-dim" />
        </button>
      </div>
    </motion.header>
  )
}
