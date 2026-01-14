import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export type ButtonVariant = 'default' | 'arrow' | 'outline' | 'icon' | 'link'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  fullWidth?: boolean
  color?: string
}

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 12L6 8L10 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'default',
      fullWidth = variant === 'default' ? true : undefined,
      disabled,
      color,
      style,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

    if (variant === 'arrow') {
      const arrowStyle = color
        ? {
          borderColor: color,
          color: color,
          '--button-color': color,
          ...style,
        }
        : style

      return (
        <button
          ref={ref}
          className={cn(
            baseStyles,
            color
              ? 'h-12 w-12 p-0 rounded-full border-2 aspect-square hover:bg-[var(--button-color)]/10 active:bg-[var(--button-color)]/20'
              : 'h-12 w-12 p-0 rounded-full border-2 border-[#CC6431] text-[#CC6431] hover:bg-orange-50 active:bg-orange-100 aspect-square',
            className
          )}
          style={arrowStyle}
          disabled={disabled}
          aria-label="Go back"
          {...props}
        >
          <ArrowIcon />
        </button>
      )
    }

    if (variant === 'outline') {
      const outlineStyle = color
        ? {
          borderColor: color,
          color: color,
          '--button-color': color,
          ...style,
        }
        : style

      return (
        <button
          ref={ref}
          className={cn(
            baseStyles,
            color
              ? 'h-12 rounded-full border-2 py-3 px-6 text-base hover:bg-[var(--button-color)]/10 active:bg-[var(--button-color)]/20'
              : 'h-12 rounded-full border-2 border-[#CC6431] text-[#CC6431] hover:bg-orange-50 active:bg-orange-100 py-3 px-6 text-base',
            fullWidth ? 'w-full' : '',
            className
          )}
          style={outlineStyle}
          disabled={disabled}
          {...props}
        >
          {children}
        </button>
      )
    }

    if (variant === 'icon') {
      const iconStyle = color
        ? {
          backgroundColor: color,
          ...style,
        }
        : style

      return (
        <button
          ref={ref}
          className={cn(
            baseStyles,
            color
              ? 'h-12 w-12 p-0 rounded-full aspect-square text-white hover:brightness-90 active:brightness-75'
              : 'h-12 w-12 p-0 rounded-full bg-[#CC6431] text-white hover:bg-orange-700 active:bg-orange-800 aspect-square',
            className
          )}
          style={iconStyle}
          disabled={disabled}
          {...props}
        >
          {children}
        </button>
      )
    }

    if (variant === 'link') {
      const linkStyle = color
        ? {
          color: color,
          '--button-color': color,
          ...style,
        }
        : style

      return (
        <button
          ref={ref}
          className={cn(
            baseStyles,
            'bg-transparent border-none underline p-0 h-auto',
            color
              ? 'hover:opacity-80 active:opacity-70'
              : 'text-[#9E8B61] hover:text-[#7A6B4A] active:text-[#6B5D42]',
            fullWidth ? 'w-full' : '',
            className
          )}
          style={linkStyle}
          disabled={disabled}
          {...props}
        >
          {children}
        </button>
      )
    }

    const defaultStyle = color
      ? {
        backgroundColor: color,
        ...style,
      }
      : style

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          color
            ? 'text-white rounded-full py-3 px-6 text-base hover:brightness-90 active:brightness-75'
            : 'bg-[#CC6431] text-white hover:bg-orange-700 active:bg-orange-800 rounded-full py-3 px-6 text-base',
          fullWidth ? 'w-full' : '',
          className
        )}
        style={defaultStyle}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
