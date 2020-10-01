import { useEffect, useState } from 'react';

export type MS = undefined | null | boolean | number;

function isDone(ms: MS) {
  return ms === true || (typeof ms === 'number' && ms < 0);
}

function willNeverDown(ms: MS) {
  return ms == null || ms === false || ms === Infinity;
}

export function useTimeout(ms: MS, deps: any[] = []) {
  const [done, setDone] = useState(() => isDone(ms));

  useEffect(() => {
    if (isDone(ms)) {
      setDone(true);
      return;
    } else if (willNeverDown(ms)) {
      setDone(false);
      return;
    } else {
      // delayed done
      setDone(false);
      const timer = setTimeout(() => {
        setDone(true);
      }, ms as number);
      return () => clearTimeout(timer);
    }
  }, [ms, ...deps]);

  return done;
}
