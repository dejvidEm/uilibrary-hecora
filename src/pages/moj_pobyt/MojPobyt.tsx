import { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import SidebarMobileHeader from '../../components/SidebarMobileHeader/SidebarMobileHeader'
import Heading from '../../components/Heading/Heading'
import Subheading from '../../components/Subheading/Subheading'
import Button from '../../components/Button/Button'
import Tile from '../../components/moj_pobyt/Tile/Tile'
import Weather from '../../components/moj_pobyt/Weather/Weather'
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
} from '../../components/SidebarIcons/SidebarIcons'
import { ClockIcon, PeopleIcon } from '../../components/moj_pobyt/TileIcons/TileIcons'

const MojPobyt = () => {
  const [selectedAccommodation, setSelectedAccommodation] = useState('deluxe')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const MapPinIcon = () => (
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )

  const PlayIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 p-4 bg-[#F6F3EB]">
        <SidebarMobileHeader
          logoSrc="/logo.png"
          accommodationOptions={[
            { value: 'deluxe', label: 'Apartmán Deluxe' },
            { value: 'luna', label: 'Apartmán Luna' },
          ]}
          selectedAccommodation={selectedAccommodation}
          onAccommodationChange={setSelectedAccommodation}
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />
      </div>

      {/* Sidebar */}
      <div className="flex-shrink-0 pt-2 md:pt-4 pl-2 md:pl-4 hidden md:block">
        <Sidebar
          logoSrc="/logo.png"
          accommodationOptions={[
            { value: 'deluxe', label: 'Apartmán Deluxe' },
            { value: 'luna', label: 'Apartmán Luna' },
          ]}
          selectedAccommodation={selectedAccommodation}
          onAccommodationChange={setSelectedAccommodation}
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
          ]}
          currentLanguage="sk"
          onLanguageChange={(value) => console.log('Language changed:', value)}
          onNotificationsClick={() => console.log('Notifications clicked')}
          onHelpClick={() => console.log('Help clicked')}
        />
      </div>

      {/* Mobile Sidebar */}
      <Sidebar
        logoSrc="/logo.png"
        accommodationOptions={[
          { value: 'deluxe', label: 'Apartmán Deluxe' },
          { value: 'luna', label: 'Apartmán Luna' },
        ]}
        selectedAccommodation={selectedAccommodation}
        onAccommodationChange={setSelectedAccommodation}
        menuItems={[
          {
            icon: <GridIcon />,
            label: 'Môj pobyt',
            isActive: true,
            hasDropdown: false,
            onClick: () => {
              console.log('Môj pobyt clicked')
              setIsMobileMenuOpen(false)
            },
          },
          {
            icon: <GiftIcon />,
            label: 'Moje body a odmeny',
            isActive: false,
            hasDropdown: false,
            onClick: () => {
              console.log('Moje body a odmeny clicked')
              setIsMobileMenuOpen(false)
            },
          },
          {
            icon: <BedIcon />,
            label: 'O ubytovaní',
            isActive: false,
            hasDropdown: true,
            onClick: () => {
              console.log('O ubytovaní clicked')
              setIsMobileMenuOpen(false)
            },
          },
          {
            icon: <LuggageIcon />,
            label: 'Príprava na príchod',
            isActive: false,
            hasDropdown: false,
            onClick: () => {
              console.log('Príprava na príchod clicked')
              setIsMobileMenuOpen(false)
            },
          },
          {
            icon: <BellIcon />,
            label: 'Služby a vybavenie',
            isActive: false,
            hasDropdown: true,
            onClick: () => {
              console.log('Služby a vybavenie clicked')
              setIsMobileMenuOpen(false)
            },
          },
          {
            icon: <LightbulbIcon />,
            label: 'Tipy a zľavy',
            isActive: false,
            hasDropdown: true,
            onClick: () => {
              console.log('Tipy a zľavy clicked')
              setIsMobileMenuOpen(false)
            },
          },
          {
            icon: <WalletIcon />,
            label: 'Podujatia v okolí',
            isActive: false,
            hasDropdown: false,
            onClick: () => {
              console.log('Podujatia v okolí clicked')
              setIsMobileMenuOpen(false)
            },
          },
          {
            icon: <CalendarIcon />,
            label: 'Môj plán',
            isActive: false,
            hasDropdown: false,
            onClick: () => {
              console.log('Môj plán clicked')
              setIsMobileMenuOpen(false)
            },
          },
          {
            icon: <ChatIcon />,
            label: 'Chat',
            isActive: false,
            hasDropdown: false,
            onClick: () => {
              console.log('Chat clicked')
              setIsMobileMenuOpen(false)
            },
          },
          {
            icon: <ChecklistIcon />,
            label: 'Príprava na odchod',
            isActive: false,
            hasDropdown: false,
            onClick: () => {
              console.log('Príprava na odchod clicked')
              setIsMobileMenuOpen(false)
            },
          },
        ]}
        languageOptions={[
          { value: 'sk', label: 'SK', flag: '🇸🇰' },
          { value: 'en', label: 'EN', flag: '🇬🇧' },
        ]}
        currentLanguage="sk"
        onLanguageChange={(value) => console.log('Language changed:', value)}
        onNotificationsClick={() => {
          console.log('Notifications clicked')
          setIsMobileMenuOpen(false)
        }}
        onHelpClick={() => {
          console.log('Help clicked')
          setIsMobileMenuOpen(false)
        }}
        isMobileOpen={isMobileMenuOpen}
        onMobileClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pt-16 md:pt-0">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <Heading level="h1" className="text-4xl font-bold mb-3">
                Vitajte v Apartmáne Luna!
              </Heading>
              <Subheading className="text-lg text-gray-600">
                Tešíme sa, že ste si vybrali náš apartmán. Tu nájdete všetky potrebné informácie pre váš pobyt.
              </Subheading>
            </div>
            <Button
              variant="outline"
              color="#CC6431"
              className="flex items-center gap-2"
            >
              <MapPinIcon />
              Mapa a navigácia
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mb-8 text-gray-700">
            <MapPinIcon />
            <span className="text-base">Bešeňová 77, 034 83</span>
          </div>

          {/* Weather Forecast */}
          <div className="mb-8">
            <div className="flex gap-3 overflow-x-auto pb-2">
              <Weather
                label="Dnes"
                weatherType="rainy"
                temperature="12/10°C"
              />
              <Weather
                label="Zajtra"
                weatherType="rainy"
                temperature="12/10°C"
              />
              <Weather
                label="Po"
                weatherType="rainy"
                temperature="12/10°C"
              />
              <Weather
                label="Ut"
                weatherType="rainy"
                temperature="12/10°C"
              />
              <Weather
                label="St"
                weatherType="rainy"
                temperature="12/10°C"
              />
              <Weather
                label="Št"
                weatherType="rainy"
                temperature="12/10°C"
              />
              <Weather
                label="Pi"
                weatherType="rainy"
                temperature="12/10°C"
              />
              <Weather
                label="So"
                weatherType="rainy"
                temperature="12/10°C"
              />
              <Weather
                label="Ne"
                weatherType="rainy"
                temperature="12/10°C"
              />
              <Weather
                label="Po"
                weatherType="rainy"
                temperature="12/10°C"
              />
            </div>
          </div>

          {/* Video Player Section */}
          <div className="mb-8 relative bg-gray-200 rounded-xl overflow-hidden aspect-video">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto">
                  <PlayIcon />
                </div>
                <p className="text-gray-600 font-medium">Privítanie a základné pokyny</p>
              </div>
            </div>
          </div>

          {/* Reservation Details */}
          <div>
            <Heading level="h2" className="text-2xl font-bold mb-6">
              Detaily vašej rezervácie
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Tile
                icon={<ClockIcon />}
                heading="Check-in"
                subheading="15. apríla 2025, od 14:00"
              />
              <Tile
                icon={<ClockIcon />}
                heading="Check-out"
                subheading="18. apríla 2025, do 11:00"
                buttonText="Chcem neskorší odchod"
                onButtonClick={() => console.log('Late check-out requested')}
                buttonVariant="outline"
              />
              <Tile
                icon={<PeopleIcon />}
                heading="Počet hostí"
                subheading="2 dospělí"
              />
              <Tile
                icon={<BedIcon />}
                heading="Typ izby"
                subheading="Apartmán Luna"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MojPobyt

