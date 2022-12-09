import Image from "next/image"
import FeatureListChecks from "../feature-image/FeatureListChecks";
import FeatureListAttn from "../feature-image/FeatureListAttn";
export const LogoIcon = '/img/union.png';
export const SolutionsIcon = '/img/discovery.png';
export default function WhyanyCallTab() {
    return (
        <div className="row">
            <div className="col-12 ">
                <nav className="nav row col-12 col-md-9 col-lg-7 mx-auto nav-pills nav-fill justify-content-center rounded-pill shadow-lg nav-shadow mb-5 mb-lg-7 why-button-gap">
                    
                    <a href="#anyCallFeatures" data-bs-toggle="tab" className=" col-5  nav-link rounded-pill px-md-0 py-md-3 active ">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="me-2 d-flex align-items-center">
                                <Image className="" src={LogoIcon} height="16px" width="16px" />
                            </div>
                            
                            <p className="m-0">anyCall</p>
                        </div>
                    </a>
                    <a href="#moreSolutions" data-bs-toggle="tab" className=" col-5 nav-link rounded-pill px-md-4 py-md-3 ">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="d-flex align-items-center me-2">
                            <Image src={SolutionsIcon} height="16px" width="16px" className=""/>
                            </div>
                            <p className="m-0">Other Solutions</p>
                        </div>
                    </a>
                    
                </nav>
                <div className="tab-content ">
                    <div className="tab-pane fade show active" id="anyCallFeatures">
                    <FeatureListChecks/>
                    </div>
                    <div className="tab-pane fade" id="moreSolutions">
                    <FeatureListAttn/>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}