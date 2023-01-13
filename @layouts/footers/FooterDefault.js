import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
export const Logo = '/img/logo-nav.png'
export const Multichain = '/img/multichain.png'
export const Discord = '/img/discord.png'
export const Telegram = '/img/telegram.png'
const bridgeApi = 'https://scanapi.multichain.org'
const netapi = 'https://netapi.anyswap.net'
const FooterDefault = (props) => {
    const [chainV6Info, setChainV6Info] = useState([])
    const [chainV7Info, setChainV7Info] = useState([])
    const getChainInfo = async () => {
        const res = await axios.get(bridgeApi + '/data/bridgeChainInfo')
        const anyCallV6SupportedChains = [1, 10, 56, 100, 137, 250, 1285, 4689, 42161, 43114, 256256, 1666600000, 8888, 61]
        const anyCallV7SupportedChains = [1, 10, 56, 137, 250, 42161, 43114]
        setChainV6Info(res ? Object.entries(res.data).filter(r => anyCallV6SupportedChains.includes(Number(r[0]))).map(r => r[1]) : [])
        setChainV7Info(res ? Object.entries(res.data).filter(r => anyCallV7SupportedChains.includes(Number(r[0]))).map(r => r[1]) : [])
    }

    useEffect(() => {
        getChainInfo()
    }, [])
    return (
        <footer className="footer position-relative overflow-hidden pb-md-10">
            <div className="container pt-5 pb-14 pb-md-0 position-relative z-index-1 ">

                <div className={props.width < 768 ? 'd-flex flex-column flex-md-row align-items-center' : 'd-flex flex-column flex-md-row justify-content-between pb-14'}>
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
                            <li ><a href="https://discord.gg/TCSm7krHyR" target="_blank"><Image src={Discord} height="35" width="45" className='pointer' /></a></li>
                            <li ><a href="https://t.me/Anyswapdev" target="_blank" ><Image src={Telegram} height="40" width="40" className='pointer' /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 className='title-text text-center mb-6 fw-bold'>Supported Chains</h2>
            <h3 className='text-center pt-8' style={{ margin: '20px 0' }}>anyCall V7</h3>
            <ul className='anyCallVxSupportedChains'>
                {
                    chainV7Info.map((item) => <li>
                        <img src={item.logoUrl} width={50} height={50} />
                        <div>{item.name}</div>
                    </li>)
                }
            </ul>
            <h3 className='text-center pt-8' style={{ margin: '20px 0' }}>anyCall V6</h3>
            <ul className='anyCallVxSupportedChains'>
                {
                    chainV6Info.map((item) => <li>
                        <img src={item.logoUrl} width={50} height={50} />
                        <div>{item.name}</div>
                    </li>)
                }
            </ul>

        </footer>
    );
}
export default FooterDefault