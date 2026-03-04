import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const usePageAnimation = (trigger) => {
  const container = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    gsap.fromTo(container.current, {
      opacity: 0,
      x: -30,
      filter: 'blur(4px)'
    }, {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      duration: 0.35,
      ease: 'power3.out'
    });
  }, [trigger]);

  return container;
};

export default usePageAnimation;