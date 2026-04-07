type SectionWrapperProps = {
  children: React.ReactNode;
  bg?: "white" | "dark" | "light" | "giallo";
  className?: string;
  id?: string;
  noPadding?: boolean;
};

const bgMap = {
  white: "bg-bianco text-nero",
  dark: "bg-nero text-bianco",
  light: "bg-grigio-chiaro text-nero",
  giallo: "bg-giallo text-nero",
};

const navThemeMap = {
  white: "light",
  light: "light",
  dark: "dark",
  giallo: "giallo",
} as const;

export default function SectionWrapper({
  children,
  bg = "white",
  className = "",
  id,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      data-navbar-theme={navThemeMap[bg]}
      className={`${bgMap[bg]} ${noPadding ? "" : "section-padding"} ${className}`}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}
