"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import gsap from "gsap";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  /** Max horizontal shift in px (default 8) */
  strength?: number;
  /** Max vertical shift in px (default 5) */
  strengthY?: number;
  /** Activation radius from button edge in px (default 60) */
  radius?: number;
};

export default function MagneticButton({
  children,
  className = "",
  strength = 8,
  strengthY = 5,
  radius = 60,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  // Disable below 768px
  useEffect(() => {
    const check = () => setEnabled(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!enabled || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      // Distance from center
      const dist = Math.sqrt(distX * distX + distY * distY);
      // Distance from edge (approximate as half of max dimension)
      const halfSize = Math.max(rect.width, rect.height) / 2;
      const edgeDist = dist - halfSize;

      if (edgeDist > radius) return;

      // Proportion: closer to center = stronger pull
      const factor = Math.max(0, 1 - edgeDist / radius);

      gsap.to(ref.current, {
        x: (distX / dist) * strength * factor,
        y: (distY / dist) * strengthY * factor,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    [enabled, strength, strengthY, radius]
  );

  const handleMouseLeave = useCallback(() => {
    if (!enabled || !ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  }, [enabled]);

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
