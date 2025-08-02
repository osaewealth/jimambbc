import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type CountUpProps = {
  end: number;
  duration?: number;
};

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      let start = 0;
      const increment = end / (duration / 16);
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

