import Image from "next/image";

export const HowAnyCallWorks = '/img/shots/howitworks.png'
export default function HowItWorks() {
    return (
        <section className="position-relative">
            <div className="container py-5 py-lg-9 position-relative z-index-1">
                <div className="row ">
                    <div className="col-lg-11 mx-auto text-center">
                        <p className="title-text bold mb-5 text-white">How anyCall Works</p>
                        
                        <div className="position-relative mx-lg-9 rounded-3 overflow-hidden shadow-lg z-index-1" data-aos="fade-up">
                            <Image width="1300" height="731" alt="" className="" src={HowAnyCallWorks} layout="responsive" priority />
                        </div>
                        <div className="pt-5 pt-lg-9 ">
                            <a className='btn btn-primary bg-primary btn-padding fw-bold ' target="_blank" href="https://multidao.gitbook.io/anycall/">Read Docs</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}