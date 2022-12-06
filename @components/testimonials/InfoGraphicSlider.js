// import Swiper core and required modules
import React from 'react'
import { Navigation, A11y } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SliderCard from '/@components/SliderCard.js'
import { slideData } from '_data/infographic-data'

export default function InfoGraphicSlider() {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  const slidesHtml = slideData.map( slide => (
    <SwiperSlide>
      <SliderCard cardPic={slide.cardPic} cardTitle= {slide.cardTitle} content={slide.content} buttons={slide.buttons} slideUrl={slide.slideUrl}/>
    </SwiperSlide>
  ))
  
  return (
    <div className='position-relative swiper-custom pt-2' data-aos="fade-right">
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={30}
        autoHeight={true}
        breakpoints={
          { 640: { slidesPerView: 1, spaceBetween: 20 }, 768: { slidesPerView: 2, spaceBetween: 32 } }
        }
      >

        {slidesHtml}


        <div slot='container-end' className='d-flex align-items-center position-absolute end-0 top-0 z-index-2 me-3 mt-n1'>
          <div className='size-40 d-flex align-items-center me-2 justify-content-center btn btn-primary p-0 rounded-3 swiper-prev' ref={prevRef}>
            <span className='material-symbols-rounded'>arrow_back</span>
          </div>
          <div className='size-40 d-flex align-items-center justify-content-center btn btn-primary p-0 rounded-3 swiper-next' ref={nextRef}>
            <span className='material-symbols-rounded'>arrow_forward</span>
          </div>
        </div>
      </Swiper>

    </div>
  );
};