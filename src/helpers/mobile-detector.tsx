import { useEffect } from 'react';
import { useIsMobile } from '../hooks/use-is-mobile';
import { useSetIsMobile } from '../providers';

export const MobileDetector = () => {
  const set = useSetIsMobile();
  const isMobile = useIsMobile();

  useEffect(() => {
    set(isMobile);
  }, [isMobile, set]);
  return null;
};
