# Open Graph Image Setup Guide

## Current Issue

The Open Graph image is not displaying on Telegram and Facebook when sharing your portfolio link.

## Steps to Fix

### 1. **Ensure the Image Exists**

Make sure `graph.webp` is placed in the **public** folder:

```
d:\macos-portfolio\public\graph.webp
```

**NOT** in `public/images/` - it should be directly in the `public` folder.

### 2. **Image Requirements**

Your `graph.webp` should meet these specifications:

- **Dimensions**: 1200 x 630 pixels (optimal for all platforms)
- **Format**: WebP, PNG, or JPG (WebP is set, but PNG/JPG are more universally supported)
- **File Size**: Under 1MB (ideally under 300KB)
- **Aspect Ratio**: 1.91:1

### 3. **Alternative: Use PNG Instead**

If WebP isn't working, convert your image to PNG:

1. Convert `graph.webp` to `graph.png`
2. Update the meta tags in `index.html`:
   ```html
   <meta property="og:image" content="https://leehour.dev/graph.png" />
   <meta property="og:image:type" content="image/png" />
   ```

### 4. **Deploy the Changes**

After placing the image:

```bash
npm run build
firebase deploy --only hosting
```

Or just push to GitHub (CI/CD will deploy automatically):

```bash
git add .
git commit -m "Add Open Graph image"
git push
```

### 5. **Clear Social Media Cache**

After deploying, social media platforms cache the metadata. You need to clear it:

#### Facebook/Meta

1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL: `https://leehour.dev/`
3. Click "Scrape Again" to refresh the cache

#### Telegram

Telegram caches very aggressively. To force refresh:

1. Share the link with a query parameter: `https://leehour.dev/?v=1`
2. Or wait 24 hours for cache to expire
3. Or use: https://t.me/webpagebot (send your URL to this bot)

#### LinkedIn

1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your URL and inspect

#### Twitter/X

1. Go to: https://cards-dev.twitter.com/validator
2. Enter your URL

### 6. **Verify the Image is Accessible**

After deploying, check if the image is accessible:

- Open: https://leehour.dev/graph.webp
- You should see your image

### 7. **Test Locally First**

Before deploying, test locally:

```bash
npm run build
npm run preview
```

Then check: http://localhost:4173/graph.webp

## Troubleshooting

### Image Not Showing

- ✅ Check if file exists at `public/graph.webp`
- ✅ Verify file is deployed (check https://leehour.dev/graph.webp)
- ✅ Clear social media cache using tools above
- ✅ Try PNG format instead of WebP

### Wrong Image Showing

- Clear cache on social media platforms
- Wait 24-48 hours for cache to expire
- Add a version query parameter: `?v=2`

### Image Too Small/Large

- Resize to exactly 1200x630 pixels
- Use tools like:
  - https://www.canva.com (free, easy)
  - https://www.figma.com (professional)
  - Photoshop/GIMP

## Recommended Image Content

Your Open Graph image should include:

- Your name/brand
- "Full Stack Developer" or your title
- Key technologies (React, Next.js, Laravel)
- Professional photo (optional)
- Clean, readable design
- High contrast colors

## Example Tools to Create OG Image

1. **Canva**: https://www.canva.com/create/og-images/
2. **Figma**: Use 1200x630 frame
3. **OG Image Generator**: https://og-image.vercel.app/
4. **Social Sizes**: https://socialsizes.io/

## Current Meta Tags (Updated)

The meta tags have been updated with:

- ✅ `og:site_name`
- ✅ `og:locale`
- ✅ `og:image:secure_url`
- ✅ `og:image:alt`
- ✅ Twitter card with proper `name` attributes
- ✅ `twitter:image:alt`

All changes are ready to commit and deploy!
