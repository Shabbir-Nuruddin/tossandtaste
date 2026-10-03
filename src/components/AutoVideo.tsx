"use client";
import { useEffect, useRef } from 'react';
import { useVideoPlayback } from '@/components/VideoPlayback';

// Muted, looping clip that only plays while on screen, so off-screen clips don't use data or battery.
// It plays for everyone, including people with "reduce motion" on (otherwise the clips just look like
// photos); the pause button in the navbar stops every clip for anyone who doesn't want movement.
export default function AutoVideo({ src, poster, className }: { src: string; poster?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const { paused } = useVideoPlayback();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const connection = (navigator as Navigator & {
      connection?: EventTarget & { saveData?: boolean };
    }).connection;
    let visible = false;
    let active = true;
    const updatePlayback = () => {
      const shouldPlay = active && visible && !paused && !connection?.saveData && document.visibilityState === 'visible';
      if (shouldPlay) {
        video.play().then(() => {
          // Playback may resolve after a preference change or unmount.
          if (!active || paused || connection?.saveData || !visible || document.hidden) video.pause();
        }).catch(() => {});
      } else video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; updatePlayback(); },
      { threshold: 0.25 }
    );
    observer.observe(video);
    connection?.addEventListener('change', updatePlayback);
    document.addEventListener('visibilitychange', updatePlayback);
    updatePlayback();
    return () => {
      active = false;
      observer.disconnect();
      connection?.removeEventListener('change', updatePlayback);
      document.removeEventListener('visibilitychange', updatePlayback);
      video.pause();
    };
  }, [paused, src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className={className}
    />
  );
}
