# Custom UI Components Library

A collection of reusable, customizable React components built with TypeScript and Tailwind CSS.

## Components Included

- **Button** - Two variants: default (full-width orange) and arrow (circular outline)
- **Input** - Text input with fully rounded corners
- **Select** - Custom dropdown with styled options
- **FileUpload** - File upload input with custom styling
- **DateInput** - Date picker with calendar icon
- **InputWithPrefix** - Input with country code selector
- **Toggle** - Switch/toggle component

## Installation Requirements

To use these components in your project, you need:

```bash
npm install react react-dom clsx tailwind-merge
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
```

## Setup Instructions

### 1. Copy Components

Copy the following to your project:
- `src/components/` - All component folders
- `src/utils/cn.ts` - Utility function for class merging

### 2. Configure Tailwind CSS

Ensure your `tailwind.config.ts` includes:

```typescript
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of your config
}
```

### 3. Setup PostCSS

Your `postcss.config.js` should include:

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### 4. Import Tailwind

In your main CSS file (`src/index.css`):

```css
@import "tailwindcss";
```

## Usage

```tsx
import { Button, Input, Select, Toggle } from './components'

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Input placeholder="Enter text" />
      <Select 
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' }
        ]}
      />
      <Toggle label="Enable feature" />
    </div>
  )
}
```

## Component APIs

### Button

```tsx
<Button variant="default" fullWidth>Text</Button>
<Button variant="arrow" />
```

### Input

```tsx
<Input 
  placeholder="Enter text"
  error={hasError}
  helperText="Helper text"
/>
```

### Select

```tsx
<Select
  options={[{ value: '1', label: 'Option 1' }]}
  placeholder="Select option"
  onChange={(value) => console.log(value)}
/>
```

### Toggle

```tsx
<Toggle
  label="Enable feature"
  checked={isEnabled}
  onChange={(checked) => setIsEnabled(checked)}
/>
```

## Styling

All components use Tailwind CSS with:
- Fully rounded corners (`rounded-full`)
- Amber color scheme (`amber-600`, `amber-700`, etc.)
- Light gray borders (`border-gray-300`)
- Consistent spacing and sizing

## TypeScript Support

All components are fully typed with TypeScript. Import types like:

```tsx
import type { ButtonProps, InputProps, ToggleProps } from './components'
```

