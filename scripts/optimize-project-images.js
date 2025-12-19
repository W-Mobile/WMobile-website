const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_WIDTH = 1600;
const TARGET_HEIGHT = 900;
const TARGET_FILL_PERCENTAGE = 0.75; // Content should fill 75% of canvas height
const INPUT_DIR = path.join(__dirname, '../public/assets/images/projects');
const OUTPUT_DIR = path.join(__dirname, '../public/assets/images/projects');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const imagesToProcess = [
  {
    input: 'project-wayke-consument.png',
    output: 'project-wayke-consument'
  },
  {
    input: 'project-wayke-dealer.png',
    output: 'project-wayke-dealer'
  },
  {
    input: 'project-wayke-iordning.png',
    output: 'project-wayke-iordning'
  }
];

async function processImage(inputFile, outputName) {
  const inputPath = path.join(INPUT_DIR, inputFile);

  console.log(`\nProcessing ${inputFile}...`);

  // Get original dimensions
  const metadata = await sharp(inputPath).metadata();
  console.log(`  Original: ${metadata.width}×${metadata.height}px, ${(fs.statSync(inputPath).size / 1024).toFixed(0)}KB`);

  // Step 1: Trim transparent pixels to find actual content bounds
  const trimmedImage = await sharp(inputPath)
    .trim()
    .toBuffer({ resolveWithObject: true });

  const contentWidth = trimmedImage.info.width;
  const contentHeight = trimmedImage.info.height;
  console.log(`  Content bounds: ${contentWidth}×${contentHeight}px`);

  // Step 2: Calculate scale to fill target percentage of canvas height
  const targetContentHeight = TARGET_HEIGHT * TARGET_FILL_PERCENTAGE;
  const scale = targetContentHeight / contentHeight;
  const scaledWidth = Math.round(contentWidth * scale);
  const scaledHeight = Math.round(contentHeight * scale);

  console.log(`  Scaling: ${(scale * 100).toFixed(0)}% (to fill ${(TARGET_FILL_PERCENTAGE * 100)}% of canvas)`);
  console.log(`  Scaled size: ${scaledWidth}×${scaledHeight}px`);

  // Step 3: Resize the trimmed content to scaled dimensions
  const resizedContent = await sharp(trimmedImage.data)
    .resize(scaledWidth, scaledHeight, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();

  // Step 4: Create final canvas and center the scaled content
  const baseImage = await sharp({
    create: {
      width: TARGET_WIDTH,
      height: TARGET_HEIGHT,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{
      input: resizedContent,
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  // Generate WebP version (primary)
  const webpPath = path.join(OUTPUT_DIR, `${outputName}.webp`);
  await sharp(baseImage)
    .webp({ quality: 85, alphaQuality: 90 })
    .toFile(webpPath);

  const webpSize = fs.statSync(webpPath).size;
  console.log(`  ✓ WebP: ${TARGET_WIDTH}×${TARGET_HEIGHT}px, ${(webpSize / 1024).toFixed(0)}KB`);

  // Generate PNG version (fallback)
  const pngPath = path.join(OUTPUT_DIR, `${outputName}.png`);
  await sharp(baseImage)
    .png({ quality: 85, compressionLevel: 9 })
    .toFile(pngPath);

  const pngSize = fs.statSync(pngPath).size;
  console.log(`  ✓ PNG:  ${TARGET_WIDTH}×${TARGET_HEIGHT}px, ${(pngSize / 1024).toFixed(0)}KB`);

  const originalSize = fs.statSync(inputPath).size;
  const reduction = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
  console.log(`  📉 Reduction: ${reduction}% (WebP vs original)`);
}

async function processAllImages() {
  console.log('🎨 Starting image optimization...');
  console.log(`Target dimensions: ${TARGET_WIDTH}×${TARGET_HEIGHT}px (16:9)\n`);

  for (const image of imagesToProcess) {
    try {
      await processImage(image.input, image.output);
    } catch (error) {
      console.error(`❌ Error processing ${image.input}:`, error.message);
    }
  }

  console.log('\n✅ Image optimization complete!');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
}

processAllImages().catch(console.error);
