import { useRef } from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";
import { Embed } from "@theme-ui/components";

const Video = ({ url, title }) => {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return <div ref={containerRef}>{lockRef.current && <Embed src={url} />}</div>;
};

export default Video;
