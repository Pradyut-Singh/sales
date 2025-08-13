# Performance Optimization Guide

This document outlines the performance optimizations implemented in the Sales Dashboard project and best practices for maintaining high performance.

## Current Performance Metrics

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

### Core Web Vitals (Target)
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

## Implemented Optimizations

### 1. Next.js Optimizations

#### App Router
- Using Next.js 15 App Router for better performance
- Automatic code splitting and lazy loading
- Built-in image optimization

#### Turbopack
```json
{
  "scripts": {
    "dev": "next dev --turbopack"
  }
}
```

### 2. Bundle Optimization

#### Tree Shaking
- ES6 modules for better tree shaking
- Unused code elimination
- Dynamic imports for code splitting

#### Bundle Analysis
```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
```

### 3. Image Optimization

#### Next.js Image Component
```typescript
import Image from 'next/image'

<Image
  src="/chart-icon.png"
  alt="Chart icon"
  width={64}
  height={64}
  priority={true}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

#### Image Formats
- WebP for modern browsers
- Fallback to JPEG/PNG
- Responsive images with srcset

### 4. Font Optimization

#### Google Fonts
```typescript
// In layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
```

#### Font Loading Strategy
- `display: swap` for better perceived performance
- Preload critical fonts
- Subset fonts to reduce size

### 5. CSS Optimization

#### Tailwind CSS
- Purge unused styles in production
- Optimize for critical CSS
- Use CSS-in-JS sparingly

#### Critical CSS
```css
/* Inline critical styles */
.critical-styles {
  /* Only essential styles */
}
```

### 6. JavaScript Optimization

#### Code Splitting
```typescript
// Dynamic imports for heavy components
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})
```

#### Memoization
```typescript
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Expensive rendering */}</div>
})

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data)
}, [data])
```

### 7. Data Fetching Optimization

#### Caching Strategy
```typescript
// Cache expensive calculations
const cachedData = useMemo(() => {
  return processData(rawData)
}, [rawData])

// Debounce user inputs
const debouncedThreshold = useDebounce(threshold, 300)
```

#### Virtual Scrolling
For large datasets:
```typescript
import { FixedSizeList as List } from 'react-window'

const VirtualizedList = ({ items }) => (
  <List
    height={400}
    itemCount={items.length}
    itemSize={50}
    itemData={items}
  >
    {({ index, style, data }) => (
      <div style={style}>
        {data[index]}
      </div>
    )}
  </List>
)
```

## Performance Monitoring

### 1. Real User Monitoring (RUM)

#### Web Vitals
```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

function sendToAnalytics(metric) {
  // Send to your analytics service
  console.log(metric)
}

getCLS(sendToAnalytics)
getFID(sendToAnalytics)
getFCP(sendToAnalytics)
getLCP(sendToAnalytics)
getTTFB(sendToAnalytics)
```

#### Custom Metrics
```typescript
// Measure chart rendering time
const measureChartRender = () => {
  const start = performance.now()
  
  return () => {
    const end = performance.now()
    const duration = end - start
    console.log(`Chart rendered in ${duration}ms`)
  }
}
```

### 2. Performance Budgets

#### Bundle Size Limits
```json
{
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "500kb",
      "maximumError": "1mb"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "2kb",
      "maximumError": "4kb"
    }
  ]
}
```

### 3. Lighthouse CI
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
```

## Optimization Techniques

### 1. Lazy Loading

#### Component Lazy Loading
```typescript
import dynamic from 'next/dynamic'

const LazyChart = dynamic(() => import('./Chart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
})
```

#### Route-based Code Splitting
```typescript
// Automatic with Next.js App Router
// Each page is automatically code-split
```

### 2. Caching Strategies

#### Browser Caching
```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

#### Memory Caching
```typescript
// Cache expensive calculations
const cache = new Map()

const getCachedData = (key, computeFn) => {
  if (cache.has(key)) {
    return cache.get(key)
  }
  
  const result = computeFn()
  cache.set(key, result)
  return result
}
```

### 3. Debouncing and Throttling

#### Debounce User Input
```typescript
import { useDebounce } from 'use-debounce'

