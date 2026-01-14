import { useState } from 'react'
import { Modal, Button, Input, PasswordInput, Heading, Subheading } from '../../components'

export interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin?: () => void
  onRegister?: (name: string, email: string, password: string) => void
  onGoogleRegister?: () => void
}

const RegisterModal = ({
  isOpen,
  onClose,
  onLogin,
  onRegister,
  onGoogleRegister,
}: RegisterModalProps) => {
  const [accommodationName, setAccommodationName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword || !acceptedTerms) {
      return
    }
    const fullName = `${firstName} ${lastName}`.trim()
    onRegister?.(fullName, email, password)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="w-full md:w-[480px] md:min-w-[480px] md:max-w-[480px] md:h-auto md:max-h-[90vh] bg-[#FFFFFF]"
    >
      <div className="flex flex-col h-full">
        {/* Close Button */}
        <div className="flex justify-end p-6 pb-0">
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
        <div className="flex-1 overflow-auto px-8 pb-8">
          <div className="max-w-md mx-auto">
            {/* Title */}
            <Heading level="h1" className="text-2xl font-bold mb-2 text-center">
              Registrácia
            </Heading>

            {/* Subtitle */}
            <Subheading className="text-base text-gray-600 mb-8 text-center">
              Zadajte svoje prihlasovacie údaje
            </Subheading>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Accommodation Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Názov ubytovania
                </label>
                <Input
                  type="text"
                  placeholder="Zadajte názov ubytovania"
                  value={accommodationName}
                  onChange={e => setAccommodationName(e.target.value)}
                  backgroundColor="#FFFFFF"
                  required
                />
              </div>

              {/* First Name and Last Name Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meno
                  </label>
                  <Input
                    type="text"
                    placeholder="Zadajte meno"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    backgroundColor="#FFFFFF"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priezvisko
                  </label>
                  <Input
                    type="text"
                    placeholder="Zadajte priezvisko"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    backgroundColor="#FFFFFF"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <Input
                  type="email"
                  placeholder="Zadajte e-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  backgroundColor="#FFFFFF"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Heslo
                </label>
                <PasswordInput
                  placeholder="Zadajte heslo"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  backgroundColor="#FFFFFF"
                  required
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Potvrďte heslo
                </label>
                <PasswordInput
                  placeholder="Zadajte heslo znova"
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
                  </a> a{' '}
                  <a
                    href="#"
                    className="text-[#9E8B61] hover:text-[#7A6B4A] underline"
                    onClick={e => e.preventDefault()}
                  >
                    zásadami ochrany osobných údajov
                  </a>
                </label>
              </div>

              {/* Register Button */}
              <Button type="submit" color="#9E8B61" disabled={!acceptedTerms}>
                Registrovať sa
              </Button>

              {/* Social Login Separator */}
              {onGoogleRegister && (
                <>
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-[#FFFFFF] text-gray-500">
                        Alebo sa zaregistrovať cez
                      </span>
                    </div>
                  </div>

                  {/* Google Register Button */}
                  <div className="flex justify-center">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onGoogleRegister}
                      className="bg-[#F5F1ED] border-gray-300 hover:bg-gray-50"
                      fullWidth={false}
                    >
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      <span className="text-gray-900 font-medium">Google</span>
                    </div>
                  </Button>
                  </div>
                </>
              )}

              {/* Login Link */}
              {onLogin && (
                <div className="text-center text-sm text-gray-600 mt-6">
                  Už máte účet?{' '}
                  <button
                    type="button"
                    onClick={onLogin}
                    className="text-[#9E8B61] hover:text-[#7A6B4A] font-medium transition-colors"
                  >
                    Prihláste sa
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default RegisterModal

