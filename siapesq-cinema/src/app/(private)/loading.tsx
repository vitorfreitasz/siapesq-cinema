import CircularProgress from "@/components/circular-progress";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-60 z-50">
      <CircularProgress />
    </div>
  );
}
