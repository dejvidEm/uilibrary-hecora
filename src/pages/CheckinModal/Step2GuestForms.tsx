import {
  Accordion,
  Button,
  Input,
  Select,
  DateInput,
  FileUpload,
  InputWithPrefix,
  Toggle,
  Heading,
  Subheading,
} from '../../components'

export interface GuestData {
  id: number
  firstName: string
  lastName: string
  category: string
  documentType: string
  documentNumber: string
  nationality: string
  dateOfBirth: string
  country: string
  city: string
  street: string
  postalCode: string
  email: string
  phone: string
  isMainGuest: boolean
}

interface Step2GuestFormsProps {
  guests: GuestData[]
  updateGuest: (
    id: number,
    field: keyof GuestData,
    value: string | boolean
  ) => void
  onNext: () => void
  onBack: () => void
}

const Step2GuestForms = ({
  guests,
  updateGuest,
  onNext,
  onBack,
}: Step2GuestFormsProps) => {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#F5F1ED]">
      {/* Scrollable Content */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {/* Header */}
        <div className="px-8 py-10 text-center bg-[#F5F1ED]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/logo.png" alt="VILA ANNA" className="h-14 w-auto" />
          </div>
          <Heading level="h2" className="mb-3">
            Údaje o hosťoch
          </Heading>
          <Subheading className="text-gray-700">
            Zadajte informácie o všetkých ubytovaných osobách. Údaje sa vyplnia
            automaticky z nahraného dokladu alebo ich môžete doplniť ručne.
          </Subheading>
        </div>

        {/* Accordions */}
        <div className="px-6 pb-6 space-y-3">
          {guests.map((guest, index) => (
            <Accordion
              key={guest.id}
              title={`Hosť ${index + 1}`}
              defaultOpen={false}
              className="bg-white"
            >
              <div className="space-y-4 pt-4">
                {/* Hlavný hosť - Toggle on left */}
                <div className="flex items-center">
                  <Toggle
                    checked={guest.isMainGuest}
                    onChange={checked =>
                      updateGuest(guest.id, 'isMainGuest', checked)
                    }
                    label="Hlavný hosť"
                    labelPosition="left"
                  />
                </div>

                {/* Doklad - Full Width */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Doklad
                  </label>
                  <FileUpload buttonText="Nahrajte doklad" />
                </div>

                {/* Kategoria hosťa - Full Width */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategória hosťa
                  </label>
                  <Select
                    options={[
                      { value: 'adult', label: 'Dospelý' },
                      { value: 'child', label: 'Dieťa' },
                      { value: 'senior', label: 'Senior' },
                    ]}
                    placeholder="Vyberte kategóriu"
                    value={guest.category}
                    onChange={value => updateGuest(guest.id, 'category', value)}
                  />
                </div>

                {/* Meno and Priezvisko - Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meno
                    </label>
                    <Input
                      placeholder="Meno"
                      value={guest.firstName}
                      onChange={e =>
                        updateGuest(guest.id, 'firstName', e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priezvisko
                    </label>
                    <Input
                      placeholder="Priezvisko"
                      value={guest.lastName}
                      onChange={e =>
                        updateGuest(guest.id, 'lastName', e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Štátna príslušnosť and Dátum narodenia - Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Štátna príslušnosť
                    </label>
                    <Select
                      options={[
                        { value: 'sk', label: 'Slovensko' },
                        { value: 'cz', label: 'Česká republika' },
                        { value: 'pl', label: 'Polsko' },
                        { value: 'de', label: 'Nemecko' },
                        { value: 'at', label: 'Rakúsko' },
                      ]}
                      placeholder="Vyberte štát"
                      value={guest.nationality}
                      onChange={value =>
                        updateGuest(guest.id, 'nationality', value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dátum narodenia
                    </label>
                    <DateInput
                      placeholder="Dátum narodenia"
                      value={guest.dateOfBirth}
                      onChange={e =>
                        updateGuest(guest.id, 'dateOfBirth', e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Typ dokladu and Číslo dokladu - Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Typ dokladu
                    </label>
                    <Select
                      options={[
                        { value: 'passport', label: 'Pas' },
                        { value: 'id', label: 'Občiansky preukaz' },
                        { value: 'license', label: 'Vodičský preukaz' },
                      ]}
                      placeholder="Vyberte typ"
                      value={guest.documentType}
                      onChange={value =>
                        updateGuest(guest.id, 'documentType', value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Číslo dokladu
                    </label>
                    <Input
                      placeholder="Číslo dokladu"
                      value={guest.documentNumber}
                      onChange={e =>
                        updateGuest(guest.id, 'documentNumber', e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Krajina and Mesto - Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Krajina
                    </label>
                    <Select
                      options={[
                        { value: 'sk', label: 'Slovensko' },
                        { value: 'cz', label: 'Česká republika' },
                        { value: 'pl', label: 'Polsko' },
                        { value: 'de', label: 'Nemecko' },
                        { value: 'at', label: 'Rakúsko' },
                      ]}
                      placeholder="Vyberte krajinu"
                      value={guest.country}
                      onChange={value =>
                        updateGuest(guest.id, 'country', value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesto
                    </label>
                    <Select
                      options={[
                        { value: 'bratislava', label: 'Bratislava' },
                        { value: 'kosice', label: 'Košice' },
                        { value: 'presov', label: 'Prešov' },
                        { value: 'zilina', label: 'Žilina' },
                        { value: 'trnava', label: 'Trnava' },
                      ]}
                      placeholder="Vyberte mesto"
                      value={guest.city}
                      onChange={value => updateGuest(guest.id, 'city', value)}
                    />
                  </div>
                </div>

                {/* Ulica a čislo domu and PSČ - Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ulica a čislo domu
                    </label>
                    <Input
                      placeholder="Ulica a číslo"
                      value={guest.street}
                      onChange={e =>
                        updateGuest(guest.id, 'street', e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PSČ
                    </label>
                    <Input
                      placeholder="PSČ"
                      value={guest.postalCode}
                      onChange={e =>
                        updateGuest(guest.id, 'postalCode', e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* E-mail and Phone with country code - Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      value={guest.email}
                      onChange={e =>
                        updateGuest(guest.id, 'email', e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefón
                    </label>
                    <InputWithPrefix
                      countryCodeOptions={[
                        { value: '+421', label: '+421', flag: '🇸🇰' },
                        { value: '+420', label: '+420', flag: '🇨🇿' },
                        { value: '+48', label: '+48', flag: '🇵🇱' },
                        { value: '+49', label: '+49', flag: '🇩🇪' },
                        { value: '+43', label: '+43', flag: '🇦🇹' },
                      ]}
                      defaultCountryCode="+421"
                      type="tel"
                      placeholder="912 345 678"
                      value={guest.phone}
                      onChange={e =>
                        updateGuest(guest.id, 'phone', e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 flex-shrink-0 bg-[#F5F1ED]">
        <div className="flex items-center gap-3">
          <Button variant="arrow" onClick={onBack} />
          <Button onClick={onNext} fullWidth>
            Pokračovať
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Step2GuestForms
