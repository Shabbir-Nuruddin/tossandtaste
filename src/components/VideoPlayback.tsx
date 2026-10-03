"use client";
import { createContext, useContext, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const PlaybackContext = createContext({ paused: false, toggle: () => {} });

export function VideoPlaybackProvider({ children }: { children: React.ReactNode }) {
  const [paused, setPaused] = useState(false);
  return (
    <PlaybackContext.Provider value={{ paused, toggle: () => setPaused((value) => !value) }}>
      {children}
    </PlaybackContext.Provider>
  );
}

export const useVideoPlayback = () => useContext(PlaybackContext);

export function VideoPlaybackControl() {
  const { paused, toggle } = useVideoPlayback();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Pause automatic videos"
      aria-pressed={paused}
      title={paused ? 'Allow automatic videos' : 'Pause automatic videos'}
      className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-ink hover:bg-black/5 transition-colors"
    >
      {paused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
    </button>
  );
}
