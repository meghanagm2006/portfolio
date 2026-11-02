import { useState } from "react";
import { personal } from "../data/portfolioData.js";

// Shows /profile.jpg. If that file does not exist yet, shows a soft placeholder instead.
export default function ProfilePhoto({ size = "large" }) {
  const [src, setSrc] = useState(personal.photo);

  return (
    <div className={`photo-frame photo-${size}`}>
      <div className="photo-glow" aria-hidden="true" />
      <img
        src={src}
        alt={`Portrait of ${personal.name}`}
        width="400"
        height="400"
        loading={size === "large" ? "eager" : "lazy"}
        onError={() => setSrc(personal.photoFallback)}
      />
    </div>
  );
}
