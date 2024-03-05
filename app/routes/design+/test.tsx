// Example Remix component with adjusted SVG circles
export default function FlowerOfLife() {
  const radius = 50; // Radius of each circle
  const centerX = 150; // X position of the central circle, adjusted for larger container
  const centerY = 150; // Y position of the central circle, adjusted for larger container
  const distance = radius * Math.sqrt(3); // Distance between centers of adjacent circles

  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        width="50vh"
        height="50vh"
        className="border-970-md bg-col-200 shadowBroadNormal"
      >
        {" "}
        {/* Container size increased */}
        {/* Central Circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          className="text-blue-500"
        />
        {/* Surrounding Circles */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <circle
            key={index}
            cx={centerX + Math.cos((angle * Math.PI) / 180) * distance}
            cy={centerY + Math.sin((angle * Math.PI) / 180) * distance}
            r={radius}
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            className="text-blue-500"
          />
        ))}
      </svg>
    </div>
  );
}
