# Performance Optimization Guide

## Current Issues & Solutions Implemented ✅

### 1. **Code Splitting (IMPLEMENTED)**

- ✅ Added lazy loading for Portfolio, About, and Contact pages
- ✅ Routes are now code-split into separate chunks
- ✅ Loading fallback component added for better UX

### 2. **Build Optimization (IMPLEMENTED)**

- ✅ Updated `vite.config.js` with:
  - Manual chunk splitting for vendor libraries
  - Terser minification with console removal
  - Drop debugger statements in production

## Additional Recommendations

### 3. **Remove Unused Dependencies** 🔴 HIGH PRIORITY

These packages are NOT used but add 11+ MB to bundle:

- `@ffmpeg/ffmpeg` - Remove if not needed for video processing
- `@ffmpeg/core` - Remove if not needed
- `@ffmpeg/util` - Remove if not needed
- `@tensorflow-models/body-pix` - Remove if not using ML features
- `@tensorflow/tfjs` - Remove if not using ML features
- `face-api.js` - Remove if not using facial recognition
- `tesseract.js` - Remove if not using OCR
- `lightbox.js-react` - Use native browser fullscreen instead
- `rss-parser` - Remove if RSS feed not needed
- `slick-carousel` & `react-slick` - Use CSS Grid/Flexbox instead

**Action:** Remove unused dependencies:

```bash
npm uninstall @ffmpeg/ffmpeg @ffmpeg/core @ffmpeg/util @tensorflow-models/body-pix @tensorflow/tfjs face-api.js tesseract.js rss-parser
```

### 4. **Image Optimization** 🔴 HIGH PRIORITY (1,023 KiB savings)

- Convert all PNG/JPG to WebP format
- Implement lazy loading with `loading="lazy"`
- Use responsive images with `srcset`
- Compress images using tools like TinyPNG or ImageOptim
- Resize images to appropriate dimensions

Example:

```jsx
<img
  src="image.webp"
  alt="description"
  loading="lazy"
  decoding="async"
  width={400}
  height={300}
/>
```

### 5. **Reduce Main Thread Work (5.4s)** 🟡 MEDIUM PRIORITY

- Move heavy axios calls to Web Workers
- Defer non-critical JavaScript execution
- Use `requestIdleCallback()` for deferred tasks

Example for Admin Panel:

```jsx
const resumeDataView = () => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => {
      // Fetch resume data
    });
  } else {
    setTimeout(() => {
      // Fallback
    }, 0);
  }
};
```

### 6. **Render-Blocking Resources (180 ms)** 🟡 MEDIUM PRIORITY

- Add `async` to non-critical scripts
- Use `defer` for script loading
- Move CSS behind media queries where possible

### 7. **Cache Policy** 🟡 MEDIUM PRIORITY

Set proper cache headers in your hosting:

- Static assets: 1 year cache
- HTML: No cache or short cache (5 minutes)
- API responses: Conditional based on data

### 8. **Minify CSS/JS** ✅ DONE

- Terser minification + console removal
- Consider using `cssnano` for CSS

### 9. **Compression** 🔴 HIGH PRIORITY

Enable Gzip/Brotli on your hosting:

```bash
# In vite.config.js, install vite-plugin-compression
npm install --save-dev vite-plugin-compression
```

Update vite.config.js:

```javascript
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [react(), compression()],
});
```

### 10. **Back/Forward Cache Issue** 🟡 MEDIUM PRIORITY

Remove event listeners properly in useEffect cleanup:

```jsx
useEffect(() => {
  const handler = () => {
    /* ... */
  };
  window.addEventListener("scroll", handler);
  return () => window.removeEventListener("scroll", handler); // ✅ Important!
}, []);
```

## Performance Metrics Before/After

| Issue         | Before     | After (Est.)    | Savings |
| ------------- | ---------- | --------------- | ------- |
| Unused JS     | 11,216 KiB | 5,000-6,000 KiB | 46-54%  |
| Images        | 1,023 KiB  | 200-300 KiB     | 70-80%  |
| Main Thread   | 5.4s       | 2-3s            | 45-55%  |
| Total Payload | 29,453 KiB | ~15,000 KiB     | 50%     |

## Quick Wins (Implement First)

1. ✅ Code splitting (DONE)
2. Remove unused npm packages (estimate 10 min)
3. Compress images to WebP (estimate 20 min)
4. Enable Gzip compression (estimate 5 min)

## Next Steps

1. Run audit after changes: `npm run build && npm run preview`
2. Use Chrome DevTools Performance tab to identify remaining bottlenecks
3. Monitor Core Web Vitals in production
4. Consider using Lighthouse CI for continuous monitoring

---

**Last Updated:** March 4, 2026
