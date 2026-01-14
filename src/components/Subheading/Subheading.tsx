import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface SubheadingProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'div'
}

const Subheading = forwardRef<HTMLParagraphElement, SubheadingProps>(
  ({ className, as: Component = 'p', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('text-lg text-gray-600 font-normal font-sans', className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Subheading.displayName = 'Subheading'

export default Subheading
