export default function BackgroundGrid({
  lineColor = "#666666",
  lineWidth = 2,
  incrementLabels = false,
}) {
  // Function to generate the grid lines with optional labels
  const generateGrid = () => {
    let grid = `<path d='M0 .5H31.5V32'/>`; // basic grid line

    if (incrementLabels) {
      // Add labels to the grid at every 10 units
      for (let i = 10; i <= 30; i += 10) {
        grid += `<text x='${i}' y='10' fill='${lineColor}' font-size='8'>${i}</text>`;
      }
    }

    return grid;
  };

  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='${lineWidth}' stroke='${encodeURIComponent(
          lineColor
        )}'%3e${encodeURIComponent(generateGrid())}%3c/svg%3e")`,
      }}
      className="fixed inset-0"
    />
  );
}
