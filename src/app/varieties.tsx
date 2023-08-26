import Image from "next/image"
const varieties = () => {
  return (
  <div className="grid justify-center mx-10">
    <h1 className="text-4xl font-bold mt-20 text-center">Check What We Have!</h1>
    <p className="text-lg font-semibold text-slate-500 text-center mt-5">Categories</p>
    <div className="flex justify-center gap-x-5 mt-20">
        <div className=" transform transition-transform hover:scale-105">
        <Image src="/necklace.jpg" alt="necklace" width={323} height={323}></Image>
        <h2 className="text-2xl font-semibold text-center mt-5">Necklace</h2>
        </div>
        <div className=" transform transition-transform hover:scale-105">
        <Image src="/bangals.jpg" alt="bangals" width={300} height={300}></Image>
        <h2 className="text-2xl font-semibold text-center mt-5">Bangals</h2>
        </div>
        <div className=" transform transition-transform hover:scale-105">
        <Image src="/rings.webp" alt="rings" width={300} height={300}></Image>
        <h2 className="text-2xl font-semibold text-center mt-5">Rings</h2>
        </div>
        <div className=" transform transition-transform hover:scale-105">
        <Image src="/earings.jpg" alt="earings" width={300} height={300}></Image>
        <h2 className="text-2xl font-semibold text-center mt-5">Earings</h2>
        </div>
    </div>
  </div>
  )
}

export default varieties
