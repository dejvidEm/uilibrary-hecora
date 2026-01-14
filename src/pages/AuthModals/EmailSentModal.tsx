import { Modal, Heading, Subheading } from '../../components'

export interface EmailSentModalProps {
  isOpen: boolean
  onClose: () => void
  email?: string
  onResend?: () => void
}

const EmailSentModal = ({
  isOpen,
  onClose,
  email,
}: EmailSentModalProps) => {
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
        <div className="px-12 pt-4 pb-12">
          <div className="max-w-md mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center border-2" style={{ borderColor: '#9E8B61' }}>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: '#9E8B61' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <Heading level="h1" className="text-2xl font-bold mb-2 text-center">
              Skontrolujte si e-mail
            </Heading>

            {/* Subtitle */}
            <Subheading className="text-base text-gray-600 text-center">
              {email ? (
                <>
                  Odkaz na obnovenie hesla sme poslali na adresu {email}. Skontrolujte aj priečinky Spam/Promo.
                </>
              ) : (
                <>
                  Odkaz bol odoslaný na vašu e-mailovú adresu. Skontrolujte
                  svoju e-mailovú schránku a postupujte podľa inštrukcií.
                </>
              )}
            </Subheading>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default EmailSentModal

