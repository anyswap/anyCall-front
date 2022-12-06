
import ListCheck from "@components/lists/ListCheck";
import Image from "next/image"
export const Logo = '/img/logo-nav.png';

export default function FeatureListChecks() {
  return (
    <div className="row align-items-center ">
      <div className="col-md-8 col-lg-6 mx-2 mx-md-auto blue-gradient-bg why-card">
        <div className="w-100 text-center mt-6 mb-4">
          <Image src={Logo} height="60px" width="220px" alt="logo" className="" data-aos="fade-up" data-aos-delay="200"/>
        </div>
        <ul className='list-unstyled mb-4 mb-lg-6 mx-4 mx-sm-7' data-aos="fade-up" data-aos-delay="200">
          <ListCheck className="d-flex py-3 align-items-start" listText="Over 14 chains supported" />
          <ListCheck className="d-flex py-3 align-items-start" listText="Over $2B liquidity supported" />
          <ListCheck className="d-flex py-3 align-items-start" listText="One click to fork" />
          <ListCheck className="d-flex py-3 align-items-start" listText="Fallback mechanism supported" />
          <ListCheck className="d-flex py-4 align-items-start" listText="Unlimited dev support" />
        </ul>

      </div>
    </div>
  );
}