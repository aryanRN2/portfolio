"use client";

export default function ThreeBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "#030303",
        overflow: "hidden",
      }}
    >
      {/* High-performance glowing background container and divs */}
      <div className="xai-glow-container">
        <div className="xai-glow-amber" />
        <div className="xai-glow-white" />
      </div>
    </div>
  );
}
