import { type InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  helperText?: string
  backgroundColor?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, helperText, backgroundColor, style, ...props }, ref) => {
    const inputStyle = backgroundColor
      ? {
          backgroundColor,
          ...style,
        }
      : style

    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-600 transition-colors',
            error && 'border-red-500 focus:border-red-500',
            className
          )}
          style={inputStyle}
          {...props}
        />
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

Input.displayName = 'Input'

export default Input
