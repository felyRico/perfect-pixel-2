import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import swiper1 from '../assets/swiper1.png';
import swiper2 from '../assets/swiper2.png';
import swiper3 from '../assets/swiper3.png';
import swiper4 from '../assets/swiper4.png';
import swiper5 from '../assets/swiper5.png';
import swiper6 from '../assets/swiper6.png';
import './styles/Section2.css';

const slides = [
  {
    image: swiper1,
    title: 'Kamera Canggih',
    subtitle: 'Ambil foto dan video  seindah bayangan Anda.'
  },
  {
    image: swiper2,
    title: 'Chip dan Kekuatan Baterai',
    subtitle: 'Kecepatan yang bertahan lama'
  },
  {
    image: swiper3,
    title: 'Inovasi',
    subtitle: 'Didesain indah dan tangguh.'
  },
  {
    image: swiper4,
    title: 'Apple Intelligence',
    subtitle: 'Kemungkinan yang menakjubkan.'
  },
  {
    image: swiper5,
    title: 'Lingkungan',
    subtitle: 'Daur ulang. Gunakan kembali. Ulangi.'
  },
  {
    image: swiper6,
    title: 'Privasi',
    subtitle: 'Data Anda. Di tempat yang Anda inginkan.'
  }
];

const Section2 = () => {
  const titleRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });
    gsap.set(titleRef.current, { autoAlpha: 0, y: '5vw' });
    gsap.set(swiperRef.current, { autoAlpha: 0, x: '5vw' });
    tl.to(titleRef.current, { autoAlpha: 1, y: 0 });
    tl.to(swiperRef.current, { autoAlpha: 1, x: 0 }, '<0.2');
  }, []);

  return (
    <section className="section2">
      <h2 ref={titleRef} className="section2__title">
        Kenali iPhone lebih dalam.
      </h2>
      <div ref={swiperRef} className="section2__swiper-container">
        <Swiper
          centeredSlides={true}
          centeredSlidesBounds={true}
          slidesPerView="auto"
          spaceBetween={50}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i} className="section2__slide">
              <div className="section2__card">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="section2__card-img"
                />
                <div className="section2__overlay">
                  <h3 className="section2__overlay-title">{slide.title}</h3>
                  <p className="section2__overlay-text">{slide.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section2;