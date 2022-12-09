import Head from 'next/head'
import 'material-symbols'
import pkg from "react"
const {useState, useEffect} = pkg

import HeroDecorative from '@components/hero-sliders/HeroDecorative'
import HowItWorks from '@components/hero-sliders/HowItWorks'
import TestimonialsSlider from '@components/testimonials/TestimonialsSlider.js'
import InfoGraphicSlider from '@components/testimonials/InfoGraphicSlider'
import RoadmapTab from '@components/features/feature-tabs/RoadmapTab'
import BuiltImageComponent from '@components/features/feature-image/BuiltImageComponent'
import WhyanyCallTab from '@components/features/feature-tabs/WhyanyCallTab'
import BannerPage from '@components/BannerPage'
import HeaderDefault from '@layouts/headers/HeaderDefault'
import FooterDefault from '@layouts/footers/FooterDefault'

export const tabImage1 = "/img/shots/dashboard.svg";
export default function Home() {
  const [screenW, setScreenW] = useState(0)

  useEffect(() => {
    function getWindowSize() {
      const {innerWidth} = window;
      return innerWidth
    }
    setScreenW(getWindowSize())

    function handleWindowResize() {
      setScreenW(getWindowSize())
      console.log(screenW)
    }
    
    window.addEventListener('resize',handleWindowResize)

    return() => {
      window.removeEventListener('resize', handleWindowResize)
    }; 
  }, [])

  return (
    <>
      <Head>
        <title>anyCall | Welcome</title>
      </Head>
      <HeaderDefault width={screenW}/>
      <section className='position-relative dark-back pb-2'>
        <div className='container text-center'>
          <div className='row'>
            <HeroDecorative />
          </div>
        </div>
      </section>
      <section className='position-relative overflow-hidden'>
        <BannerPage width={screenW}/>
      </section> 
      <section className='dark-back' id='why-anycall'>
        <div className='container pt-8 pt-lg-9 pb-4 pb-md-13 position-relative z-index-1'>
          <h2 className='title-text text-center mb-6 fw-bold'>Why anyCall</h2>
          <WhyanyCallTab />
        </div>
      </section>
      <section id='how-it-works'>
        <HowItWorks />
      </section>
      <section className="position-relative dark-back py-9" id='use-cases'>
        <h2 className='title-text text-center bold'>Built on anyCall</h2>
        <div className="position-relative overflow-hidden mt-n20">
        <div className="container position-relative">
            <InfoGraphicSlider/>
        </div>
        </div>
        <div className="container tab-pane fade show active mt-5" id="dev-support">
            <BuiltImageComponent />
        </div>  
      </section>
      <section className='mt-4' id='roadmap'>
        <RoadmapTab width={screenW} />
      </section>
      <section className="position-relative dark-back py-11" id='testimonials'>
          <div className="position-relative overflow-hidden mt-n20">
          <div className="container position-relative" data-aos="fade-left">
              <TestimonialsSlider/>
          </div>
          </div>
      </section>
      <FooterDefault width={screenW}/>
    </>
  )
}
