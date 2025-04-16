import NavBar from "@/components/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-y-auto">
      <NavBar />
      <div className="pt-20">{children}</div>
    </main>
  );
}
