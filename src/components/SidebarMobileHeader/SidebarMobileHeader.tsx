import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import Select, { type SelectOption } from '../Select/Select'

export interface SidebarMobileHeaderProps extends HTMLAttributes<HTMLDivElement> {
  logoSrc?: string
  accommodationOptions?: SelectOption[]
  selectedAccommodation?: string
  onAccommodationChange?: (value: string) => void
  onMenuClick?: () => void
}

const SidebarMobileHeader = forwardRef<HTMLDivElement, SidebarMobileHeaderProps>(
  (
    {
      logoSrc = '/logo.png',
      accommodationOptions = [],
      selectedAccommodation,
      onAccommodationChange,
      onMenuClick,
      className,
      ...props
    },
    ref
  ) => {
    const selectedOption = accommodationOptions.find(
      opt => opt.value === (selectedAccommodation || accommodationOptions[0]?.value)
    )

    return (
      <div
        ref={ref}
        className={cn(
          'bg-[#0F0F0F] rounded-lg px-4 py-3 flex items-center justify-between',
          className
        )}
        {...props}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-sm bg-white">
            <img
              src={logoSrc}
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Accommodation Selector */}
        {accommodationOptions.length > 0 && (
          <div className="flex-1 mx-3">
            <Select
              options={accommodationOptions}
              value={selectedAccommodation}
              onChange={onAccommodationChange}
              backgroundColor="#1B1B1B"
              dropdownBackgroundColor="#1B1B1B"
              textColor="#FFFFFF"
              borderColor="#3A3A3A"
              className="text-xs"
            />
          </div>
        )}

        {/* Hamburger Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          className="w-10 h-10 rounded-full bg-[#1B1B1B] flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-opacity"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    )
  }
)

SidebarMobileHeader.displayName = 'SidebarMobileHeader'

export default SidebarMobileHeader

