import type { BookCover } from '@/features/books/types';
import { useState } from 'react';

type Props = {
  src: BookCover;
  alt: string;
  className?: string;
};

export function Image({ src, alt, className }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-zinc-100 ${className}`}>
      <img
        src={src.sm}
        alt=""
        aria-hidden
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
      />

      <img
        src={src.sm}
        srcSet={`${src.sm}80w ${src.md} 160w, ${src.lg} 320w`}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
