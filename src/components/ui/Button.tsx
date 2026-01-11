import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      onClick,
      type = 'button',
    },
    ref
  ) => {
    const variants = {
      primary: 'bg-primary text-background hover:bg-primary-dim',
      secondary: 'bg-surface-elevated text-text border border-border hover:border-primary',
      ghost: 'bg-transparent text-text-dim hover:bg-surface-elevated hover:text-text',
      danger: 'bg-danger text-white hover:bg-danger/80',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={clsx(
          'inline-flex items-center justify-center gap-2',
          'font-medium rounded-lg',
          'transition-colors duration-200',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        onClick={onClick}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
