export const HalfImageEffect = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1634703080363-98f94e5a1076?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNjaWZpJTIwZ3V5fGVufDB8fDB8fHwy";

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden h-[400px]">
      {/* Grayscale left half */}
      <img
        src={imageUrl}
        alt="Grayscale Half"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          filter: "grayscale(100%)",
          clipPath: "inset(0 35% 0 0)", // left half
          transition: "transform 0.5s ease",
          zIndex: 10,
        }}
      />

      {/* Color right half */}
      <img
        src={imageUrl}
        alt="Color Half"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          clipPath: "inset(0 0 0 65%)", // right half
          transition: "transform 0.5s ease",
          zIndex: 20,
        }}
      />
    </div>
  );
};
