export default function ContentContainer({
  tabs,
  children,
  className = "",
}: Readonly<{
  tabs?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={`w-3/4 mx-auto ${className}`}>
      {tabs}
      <div className="p-11 bg-nblack border-4 border-gold">{children}</div>
    </div>
  );
}
