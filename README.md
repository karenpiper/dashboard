# Dashboard Wireframe

A comprehensive interactive wireframe for a team engagement and productivity dashboard application.

## Project Structure

```
dashboard/
├── index.html                  # Homepage wireframe
├── pages/
│   ├── snaps.html            # Social recognition system (Snaps page)
│   ├── resources.html        # Knowledge and resource center
│   ├── work.html             # Work pipeline and project showcase
│   ├── team.html             # Team analytics and calendar
│   ├── vibes.html            # Team culture and fun features
│   └── profile.html          # User profile and settings
├── styles/
│   ├── main.css              # Core layout and global styles
│   ├── typography.css        # Text and heading styles
│   └── components.css        # Reusable component styles
├── js/
│   └── interactions.js       # Interactive behaviors and functions
└── README.md                 # This file
```

## Pages Overview

### Homepage (`index.html`)
The main landing page featuring:
- **Hero Area**: Welcome message with quick action buttons
- **Daily Essentials**: Personalized dashboard, events, team pulse, and quick actions
- **Culture Row**: Recent snaps, beast babe, and weekly playlist
- **Work Row**: Latest work showcase, pipeline snapshot, and must-reads
- **Knowledge Row**: Resource categories and global search

### Snaps (`pages/snaps.html`)
Social recognition system where team members can:
- Give and receive appreciation "snaps"
- Filter snaps by view (all, about me, given)
- View snap statistics and leaderboard
- Submit anonymous or public snaps

### Resources (`pages/resources.html`)
Knowledge management center with:
- Full-width search with autocomplete
- Resource grid organized by category
- Recently viewed items sidebar
- Most used resources tracking

### Work (`pages/work.html`)
Project and portfolio management featuring:
- **Pipeline Tab**: New business, in-progress, and completed projects
- **Showcase Tab**: Featured case studies with filtering
- **Portfolio Tab**: Comprehensive project portfolio

### Team (`pages/team.html`)
Team analytics and engagement dashboard with:
- Team metrics and statistics
- Snap leaderboard
- Weekly calendar view
- Upcoming events and celebrations

### Vibes (`pages/vibes.html`)
Team culture and engagement hub featuring:
- Beast Babe of the week
- Question of the week
- Weekly playlist
- Fun archive (wins wall, inspiration war, hive mind)

### Profile (`pages/profile.html`)
User account management with:
- Profile information
- Preference settings (dark mode, notifications)
- Snap statistics and history
- Account security options

## Design System

### Color Palette
- **Primary**: #6366f1 (Indigo)
- **Secondary**: #8b5cf6 (Violet)
- **Accent**: #ec4899 (Pink)
- **Background**: #f8f9fa (Light Gray)
- **Surface**: #ffffff (White)
- **Text Primary**: #1f2937 (Dark Gray)
- **Text Secondary**: #6b7280 (Medium Gray)

### Components
- **Cards**: Elevated tiles with subtle shadows and hover effects
- **Buttons**: Primary, secondary, and action button styles
- **Badges**: Status and category indicators
- **Forms**: Input fields and form elements
- **Modals**: Overlay dialogs for actions
- **Grid Layouts**: Responsive grid systems for content

### Typography
- **Headings**: Bold, clear hierarchy (H1-H6)
- **Body Text**: 16px base size with 1.6 line-height
- **Accent Colors**: Used for emphasis and CTAs

## Features

### Interactive Elements
- **Dropdown Navigation**: Profile menu with links
- **Tab Switching**: Navigation between related content
- **Search with Autocomplete**: Real-time filtering
- **Modal Dialogs**: For forms and confirmations
- **Hover Effects**: Cards and buttons with smooth transitions
- **Responsive Design**: Works on desktop, tablet, and mobile

### UX Patterns
- Cards show primary action with links to deeper content
- Lists appear when more than four items exist
- Each module includes archive links
- Hover states use subtle animations
- Curved edges and shadows for visual depth
- Bold typography for emphasis

## Styling

### CSS Architecture
- **main.css**: Global styles, layout, and structure
- **typography.css**: Text styles and utilities
- **components.css**: Reusable component styles (cards, modals, galleries, etc.)

### Responsive Breakpoints
- Desktop: Full width
- Tablet (≤1024px): Adjusted grid columns
- Mobile (≤768px): Single column layout, adjusted typography

## JavaScript Interactions

The `interactions.js` file provides:
- Dropdown menu functionality
- Search autocomplete filtering
- Navigation active state management
- Button hover effects
- Modal open/close functions
- Tab switching
- Drag and drop for pipeline cards
- Scroll-based animations
- Form submission handling

## Getting Started

1. Open `index.html` in a web browser
2. Navigate between pages using the top navigation menu
3. Interact with buttons, modals, and other interactive elements
4. Use the dropdown menu (top-right avatar) for profile options

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend API integration
- Real data binding
- Authentication system
- Mobile app version
- Dark mode implementation
- Advanced filtering and search
- Data export functionality
- Accessibility improvements

## Notes

This is a wireframe/prototype demonstrating the layout, components, and interactions for the dashboard application. It serves as a blueprint for development and can be extended with backend functionality and additional features.
