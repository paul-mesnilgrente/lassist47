export default function ContentContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-3/4 mx-auto p-11 bg-nblack border-4 border-gold">
      {children}
    </div>
  );
}
