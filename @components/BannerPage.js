import Image from 'next/image';
import FeatureImageTop from '/@components/features/feature-image/FeatureImageTop'

export const Banner = '/img/banner.png'
export const BannerSmall = '/img/banner2.png'
export const Nft = '/img/shots/nft.png'
export const Multiverse = '/img/shots/mulitiverse.png'
export const Swap = '/img/shots/swap2.png'
export const Collaterals = '/img/shots/collaterals.png'
export const Bridge = '/img/shots/bridge.png'
export const Robot = '/img/shots/robot.png'
export default function BannerPage(props) {
  

  return(
    <div className='container pt-lg-9 pt-6 position-relative z-index-1'>
              <div className='row'>
                {props.width > 450 ? 
                    <div className='col-xl-8 col-lg-10 mx-auto '>
                      <a href='https://moralis.io/google-hackathon/' target="_blank">
                      <Image className='pointer h-auto' src={Banner} height="210px" width="1096px"/>
                      </a>
                    </div>
                   :
                    <div className='col-12 mx-auto text-center '>
                      <a href='https://moralis.io/google-hackathon/' target="_blank">
                      <Image className='pointer h-auto' src={BannerSmall} height="381px" width="311px"/>
                      </a>
                    </div>
                }
              </div>

              <div className='row pb-6 pt-5 pb-9'>
                <div className='col-md-4 col-6 mt-4'>
                  <div className='px-sm-4 py-sm-0 p-4' data-aos="fade-right">
                    <FeatureImageTop src={Swap}  title="Cross-chain Swap"  />
                  </div>
                </div>
                <div className='col-md-4 col-6 mt-4'>
                  <div className='px-sm-4 py-sm-0 p-4' data-aos="fade-right">
                    <FeatureImageTop src={Nft} color="success" title="Cross-chain NFT"  />
                  </div>
                </div>
                <div className='col-md-4 col-6 mt-4'>
                  <div className='p-4 px-sm-4 py-sm-0' data-aos="fade-right">
                    <FeatureImageTop src={Collaterals} color="primary" title="Cross-chain Lending"   />
                  </div>
                </div>
                <div className='col-md-4 col-6 mt-4'>
                  <div className='p-4 px-sm-4 py-sm-0' data-aos="fade-right">
                    <FeatureImageTop src={Bridge} color="success" title="Permissionless Token Bridge"  
                    />
                  </div>
                </div>
                <div className='col-md-4 col-6 mt-4'>
                  <div className='p-4 px-sm-4 py-sm-0' data-aos="fade-right">
                    <FeatureImageTop src={Robot} color="danger" title="Cross-chain Arbitrage Bots"  />
                  </div>
                </div>
                <div className='col-md-4 col-6 mt-4'>
                  <div className='px-sm-4 py-sm-0 p-4' data-aos="fade-right">
                    <FeatureImageTop src={Multiverse} color="light" title="Unified Metaverse"  />
                  </div>
                </div>
              </div>
    </div>
  )

}