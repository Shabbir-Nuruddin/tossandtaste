import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

// False during the server render and hydration, true afterwards. Use it before
// showing anything read from localStorage (like the cart) to avoid mismatches.
export function useHydrated() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
