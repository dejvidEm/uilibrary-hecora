import { useState } from 'react'
import { Modal, Button, Input, TextInput, Heading, Subheading } from '../../components'

export interface ProblemWithAuthenticationModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit?: (name: string, email: string, message: string) => void
}

const ProblemWithAuthenticationModal = ({
  isOpen,
  onClose,
  onSubmit,
}: ProblemWithAuthenticationModalProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (acceptedTerms) {
      onSubmit?.(name, email, message)
    }
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
              Problém s autorizáciou
            </Heading>

            {/* Description */}
            <Subheading className="text-base text-gray-600 mb-8 text-center">
              Ak ste stratili prístup ku svojmu kódu pre dvojfaktorovú autorizáciu (2FA), naša podpora Vám s tým pomôže.
            </Subheading>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meno a priezvisko
                </label>
                <Input
                  type="text"
                  placeholder="Zadajte meno a priezvisko"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  backgroundColor="#FFFFFF"
                  required
                />
              </div>

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

              {/* Message TextInput */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Správa
                </label>
                <TextInput
                  placeholder="Tu opíšte svoj problém s autorizáciou"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  backgroundColor="#FFFFFF"
                  required
                />
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={e => setAcceptedTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#9E8B61] border-gray-300 rounded focus:ring-[#9E8B61] cursor-pointer"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                  Súhlasím so{' '}
                  <a
                    href="#"
                    className="text-[#9E8B61] hover:text-[#7A6B4A] underline"
                    onClick={e => e.preventDefault()}
                  >
                    všeobecnými obchodnými podmienkami
                  </a>{' '}
                  a{' '}
                  <a
                    href="#"
                    className="text-[#9E8B61] hover:text-[#7A6B4A] underline"
                    onClick={e => e.preventDefault()}
                  >
                    zásadami ochrany osobných údajov
                  </a>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <Button type="submit" color="#9E8B61" disabled={!acceptedTerms}>
                Odoslať
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ProblemWithAuthenticationModal

