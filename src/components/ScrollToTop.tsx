import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // you can remove 'smooth' if you want instant scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollTop;