
import 'material-symbols'
import Link from "next/link"

import pkg from "react"
const { useEffect } = pkg

import Headroom from 'headroom.js'
import Navbar from "./Navbar"
import Image from 'next/image'
export const Logo = '/img/logo-nav.png'
export const MenuIcon = '/img/menu-icon.svg'
export const CloseIcon = '/img/x-icon.svg'
export default function HeaderDefault(props) {
  useEffect(() => {
    const navbarSitcky = document.querySelector(".navbar-sticky");
    //Header
    var headroom = new Headroom(navbarSitcky);
    headroom.init();
  })
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-sticky navbar-light my-navbar">
      <div className="container-fluid mx-xl-5 mx-lg-3 mx-3 position-relative justify-content-between">
      <Link href="/">
          <a className="navbar-brand">
            <div className='nav-logo-size'>
                <Image src={Logo} layout="responsive" width="150" height="40" alt="Logo"/>
            </div>
          </a>
        </Link>

        <button className='navbar-toggler border-0 p-0'
          type="button" 
          data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDefault"
          aria-controls="offcanvasNavbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <Image src={MenuIcon} height="22" width="14" className='align-middle' />
        </button>
        <div 
          className={props.width < 992 ? "offcanvas offcanvas-start blue-gradient-bg" : "offcanvas offcanvas-start"}  
          data-bs-scroll="true" 
          id="offcanvasNavbarDefault" 
          tabIndex="-1" 
          aria-labelledby="offcanvasNavbarDefaultLabel">
          <div className=" offcanvas-header justify-content-end">
            <button type="button" 
              className="btn-close" data-bs-dismiss="offcanvas" 
              aria-label="Close">
               <Image src={CloseIcon} height="25" width="25" /> 
            </button>
          </div>
          <div className="offcanvas-body justify-content-end">
           <Navbar />
          </div>
        </div>
      </div>
    </nav>
  );
}

