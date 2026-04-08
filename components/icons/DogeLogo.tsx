import Image from "next/image";

type LogoProps = {
  className?: string;
  light?: boolean;
};

export default function DogeLogo({ className = "", light = false }: LogoProps) {
  const src = light
    ? "/logo/logo-full-W-noBG.png"
    : "/logo/logo-full-B-noBG.png";

  return (
    <Image
      src={src}
      alt="Il Doge di Venezia"
      width={240}
      height={80}
      className={`h-[36px] w-auto ${className}`}
      priority
    />
  );
}
