import { useState } from 'react'
import { Modal, Button, Input, PasswordInput, Heading, Subheading } from '../../components'

export interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onForgotPassword?: () => void
  onRegister?: () => void
  onLogin?: (email: string, password: string) => void
  onGoogleLogin?: () => void
}

const LoginModal = ({
  isOpen,
  onClose,
  onForgotPassword,
  onRegister,
  onLogin,
  onGoogleLogin,
}: LoginModalProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin?.(email, password)
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
              Prihlásenie
            </Heading>

            {/* Subtitle */}
            <Subheading className="text-base text-gray-600 mb-8 text-center">
              Zadajte svoje prihlasovacie údaje.
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

              {/* Forgot Password Link */}
              {onForgotPassword && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={onForgotPassword}
                    className="text-sm text-[#9E8B61] hover:text-[#7A6B4A] transition-colors"
                  >
                    Zabudli ste heslo?
                  </button>
                </div>
              )}

              {/* Login Button */}
              <Button type="submit" color="#9E8B61">
                Prihlásiť sa
              </Button>

              {/* Social Login Separator */}
              {onGoogleLogin && (
                <>
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-[#FFFFFF] text-gray-500">
                        Alebo sa prihlásiť cez
                      </span>
                    </div>
                  </div>

                  {/* Google Login Button */}
                  <div className="flex justify-center">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onGoogleLogin}
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

              {/* Register Link */}
              {onRegister && (
                <div className="text-center text-sm text-gray-600 mt-6">
                  Nemáte u nás ešte účet?{' '}
                  <button
                    type="button"
                    onClick={onRegister}
                    className="text-[#9E8B61] hover:text-[#7A6B4A] font-medium transition-colors"
                  >
                    Zaregistrujte sa
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

export default LoginModal

