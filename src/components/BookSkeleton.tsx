export function BookSkeleton() {
  return (
    <div
      className="
        animate-pulse
        rounded-2xl
        border
        border-zinc-200
        p-4
      "
    >
      <div className="flex gap-4">
        <div className="h-32 w-24 rounded bg-zinc-200" />

        <div className="flex-1">
          <div className="mb-2 h-4 w-3/4 rounded bg-zinc-200" />

          <div className="h-4 w-1/2 rounded bg-zinc-200" />
        </div>
      </div>
    </div>
  );
}
