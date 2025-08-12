# Sales Dashboard - Next.js Analytics Platform

A comprehensive sales analytics dashboard built with Next.js 15, TypeScript, and Tailwind CSS. This project demonstrates atomic design principles and provides interactive data visualization for sales performance tracking.

![Sales Dashboard](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

- **Interactive Charts**: Switch between line, bar, and pie charts using Recharts
- **Multi-Year Data**: Sales data for 2022, 2023, and 2024 with realistic e-commerce patterns
- **Custom Filtering**: Set sales thresholds to filter data dynamically
- **Responsive Design**: Fully responsive layout that works on all devices
- **Atomic Design**: Clean component architecture following atomic design principles
- **Real-time Insights**: Year-over-year growth calculations and key metrics
- **Modern UI**: Beautiful interface with Tailwind CSS and Lucide icons

## 🏗️ Architecture

This project follows atomic design principles:

### Atoms (Basic UI Elements)
- `Button` - Reusable button component with variants
- `Input` - Form input with validation states
- `Card` - Container component for content sections

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

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ad-next-sales
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

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
│   │   └── Input.tsx
│   ├── molecules/           # Component combinations
│   │   ├── ChartControls.tsx
│   │   └── StatsCard.tsx
│   ├── organisms/           # Complex components
│   │   └── SalesChart.tsx
│   └── templates/           # Page layouts
│       └── DashboardTemplate.tsx
├── data/
│   └── salesData.ts         # Mock sales data
└── utils/                   # Utility functions
```

## 🎨 Design System

### Color Palette
- Primary: Blue (#3B82F6)
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

## 🔮 Future Enhancements

- **API Integration**: Connect to real sales data sources
- **Export Features**: Download charts as images or PDF reports
- **Advanced Filters**: Date ranges, product categories, regions
- **User Authentication**: Personal dashboards and saved views
- **Real-time Updates**: WebSocket integration for live data
- **Mobile App**: React Native version for mobile access

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Built with ❤️ using modern web technologies and best practices.

---

**Note**: This project uses mock data for demonstration purposes. In a production environment, you would integrate with real APIs or databases for actual sales data.
