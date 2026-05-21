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
    <div className={`relative overflow-hidden bg-zinc-100 ${className}`}>
      <img
        src={src.sm}
        alt={alt}
        aria-hidden
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
      />

      <img
        src={src.md}
        srcSet={`${src.sm} 320w, ${src.md} 640w, ${src.lg} 1024w`}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
