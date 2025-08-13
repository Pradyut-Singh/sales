# Accessibility Guide

This document outlines the accessibility features and best practices implemented in the Sales Dashboard project.

## WCAG 2.1 AA Compliance

The application is designed to meet WCAG 2.1 AA standards, ensuring accessibility for users with disabilities.

## Implemented Features

### 1. Keyboard Navigation

All interactive elements are keyboard accessible:

- **Tab Navigation**: Logical tab order throughout the application
- **Enter/Space Activation**: Interactive elements respond to Enter and Space keys
- **Arrow Key Support**: Chart controls support arrow key navigation
- **Escape Key**: Modal dialogs and dropdowns can be closed with Escape

### 2. Screen Reader Support

- **ARIA Labels**: All interactive elements have descriptive ARIA labels
- **Semantic HTML**: Proper use of heading hierarchy (h1, h2, h3, etc.)
- **Alt Text**: Images and icons have appropriate alt text
- **Live Regions**: Dynamic content updates are announced to screen readers

### 3. Color and Contrast

- **Color Contrast**: All text meets WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- **Color Independence**: Information is not conveyed by color alone
- **Focus Indicators**: Clear, high-contrast focus indicators

### 4. Responsive Design

- **Touch Targets**: Minimum 44px touch targets for mobile devices
- **Viewport Scaling**: Content scales properly with browser zoom
- **Mobile Optimization**: Optimized for mobile screen readers

## Component Accessibility

### Button Component
```typescript
<Button
  ariaLabel="Switch to line chart"
  ariaPressed={chartType === 'line'}
  onClick={() => setChartType('line')}
>
  Line Chart
</Button>
```

### Input Component
```typescript
<Input
  id="threshold-input"
  ariaLabel="Set minimum sales threshold"
  ariaDescribedBy="threshold-help"
  placeholder="Enter minimum sales amount"
/>
<div id="threshold-help" className="sr-only">
  Enter a number to filter sales data above this threshold
</div>
```

### Chart Components
- **Chart Titles**: Descriptive titles for each chart type
- **Data Labels**: Clear labels for chart data points
- **Tooltips**: Accessible tooltips with formatted data
- **Legend**: Properly labeled chart legends

### Navigation
- **Skip Links**: Skip to main content functionality
- **Breadcrumbs**: Clear navigation hierarchy
- **Landmarks**: Proper use of main, nav, and section landmarks

## Testing Accessibility

### Automated Testing

1. **Lighthouse Accessibility Audit**
   ```bash
   # Run Lighthouse audit
   npx lighthouse https://your-site.com --only-categories=accessibility
   ```

2. **axe-core Testing**
   ```bash
   # Install axe-core
   npm install axe-core
   
   # Run accessibility tests
   npx axe-core --help
   ```

### Manual Testing

1. **Keyboard Testing**
   - Navigate using Tab, Shift+Tab, Enter, Space, Arrow keys
   - Verify all interactive elements are reachable
   - Test focus indicators are visible

2. **Screen Reader Testing**
   - Test with NVDA (Windows)
   - Test with VoiceOver (macOS)
   - Test with JAWS (Windows)

3. **Visual Testing**
   - Test with high contrast mode
   - Test with browser zoom (200%)
   - Test with grayscale mode

## Accessibility Checklist

### Content
- [ ] All images have alt text
- [ ] Form fields have labels
- [ ] Error messages are clear and descriptive
- [ ] Links have descriptive text

### Navigation
- [ ] Logical tab order
- [ ] Skip links for main content
- [ ] Clear focus indicators
- [ ] Keyboard shortcuts documented

### Visual Design
- [ ] Sufficient color contrast
- [ ] Text is resizable
- [ ] No reliance on color alone
- [ ] Clear visual hierarchy

### Interactive Elements
- [ ] Buttons have accessible names
- [ ] Form controls are properly labeled
- [ ] Custom controls have ARIA attributes
- [ ] Dynamic content updates are announced

## Common Issues and Solutions

### Issue: Missing Alt Text
```typescript
// ❌ Bad
<img src="chart.png" />

// ✅ Good
<img src="chart.png" alt="Sales performance chart showing monthly trends" />
```

### Issue: Poor Focus Indicators
```css
/* ❌ Bad */
button:focus {
  outline: none;
}

/* ✅ Good */
button:focus {
  outline: 2px solid #0ea5e9;
  outline-offset: 2px;
}
```

### Issue: Color-Only Information
```typescript
// ❌ Bad
<span style={{ color: 'red' }}>Error occurred</span>

// ✅ Good
<span style={{ color: 'red' }} aria-label="Error: ">Error occurred</span>
```

## Tools and Resources

### Testing Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe-core](https://github.com/dequelabs/axe-core)
- [WAVE](https://wave.webaim.org/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

### Screen Readers
- [NVDA](https://www.nvaccess.org/) (Windows, free)
- [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS, built-in)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/) (Windows, paid)

### Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Web Accessibility Initiative](https://www.w3.org/WAI/)

## Future Improvements

### Planned Enhancements
1. **Voice Commands**: Add voice control functionality
2. **High Contrast Mode**: Toggle for high contrast theme
3. **Reduced Motion**: Respect user's motion preferences
4. **Font Size Controls**: User-adjustable font sizes

### Code Examples

### High Contrast Mode
```css
@media (prefers-contrast: high) {
  .card {
    border: 2px solid #000;
    background: #fff;
  }
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus Management
```typescript
const handleModalOpen = () => {
  // Store current focus
  const previousFocus = document.activeElement;
  
  // Open modal
  setModalOpen(true);
  
  // Focus first interactive element
  const firstButton = modalRef.current?.querySelector('button');
  firstButton?.focus();
  
  // Restore focus on close
  const handleClose = () => {
    setModalOpen(false);
    previousFocus?.focus();
  };
};
```

## Support and Feedback

If you encounter accessibility issues:

1. **Report Issues**: Open an issue in the project repository
2. **Provide Details**: Include browser, screen reader, and steps to reproduce
3. **Test Cases**: Provide specific test cases for the issue

## Compliance Statement

This application strives to meet WCAG 2.1 AA standards. We are committed to making our application accessible to all users and welcome feedback on accessibility improvements.
