import { type ReactNode, type HTMLAttributes, forwardRef } from 'react'
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
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col h-full text-white rounded-2xl w-full max-w-[300px]',
          'border-l border-t border-r border-[#F6F3EB]',
          className
        )}
        style={{ backgroundColor: '#0F0F0F', ...props.style }}
        {...props}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b" style={{ borderColor: '#3A3A3A' }}>
          <div className="flex items-center gap-3">
            <SidebarLogo logoSrc={logoSrc} />
            {accommodationOptions.length > 0 && (
              <div className="flex-1">
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
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
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
        <div className="border-t" style={{ borderColor: '#3A3A3A' }}>
          <SidebarNavigation
            languageOptions={languageOptions}
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
            onNotificationsClick={onNotificationsClick}
            onHelpClick={onHelpClick}
          />
        </div>
      </div>
    )
  }
)

Sidebar.displayName = 'Sidebar'

export default Sidebar

