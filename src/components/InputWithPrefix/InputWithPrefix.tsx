import {
  type InputHTMLAttributes,
  forwardRef,
  useState,
  useRef,
  useEffect,
} from 'react'
import { cn } from '../../utils/cn'
import { type SelectOption } from '../Select/Select'

export interface CountryCodeOption extends SelectOption {
  flag?: string
}

export interface InputWithPrefixProps extends InputHTMLAttributes<HTMLInputElement> {
  countryCodeOptions?: CountryCodeOption[]
  countryCode?: string
  defaultCountryCode?: string
  onCountryCodeChange?: (value: string) => void
  error?: boolean
  helperText?: string
  backgroundColor?: string
}

const InputWithPrefix = forwardRef<HTMLInputElement, InputWithPrefixProps>(
  (
    {
      className,
      countryCodeOptions = [],
      countryCode,
      defaultCountryCode,
      onCountryCodeChange,
      error,
      helperText,
      backgroundColor,
      style,
      ...props
    },
    ref
  ) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [internalCountryCode, setInternalCountryCode] = useState(
      defaultCountryCode || countryCodeOptions[0]?.value || ''
    )
    const selectRef = useRef<HTMLDivElement>(null)

    const currentCountryCode = countryCode || internalCountryCode
    const selectedCountry = countryCodeOptions.find(
      opt => opt.value === currentCountryCode
    )

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          selectRef.current &&
          !selectRef.current.contains(event.target as Node)
        ) {
          setIsSelectOpen(false)
        }
      }

      if (isSelectOpen) {
        document.addEventListener('mousedown', handleClickOutside)
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isSelectOpen])

    const handleCountryCodeSelect = (value: string) => {
      if (!countryCode) {
        setInternalCountryCode(value)
      }
      onCountryCodeChange?.(value)
      setIsSelectOpen(false)
    }

    return (
      <div className="w-full">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
            {selectedCountry?.flag && (
              <span className="mr-2 text-xl">{selectedCountry.flag}</span>
            )}
          </div>
          <div
            ref={selectRef}
            className="absolute inset-y-0 left-0 flex items-center pl-4 z-20"
          >
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSelectOpen(!isSelectOpen)}
                className="flex items-center gap-1 text-gray-600 font-medium hover:text-gray-900 transition-colors pointer-events-auto"
              >
                <span>{selectedCountry?.label || currentCountryCode}</span>
                <svg
                  className={cn(
                    'w-4 h-4 text-gray-400 transition-transform',
                    isSelectOpen && 'rotate-180'
                  )}
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
              </button>

              {isSelectOpen && (
                <div className="absolute left-0 top-full mt-1 bg-white border border-gray-300 rounded-2xl shadow-lg max-h-60 overflow-auto min-w-[120px] z-[9999]">
                  {countryCodeOptions.length === 0 ? (
                    <div className="px-4 py-3 text-gray-500 text-sm">
                      Žiadne možnosti
                    </div>
                  ) : (
                    countryCodeOptions.map(option => (
                      <div
                        key={option.value}
                        onClick={() => handleCountryCodeSelect(option.value)}
                        className={cn(
                          'px-4 py-3 cursor-pointer transition-colors first:rounded-t-2xl last:rounded-b-2xl flex items-center gap-2',
                          option.value === currentCountryCode
                            ? 'bg-orange-50 text-orange-600 font-medium'
                            : 'text-gray-900 hover:bg-gray-50'
                        )}
                      >
                        {option.flag && <span>{option.flag}</span>}
                        <span>{option.label}</span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
          <input
            ref={ref}
            className={cn(
              'w-full pl-20 pr-4 py-3 rounded-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-600 transition-colors',
              error && 'border-red-500 focus:border-red-500',
              className
            )}
            style={
              backgroundColor
                ? {
                    backgroundColor,
                    ...style,
                  }
                : style
            }
            {...props}
          />
        </div>
        {helperText && (
          <p
            className={cn(
              'mt-1 text-sm',
              error ? 'text-red-500' : 'text-gray-500'
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

InputWithPrefix.displayName = 'InputWithPrefix'

export default InputWithPrefix
