
import pkg from "react";
const { useState } = pkg

import Image from "next/image";

export const ph1 = '/img/shots/p1.png'
export const ph2 = '/img/shots/p2.png'
export const ph3 = '/img/shots/p3.png'
export const ph4 = '/img/shots/p4.png'
export default function RoadmapTab(props) {
    const [activeId, setActiveId] = useState(1)
    
    function changePhase(clickItem){
        setActiveId(clickItem)
    }

    //At large screen sizes, show all information, 
    //and at medium and small, toggle button information
    //on when clicked
    const phaseButtonStyles = (phase) => {
        if(props.width > 992) {
            return "opacity-75 mb-0 p-res d-block"
        } else if (activeId === phase){
            return "opacity-75 mb-0 p-res d-block"
        } else {
            return "opacity-75 mb-0 p-res d-none"}
    }

    return (
        <>
            <h3 className="title-text bold text-center pt-8 mb-0">Roadmap</h3>
            <div className="row mb-11 mx-2 mx-1 mx-md-6 mt-3 mt-md-6" data-aos="up" data-aos-delay="300">
                <div className="d-flex flex-shrink-1 col-md-4" data-aos="fade-up" data-aos-delay="300">
                    
                    <nav className="nav nav-pills flex-column align-items-stretch nav-shadow roadmap" >
                        <div className="d-flex align-items-center">
                           {/* html for the vertical timeline */}
                           <div className="h-100" style={{width: 20 + "%"}}>
                                <div className="h-100 d-flex flex-column">
                                    <div className="row flex-grow-1 ">
                                        <div className="col p-0">&nbsp;</div>
                                        <div className="col p-0">&nbsp;</div>
                                    </div>
                                    <div>
                                        <p className="text-center mb-1">
                                            <span className="badge-resize badge rounded-circle bg-light border highlight-badge">&nbsp;</span>
                                        </p>
                                    </div>
                                    <div className="row flex-grow-1">
                                        <div className={activeId > 1 ? "col p-0 border-end highlight-border": "col p-0 border-end"}>&nbsp;</div>
                                        <div className="col p-0">&nbsp;</div>
                                    </div>  
                                </div> 
                            </div>
                            <a style={{width: 80 + "%"}} href="#phase1" data-bs-toggle="tab" onClick={()=> changePhase(1)} className="nav-link active text-start p-2 p-md-4 flex-grow-1">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-24px">Phase 1</h5>
                                        <p className={phaseButtonStyles(1)} id="phase1content">AnyCall V4—— Customize cross-chain message to meet Dapps’ special needs</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="d-flex flex-shrink align-items-center">
                            <div className="h-100" style={{width: 20 + "%"}}>
                                <div className="h-100 d-flex flex-grow-1 flex-column">
                                    <div className="row flex-grow-1 ">
                                        <div className={activeId > 1 ? "col p-0 border-end highlight-border": "col p-0 border-end"}>&nbsp;</div>
                                        <div className="col p-0">&nbsp;</div>
                                    </div>
                                    <div>
                                        <p className="text-center mb-1">
                                            <span className={activeId > 1 ? "highlight-badge badge-resize badge rounded-circle bg-light border": "badge-resize badge rounded-circle bg-light border"}>&nbsp;</span>
                                        </p>
                                    </div>
                                    <div className="row flex-grow-1 ">
                                        <div className={activeId > 2 ? "col p-0 border-end highlight-border": "col p-0 border-end"}>&nbsp;</div>
                                        <div className="col p-0">&nbsp;</div>
                                    </div>  
                                </div> 
                            </div>
                            <a href="#phase2" data-bs-toggle="tab" className="nav-link text-start p-2 p-md-4 flex-grow-1" style={{width: 80 + "%"}} onClick={()=> changePhase(2)}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-24px">Phase 2</h5>
                                        <p className={phaseButtonStyles(2)} id="phase2content">AnyCall V6——Generalize cross-chain message to enable easier integration of 3rd parties’ Dapps</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="h-100" style={{width: 20 + "%"}}>
                                 <div className="h-100 d-flex flex-grow-1 flex-column">
                                    <div className="row flex-grow-1 ">
                                        <div className={activeId > 2 ? "col p-0 border-end highlight-border": "col p-0 border-end"}>&nbsp;</div>
                                        <div className="col p-0">&nbsp;</div>
                                    </div>
                                    <div>
                                        <p className="text-center mb-1">
                                            <span className={activeId > 2 ? "highlight-badge badge-resize badge rounded-circle bg-light border": "badge-resize badge rounded-circle bg-light border"}>&nbsp;</span>
                                        </p>
                                    </div>
                                    <div className="row flex-grow-1 ">
                                        <div className={activeId > 3 ? "col p-0 border-end highlight-border": "col p-0 border-end"}>&nbsp;</div>
                                        <div className="col p-0">&nbsp;</div>
                                    </div>  
                                </div> 
                            </div>
                            <a href="#phase3" data-bs-toggle="tab" className="nav-link text-start p-2 p-md-4 flex-grow-1"style={{width: 80 + "%"}}  onClick={()=> changePhase(3)}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-24px">Phase 3</h5>
                                        <p className={phaseButtonStyles(3)} id="phase3content">AnyCall V7——Intensify exclusive Fallback function to support more complex and innovative Dapps</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="h-100" style={{width: 20 + "%"}}>
                                <div className="h-100 d-flex flex-grow-1 flex-column">
                                    <div className="row flex-grow-1 ">
                                        <div className={activeId > 3 ? "col p-0 border-end highlight-border": "col p-0 border-end"}>&nbsp;</div>
                                        <div className="col p-0">&nbsp;</div>
                                    </div>
                                    <div>
                                        <p className="text-center mb-1">
                                            <span className={activeId > 3 ? "highlight-badge badge-resize badge rounded-circle bg-light border": "badge-resize badge rounded-circle bg-light border"}>&nbsp;</span>
                                        </p>
                                    </div>
                                    <div className="row flex-grow-1 ">
                                        <div className="col p-0">&nbsp;</div>
                                        <div className="col p-0">&nbsp;</div>
                                    </div>  
                                </div> 
                            </div>
                            <a href="#phase4" data-bs-toggle="tab" className="nav-link text-start p-2 p-md-4 flex-grow-1" style={{width: 80 + "%"}}  onClick={()=> changePhase(4)}>
                                <div className="d-flex align-items-center">          
                                    <div className="flex-grow-1">
                                        <h5 className="text-24px">More to come</h5>
                                        <p className={phaseButtonStyles(4)} id="phase4content">anyCall expansion to more EVM and non-EVM chains like Solana and Aptos</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="col-md-8 col-xl-7 ms-xl-auto text-14px" data-aos="fade-up" data-aos-delay="300">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="phase1">
                            <div className="position-relative overflow-hidden rounded-3 shadow-lg">
                                <Image priority src={ph1} alt="phase 1" width="773" height="496" layout="responsive" />
                                <div className="mx-1 mx-md-6">
                                    <h6>Phase1:</h6>
                                    <p className="bold">anyCall V4—— Customize cross-chain message to meet Dapp’s special needs</p>
                                    <ul>
                                        <li>
                                        Use case: Cross-chain Gauge; Cross-chain Mirroring; Cross-chain Gas Swap
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="phase2">
                            <div className="position-relative overflow-hidden rounded-3 shadow-lg">
                                <Image priority src={ph2} alt="phase 2" width="773" height="496" layout="responsive" />
                                <div className="mx-1 mx-md-6">
                                    <h6>Phase2:</h6>
                                    <p className="bold">anyCall V6—— Generalize cross-chain message to enable easier integration of 3rd parties’ Dapps</p>
                                    <ul>
                                       <li>
                                        11 EVM chains support 
                                        </li>
                                        <li>
                                        anyCall whitepaper release
                                        </li>
                                        <li>
                                        Use case: NFT Cross-chain; Cross-chain Swap; Cross-chain DAO Governance
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="phase3">
                            <div className="position-relative overflow-hidden rounded-3 shadow-lg">
                                <Image priority src={ph3} alt="phase 3" width="773" height="496" layout="responsive" />
                                <div className="mx-1 mx-md-6">
                                    <h6>Phase3:</h6>
                                    <p className="bold">anyCall V7—— Intensify exclusive Fallback function to support more complex and innovative Dapps</p>
                                    <ul>
                                        <li>
                                        14 EVM chains support
                                        </li>
                                        <li>
                                        anyCall infrastructure building: anyCall website, Debug tools, SDK toolkit
                                        </li>
                                        <li>
                                        Use case: Omnichain NFT launch
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="phase4">
                            <div className="position-relative overflow-hidden">
                                <Image priority src={ph4} alt="phase 4" width="773" height="496" layout="responsive" />
                                <div className="mx-1 mx-md-6">

                                    <p className="bold">More to come:</p>
                                    <ul>
                                        <li>
                                            anyCall expansion to more EVM and non-EVM chains like Solana and Aptos
                                        </li>
                                        <li>
                                            Innovative use cases powered by anyCall
                                        </li>
                                        <li>
                                            Projects powered by anyCall that are incubated by MultiDAO anyCall
                                        </li>
                                        <li>
                                            anyCall hackathon and workshop organized by MultiDAO
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
