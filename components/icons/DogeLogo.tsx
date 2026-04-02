type LogoProps = {
  className?: string;
  light?: boolean;
};

export default function DogeLogo({ className = "", light = false }: LogoProps) {
  return (
    <span className={`font-bold text-xs uppercase tracking-widest leading-[0.9] ${light ? "text-bianco" : "text-nero"} ${className}`}>
      Il Doge<br />di Venezia
    </span>
  );
}
