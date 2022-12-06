// import Swiper core and required modules

import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
export const LeftQuote = '/img/leftqoute.png'
export const RightQuote = '/img/rightquote.png'
export default function TestimonialDefault({userName,profilePic,userPost,comment}) {
    return (
        <>
               <div className='card dark-card-bg p-4 p-md-6 pr-8 h-100 border-0 shadow-lg rounded-4 slider-card' >
                        <div className='w-auto d-flex flex-column mb-8'>
                            <div className='flex-grow-1'>
                                <Image src={LeftQuote} height="33" width="43" />
                            </div>
                            <h4 className='slider-card-text flex-grow-1 lh-base mx-5 mb-0 text-14px'>
                            {comment}
                            </h4>
                            <div className="align-self-end flex-grow-1">
                                <Image src={RightQuote} height="33" width="43"  />
                            </div>
                        </div>
                    <div className='d-flex mt-auto align-items-center'>
                        <div className='flex-shrink-0 size-40 shadow rounded-circle'>
                            <Image layout='responsive' src={profilePic} width="256" height="256" className='rounded-circle' alt="" />
                        </div>
                        <div className='flex-grow-1 ps-3'>
                            <h5 className='mb-1'>{userName}</h5>
                            <small className='text-muted d-block lh-1'>{userPost}</small>
                        </div>
                    </div>
                </div>
        </>
    );
};