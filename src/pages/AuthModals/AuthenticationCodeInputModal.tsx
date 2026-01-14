import { useState, useRef, useEffect } from 'react'
import { Modal, Button, Heading, Subheading } from '../../components'

export interface AuthenticationCodeInputModalProps {
  isOpen: boolean
  onClose: () => void
  onBack?: () => void
  onVerify?: (code: string) => void
  codeLength?: number
}

const AuthenticationCodeInputModal = ({
  isOpen,
  onClose,
  onBack,
  onVerify,
  codeLength = 6,
}: AuthenticationCodeInputModalProps) => {
  const [code, setCode] = useState<string[]>(Array(codeLength).fill(''))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (isOpen) {
      inputRefs.current[0]?.focus()
    } else {
      setCode(Array(codeLength).fill(''))
    }
  }, [isOpen, codeLength])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste
      const pastedCode = value.slice(0, codeLength).split('')
      const newCode = [...code]
      pastedCode.forEach((char, i) => {
        if (index + i < codeLength && /^\d$/.test(char)) {
          newCode[index + i] = char
        }
      })
      setCode(newCode)
      const nextIndex = Math.min(index + pastedCode.length, codeLength - 1)
      inputRefs.current[nextIndex]?.focus()
      return
    }

    if (!/^\d$/.test(value) && value !== '') {
      return
    }

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    if (value && index < codeLength - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const fullCode = code.join('')
    if (fullCode.length === codeLength) {
      onVerify?.(fullCode)
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
              Autorizácia
            </Heading>

            {/* Subtitle */}
            <Subheading className="text-base text-gray-600 mb-8 text-center">
            Pre lepšie zabezpečenie Vášho účtu používame dvojfaktorovú autorizáciu (2FA). Zadajte prosím svoj 2FA kód.
            </Subheading>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Code Input */}
              <div className="flex justify-center gap-3">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={el => {
                      inputRefs.current[index] = el
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={e => handleChange(index, e.target.value)}
                    onKeyDown={e => handleKeyDown(index, e)}
                    className="w-14 h-14 text-center text-2xl font-semibold rounded-full border border-gray-300 bg-[#FFFFFF] text-gray-900 focus:outline-none focus:border-orange-600 transition-colors"
                  />
                ))}
              </div>
              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  color="#9E8B61"
                  disabled={code.join('').length !== codeLength}
                >
                  Potvrdiť
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
            {/* Resend Code Link */}
              <div className="text-center">
                <button
                  type="button"
                  className="text-sm underline text-[#9E8B61] hover:text-[#7A6B4A] transition-colors"
                >
                  Kontaktuje Našu podporu
                </button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default AuthenticationCodeInputModal

