const threeHexColorRegExp = /^#([0-9a-f]{3})$/i;
const sixHexColorRegExp = /^#([0-9a-f]{6})$/i;
const rgbColorRegExp = /^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i;

function parseThreeHexColor(color: string) {
  return threeHexColorRegExp.test(color) 
    ? [
        parseInt(color.charAt(1), 16) * 0x11,
        parseInt(color.charAt(2), 16) * 0x11,
        parseInt(color.charAt(3), 16) * 0x11,
    ]
    : null;
}

function parseSixHexColor(color: string) {
  return sixHexColorRegExp.test(color)
    ? [
      parseInt(color.substring(1, 3), 16),
      parseInt(color.substring(3, 5), 16),
      parseInt(color.substring(5, 7), 16),
    ]
    : null;
}

function parseRGBColor(color: string) {
  const match = color.match(rgbColorRegExp);

  return match
    ? [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])]
    : null;
}

export function parseColor(color: string) {
  return parseThreeHexColor(color)
  ?? parseSixHexColor(color)
  ?? parseRGBColor(color)
  ?? [0, 0, 0];
}

export function getRGBColorValue(r: number, g: number, b: number) {
  return (r + g + b) / (3 * 255);
}
