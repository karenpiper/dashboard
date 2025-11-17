# Dashboard - Next.js Application

A Next.js dashboard application with core layout and navigation, converted from the wireframe prototype.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
dashboard/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout with Header and Footer
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles and CSS variables
│   ├── snaps/             # Snaps page
│   ├── resources/         # Resources page
│   ├── work/              # Work page
│   ├── team/              # Team page
│   ├── vibes/             # Vibes page
│   └── profile/           # Profile page
├── components/            # React components
│   ├── Header.tsx         # Top navigation bar
│   ├── Navigation.tsx     # Main navigation menu
│   ├── ProfileDropdown.tsx # User profile dropdown
│   └── Footer.tsx         # Footer component
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## Features

### Core Layout & Navigation

- **Sticky Header**: Top navigation bar that stays visible while scrolling
- **Active Navigation**: Highlights the current page in the navigation menu
- **Profile Dropdown**: User menu with profile, settings, notifications, and logout
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Footer**: Site footer with links and branding

### Navigation Routes

- `/` - Home
- `/snaps` - Social recognition system
- `/resources` - Knowledge and resource center
- `/work` - Work pipeline and project showcase
- `/team` - Team analytics and calendar
- `/vibes` - Team culture and fun features
- `/profile` - User profile and settings

## Design System

### Color Palette
- **Primary**: #6366f1 (Indigo)
- **Secondary**: #8b5cf6 (Violet)
- **Accent**: #ec4899 (Pink)
- **Background**: #f8f9fa (Light Gray)
- **Surface**: #ffffff (White)
- **Text Primary**: #1f2937 (Dark Gray)
- **Text Secondary**: #6b7280 (Medium Gray)

### CSS Variables
All colors, shadows, and transitions are defined as CSS variables in `globals.css` for easy theming.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Next Steps

- Add page content for each route
- Implement authentication
- Add data fetching and API integration
- Build out individual page components
- Add interactive features and animations
