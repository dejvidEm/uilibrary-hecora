import { type ReactNode, useState } from 'react'
import { cn } from '../../utils/cn'

export interface AccordionProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
  className?: string
}

const Accordion = ({
  title,
  children,
  defaultOpen = false,
  className,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      className={cn(
        'rounded-[25px] overflow-visible',
        className || 'bg-gray-100 border border-gray-200'
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full px-4 py-3 flex items-center justify-between transition-colors',
          isOpen ? 'rounded-t-[25px]' : 'rounded-[25px]'
        )}
      >
        <span className="font-medium text-gray-900">{title}</span>
        <svg
          className={cn(
            'w-5 h-5 text-gray-400 transition-transform',
            isOpen && 'rotate-180'
          )}
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
      </button>
      {isOpen && (
        <div className="px-4 py-4 bg-white overflow-visible rounded-b-[25px]">
          {children}
        </div>
      )}
    </div>
  )
}

export default Accordion
