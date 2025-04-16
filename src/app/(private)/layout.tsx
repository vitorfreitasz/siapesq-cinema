import NavBar from "@/components/navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleLogout = async () => {
    "use server";
    const cookieStorage = await cookies();
    cookieStorage.delete("token");
    redirect("/login");
  };
  const handleRedirect = async (pathname: string) => {
    "use server";
    redirect(pathname);
  };
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-y-auto">
      <NavBar handleLogout={handleLogout} handleRedirect={handleRedirect} />
      <div className="pt-20">{children}</div>
    </main>
  );
}
