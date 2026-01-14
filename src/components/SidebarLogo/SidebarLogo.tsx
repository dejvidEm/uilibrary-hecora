import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface SidebarLogoProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  logoSrc?: string
}

const SidebarLogo = forwardRef<HTMLDivElement, SidebarLogoProps>(
  ({ className, title, logoSrc = '/logo.png', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center', className)}
        {...props}
      >
        <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-sm bg-white">
          <img
            src={logoSrc}
            alt={title || 'Logo'}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {title && (
          <span className="text-white font-semibold text-lg ml-3">{title}</span>
        )}
      </div>
    )
  }
)

SidebarLogo.displayName = 'SidebarLogo'

export default SidebarLogo

