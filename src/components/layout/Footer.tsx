import { Github, Heart } from 'lucide-react'
import clsx from 'clsx'

export function Footer() {
  return (
    <footer
      className={clsx(
        'fixed bottom-0 left-0 right-0 z-50',
        'h-10 px-6',
        'bg-surface/95 backdrop-blur-sm',
        'border-t border-border',
        'flex items-center justify-between',
        'text-xs text-text-muted'
      )}
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
    </footer>
  )
}
