import CircularProgress from "@/components/circular-progress";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center flex-col items-center bg-terciary w-full h-full">
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
