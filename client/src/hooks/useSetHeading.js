import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";

const UseSetHeading = (heading) => {
  const isMounted = useRef(false);
  const setHeading = useOutletContext();
  const [title, setTitle] = useState(heading);

  useEffect(() => {
    isMounted.current = true;
    setHeading(title);
    return () => {
      isMounted.current = false;
    };
  }, [heading, title, setHeading]);
};

export default UseSetHeading;
