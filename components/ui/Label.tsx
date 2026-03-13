type LabelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Label({ children, className = "" }: LabelProps) {
  return (
    <span className={`text-label uppercase text-grigio-medio tracking-widest ${className}`}>
      {children}
    </span>
  );
}
