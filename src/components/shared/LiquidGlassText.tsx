"use client";

export const LiquidGlassText = () => {
  return (
    // The animated blobs and SVG filter have been removed.
    // This now only renders the styled headline text.
    <div className="relative text-center">
      <h1 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
        From Idea to Impact. Instantly.
      </h1>
    </div>
  );
};