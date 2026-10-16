/**
 * WCAG 2.1 Contrast Ratio Calculator
 * Usage: node validate-contrast.js "#ffffff" "#161616"
 */

function hexToRgb(hex) {
  let c = hex.replace(/^#/, '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function getLuminance(rgb) {
  const a = [rgb.r, rgb.g, rgb.b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getContrast(hex1, hex2) {
  const lum1 = getLuminance(hexToRgb(hex1));
  const lum2 = getLuminance(hexToRgb(hex2));
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function audit(fg, bg) {
  const ratio = getContrast(fg, bg);
  const aaNormal = ratio >= 4.5 ? 'PASS' : 'FAIL';
  const aaLarge = ratio >= 3.0 ? 'PASS' : 'FAIL';
  const aaaNormal = ratio >= 7.0 ? 'PASS' : 'FAIL';

  console.log(`Foreground: ${fg} | Background: ${bg}`);
  console.log(`Contrast Ratio: ${ratio.toFixed(2)}:1`);
  console.log(`WCAG AA (Body text ≥ 4.5:1): ${aaNormal}`);
  console.log(`WCAG AA (Large/Borders ≥ 3.0:1): ${aaLarge}`);
  console.log(`WCAG AAA (Enhanced ≥ 7.0:1): ${aaaNormal}`);
  return { ratio, aaNormal, aaLarge, aaaNormal };
}

if (typeof module !== 'undefined' && require.main === module) {
  const args = process.argv.slice(2);
  const fg = args[0] || '#ffffff';
  const bg = args[1] || '#161616';
  audit(fg, bg);
}

if (typeof module !== 'undefined') {
  module.exports = { getContrast, audit };
}
