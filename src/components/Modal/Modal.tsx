import { type ReactNode, useEffect } from 'react'
import { cn } from '../../utils/cn'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  closeOnOverlayClick?: boolean
}

const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  closeOnOverlayClick = true,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50',
        'p-0 md:p-4'
      )}
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        className={cn(
          'bg-white shadow-xl w-full h-full flex flex-col overflow-hidden',
          'rounded-none md:rounded-2xl',
          'min-w-[320px] min-h-[400px]',
          'md:w-[60%] md:h-[85vh] md:min-w-[700px] md:min-h-[600px] md:max-h-[900px] md:max-w-4xl',
          className
        )}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
