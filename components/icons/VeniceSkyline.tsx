type VeniceSkylineProps = {
  className?: string;
};

export default function VeniceSkyline({ className = "" }: VeniceSkylineProps) {
  return (
    <svg
      viewBox="0 0 1200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Simplified Venice skyline silhouette — placeholder */}
      <path
        d="M0 200 L0 140 L60 130 L80 80 L100 130 L160 120 L200 60 L240 120 L300 110 L340 70 L360 40 L380 70 L420 100 L480 90 L520 50 L540 30 L560 50 L600 80 L660 70 L700 100 L740 60 L760 40 L780 60 L820 90 L880 80 L920 110 L960 70 L980 50 L1000 70 L1040 100 L1080 90 L1120 120 L1160 110 L1200 130 L1200 200 Z"
        fill="currentColor"
        opacity="0.15"
      />
      {/* Campanile accent */}
      <path
        d="M530 80 L535 15 L540 10 L545 15 L550 80"
        fill="currentColor"
        opacity="0.2"
      />
      {/* Dome accent */}
      <ellipse cx="760" cy="45" rx="25" ry="20" fill="currentColor" opacity="0.12" />
    </svg>
  );
}
