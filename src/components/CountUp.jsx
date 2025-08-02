import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated) {
      let start = 0;
      const increment = end / (duration / 16); // ~60fps
      const step = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(step);
      setHasAnimated(true);
    }
  }, [inView, end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
    </span>
  );
};

export default CountUp;
