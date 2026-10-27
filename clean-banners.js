const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function cleanBanners() {
  for (const name of ['HOMEPageBanner_02', 'HOMEPageBanner_03']) {
    let originalFile = path.join(__dirname, 'public', 'assets', name + '.png.bak');
    if (!fs.existsSync(originalFile)) {
      originalFile = path.join(__dirname, 'public', 'assets', name + '.png');
    }
    
    const meta = await sharp(originalFile).metadata();
    const w = meta.width;
    const h = meta.height;
    
    // Mask dimensions:
    // Left side mask (up to 58% width)
    const maskW = Math.round(w * 0.58);
    // Top bar mask (covers the old navbar baked into the top 14% of the image)
    const topBarH = Math.round(h * 0.14);
    // Bottom logo ribbon mask (covers the bottom 18% of the image)
    const bottomBarH = Math.round(h * 0.18);
    const bottomBarTop = h - bottomBarH;

    const svg = Buffer.from(`
      <svg width="${w}" height="${h}">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
            <stop offset="68%" stop-color="#ffffff" stop-opacity="1" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
          </linearGradient>
        </defs>
        <!-- Left Side Mask for Titles/Icons/Buttons -->
        <rect x="0" y="0" width="${maskW}" height="${h}" fill="url(#grad)" />
        
        <!-- Top Bar Mask for Old Navbar ("Talk to MSquare" border, links) -->
        <rect x="0" y="0" width="${w}" height="${topBarH}" fill="#ffffff" />

        <!-- Bottom Bar Mask for Duplicate Client Logos Ribbon -->
        <rect x="0" y="${bottomBarTop}" width="${w}" height="${bottomBarH}" fill="#ffffff" />
      </svg>
    `);
    
    const outClean = path.join(__dirname, 'public', 'assets', name + '_clean.png');
    const outOrig = path.join(__dirname, 'public', 'assets', name + '.png');
    
    const buffer = await sharp(originalFile)
      .composite([{ input: svg, top: 0, left: 0 }])
      .toBuffer();
      
    fs.writeFileSync(outClean, buffer);
    fs.writeFileSync(outOrig, buffer);
    console.log('Cleaned top navbar and bottom ribbon for:', name);
  }
}

cleanBanners().catch(console.error);
