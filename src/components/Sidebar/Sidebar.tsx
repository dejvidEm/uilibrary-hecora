import { type ReactNode, type HTMLAttributes, forwardRef, useEffect } from 'react'
import { cn } from '../../utils/cn'
import SidebarLogo from '../SidebarLogo/SidebarLogo'
import SidebarMenuItem, { type SidebarMenuItemProps } from '../SidebarMenuItem/SidebarMenuItem'
import SidebarNavigation from '../SidebarNavigation/SidebarNavigation'
import Select, { type SelectOption } from '../Select/Select'
import { type LanguageOption } from '../LanguageSelector/LanguageSelector'

export interface SidebarMenuItemData extends Omit<SidebarMenuItemProps, 'onClick'> {
  onClick?: () => void
  subItems?: SidebarMenuItemData[]
}

export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  logoTitle?: string
  logoSrc?: string
  accommodationOptions?: SelectOption[]
  selectedAccommodation?: string
  onAccommodationChange?: (value: string) => void
  menuItems?: SidebarMenuItemData[]
  languageOptions?: LanguageOption[]
  currentLanguage?: string
  onLanguageChange?: (value: string) => void
  onNotificationsClick?: () => void
  onHelpClick?: () => void
  isMobileOpen?: boolean
  onMobileClose?: () => void
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      logoTitle = 'VILA ANNA',
      logoSrc = '/logo.png',
      accommodationOptions = [
        { value: 'deluxe', label: 'Apartmán Deluxe' },
      ],
      selectedAccommodation,
      onAccommodationChange,
      menuItems = [],
      languageOptions,
      currentLanguage,
      onLanguageChange,
      onNotificationsClick,
      onHelpClick,
      isMobileOpen,
      onMobileClose,
      className,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      if (isMobileOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
      return () => {
        document.body.style.overflow = ''
      }
    }, [isMobileOpen])

    return (
      <>
        {/* Sidebar */}
        <div
          ref={ref}
          className={cn(
            'flex flex-col h-full text-white w-full max-w-[300px]',
            // Desktop: always visible, rounded with borders
            isMobileOpen === undefined && 'hidden md:flex rounded-2xl border-l border-t border-r border-[#F6F3EB]',
            // Mobile: slide out from right with animation, no borders, rounded on left side only
            isMobileOpen !== undefined && 'fixed top-0 right-0 bottom-0 z-50 rounded-l-2xl transform transition-transform duration-300 ease-out',
            isMobileOpen === true && 'translate-x-0',
            isMobileOpen === false && 'translate-x-full pointer-events-none',
            className
          )}
          style={{ backgroundColor: '#0F0F0F', ...props.style }}
          {...props}
        >
        {/* Header */}
        <div 
          className={cn(
            isMobileOpen === undefined ? 'px-6 py-5 border-b' : 'px-4 py-4'
          )} 
          style={isMobileOpen === undefined ? { borderColor: '#3A3A3A' } : undefined}
        >
          <div className="flex items-center justify-between">
            <SidebarLogo logoSrc={logoSrc} />
            {/* Mobile: Show close button, Desktop: Show accommodation selector */}
            {isMobileOpen !== undefined ? (
              <button
                type="button"
                onClick={onMobileClose}
                className="w-10 h-10 rounded-full bg-[#1B1B1B] hover:bg-[#2A2A2A] flex items-center justify-center transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              accommodationOptions.length > 0 && (
                <div className="flex-1 ml-3">
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
              )
            )}
          </div>
        </div>

        {/* Menu Items */}
        <div className={cn(
          'flex-1 overflow-y-auto space-y-2',
          isMobileOpen === undefined ? 'px-4 py-4' : 'px-4 py-2'
        )}>
          {menuItems.map((item, index) => (
            <SidebarMenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              isActive={item.isActive}
              hasDropdown={item.hasDropdown}
              onClick={item.onClick}
            />
          ))}
        </div>

        {/* Bottom Navigation */}
        <div 
          className={cn(isMobileOpen === undefined && 'border-t')} 
          style={isMobileOpen === undefined ? { borderColor: '#3A3A3A' } : undefined}
        >
          <SidebarNavigation
            languageOptions={languageOptions}
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
            onNotificationsClick={onNotificationsClick}
            onHelpClick={onHelpClick}
          />
        </div>
      </div>
      </>
    )
  }
)

Sidebar.displayName = 'Sidebar'

export default Sidebar

