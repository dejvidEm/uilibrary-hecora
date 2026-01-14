import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel
  as?: HeadingLevel
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 'h1', as, children, ...props }, ref) => {
    const Component = as || level

    const baseStyles = 'font-semibold text-gray-900 font-sans'

    const levelStyles = {
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-base',
    }

    return (
      <Component
        ref={ref}
        className={cn(baseStyles, levelStyles[level], className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Heading.displayName = 'Heading'

export default Heading
