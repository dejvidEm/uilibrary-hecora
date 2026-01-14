import { Button, Heading, Subheading } from '../../components'

interface Step4SuccessProps {
  onClose: () => void
  onRestart?: () => void
}

const Step4Success = ({ onClose, onRestart }: Step4SuccessProps) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#F5F1ED]">
      <div className="px-8 py-8 flex-shrink-0">
        <div className="flex items-center justify-center gap-2">
          <img src="/logo.png" alt="VILA ANNA" className="h-14 w-auto" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 px-8 pb-8 text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-white rounded-full border-2 border-[#CC6431]/30 flex items-center justify-center mx-auto shadow-sm">
            <svg
              className="w-16 h-16 text-[#CC6431]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Heading */}
        <Heading level="h1" className="mb-6 text-gray-900">
          Check-in je hotový!
        </Heading>

        {/* Supporting Text */}
        <Subheading className="mb-12 max-w-md text-gray-700">
          Ďakujeme za vyplnenie údajov. Teraz je váš príchod ešte jednoduchší –
          užite si pobyt naplno!
        </Subheading>

        {/* CTA Button */}
        <div className="w-full max-w-md">
          <Button onClick={onClose} fullWidth>
            Prejsť do digitálneho sprievodcu
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Step4Success
