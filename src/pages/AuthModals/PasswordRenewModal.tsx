import { useState } from 'react'
import { Modal, Button, Input, Heading, Subheading } from '../../components'

export interface PasswordRenewModalProps {
  isOpen: boolean
  onClose: () => void
  onBack?: () => void
  onSendEmail?: (email: string) => void
}

const PasswordRenewModal = ({
  isOpen,
  onClose,
  onBack,
  onSendEmail,
}: PasswordRenewModalProps) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSendEmail?.(email)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="w-full md:w-[480px] md:min-w-[480px] md:max-w-[480px] h-auto md:h-auto md:min-h-0 bg-[#FFFFFF]"
    >
      <div className="flex flex-col h-auto">
        {/* Close Button */}
        <div className="flex justify-end px-12 pt-8 pb-0">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-12 pb-12">
          <div className="max-w-md mx-auto">
            {/* Title */}
            <Heading level="h1" className="text-2xl font-bold mb-2 text-center">
              Proces obnovy hesla
            </Heading>

            {/* Subtitle */}
            <Subheading className="text-base text-gray-600 mb-8 text-center">
              Zadajte prosím svoj e-mail, na ktorý Vám zašleme odkaz, pomocou ktorého si obnovíte svoje heslo.
            </Subheading>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <Input
                  type="email"
                  placeholder="Zadajte svoj e-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  backgroundColor="#FFFFFF"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <Button type="submit" color="#9E8B61">
                  Odoslať odkaz
                </Button>
                {onBack && (
                  <div className="flex justify-center">
                    <Button
                      type="button"
                      variant="link"
                      onClick={onBack}
                    >
                      Späť na prihlásenie
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default PasswordRenewModal

