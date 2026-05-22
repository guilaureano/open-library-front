import type { BookCover } from '@/features/books/types';
import { useState } from 'react';

type Props = {
  alt: string;
  className?: string;
  fallbackSrc?: string;
  src: string;
  sizes?: BookCover;
  priority?: boolean;
};

export function Image({ alt, className, priority, src, sizes }: Props) {
  const [loaded, setLoaded] = useState(false);
  const srcSet =
    sizes && Object.keys(sizes).length > 0
      ? `${sizes.sm} 320w, ${sizes.md} 640w, ${sizes.lg} 1024w`
      : undefined;

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-zinc-100 ${className}`}
    >
      {!loaded && (
        <img
          src={src}
          alt={alt}
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500`}
        />
      )}

      <img
        alt={alt}
        decoding="async"
        src={src}
        srcSet={srcSet}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
