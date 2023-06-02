import { useState, useEffect } from "react";

export default function useIntersection(a: any) {
  const [show, setShow] = useState(0);
  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(Number(entries[0].target.id));
        observer.disconnect();
      }
    });

    observer.observe(a.current);
  }, [a]);

  return show;
}
