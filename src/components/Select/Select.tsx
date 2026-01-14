import { useState, useRef, useEffect, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  options?: SelectOption[]
  value?: string
  defaultValue?: string
  placeholder?: string
  error?: boolean
  helperText?: string
  className?: string
  onChange?: (value: string) => void
  disabled?: boolean
  backgroundColor?: string
  dropdownBackgroundColor?: string
  textColor?: string
  borderColor?: string
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options = [],
      value: controlledValue,
      defaultValue,
      placeholder = 'Vyberte možnosť...',
      error,
      helperText,
      className,
      onChange,
      disabled,
      backgroundColor,
      dropdownBackgroundColor,
      textColor,
      borderColor,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const [internalValue, setInternalValue] = useState(defaultValue || '')
    const selectRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

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

    useEffect(() => {
      if (isOpen && dropdownRef.current) {
        dropdownRef.current.scrollTop = 0
      }
    }, [isOpen])

    const handleSelect = (optionValue: string) => {
      if (!isControlled) {
        setInternalValue(optionValue)
      }
      onChange?.(optionValue)
      setIsOpen(false)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setIsOpen(!isOpen)
      } else if (e.key === 'Escape') {
        setIsOpen(false)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        } else {
          const currentIndex = options.findIndex(
            opt => opt.value === currentValue
          )
          const nextIndex = Math.min(currentIndex + 1, options.length - 1)
          handleSelect(options[nextIndex].value)
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (isOpen) {
          const currentIndex = options.findIndex(
            opt => opt.value === currentValue
          )
          const prevIndex = Math.max(currentIndex - 1, 0)
          handleSelect(options[prevIndex].value)
        }
      }
    }

    // Extract text size class from className
    const textSizeClass = className?.match(/\btext-(xs|sm|base|lg|xl|2xl|3xl)\b/)?.[0] || ''
    // Remove text size class from className to avoid duplication
    const classNameWithoutTextSize = className?.replace(/\btext-(xs|sm|base|lg|xl|2xl|3xl)\b/g, '').trim() || ''

    return (
      <div className="w-full" ref={ref}>
        <div className="relative" ref={selectRef}>
          <div
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            tabIndex={disabled ? -1 : 0}
            onKeyDown={handleKeyDown}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={cn(
              'w-full px-4 py-3 pr-10 border cursor-pointer flex items-center transition-colors relative',
              !className?.includes('rounded-') && 'rounded-full',
              error && 'border-red-500',
              disabled && 'opacity-50 cursor-not-allowed',
              !disabled && !borderColor && 'hover:border-orange-600 focus:outline-none focus:border-orange-600',
              !borderColor && 'border-gray-300',
              !backgroundColor && 'bg-white',
              !textColor && 'text-gray-900',
              classNameWithoutTextSize || className
            )}
            style={{
              backgroundColor: backgroundColor,
              color: textColor,
              borderColor: borderColor || (error ? undefined : undefined),
            }}
          >
            <span
              className={cn(
                'flex-1 text-left pr-2',
                !selectedOption && !textColor && 'text-gray-400',
                textSizeClass
              )}
              style={!selectedOption && textColor ? { color: textColor + '80' } : undefined}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg
                className={cn(
                  'w-5 h-5 transition-transform',
                  !textColor && 'text-gray-400'
                )}
                style={textColor ? { color: textColor + 'CC' } : undefined}
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
            </div>
          </div>

          {isOpen && !disabled && (
            <div
              ref={dropdownRef}
              role="listbox"
              className={cn(
                'absolute z-[9999] w-full mt-1 border rounded-2xl shadow-lg max-h-60 overflow-auto',
                !dropdownBackgroundColor && 'bg-white',
                !borderColor && 'border-gray-300'
              )}
              style={{
                backgroundColor: dropdownBackgroundColor,
                borderColor: borderColor,
              }}
            >
              {options.length === 0 ? (
                <div className="px-4 py-3 text-gray-500 text-sm">
                  Žiadne možnosti
                </div>
              ) : (
                options.map(option => (
                  <div
                    key={option.value}
                    role="option"
                    aria-selected={option.value === currentValue}
                    onClick={() => handleSelect(option.value)}
                    className={cn(
                      'px-4 py-3 cursor-pointer transition-colors first:rounded-t-2xl last:rounded-b-2xl',
                      option.value === currentValue && !dropdownBackgroundColor
                        ? 'bg-orange-50 text-orange-600 font-medium'
                        : !textColor && 'text-gray-900',
                      !dropdownBackgroundColor && option.value !== currentValue && 'hover:bg-gray-50',
                      dropdownBackgroundColor && option.value !== currentValue && 'hover:opacity-90'
                    )}
                    style={{
                      backgroundColor: option.value === currentValue && dropdownBackgroundColor
                        ? '#2A2A2A'
                        : dropdownBackgroundColor || undefined,
                      color: textColor || undefined,
                    }}
                  >
                    {option.label}
                  </div>
                ))
              )}
            </div>
          )}
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

Select.displayName = 'Select'

export default Select
