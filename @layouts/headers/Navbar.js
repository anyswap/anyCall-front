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
              className='text-white'
                >Why anyCall</a>
            </li>
            <li className="py-2 nav-item">
              <a href="#use-cases" 
              className='nav-link'
              >Use Cases</a>
            </li>
            <li className="py-2 nav-item">
              <a href="#roadmap" 
              className='nav-link'
              >Roadmap</a>
            </li>
            <li className="py-2 nav-item">
              <Link href="https://drive.google.com/file/d/1NFFFecAjStbGMyvJVDez3xmsGSHYvNYv/view"  ><a className="nav-link " target="_blank">Whitepaper</a></Link>
            </li>
            <li className="py-2 nav-item">
              <Link href="https://multidao.gitbook.io/anycall/" ><a className="nav-link " target="_blank">docs</a></Link>
            </li>              
          </ul>
        
        </div> 
      </>
    );
}