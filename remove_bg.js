const Jimp = require('jimp');

async function removeBg() {
  const image = await Jimp.read('./src/assets/hero_3d.png');
  const targetColor = image.getPixelColor(0, 0);
  const { r: tr, g: tg, b: tb } = Jimp.intToRGBA(targetColor);

  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Calculate Euclidean distance in RGB space
    const dist = Math.sqrt(Math.pow(r - tr, 2) + Math.pow(g - tg, 2) + Math.pow(b - tb, 2));
    
    if (dist < 40) {
      this.bitmap.data[idx + 3] = 0; // alpha to 0
    } else if (dist < 60) {
      // smooth edge blending
      const alpha = Math.floor((dist - 40) * (255 / 20));
      this.bitmap.data[idx + 3] = alpha;
    }
  });

  await image.writeAsync('./src/assets/hero_3d_transparent.png');
  console.log('Transparency script finished!');
}

removeBg().catch(console.error);
