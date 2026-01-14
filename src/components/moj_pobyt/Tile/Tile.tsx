import { type ReactNode, type HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../../utils/cn'
import Heading from '../../Heading/Heading'
import Subheading from '../../Subheading/Subheading'
import Button from '../../Button/Button'

export interface TileProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
  heading?: string
  subheading?: string
  buttonText?: string
  onButtonClick?: () => void
  buttonVariant?: 'default' | 'outline'
  buttonColor?: string
}

const Tile = forwardRef<HTMLDivElement, TileProps>(
  (
    {
      icon,
      heading,
      subheading,
      buttonText,
      onButtonClick,
      buttonVariant = 'outline',
      buttonColor,
      className,
      ...props
    },
    ref
  ) => {
    const hasContent = heading || subheading || buttonText

    return (
      <div
        ref={ref}
        className={cn(
          'bg-[#F6F3EB] rounded-2xl p-6 flex flex-col items-center',
          hasContent ? 'gap-4' : 'gap-0',
          className
        )}
        {...props}
      >
        {/* Icon Container */}
        {icon && (
          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <div className="text-[#CC6431] flex items-center justify-center">
              {icon}
            </div>
          </div>
        )}

        {/* Heading */}
        {heading && (
          <Heading level="h6" className="text-center font-bold text-gray-900 text-sm">
            {heading}
          </Heading>
        )}

        {/* Subheading */}
        {subheading && (
          <Subheading className="text-center text-gray-600 text-sm">
            {subheading}
          </Subheading>
        )}

        {/* Button */}
        {buttonText && (
          <Button
            variant={buttonVariant}
            color={buttonColor || '#CC6431'}
            onClick={onButtonClick}
            className="mt-2"
            fullWidth
          >
            {buttonText}
          </Button>
        )}
      </div>
    )
  }
)

Tile.displayName = 'Tile'

export default Tile

