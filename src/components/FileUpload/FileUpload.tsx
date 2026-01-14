import { type InputHTMLAttributes, forwardRef, useRef, useImperativeHandle } from 'react'
import { cn } from '../../utils/cn'

export interface FileUploadProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  error?: boolean
  helperText?: string
  buttonText?: string
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    { className, error, helperText, buttonText = 'Nahrajte doklad', ...props },
    ref
  ) => {
    const internalRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => internalRef.current as HTMLInputElement)

    const handleClick = () => {
      internalRef.current?.click()
    }

    return (
      <div className="w-full">
        <div className="relative">
          <input ref={internalRef} type="file" className="hidden" {...props} />
          <div
            onClick={handleClick}
            className={cn(
              'w-full px-4 py-3 rounded-full border border-gray-300 bg-white text-gray-900 cursor-pointer flex items-center justify-between hover:border-orange-600 transition-colors',
              error && 'border-red-500',
              className
            )}
          >
            <span className="text-gray-400">{buttonText}</span>
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
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
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

FileUpload.displayName = 'FileUpload'

export default FileUpload
