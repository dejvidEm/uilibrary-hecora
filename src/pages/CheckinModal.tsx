import { useState, useEffect } from 'react'
import { Modal } from '../components'
import Step1Welcome from './CheckinModal/Step1Welcome'
import Step2GuestForms, { type GuestData } from './CheckinModal/Step2GuestForms'
import Step3Confirmation from './CheckinModal/Step3Confirmation'
import Step4Success from './CheckinModal/Step4Success'

const CheckinModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [guests, setGuests] = useState<GuestData[]>([
    {
      id: 1,
      firstName: '',
      lastName: '',
      category: '',
      nationality: '',
      dateOfBirth: '',
      documentType: '',
      documentNumber: '',
      country: '',
      city: '',
      street: '',
      postalCode: '',
      email: '',
      phone: '',
      isMainGuest: false,
    },
    {
      id: 2,
      firstName: '',
      lastName: '',
      category: '',
      nationality: '',
      dateOfBirth: '',
      documentType: '',
      documentNumber: '',
      country: '',
      city: '',
      street: '',
      postalCode: '',
      email: '',
      phone: '',
      isMainGuest: false,
    },
    {
      id: 3,
      firstName: '',
      lastName: '',
      category: '',
      nationality: '',
      dateOfBirth: '',
      documentType: '',
      documentNumber: '',
      country: '',
      city: '',
      street: '',
      postalCode: '',
      email: '',
      phone: '',
      isMainGuest: false,
    },
    {
      id: 4,
      firstName: '',
      lastName: '',
      category: '',
      nationality: '',
      dateOfBirth: '',
      documentType: '',
      documentNumber: '',
      country: '',
      city: '',
      street: '',
      postalCode: '',
      email: '',
      phone: '',
      isMainGuest: false,
    },
  ])

  const updateGuest = (
    id: number,
    field: keyof GuestData,
    value: string | boolean
  ) => {
    setGuests(prev =>
      prev.map(guest =>
        guest.id === id ? { ...guest, [field]: value } : guest
      )
    )
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log('Submitting guests:', guests)
    handleNext()
  }

  const resetModal = () => {
    setCurrentStep(1)
    setGuests([
      {
        id: 1,
        firstName: '',
        lastName: '',
        category: '',
        nationality: '',
        dateOfBirth: '',
        documentType: '',
        documentNumber: '',
        country: '',
        city: '',
        street: '',
        postalCode: '',
        email: '',
        phone: '',
        isMainGuest: false,
      },
      {
        id: 2,
        firstName: '',
        lastName: '',
        category: '',
        nationality: '',
        dateOfBirth: '',
        documentType: '',
        documentNumber: '',
        country: '',
        city: '',
        street: '',
        postalCode: '',
        email: '',
        phone: '',
        isMainGuest: false,
      },
      {
        id: 3,
        firstName: '',
        lastName: '',
        category: '',
        nationality: '',
        dateOfBirth: '',
        documentType: '',
        documentNumber: '',
        country: '',
        city: '',
        street: '',
        postalCode: '',
        email: '',
        phone: '',
        isMainGuest: false,
      },
      {
        id: 4,
        firstName: '',
        lastName: '',
        category: '',
        nationality: '',
        dateOfBirth: '',
        documentType: '',
        documentNumber: '',
        country: '',
        city: '',
        street: '',
        postalCode: '',
        email: '',
        phone: '',
        isMainGuest: false,
      },
    ])
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  useEffect(() => {
    if (!isOpen) {
      resetModal()
    }
  }, [isOpen])

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1Welcome onNext={handleNext} />
      case 2:
        return (
          <Step2GuestForms
            guests={guests}
            updateGuest={updateGuest}
            onNext={handleNext}
            onBack={handleBack}
          />
        )
      case 3:
        return (
          <Step3Confirmation
            guests={guests}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        )
      case 4:
        return <Step4Success onClose={handleClose} onRestart={resetModal} />
      default:
        return null
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      closeOnOverlayClick={currentStep === 4}
      className={
        currentStep === 4
          ? 'md:w-[35%] md:max-w-sm md:h-auto md:max-h-[500px] bg-[#F5F1ED]'
          : undefined
      }
    >
      <div className="flex flex-col h-full">
        {currentStep > 1 && currentStep < 4 && (
          <div className="px-8 py-8 flex items-center bg-[#F5F1ED] justify-end flex-shrink-0">
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
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
        )}
        <div className="flex-1 min-h-0 overflow-auto">
          {renderStepContent()}
        </div>
      </div>
    </Modal>
  )
}

export default CheckinModal
