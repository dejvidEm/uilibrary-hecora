# Custom UI Library

A modern, customizable React component library built with TypeScript, Tailwind CSS, and Vite.

## Project Structure

```
library-ui/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button/          # Button component
│   │   │   ├── Button.tsx   # Component implementation
│   │   │   └── index.ts     # Component exports
│   │   └── index.ts         # Main component exports
│   ├── pages/               # Demo/showcase pages
│   │   └── Showcase.tsx     # Component showcase page
│   ├── utils/               # Utility functions
│   │   └── cn.ts           # Class name utility (clsx + tailwind-merge)
│   ├── index.css           # Global styles (Tailwind imports)
│   └── main.tsx            # Application entry point
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── vite.config.ts          # Vite configuration
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the component showcase.

### Build

```bash
npm run build
```

## Components

### Button

A versatile button component with multiple variants, sizes, and states.

#### Props

- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `isLoading`: `boolean` (default: `false`)
- `fullWidth`: `boolean` (default: `false`)
- All standard HTML button attributes are supported

#### Usage

```tsx
import { Button } from './components'

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="danger">Delete</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// Loading state
<Button isLoading>Loading...</Button>

// Full width
<Button fullWidth>Full Width</Button>
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Vite** - Build tool and dev server
- **clsx** & **tailwind-merge** - Class name utilities

## Adding New Components

1. Create a new folder in `src/components/` (e.g., `src/components/Card/`)
2. Create the component file (e.g., `Card.tsx`)
3. Create an `index.ts` file to export the component
4. Export from `src/components/index.ts`
5. Add examples to `src/pages/Showcase.tsx`

## License

MIT
