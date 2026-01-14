import { type TextareaHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface TextInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  helperText?: string
  backgroundColor?: string
}

const TextInput = forwardRef<HTMLTextAreaElement, TextInputProps>(
  ({ className, error, helperText, backgroundColor, style, ...props }, ref) => {
    const textareaStyle = backgroundColor
      ? {
          backgroundColor,
          ...style,
        }
      : style

    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className={cn(
            'w-full px-4 py-4 rounded-3xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-600 transition-colors min-h-[120px] resize-none',
            error && 'border-red-500 focus:border-red-500',
            className
          )}
          style={textareaStyle}
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

TextInput.displayName = 'TextInput'

export default TextInput

