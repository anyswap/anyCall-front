import Image from "next/image";
export const heroImage = '/img/shots/main.png'
export default function HeroDecorative() {
    return (
        <section className="position-relative hero">
            <div className="container pt-11 pt-lg-13 position-relative z-index-1">
                <div className="row pt-lg-5">
                    <div className="col-lg-11 mx-auto text-center">
                        <h1 className="text-white text-44px bold mb-5 ">Cross-Chain Dapps Made Easier</h1>
                        <p className="text-white mb-5 text-20px text-opacity-75 mx-auto w-lg-80">A permissionless cross-chain messaging router that provides the easiest way to establish the brand new Dapps.</p>
                        <div className="position-relative overflow-hidden shadow-lg z-index-1">
                            <Image width="1280" height="821" alt="" className="" src={heroImage} layout="responsive" priority />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}