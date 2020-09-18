import colors from '../assets/styles/colors';

export function getRandomColor() {
  const randomPosition = Math.floor(Math.random() * colors.length);
  return colors[randomPosition];
}
