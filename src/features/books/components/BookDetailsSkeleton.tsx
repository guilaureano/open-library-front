export function BookDetailsSkeleton() {
  return (
    <div className="grid animate-pulse max-h-[90vh] md:grid-cols-[280px_1fr] md:h-105">
      <div className="bg-muted" />

      <div className="flex flex-col gap-5 p-6 md:p-8">
        <div className="space-y-3">
          <div className="h-8 w-2/3 rounded bg-muted" />
          <div className="h-4 w-1/3 rounded bg-muted" />
        </div>

        <div className="space-y-3">
          <div className="h-4 rounded bg-muted" />
          <div className="h-4 rounded bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />
          <div className="h-4 w-4/6 rounded bg-muted" />
          <div className="h-4 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
