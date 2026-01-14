import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import LanguageSelector, { type LanguageOption } from '../LanguageSelector/LanguageSelector'

export interface SidebarNavigationProps extends HTMLAttributes<HTMLDivElement> {
  languageOptions?: LanguageOption[]
  currentLanguage?: string
  onLanguageChange?: (value: string) => void
  onNotificationsClick?: () => void
  onHelpClick?: () => void
}

const SidebarNavigation = forwardRef<HTMLDivElement, SidebarNavigationProps>(
  (
    {
      languageOptions = [
        { value: 'sk', label: 'SK', flag: '🇸🇰' },
        { value: 'en', label: 'EN', flag: '🇬🇧' },
      ],
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
        className={cn('flex items-center justify-between px-4 py-4', className)}
        {...props}
      >
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onNotificationsClick}
            className="w-10 h-10 rounded-full hover:opacity-90 flex items-center justify-center transition-colors"
            style={{ backgroundColor: '#1B1B1B' }}
            aria-label="Notifications"
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={onHelpClick}
            className="w-10 h-10 rounded-full hover:opacity-90 flex items-center justify-center transition-colors"
            style={{ backgroundColor: '#1B1B1B' }}
            aria-label="Help"
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </button>
        </div>

        <LanguageSelector
          options={languageOptions}
          value={currentLanguage}
          onChange={onLanguageChange}
        />
      </div>
    )
  }
)

SidebarNavigation.displayName = 'SidebarNavigation'

export default SidebarNavigation

