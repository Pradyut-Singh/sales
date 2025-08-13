# Sales Dashboard - Next.js Analytics Platform

A comprehensive sales analytics dashboard built with Next.js 15, TypeScript, and Tailwind CSS. This project demonstrates atomic design principles and provides interactive data visualization for sales performance tracking.

![Sales Dashboard](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌐 Live Demo

**Live Demo URL**: [https://sales-neon.vercel.app/](https://sales-neon.vercel.app/)

## 📁 GitHub Repository

**Repository Link**: [https://github.com/Pradyut-Singh/sales](https://github.com/Pradyut-Singh/sales)

## 📸 Screenshots

### Desktop Dashboard
![Desktop Dashboard](https://drive.google.com/file/d/1M19UZyjCvNF0p7sABwMTFmFvNhhzv9ZI/view?usp=sharing)
*Main dashboard view with interactive charts and controls*

### Mobile Responsive
![Mobile Dashboard](https://drive.google.com/file/d/1Jj2sdHfNSN1neZx3EAlX5AK_QJpZZfLU/view?usp=sharing)
*Fully responsive design optimized for mobile devices*

### Chart Types
![Chart Types](https://drive.google.com/file/d/1zKx-P5kQnANxcc8kuwmS_Fw6I0JEGO8k/view?usp=sharing)
*Multiple chart types: Line, Bar, and Pie charts*

## 🚀 Features

- **Interactive Charts**: Switch between line, bar, and pie charts using Recharts
- **Multi-Year Data**: Sales data for 2022, 2023, and 2024 with realistic e-commerce patterns
- **Custom Filtering**: Set sales thresholds to filter data dynamically
- **Responsive Design**: Fully responsive layout that works on all devices
- **Atomic Design**: Clean component architecture following atomic design principles
- **Real-time Insights**: Year-over-year growth calculations and key metrics
- **Modern UI**: Beautiful interface with Tailwind CSS and Lucide icons
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Fast loading with optimized bundles and lazy loading

## 🏗️ Architecture

This project follows atomic design principles:

### Atoms (Basic UI Elements)
- `Button` - Reusable button component with variants
- `Input` - Form input with validation states
- `Card` - Container component for content sections
- `Label` - Accessible label component

### Molecules (Component Combinations)
- `ChartControls` - Chart type and filter controls
- `StatsCard` - Metric display with trend indicators

### Organisms (Complex Components)
- `SalesChart` - Main chart component with multiple visualization types

### Templates (Page Layouts)
- `DashboardTemplate` - Main dashboard layout structure

## 📊 Data Structure

The application uses mock sales data inspired by real e-commerce patterns:

```typescript
interface SalesData {
  year: number;
  month: string;
  sales: number;
  orders: number;
  revenue: number;
}
```

Data includes:
- Monthly sales figures for 2022-2024
- Order counts and revenue calculations
- Realistic seasonal patterns (higher sales in Nov/Dec)
- Growth trends year-over-year

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Recharts** - Composable charting library
- **Lucide React** - Beautiful icon library
- **React 19** - Latest React features

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pradyut-Singh/sales.git
   cd ad-next-sales
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

1. **Build the application**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start production server**
   ```bash
   npm run start
   # or
   yarn start
   ```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts to connect your GitHub repository**

### Deploy to Other Platforms

The application can be deployed to any platform that supports Next.js:

- **Netlify**: Connect your GitHub repository and set build command to `npm run build`
- **Railway**: Connect your repository and it will auto-detect Next.js
- **AWS Amplify**: Connect your repository and follow the Next.js deployment guide

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Main dashboard page
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/
│   ├── atoms/               # Basic UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Label.tsx
│   ├── molecules/           # Component combinations
│   │   ├── ChartControls.tsx
│   │   └── StatsCard.tsx
│   ├── organisms/           # Complex components
│   │   └── SalesChart.tsx
│   └── templates/           # Page layouts
│       └── DashboardTemplate.tsx
├── data/
│   └── salesData.ts         # Mock sales data
├── utils/                   # Utility functions
│   └── format.ts
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── next.config.ts          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🎨 Design System

### Color Palette
- Primary: Blue (#0ea5e9)
- Secondary: Purple (#d946ef)
- Accent: Green (#22c55e)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Error: Red (#EF4444)
- Gray Scale: Various shades for text and backgrounds

### Typography
- Headings: Font weights 600-700
- Body: Font weight 400-500
- Responsive sizing with Tailwind classes

## 📈 Features in Detail

### Dashboard Overview
- **Stats Cards**: Display key metrics with trend indicators
- **Year Selection**: Switch between 2022, 2023, and 2024 data
- **Chart Types**: Line, bar, and pie chart visualizations
- **Filtering**: Set minimum sales thresholds
- **Sidebar**: Quick insights and yearly comparisons

### Chart Capabilities
- **Responsive**: Charts adapt to screen size
- **Interactive**: Hover tooltips with formatted data
- **Customizable**: Easy to extend with new chart types
- **Accessible**: Proper color contrast and labels

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive grid layouts
- **Desktop Enhancement**: Full feature set on larger screens
- **Touch Friendly**: Optimized touch targets and interactions

### Accessibility Features
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Color Contrast**: WCAG 2.1 AA compliant color ratios
- **Focus Management**: Clear focus indicators and logical tab order

## 🔮 Future Enhancements

- **API Integration**: Connect to real sales data sources
- **Export Features**: Download charts as images or PDF reports
- **Advanced Filters**: Date ranges, product categories, regions
- **User Authentication**: Personal dashboards and saved views
- **Real-time Updates**: WebSocket integration for live data
- **Mobile App**: React Native version for mobile access
- **Dark Mode**: Toggle between light and dark themes
- **Internationalization**: Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 👨‍💻 Author

**Pradyut** - Built with ❤️ using modern web technologies and best practices.

## 📞 Support

If you have any questions or need support, please reach out to:
- Email: jbirch@glynac.ai
- GitHub Issues: [Create an issue](https://github.com/Pradyut-Singh/sales)

---

**Note**: This project uses mock data for demonstration purposes. In a production environment, you would integrate with real APIs or databases for actual sales data.
