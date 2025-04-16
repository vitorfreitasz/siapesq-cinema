import CircularProgress from "@/components/circular-progress";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center flex-col bg-opacity-60 z-50">
      <Image
        src="/icon-sc.png"
        alt="Logo da empresa."
        width={0}
        height={0}
        sizes="100vw"
        className="w-64 mb-10"
      />
      <CircularProgress />
    </div>
  );
}
