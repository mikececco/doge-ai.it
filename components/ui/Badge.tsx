type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-nero text-giallo ${className}`}
    >
      {children}
    </span>
  );
}
