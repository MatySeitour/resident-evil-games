import { useState, useEffect } from "react";

export default function useIntersection(element: any) {
  /* receives by parameter the section in the form of an element */

  const [show, setShow] = useState(0);
  console.log(element);
  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        /* if the element is visible, then it takes its id and sets it to the show state*/
        setShow(Number(entries[0].target.id));

        observer.disconnect();
      }
    });

    observer.observe(element.current);
  }, [element]);

  return show;
}
