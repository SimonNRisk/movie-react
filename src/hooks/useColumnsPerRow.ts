import { useEffect, useState } from 'react';

export default function useColumnsPerRow() {
  const [cols, setCols] = useState(3);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width > 1024) setCols(4);
      else if (width >= 768) setCols(3);
      else if (width >= 640) setCols(2);
      else setCols(1);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);
  return cols;
}
