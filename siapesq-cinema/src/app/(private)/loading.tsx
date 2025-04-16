import CircularProgress from "@/components/circular-progress";

export default function Loading() {
  return (
    <div className="flex justify-center flex-col items-center bg-terciary w-full h-full">
      <CircularProgress />
    </div>
  );
}
