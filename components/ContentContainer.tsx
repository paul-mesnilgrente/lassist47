export default function ContentContainer({
  tabs,
  children,
}: Readonly<{
  tabs?: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <div className="w-3/4 mx-auto">
      {tabs}
      <div className="p-11 bg-nblack border-4 border-gold">{children}</div>
    </div>
  );
}
