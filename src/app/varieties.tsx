import Image from "next/image";

const Varieties = () => {
  return (
    <div className="grid justify-center mx-10">
      <h1 className="text-4xl font-bold mt-20 text-center">Check What We Have!</h1>
      <p className="text-lg font-semibold text-slate-500 text-center mt-5">Categories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        <div className="w-full transform transition-transform hover:scale-105">
          <Image src="/necklace.jpg" alt="necklace" width={300} height={300} layout="responsive" />
          <h2 className="text-2xl font-semibold text-center mt-5">Necklace</h2>
        </div>
        <div className="w-full transform transition-transform hover:scale-105">
          <Image src="/bangals.jpg" alt="bangals" width={300} height={300} layout="responsive" />
          <h2 className="text-2xl font-semibold text-center mt-5">Bangals</h2>
        </div>
        <div className="w-full transform transition-transform hover:scale-105">
          <Image src="/rings.webp" alt="rings" width={300} height={300} layout="responsive" />
          <h2 className="text-2xl font-semibold text-center mt-5">Rings</h2>
        </div>
        <div className="w-full transform transition-transform hover:scale-105">
          <Image src="/earings.jpg" alt="earings" width={300} height={300} layout="responsive" />
          <h2 className="text-2xl font-semibold text-center mt-5">Earrings</h2>
        </div>
      </div>
    </div>
  );
};

export default Varieties;
