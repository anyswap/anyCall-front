import Link from "next/link";
import Image from "next/image";

export const Logo = '/img/logo-nav.png'
export default function Navbar() {

    return (
      <>
        <div className='px-3' >
          <div className="mb-2 d-lg-none">
            <Image  src={Logo} height="30" width="112" />
          </div>
          <ul className="justify-content-end navbar-nav ms-xl-4 w-100 " >
            <li className="py-2  nav-item" >
              <a href="#why-anycall" 
              className='my-nav-link'
                >Why anyCall</a>
            </li>
            <li className="py-2 nav-item">
              <a href="#use-cases" 
              className='my-nav-link'
              >Use Cases</a>
            </li>
            <li className="py-2 nav-item">
              <a href="#roadmap" 
              className='my-nav-link'
              >Roadmap</a>
            </li>
            <li className="py-2 nav-item">
              <Link href="https://drive.google.com/file/d/1NFFFecAjStbGMyvJVDez3xmsGSHYvNYv/view"  ><a className="my-nav-link " target="_blank">Whitepaper</a></Link>
            </li>
            <li className="py-2 nav-item">
              <Link href="https://multidao.gitbook.io/anycall/" ><a className="my-nav-link " target="_blank">Docs</a></Link>
            </li>              
          </ul>
        
        </div> 
      </>
    );
}