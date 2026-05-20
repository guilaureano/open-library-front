export function BookSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 20 }).map((_, i) => (
        <div className="animate-pulse" key={i}>
          <div className="flex-column">
            <div className="h-full w-full aspect-2/3 rounded bg-zinc-200 mb-4" />
            <div className="flex-1">
              <div className="mb-2 h-4 w-3/4 rounded bg-zinc-200" />
              <div className="h-4 w-1/2 rounded bg-zinc-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