const [threshold, setThreshold] = useState(0)
const [debouncedThreshold] = useDebounce(threshold, 300)

useEffect(() => {
  // Only update when debounced value changes
  updateChart(debouncedThreshold)
}, [debouncedThreshold])
```

#### Throttle Scroll Events
```typescript
const useThrottle = (callback, delay) => {
  const lastRun = useRef(Date.now())
  
  return useCallback((...args) => {
    if (Date.now() - lastRun.current >= delay) {
      callback(...args)
      lastRun.current = Date.now()
    }
  }, [callback, delay])
}
```

## Performance Testing

### 1. Load Testing
```bash
# Install artillery
npm install -g artillery

# Create load test
artillery quick --count 100 --num 10 https://your-site.com
```

### 2. Bundle Analysis
```bash
# Analyze bundle size
npm run build
npm run analyze
```

### 3. Performance Profiling
```typescript
// Chrome DevTools Performance tab
// Record performance during user interactions
```

## Best Practices

### 1. Component Optimization

#### Avoid Unnecessary Re-renders
```typescript
// Use React.memo for expensive components
const ExpensiveChart = React.memo(({ data }) => {
  return <Chart data={data} />
})

// Use useCallback for event handlers
const handleClick = useCallback(() => {
  // Handle click
}, [])
```

#### Optimize State Updates
```typescript
// Batch state updates
const updateMultipleStates = () => {
  ReactDOM.flushSync(() => {
    setState1(newValue1)
    setState2(newValue2)
  })
}
```

### 2. Data Optimization

#### Pagination
```typescript
const usePagination = (data, pageSize) => {
  const [currentPage, setCurrentPage] = useState(1)
  
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return data.slice(start, start + pageSize)
  }, [data, currentPage, pageSize])
  
  return { paginatedData, currentPage, setCurrentPage }
}
```

#### Virtual Scrolling for Large Lists
```typescript
import { FixedSizeList as List } from 'react-window'

const VirtualList = ({ items }) => (
  <List
    height={400}
    itemCount={items.length}
    itemSize={50}
  >
    {({ index, style }) => (
      <div style={style}>
        {items[index]}
      </div>
    )}
  </List>
)
```

### 3. Network Optimization

#### Prefetching
```typescript
// Prefetch critical resources
<link rel="prefetch" href="/api/sales-data" />
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />
```

#### Service Worker
```typescript
// Cache API responses
const cacheResponse = async (request, response) => {
  const cache = await caches.open('api-cache')
  await cache.put(request, response.clone())
  return response
}
```

## Monitoring and Alerts

### 1. Performance Monitoring
```typescript
// Monitor Core Web Vitals
import { getCLS, getFID, getLCP } from 'web-vitals'

const sendToAnalytics = (metric) => {
  // Send to monitoring service
  if (metric.value > threshold) {
    // Alert on performance degradation
  }
}
```

### 2. Error Tracking
```typescript
// Track performance errors
window.addEventListener('error', (event) => {
  // Send to error tracking service
  console.error('Performance error:', event.error)
})
```

## Future Optimizations

### 1. Advanced Techniques
- **Web Workers**: Move heavy computations to background threads
- **WebAssembly**: Use WASM for performance-critical code
- **Streaming SSR**: Implement streaming server-side rendering

### 2. Infrastructure
- **CDN**: Use global CDN for static assets
- **Edge Computing**: Deploy to edge locations
- **Database Optimization**: Optimize database queries and indexing

### 3. Progressive Enhancement
- **Offline Support**: Implement service worker for offline functionality
- **Background Sync**: Sync data when connection is restored
- **Push Notifications**: Real-time updates for critical data

## Tools and Resources

### Performance Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)

### Monitoring Services
- [Vercel Analytics](https://vercel.com/analytics)
- [Google Analytics](https://analytics.google.com/)
- [New Relic](https://newrelic.com/)
- [DataDog](https://www.datadoghq.com/)

### Documentation
- [Web Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
