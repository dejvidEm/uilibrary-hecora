import { useState, useRef, useEffect, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { type SelectOption } from '../Select/Select'

export interface LanguageOption extends SelectOption {
  flag?: string
}

export interface LanguageSelectorProps {
  options?: LanguageOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
}

const LanguageSelector = forwardRef<HTMLDivElement, LanguageSelectorProps>(
  (
    {
      options = [],
      value: controlledValue,
      defaultValue,
      onChange,
      className,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const [internalValue, setInternalValue] = useState(defaultValue || options[0]?.value || '')
    const selectRef = useRef<HTMLDivElement>(null)

    const isControlled = controlledValue !== undefined
    const currentValue = isControlled ? controlledValue : internalValue

    const selectedOption = options.find(opt => opt.value === currentValue)

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          selectRef.current &&
          !selectRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isOpen])

    const handleSelect = (optionValue: string) => {
      if (!isControlled) {
        setInternalValue(optionValue)
      }
      onChange?.(optionValue)
      setIsOpen(false)
    }

    return (
      <div className={cn('relative', className)} ref={ref}>
        <div className="relative" ref={selectRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'px-3 py-2 rounded-lg hover:opacity-90',
              'flex items-center gap-2 text-white text-sm font-medium',
              'transition-colors'
            )}
            style={{ backgroundColor: '#1B1B1B' }}
          >
            {selectedOption?.flag && <span>{selectedOption.flag}</span>}
            <span>{selectedOption?.label || currentValue}</span>
            <svg
              className={cn(
                'w-4 h-4 text-white transition-transform',
                isOpen && 'rotate-180'
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

          {isOpen && (
            <div className="absolute bottom-full left-0 mb-2 border border-gray-700 rounded-lg shadow-lg min-w-[120px] z-50" style={{ backgroundColor: '#1B1B1B' }}>
              {options.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    'w-full px-3 py-2 flex items-center gap-2 text-sm text-white hover:opacity-90 transition-colors',
                    'first:rounded-t-lg last:rounded-b-lg'
                  )}
                  style={{ backgroundColor: option.value === currentValue ? '#2A2A2A' : '#1B1B1B' }}
                >
                  {option.flag && <span>{option.flag}</span>}
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
)

LanguageSelector.displayName = 'LanguageSelector'

export default LanguageSelector

