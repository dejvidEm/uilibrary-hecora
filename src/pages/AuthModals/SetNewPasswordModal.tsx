import { useState } from 'react'
import { Modal, Button, PasswordInput, Heading, Subheading } from '../../components'

export interface SetNewPasswordModalProps {
  isOpen: boolean
  onClose: () => void
  onBack?: () => void
  onSetPassword?: (password: string) => void
}

const SetNewPasswordModal = ({
  isOpen,
  onClose,
  onBack,
  onSetPassword,
}: SetNewPasswordModalProps) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      return
    }
    onSetPassword?.(password)
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
              Nastavete si nové heslo
            </Heading>

            {/* Subtitle */}
            <Subheading className="text-base text-gray-600 mb-8 text-center">
              Prosím, zadajte a potvrďte nové heslo. Odkaz na zmeu je časovo obmedzený.
            </Subheading>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nové heslo
                </label>
                <PasswordInput
                  placeholder="Zadajte nové heslo"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  backgroundColor="#FFFFFF"
                  required
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zopakujte nové heslo
                </label>
                <PasswordInput
                  placeholder="Zopakujte nové heslo"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  error={confirmPassword !== '' && password !== confirmPassword}
                  helperText={
                    confirmPassword !== '' && password !== confirmPassword
                      ? 'Heslá sa nezhodujú'
                      : undefined
                  }
                  backgroundColor="#FFFFFF"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <Button type="submit" color="#9E8B61">
                  Nastaviť heslo
                </Button>
                {onBack && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onBack}
                    fullWidth={false}
                  >
                    Späť
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default SetNewPasswordModal

