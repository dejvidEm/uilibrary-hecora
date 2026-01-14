import { Button, Heading, Subheading } from '../../components'

interface Step1WelcomeProps {
  onNext: () => void
}

const Step1Welcome = ({ onNext }: Step1WelcomeProps) => {
  return (
    <div className="flex flex-col h-full overflow-hidden pb-2 bg-[#F5F1ED]">
      {/* Header */}
      <div className="px-8 py-8 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="VILA ANNA" className="h-14 w-auto" />
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-300 cursor-pointer hover:bg-white/50 transition-colors bg-white/80">
          <span className="text-xl">🇸🇰</span>
          <span className="text-sm font-medium text-gray-700">SK</span>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-4 md:px-6 pb-12">
        {/* Title Section */}
        <div className="text-center mb-6 mt-4">
          <Heading level="h1" className="mb-3 text-gray-900 text-lg">
            Express Check-in – hotovo za 2 minúty
          </Heading>
          <Subheading className="text-gray-700 text-sm">
            Vyplňte údaje vopred a urýchlite svoj príchod.
          </Subheading>
        </div>

        {/* Image and Content Container */}
        <div className="max-w-xl mx-auto w-full">
          {/* Image */}
          <div className="mb-4 px-2 md:px-0">
            <div className="w-full aspect-[5/3] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/img.png"
                alt="Accommodation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Booking Details */}
          <div className="mb-6 px-2 md:px-0">
            <div className="mb-4">
              <Heading level="h3" className="text-lg font-bold text-gray-900">
                Apartmán Deluxe, Apartmán Premium
              </Heading>
            </div>
          </div>

          {/* 4 divs - 2x2 grid on mobile, 4 columns on desktop */}
          <div className="mb-6 grid grid-cols-2 gap-4 md:flex md:items-center md:gap-0 w-full px-2 md:px-0">
            {/* Div 1 */}
            <div className="flex flex-col md:flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 whitespace-nowrap">
                <svg
                  className="w-5 h-5 text-[#CC6431] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 truncate">
                  Dátum príchodu
                </span>
              </div>
              <span className="text-xs text-gray-600">01.08.2025 15:00</span>
            </div>

            {/* Vertical divider - hidden on mobile */}
            <div className="hidden md:block w-px h-12 bg-gray-300 mx-2"></div>

            {/* Div 2 */}
            <div className="flex flex-col md:flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 whitespace-nowrap">
                <svg
                  className="w-5 h-5 text-[#CC6431] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 truncate">
                  Dátum odchodu
                </span>
              </div>
              <span className="text-xs text-gray-600">05.08.2025 11:00</span>
            </div>

            {/* Vertical divider - hidden on mobile */}
            <div className="hidden md:block w-px h-12 bg-gray-300 mx-2"></div>

            {/* Div 3 */}
            <div className="flex flex-col md:flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <svg
                  className="w-5 h-5 text-[#CC6431] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900">
                  Počet nocí
                </span>
              </div>
              <span className="text-xs text-gray-600">4</span>
            </div>

            {/* Vertical divider - hidden on mobile */}
            <div className="hidden md:block w-px h-12 bg-gray-300 mx-2"></div>

            {/* Div 4 */}
            <div className="flex flex-col md:flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <svg
                  className="w-5 h-5 text-[#CC6431] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900">
                  Váš výber
                </span>
              </div>
              <span className="text-xs text-gray-600">2 izby pre 4 osoby</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-auto flex-shrink-0 px-2 md:px-0">
          <Button onClick={onNext} fullWidth>
            Začať check-in
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Step1Welcome
