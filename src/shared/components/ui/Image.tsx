import type { BookCover } from '@/features/books/types';
import { useState } from 'react';

type Props = {
  src: BookCover;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function Image({ alt, className, priority, src }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-zinc-100 ${className}`}
    >
      {!loaded && (
        <img
          src={src.sm}
          alt={alt}
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500`}
        />
      )}

      <img
        alt={alt}
        decoding="async"
        src={src.md}
        srcSet={`${src.sm} 320w, ${src.md} 640w, ${src.lg} 1024w`}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
