import Image from "next/image";

export const BuildTogether = '/img/shots/buildtogether.png'
export default function BuiltImageComponent() {
  return (
    <div className="row align-items-center mx-md-1 mx-2 ">
      <div className="col-md-5 col-12 mb-6 mb-lg-0" data-aos="fade-down" data-aos-delay="100">
        <div className="align-items-center">
          <div className="position-relative overflow-hidden">
              <Image src={BuildTogether} priority layout="responsive" width="700" height="700" alt="" />
          </div>
        </div>
      </div>
      <div className="col-md-7 col-12">
        <p className='title-text light-blue bold position-relative fs-1 mb-4' data-aos="fade-up">Build Together</p>
        <p className='title-text mb-4' data-aos="fade-up" data-aos-delay="100">Want to get dev support from our team?</p>
        
        <div data-aos="fade-up" data-aos-delay="300">
          <a className='fw-bold btn btn.primary bg-primary btn-padding' href='https://forms.gle/NLCTPPhj5a9Q8PhQ7' target="_blank">
            Get in touch</a>
        </div>

      </div>
    </div>
  );
}