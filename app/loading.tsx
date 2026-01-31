import LoadingSpinner from "../app/components/LoadingSpinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-black">
      <LoadingSpinner />
    </div>
  );
}