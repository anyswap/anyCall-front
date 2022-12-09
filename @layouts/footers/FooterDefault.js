import Link from 'next/link';
import Image from 'next/image';
export const Logo = '/img/logo-nav.png'
export const Multichain = '/img/multichain.png'
export const Discord = '/img/discord.png'
export const Telegram = '/img/telegram.png'
export default function FooterDefault(props) {
    return (
        <footer className="footer position-relative overflow-hidden pb-md-10">
            <div className="container pt-5 pb-14 pb-md-0 position-relative z-index-1 ">
            
                <div className={props.width < 768 ? 'd-flex flex-column flex-md-row align-items-center' : 'd-flex flex-column flex-md-row justify-content-between pb-14' }>
                    <div className={props.width < 768 ? "width-180 pb-6" : "width-180"}>
                        <Link href="/"
                            className='text-reset d-table'>
                            <Image src={Logo} width="138" height="40" layout='responsive' alt="logo" className='pointer img-fluid' />
                        </Link> 
                    </div>
                    <div className='d-flex flex-column flex-md-row gap-resp '>
                        <ul className="list-unstyled d-flex justify-content-between align-self-center gap-3 mb-10 mb-md-0">  
                            <li>   
                                <span className='text-14px'>POWERED BY</span></li>
                            <li className='pointer'><a href='https://multichain.org' target="_blank"><Image src={Multichain} height="21" width="130" /></a>
                            </li>
                        </ul>   
                        <ul className="list-unstyled d-flex justify-content-between align-self-center gap-9 gap-md-4 mb-0">
                            <li ><a href="https://discord.gg/TCSm7krHyR" target="_blank"><Image src={Discord} height="35" width="45" className='pointer'/></a></li>
                            <li ><a href="https://t.me/Anyswapdev" target="_blank" ><Image src={Telegram} height="40" width="40" className='pointer'/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}