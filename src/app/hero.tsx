import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-stone-50 py-16 md:py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left mb-10 md:mb-0 md:w-1/2">
          <h1 className="text-black text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Adorn Yourself in Elegance:<br />Discover the Sparkling Symphony of<br />Our Exquisite Jewelry Collection.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl mb-6">
            "Crafted with Precision and Worn with Pride: Your Perfect Jewelry Awaits"
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/design">
              <button className="bg-black text-white py-3 px-8 md:py-4 md:px-10 text-lg font-semibold rounded-full mb-4 md:mb-0 md:mr-4 hover:bg-gray-800 transition duration-300">
                Design Your Ring
              </button>
            </Link>
            <Link href="/collection">
              <button className="bg-slate-100 outline text-black py-3 px-8 md:py-4 md:px-10 text-lg font-semibold rounded-full outline-black hover:bg-gray-100 transition duration-300">
                See Our Collection
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Jewellery-Free-Download-PNG.png"
            alt="hero"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
