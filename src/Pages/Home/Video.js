import { useRef } from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";

const Video = ({ url, title }) => {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return (
    <div ref={containerRef}>
      {lockRef.current && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YVyaYhk8Hbk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default Video;
