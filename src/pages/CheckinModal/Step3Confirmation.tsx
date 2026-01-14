import { Button, Heading, Subheading } from '../../components'
import type { GuestData } from './Step2GuestForms'

interface Step3ConfirmationProps {
  guests: GuestData[]
  onSubmit: () => void
  onBack: () => void
}

const Step3Confirmation = ({
  guests,
  onSubmit,
  onBack,
}: Step3ConfirmationProps) => {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#F5F1ED]">
      <div className="px-8 py-8 flex-shrink-0">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src="/logo.png" alt="VILA ANNA" className="h-14 w-auto" />
        </div>
        <Heading level="h2" className="text-center">
          Potvrdenie údajov
        </Heading>
        <Subheading className="mt-1 text-center">
          Skontrolujte údaje pred odoslaním
        </Subheading>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          {guests.map((guest, index) => (
            <div
              key={guest.id}
              className="border border-gray-200 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <Heading level="h3">Hosť {index + 1}</Heading>
                {guest.isMainGuest && (
                  <span className="text-sm font-medium text-orange-600">
                    Hlavný hosť
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-500">Meno:</span>{' '}
                  <span className="text-gray-900">
                    {guest.firstName || '-'} {guest.lastName || '-'}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Kategória:</span>{' '}
                  <span className="text-gray-900">{guest.category || '-'}</span>
                </div>
                <div>
                  <span className="text-gray-500">Email:</span>{' '}
                  <span className="text-gray-900">{guest.email || '-'}</span>
                </div>
                <div>
                  <span className="text-gray-500">Telefón:</span>{' '}
                  <span className="text-gray-900">{guest.phone || '-'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0 bg-[#F5F1ED]">
        <div className="flex items-center gap-3">
          <Button variant="arrow" onClick={onBack} />
          <Button onClick={onSubmit} fullWidth>
            Potvrdiť a odoslať
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Step3Confirmation
