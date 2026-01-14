import { type ReactNode, type HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface SidebarMenuItemProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  label: string
  isActive?: boolean
  hasDropdown?: boolean
  onClick?: () => void
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(
  (
    {
      icon,
      label,
      isActive = false,
      hasDropdown = false,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn(
          'w-full px-4 py-3 rounded-lg flex items-center justify-between transition-colors',
          'hover:opacity-90',
          className
        )}
        style={{ backgroundColor: '#1B1B1B' }}
        {...props}
      >
        <div className="flex items-center gap-3">
          {icon && (
            <span className="text-white flex-shrink-0" style={{ width: '20px', height: '20px' }}>
              {icon}
            </span>
          )}
          <span
            className={cn(
              'text-sm font-medium',
              isActive ? 'text-orange-500' : 'text-white'
            )}
          >
            {label}
          </span>
        </div>
        {hasDropdown && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>
    )
  }
)

SidebarMenuItem.displayName = 'SidebarMenuItem'

export default SidebarMenuItem

