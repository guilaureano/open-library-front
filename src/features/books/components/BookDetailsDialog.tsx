import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTextTag,
  DialogTitle,
} from '@/shared/components/ui/Dialog';
import { Image } from '@/shared/components/ui/Image';
import { useBookDetails } from '../hooks/useBookDetails';
import { buildCoversUrl } from '../lib/buildCoversUrl';
import type { Book } from '../types';
import { BookDetailsSkeleton } from './BookDetailsSkeleton';

type Props = {
  book: Book | null;
  open: boolean;
  onClose: () => void;
};

export function BookDetailsDialog({ book, open, onClose }: Props) {
  const { data, isLoading } = useBookDetails(open ? book?.id : undefined);
  if (!book) return null;
  const cover = buildCoversUrl(book.cover);
  const fallback = buildCoversUrl();

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-4xl p-0">
        {isLoading && <BookDetailsSkeleton />}

        {data && (
          <div className="grid max-h-[90vh] md:grid-cols-[280px_1fr] md:h-105">
            <div className="overflow-hidden bg-muted">
              <Image
                alt={book.title}
                className="h-full w-full object-cover"
                fallbackSrc={fallback.md}
                src={cover.md}
                sizes={cover}
              />
            </div>

            <div className="flex min-h-0 flex-col">
              <DialogHeader className="shrink-0 border-b border-border py-8 px-6 md:py-10 md:px-8">
                <div className="flex flex-row gap-4">
                  <DialogDescription>{book.firstPublishYear}</DialogDescription>
                  <DialogDescription>{data.title}</DialogDescription>
                </div>
                <DialogTitle className="text-2xl font-medium leading-tight md:text-3xl">
                  {book.title}
                </DialogTitle>
                <DialogTextTag>
                  {book.authorName?.map((author) => author).join(', ')}
                </DialogTextTag>
              </DialogHeader>

              <div className="min-h-0 flex-1 overflow-y-auto p-6 md:p-8 bg-white">
                {data.description && (
                  <p className="text-sm leading-7 text-foreground/80">
                    {data.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
