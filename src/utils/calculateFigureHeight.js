export default function calculateFigureHeight(styles, setFigureHeight) {
  const parentWidth = document.querySelector(`.${styles.work}`).offsetWidth;
  const height = parentWidth * 0.50;
  setFigureHeight(height);
}