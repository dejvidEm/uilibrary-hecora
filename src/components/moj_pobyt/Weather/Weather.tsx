import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../../utils/cn'
import Heading from '../../Heading/Heading'
import Subheading from '../../Subheading/Subheading'

export type WeatherType =
  | 'sunny'
  | 'partly-cloudy'
  | 'cloudy'
  | 'rainy'
  | 'thunderstorm'
  | 'snowy'
  | 'foggy'
  | 'windy'

export interface WeatherProps extends HTMLAttributes<HTMLDivElement> {
  label?: string
  weatherType?: WeatherType
  temperature?: string
  customIcon?: React.ReactNode
}

const WeatherIcons = {
  sunny: (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  'partly-cloudy': (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  cloudy: (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  rainy: (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      <line x1="8" y1="19" x2="8" y2="21" />
      <line x1="12" y1="19" x2="12" y2="21" />
      <line x1="16" y1="19" x2="16" y2="21" />
    </svg>
  ),
  thunderstorm: (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      <polyline points="10 16 12 12 8 12 10 8" />
    </svg>
  ),
  snowy: (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      <path d="M8 16l1.5-1.5M16 16l-1.5-1.5M12 18l-1.5-1.5M12 14l-1.5-1.5" />
    </svg>
  ),
  foggy: (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      <line x1="4" y1="16" x2="20" y2="16" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  ),
  windy: (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
  ),
}

const Weather = forwardRef<HTMLDivElement, WeatherProps>(
  (
    {
      label = 'Dnes',
      weatherType = 'sunny',
      temperature,
      customIcon,
      className,
      ...props
    },
    ref
  ) => {
    const icon = customIcon || WeatherIcons[weatherType]

    return (
      <div
        ref={ref}
        className={cn(
          'bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center',
          'w-full max-w-[76px] md:max-w-[96px] aspect-[3/4]',
          'p-2 md:p-3 gap-1 md:gap-2',
          className
        )}
        {...props}
      >
        {/* Label */}
        {label && (
          <Heading level="h6" className="text-center font-bold text-gray-900 text-xs md:text-sm leading-tight">
            {label}
          </Heading>
        )}

        {/* Weather Icon */}
        <div className="text-gray-700 flex items-center justify-center flex-shrink-0">
          <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Temperature */}
        {temperature && (
          <Subheading className="text-center text-gray-600 text-[10px] md:text-xs leading-tight">
            {temperature}
          </Subheading>
        )}
      </div>
    )
  }
)

Weather.displayName = 'Weather'

export default Weather

