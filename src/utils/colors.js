import colors from './constants/colors';

export function getRandomColor() {
  const randomPosition = Math.floor(Math.random() * colors.length);
  return colors[randomPosition];
}

export function hexToRgb(hex, opc) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}, ${opc || 1})`
    : null;
}
