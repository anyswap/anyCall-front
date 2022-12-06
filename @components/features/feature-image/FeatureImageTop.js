import Image from 'next/image'

export default function FeatureImageTop({title,src}) {
  return (
      <div>
      <div className={`d-flex justify-content-center  align-items-center mb-4 `}>
          <Image src={src}height="300" width="300"/>
      </div>
      <div className='text-center'>
          <h5 className="mb-3">{title}</h5> 
      </div>
  </div>
  );
}