import { type InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface DateInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  error?: boolean
  helperText?: string
  backgroundColor?: string
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ className, error, helperText, backgroundColor, style, ...props }, ref) => {
    const inputStyle = backgroundColor
      ? {
          backgroundColor,
          ...style,
        }
      : style

    return (
      <div className="w-full">
        <div className="relative">
          <input
            ref={ref}
            type="date"
            className={cn(
              'w-full px-4 py-3 pr-10 rounded-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-600 transition-colors',
              error && 'border-red-500 focus:border-red-500',
              className
            )}
            style={inputStyle}
            {...props}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
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

DateInput.displayName = 'DateInput'

export default DateInput
