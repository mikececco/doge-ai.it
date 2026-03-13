type LogoProps = {
  className?: string;
  light?: boolean;
};

export default function DogeLogo({ className = "", light = false }: LogoProps) {
  return (
    <span className={`font-bold text-2xl tracking-tight ${light ? "text-bianco" : "text-nero"} ${className}`}>
      DOGE
      <span className="text-giallo">.</span>
    </span>
  );
}
