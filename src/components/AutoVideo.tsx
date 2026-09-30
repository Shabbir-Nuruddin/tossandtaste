"use client";
import { useEffect, useRef } from 'react';

// Muted clip that only plays while on screen. It loops for most people; for anyone who
// has asked their device to reduce motion it plays through once and then rests on the
// last frame, so they still see the food without continuous movement.
export default function AutoVideo({ src, poster, className }: { src: string; poster?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    video.loop = !reduce;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !video.ended) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      playsInline
      preload="none"
      aria-hidden="true"
      className={className}
    />
  );
}
