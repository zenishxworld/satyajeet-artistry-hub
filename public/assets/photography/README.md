# Photography Images

## How to Add Your Photos

1. **Upload your images to this folder** (`public/assets/photography/`)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended: Use optimized images for web (compressed, reasonable file size)
   - Suggested dimensions: 1200x1200px or similar (square aspect ratio works best)

2. **Update the photo list** in `src/pages/Photography.tsx`
   - Find the `photos` array (around line 9)
   - Add entries for each image:

```javascript
const photos = [
  { filename: "your-image-1.jpg", alt: "Description of your photo" },
  { filename: "your-image-2.jpg", alt: "Description of your photo" },
  { filename: "your-image-3.jpg", alt: "Description of your photo" },
  // Add more images here...
];
```

## Example

If you upload files named:
- `sunset-beach.jpg`
- `mountain-landscape.jpg`
- `city-night.jpg`

Update the array like this:
```javascript
const photos = [
  { filename: "sunset-beach.jpg", alt: "Sunset at the beach" },
  { filename: "mountain-landscape.jpg", alt: "Mountain landscape photography" },
  { filename: "city-night.jpg", alt: "City lights at night" },
];
```

## Tips

- Use descriptive filenames (lowercase, hyphens instead of spaces)
- Write meaningful alt text for accessibility
- Optimize images before uploading to improve page load speed
- The gallery displays images in a responsive grid (1-4 columns depending on screen size)
