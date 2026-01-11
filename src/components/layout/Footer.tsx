import { motion } from 'framer-motion'
import { Github, Heart } from 'lucide-react'
import clsx from 'clsx'
import { useAppStore } from '../../store/appStore'

export function Footer() {
  const { sidebarOpen } = useAppStore()

  return (
    <motion.footer
      initial={false}
      animate={{
        marginLeft: sidebarOpen ? 256 : 72,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className={clsx(
        'fixed bottom-0 right-0 z-40',
        'h-10 px-6',
        'bg-surface/95 backdrop-blur-sm',
        'border-t border-border',
        'flex items-center justify-between',
        'text-xs text-text-muted'
      )}
      style={{ left: sidebarOpen ? 256 : 72 }}
    >
      <div className="flex items-center gap-4">
        <span>Skeleton Template v1.0.0</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:flex items-center gap-1">
          Built with <Heart className="w-3 h-3 text-danger" /> by YerryCLA
        </span>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/YerryCLA/Skeleton"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-primary transition-colors"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <span className="hidden md:inline">
          © {new Date().getFullYear()} All rights reserved
        </span>
      </div>
    </motion.footer>
  )
}
