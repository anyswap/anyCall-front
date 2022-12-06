// import Swiper core and required modules

import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function SliderCard({cardPic, cardTitle, content, buttons, slideUrl}) {
  const buttonElement= buttons.map(button => {
    return(
      <a href={button.url} key={button.url} target={button.blank ? "_blank" : "_self"}>
        <div className='btn btn-primary text-14px d-flex align-items-center'>
            {button.text}
        </div>
      </a>
    )
  }) 
  
  return (
        <>
          <div className='h-auto slider-card overf/_next/imagelow-hidden'>
              <a href={slideUrl} target="_blank">
                <Image layout='responsive' src={cardPic} width="1280" height="720" alt="" className='' />
                </a>
              <div className='px-3 pt-4 pb-6'>
                <a href={slideUrl} target="_blank">
                  <h6 className='light-blue slider-card-text'>{cardTitle}</h6>
                  </a>
                <p className='fw-bold flex-grow-1 mb-3 slider-card-text'>
                  {content}
                </p>
                <p className='slider-card-text'>Use Case:</p>
                <div className='d-flex gap-2'>
                  {buttonElement}
                </div>
              </div>
          </div>
                
        </>
    );
};