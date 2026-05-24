"use client";
import { useEffect, useState } from "react";

type Props = {
  onComplete: () => void;
};

export default function WashStartOverlay({ onComplete }: Props) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2000);
    const completeTimer = setTimeout(() => onComplete(), 2600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "#000",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999,
      opacity: fading ? 0 : 1,
      transition: "opacity 0.6s ease-in-out",
    }}>
      <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 600, margin: "24px 0 0" }}>Har du sat dig tilrette...</h3>
      <p style={{ color: "#0ce578", fontSize: 14, margin: "8px 0 0" }}>Din vask starter om et øjeblik</p>
    </div>
  );
}