import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import videoSrc from '../assets/phone_video.mp4';
import './styles/Section1.css';

const Section1 = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });
    gsap.set([titleRef.current, subtitleRef.current, videoRef.current], {
      autoAlpha: 0,
      y: '5vw',
    });
    tl.to([titleRef.current, subtitleRef.current], { autoAlpha: 1, y: 0 });
    tl.to(videoRef.current, { autoAlpha: 1, y: 0 });
  }, []);

  return (
    <section className="section1">
      <div className="textContainer">
        <h3 ref={titleRef} className="title">iPhone</h3>
        <p ref={subtitleRef} className="subtitle">Didesain untuk dicintai</p>
      </div>
      <div className="videoContainer">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="video"
        />
      </div>
    </section>
  );
};

export default Section1;
