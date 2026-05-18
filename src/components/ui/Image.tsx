import type { BookCover } from '@/types/book.types';
import { useState } from 'react';

type Props = {
  cover: BookCover;
  alt: string;
  className?: string;
};

export function Image({ cover, alt, className }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-zinc-100 ${className}`}>
      <img
        src={cover.sm}
        alt=""
        aria-hidden
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
      />

      <img
        src={cover.sm}
        srcSet={`${cover.sm}80w ${cover.md} 160w, ${cover.lg} 320w`}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
