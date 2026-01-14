import { useState } from 'react'
import {
  Button,
  Input,
  Select,
  FileUpload,
  DateInput,
  InputWithPrefix,
  Toggle,
  Heading,
  Subheading,
  Sidebar,
} from '../components'
import {
  GridIcon,
  GiftIcon,
  BedIcon,
  LuggageIcon,
  BellIcon,
  LightbulbIcon,
  WalletIcon,
  CalendarIcon,
  ChatIcon,
  ChecklistIcon,
} from '../components/SidebarIcons/SidebarIcons'
import CheckinModal from './CheckinModal'
import {
  LoginModal,
  RegisterModal,
  PasswordRenewModal,
  EmailSentModal,
  SetNewPasswordModal,
  AuthenticationCodeInputModal,
  ProblemWithAuthenticationModal,
} from './AuthModals'

function Showcase() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isPasswordRenewModalOpen, setIsPasswordRenewModalOpen] = useState(false)
  const [isEmailSentModalOpen, setIsEmailSentModalOpen] = useState(false)
  const [isSetNewPasswordModalOpen, setIsSetNewPasswordModalOpen] = useState(false)
  const [isAuthCodeModalOpen, setIsAuthCodeModalOpen] = useState(false)
  const [isProblemModalOpen, setIsProblemModalOpen] = useState(false)

  return (
    <>
      <CheckinModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onForgotPassword={() => {
          setIsLoginModalOpen(false)
          setIsPasswordRenewModalOpen(true)
        }}
        onRegister={() => {
          setIsLoginModalOpen(false)
          setIsRegisterModalOpen(true)
        }}
        onLogin={(email, password) => {
          console.log('Login:', email, password)
          setIsLoginModalOpen(false)
        }}
        onGoogleLogin={() => {
          console.log('Google login')
        }}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onLogin={() => {
          setIsRegisterModalOpen(false)
          setIsLoginModalOpen(true)
        }}
        onRegister={(name, email, password) => {
          console.log('Register:', name, email, password)
          setIsRegisterModalOpen(false)
        }}
        onGoogleRegister={() => {
          console.log('Google register')
        }}
      />
      <PasswordRenewModal
        isOpen={isPasswordRenewModalOpen}
        onClose={() => setIsPasswordRenewModalOpen(false)}
        onBack={() => {
          setIsPasswordRenewModalOpen(false)
          setIsLoginModalOpen(true)
        }}
        onSendEmail={(email) => {
          console.log('Send email:', email)
          setIsPasswordRenewModalOpen(false)
          setIsEmailSentModalOpen(true)
        }}
      />
      <EmailSentModal
        isOpen={isEmailSentModalOpen}
        onClose={() => setIsEmailSentModalOpen(false)}
        email="user@example.com"
        onResend={() => {
          console.log('Resend email')
        }}
      />
      <SetNewPasswordModal
        isOpen={isSetNewPasswordModalOpen}
        onClose={() => setIsSetNewPasswordModalOpen(false)}
        onSetPassword={(password) => {
          console.log('Set password:', password)
          setIsSetNewPasswordModalOpen(false)
        }}
      />
      <AuthenticationCodeInputModal
        isOpen={isAuthCodeModalOpen}
        onClose={() => setIsAuthCodeModalOpen(false)}
        onVerify={(code) => {
          console.log('Verify code:', code)
          setIsAuthCodeModalOpen(false)
        }}
      />
      <ProblemWithAuthenticationModal
        isOpen={isProblemModalOpen}
        onClose={() => setIsProblemModalOpen(false)}
        onSubmit={(name, email, message) => {
          console.log('Submit problem:', { name, email, message })
          setIsProblemModalOpen(false)
        }}
      />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Typography Components Section */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              {/* Heading Examples */}
              <div>
                <div className="space-y-3">
                  <Heading level="h1">Heading Level 1</Heading>
                  <Heading level="h2">Heading Level 2</Heading>
                  <Heading level="h3">Heading Level 3</Heading>
                  <Heading level="h4">Heading Level 4</Heading>
                  <Heading level="h5">Heading Level 5</Heading>
                  <Heading level="h6">Heading Level 6</Heading>
                </div>
              </div>

              {/* Subheading Examples */}
              <div>
                <div className="space-y-3">
                  <Subheading>
                    This is a subheading text that provides additional context
                    or description.
                  </Subheading>
                  <Subheading as="span">
                    Subheading can also be used as a span element.
                  </Subheading>
                </div>
              </div>

              {/* Combined Example */}
              <div>
                <div className="space-y-2">
                  <Heading level="h2">Page Title</Heading>
                  <Subheading>
                    This is a subheading that complements the main heading
                  </Subheading>
                </div>
              </div>
            </div>
          </section>

          {/* Form Components Section */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              {/* File Upload */}
              <div>
                <FileUpload buttonText="Nahrajte doklad" />
              </div>

              {/* Select - Guest Category */}
              <div>
                <Select
                  options={[
                    { value: 'adult', label: 'Dospelý' },
                    { value: 'child', label: 'Dieťa' },
                    { value: 'senior', label: 'Senior' },
                  ]}
                  defaultValue="adult"
                />
              </div>

              {/* Input - First Name */}
              <div>
                <Input placeholder="Zadajte meno" defaultValue="Lucia" />
              </div>

              {/* Input - Last Name */}
              <div>
                <Input
                  placeholder="Zadajte priezvisko"
                  defaultValue="Ambrosova"
                />
              </div>

              {/* Select - Nationality */}
              <div>
                <Select
                  options={[
                    { value: '', label: 'Vyberte štát...' },
                    { value: 'sk', label: 'Slovensko' },
                    { value: 'cz', label: 'Česká republika' },
                    { value: 'pl', label: 'Polsko' },
                  ]}
                  defaultValue=""
                />
              </div>

              {/* Date Input */}
              <div>
                <DateInput placeholder="--/--/----" />
              </div>

              {/* Select - Document Type */}
              <div>
                <Select
                  options={[
                    { value: '', label: 'Vyberte typ dokladu' },
                    { value: 'passport', label: 'Pas' },
                    { value: 'id', label: 'Občiansky preukaz' },
                    { value: 'license', label: 'Vodičský preukaz' },
                  ]}
                  defaultValue=""
                />
              </div>

              {/* Input - Document Number */}
              <div>
                <Input placeholder="Zadajte číslo dokladu" />
              </div>

              {/* Select - Country */}
              <div>
                <Select
                  options={[
                    { value: 'sk', label: 'Slovensko' },
                    { value: 'cz', label: 'Česká republika' },
                    { value: 'pl', label: 'Polsko' },
                  ]}
                  defaultValue="sk"
                />
              </div>

              {/* Select - City */}
              <div>
                <Select
                  options={[
                    { value: 'bratislava', label: 'Bratislava' },
                    { value: 'kosice', label: 'Košice' },
                    { value: 'presov', label: 'Prešov' },
                  ]}
                  defaultValue="bratislava"
                />
              </div>

              {/* Input - Street */}
              <div>
                <Input
                  placeholder="Zadajte ulicu a číslo"
                  defaultValue="Hurbanova 39"
                />
              </div>

              {/* Input - Postal Code */}
              <div>
                <Input placeholder="Zadajte PSČ" defaultValue="911 98" />
              </div>

              {/* Input - Email */}
              <div>
                <Input
                  type="email"
                  placeholder="Zadajte email"
                  defaultValue="lucia@info.sk"
                />
              </div>

              {/* Input with Prefix - Phone Number */}
              <div>
                <InputWithPrefix
                  countryCodeOptions={[
                    { value: '+421', label: '+421', flag: '🇸🇰' },
                    { value: '+420', label: '+420', flag: '🇨🇿' },
                    { value: '+48', label: '+48', flag: '🇵🇱' },
                    { value: '+43', label: '+43', flag: '🇦🇹' },
                    { value: '+36', label: '+36', flag: '🇭🇺' },
                  ]}
                  defaultCountryCode="+421"
                  type="tel"
                  placeholder="912 345 678"
                />
              </div>
            </div>
          </section>

          {/* Toggle Component Section */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              {/* Basic Toggle */}
              <div>
                <Toggle label="Hlavný hosť" />
              </div>

              {/* Toggle States */}
              <div>
                <div className="space-y-4">
                  <Toggle label="Off state" defaultChecked={false} />
                  <Toggle label="On state" defaultChecked={true} />
                  <Toggle label="Disabled" disabled />
                </div>
              </div>

              {/* Label Position */}
              <div>
                <div className="space-y-4">
                  <Toggle label="Label on right" labelPosition="right" />
                  <Toggle label="Label on left" labelPosition="left" />
                </div>
              </div>
            </div>
          </section>

          {/* Button Examples Section */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              {/* Combined Example */}
              <div>
                <div className="flex items-center gap-4">
                  <Button variant="arrow" />
                  <Button>Pokračovať</Button>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Button variant="arrow" disabled />
                  <Button disabled>Pokračovať</Button>
                </div>
              </div>

              {/* Custom Color Example */}
              <div>
                <div className="flex items-center gap-4">
                  <Button color="#9E8B61">Custom Color Button</Button>
                  <Button variant="arrow" color="#9E8B61" />
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Button color="#9E8B61" disabled>
                    Custom Color Button
                  </Button>
                  <Button variant="arrow" color="#9E8B61" disabled />
                </div>
              </div>

              {/* Outline Variant Example */}
              <div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Button variant="outline">Outline</Button>
                    <Button variant="outline" fullWidth>
                      Full Width Outline
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" color="#9E8B61">
                      Outline
                    </Button>
                    <Button variant="outline" color="#9E8B61" fullWidth>
                      Full Width Custom
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" disabled>
                      Outline Disabled
                    </Button>
                    <Button variant="outline" color="#9E8B61" disabled>
                      Custom Disabled
                    </Button>
                  </div>
                </div>
              </div>

              {/* Icon Variant Example */}
              <div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Button variant="icon" color="#9E8B61">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </Button>
                    <Button variant="icon" color="#9E8B61">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </Button>
                    <Button variant="icon" color="#9E8B61">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="icon" color="#9E8B61">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                      </svg>
                    </Button>
                    <Button variant="icon" color="#9E8B61">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </Button>
                    <Button variant="icon" color="#9E8B61">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="icon" color="#9E8B61" disabled>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </Button>
                    <Button variant="icon" disabled>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Link Variant Example */}
              <div>
                <div className="flex items-center gap-4">
                  <Button variant="link">Link Button</Button>
                  <Button variant="link" color="#9E8B61">
                    Custom Link
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Button variant="link" disabled>
                    Link Disabled
                  </Button>
                  <Button variant="link" color="#9E8B61" disabled>
                    Custom Link Disabled
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Checkin Modal Demo */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Button onClick={() => setIsModalOpen(true)}>
                Otvoriť Check-in formulár
              </Button>
            </div>
          </section>

          {/* Authentication Modals Section */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  onClick={() => setIsLoginModalOpen(true)}
                  variant="outline"
                  fullWidth={false}
                >
                  Prihlásenie
                </Button>
                <Button
                  onClick={() => setIsRegisterModalOpen(true)}
                  variant="outline"
                  fullWidth={false}
                >
                  Registrácia
                </Button>
                <Button
                  onClick={() => setIsPasswordRenewModalOpen(true)}
                  variant="outline"
                  fullWidth={false}
                >
                  Obnovenie hesla
                </Button>
                <Button
                  onClick={() => setIsEmailSentModalOpen(true)}
                  variant="outline"
                  fullWidth={false}
                >
                  Skontrolujte si e-mail
                </Button>
                <Button
                  onClick={() => setIsSetNewPasswordModalOpen(true)}
                  variant="outline"
                  fullWidth={false}
                >
                  Nastavenie nového hesla
                </Button>
                <Button
                  onClick={() => setIsAuthCodeModalOpen(true)}
                  variant="outline"
                  fullWidth={false}
                >
                  Overovací kód
                </Button>
                <Button
                  onClick={() => setIsProblemModalOpen(true)}
                  variant="outline"
                  fullWidth={false}
                >
                  Problém s overením
                </Button>
              </div>
            </div>
          </section>

          {/* Sidebar Section */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-center">
                <div className="w-full max-w-[300px] h-[800px] border border-gray-200 rounded-lg overflow-hidden">
                  <Sidebar
                    logoSrc="/logo.png"
                    accommodationOptions={[
                      { value: 'deluxe', label: 'Apartmán Deluxe' },
                    ]}
                    selectedAccommodation="deluxe"
                    onAccommodationChange={(value) => {
                      console.log('Accommodation changed:', value)
                    }}
                    menuItems={[
                      {
                        icon: <GridIcon />,
                        label: 'Môj pobyt',
                        isActive: true,
                        hasDropdown: false,
                        onClick: () => console.log('Môj pobyt clicked'),
                      },
                      {
                        icon: <GiftIcon />,
                        label: 'Moje body a odmeny',
                        isActive: false,
                        hasDropdown: false,
                        onClick: () => console.log('Moje body a odmeny clicked'),
                      },
                      {
                        icon: <BedIcon />,
                        label: 'O ubytovaní',
                        isActive: false,
                        hasDropdown: true,
                        onClick: () => console.log('O ubytovaní clicked'),
                      },
                      {
                        icon: <LuggageIcon />,
                        label: 'Príprava na príchod',
                        isActive: false,
                        hasDropdown: false,
                        onClick: () => console.log('Príprava na príchod clicked'),
                      },
                      {
                        icon: <BellIcon />,
                        label: 'Služby a vybavenie',
                        isActive: false,
                        hasDropdown: true,
                        onClick: () => console.log('Služby a vybavenie clicked'),
                      },
                      {
                        icon: <LightbulbIcon />,
                        label: 'Tipy a zľavy',
                        isActive: false,
                        hasDropdown: true,
                        onClick: () => console.log('Tipy a zľavy clicked'),
                      },
                      {
                        icon: <WalletIcon />,
                        label: 'Podujatia v okolí',
                        isActive: false,
                        hasDropdown: false,
                        onClick: () => console.log('Podujatia v okolí clicked'),
                      },
                      {
                        icon: <CalendarIcon />,
                        label: 'Môj plán',
                        isActive: false,
                        hasDropdown: false,
                        onClick: () => console.log('Môj plán clicked'),
                      },
                      {
                        icon: <ChatIcon />,
                        label: 'Chat',
                        isActive: false,
                        hasDropdown: false,
                        onClick: () => console.log('Chat clicked'),
                      },
                      {
                        icon: <ChecklistIcon />,
                        label: 'Príprava na odchod',
                        isActive: false,
                        hasDropdown: false,
                        onClick: () => console.log('Príprava na odchod clicked'),
                      },
                    ]}
                    languageOptions={[
                      { value: 'sk', label: 'SK', flag: '🇸🇰' },
                      { value: 'en', label: 'EN', flag: '🇬🇧' },
                      { value: 'de', label: 'DE', flag: '🇩🇪' },
                    ]}
                    currentLanguage="sk"
                    onLanguageChange={(value) => {
                      console.log('Language changed:', value)
                    }}
                    onNotificationsClick={() => {
                      console.log('Notifications clicked')
                    }}
                    onHelpClick={() => {
                      console.log('Help clicked')
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Showcase
