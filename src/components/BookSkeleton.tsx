export function BookSkeleton() {
  return (
    <div
      className="
        animate-pulse
        border
        border-zinc-200
      "
    >
      <div className="flex-column">
        <div className="h-full w-full aspect-[2/3] rounded bg-zinc-200 mb-4" />

        <div className="flex-1">
          <div className="mb-2 h-4 w-3/4 rounded bg-zinc-200" />

          <div className="h-4 w-1/2 rounded bg-zinc-200" />
        </div>
      </div>
    </div>
  );
}
