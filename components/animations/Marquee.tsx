"use client";

type MarqueeProps = {
  text: string;
  speed?: number;
  className?: string;
};

export default function Marquee({
  text,
  speed = 40,
  className,
}: MarqueeProps) {
  // Repeat text enough times to guarantee it fills viewport width x2
  const repeated = Array(12).fill(text).join("");

  return (
    <div
      className={`bg-giallo overflow-hidden whitespace-nowrap select-none ${className ?? ""}`}
      style={{ ["--marquee-speed" as string]: `${speed}s` }}
    >
      <div className="inline-flex animate-marquee w-max">
        <span className="text-nero font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-wider py-4 px-2">
          {repeated}
        </span>
        <span className="text-nero font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-wider py-4 px-2">
          {repeated}
        </span>
      </div>
    </div>
  );
}
