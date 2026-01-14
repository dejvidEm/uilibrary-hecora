import { forwardRef, useState } from 'react'
import { cn } from '../../utils/cn'

export interface ToggleProps {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  labelPosition?: 'left' | 'right'
  className?: string
}

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled,
      label,
      labelPosition = 'right',
      className,
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked)
    const isControlled = controlledChecked !== undefined
    const checked = isControlled ? controlledChecked : internalChecked

    const handleToggle = () => {
      if (disabled) return

      const newChecked = !checked
      if (!isControlled) {
        setInternalChecked(newChecked)
      }
      onChange?.(newChecked)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleToggle()
      }
    }

    const toggleElement = (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={cn(
          'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
          checked ? 'bg-orange-600' : 'bg-gray-200',
          className
        )}
      >
        <span
          className={cn(
            'inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm',
            checked ? 'translate-x-6' : 'translate-x-0.5'
          )}
        />
      </button>
    )

    if (!label) {
      return toggleElement
    }

    return (
      <div
        className={cn(
          'flex items-center gap-3',
          labelPosition === 'left' && 'flex-row-reverse'
        )}
      >
        {toggleElement}
        <label
          className={cn(
            'text-gray-700 cursor-pointer select-none',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
          onClick={!disabled ? handleToggle : undefined}
        >
          {label}
        </label>
      </div>
    )
  }
)

Toggle.displayName = 'Toggle'

export default Toggle
