# Skeleton

A modern React template for building web applications with a dark robotic theme.

## Features

- **Vite** - Lightning fast dev server and build tool
- **React 18** - Latest React with concurrent features
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Utility-first styling with custom dark theme
- **Zustand** - Lightweight state management with Immer
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful SVG icons
- **ESLint + Prettier** - Code quality and formatting
- **Vitest** - Fast unit testing

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (MenuBar, Sidebar, Content, Footer)
│   └── ui/              # Reusable UI components (Button, Card)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── store/               # Zustand state management
├── test/                # Test setup and utilities
└── types/               # TypeScript type definitions
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Deploy to GitHub Pages
npm run deploy
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server |
| `build` | Build for production |
| `preview` | Preview production build |
| `lint` | Run ESLint |
| `lint:fix` | Fix ESLint issues |
| `format` | Format code with Prettier |
| `test` | Run tests in watch mode |
| `test:run` | Run tests once |
| `deploy` | Deploy to GitHub Pages |

## Included Libraries

### Core
- React 18 + React DOM
- TypeScript
- Vite

### Styling
- Tailwind CSS v4
- clsx (conditional classes)

### State Management
- Zustand (global state)
- Immer (immutable updates)
- use-local-storage-state (persistence)

### Animations
- Framer Motion

### Utilities
- lodash-es (helpers)
- nanoid (ID generation)
- ts-pattern (pattern matching)
- lucide-react (icons)

### Dev Tools
- ESLint + Prettier
- Vitest + Testing Library

## Customization

### Theme Colors

Edit `src/index.css` to customize the theme:

```css
@theme {
  --color-primary: #00d4ff;
  --color-secondary: #7c3aed;
  --color-accent: #10b981;
  /* ... */
}
```

### Adding New Pages

1. Create component in `src/components/`
2. Add route case in `App.tsx` using ts-pattern
3. Add navigation item in `Sidebar.tsx`

## License

MIT
