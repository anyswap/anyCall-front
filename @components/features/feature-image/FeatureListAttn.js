
import ListAttn from "@components/lists/ListAttn";



export default function FeatureListAttn() {
  return (
    <div className="row align-items-center ">
      <div className="col-md-8 col-lg-6 dark-card-bg mx-2 mx-sm-auto why-card">
        <h4 className="w-100 text-center mt-6 mb-4 fw-bold text-36px">Other Solutions</h4>
        <ul className='list-unstyled mb-4 mb-lg-6 mx-4 mx-sm-7' data-aos="fade-up" data-aos-delay="200">
          <ListAttn className="d-flex py-3 align-items-start" listText="Limited chains supported" />
          <ListAttn className="d-flex py-3 align-items-start" listText="No liquidity supported" />
          <ListAttn className="d-flex py-3 align-items-start" listText="Complex docs to integrate" />
          <ListAttn className="d-flex py-3 align-items-start" listText="Focus only until next round" />
          <ListAttn className="d-flex py-3 align-items-start" listText="Unsustainable growth plan" />
        </ul>

      </div>
    </div>
  );
}