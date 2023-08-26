import Image from "next/image"
const samples = () => {
  return (
    <section className="mt-20">
      <h1 className="text-4xl text-center font-bold mt-20">Some Of Our Picks</h1>
  <div className="container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
  <div className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between transform transition-transform hover:scale-105">
  <div>
    <Image src="/product1.jpg.crdownload" alt="product" width={300} height={300} className="object-cover" />
    <h2 className="text-semibold text-lg mt-4">24k Gold Bridal Necklace</h2>
  </div>
  <button className="bg-black text-white rounded-lg mt-4 py-2 w-full hover:bg-gray-900 transition duration-300 ease-in-out">
    Details
  </button>
</div>
    <div className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between transform transition-transform hover:scale-105">
      <div>
        <Image src="/product3.jpg" alt="product" width={300} height={300} className="object-cover" />
        <h2 className="text-semibold text-lg mt-4">Elegant Diamond Ring</h2>
      </div>
      <button className="bg-black text-white rounded-lg mt-4 py-2 w-full hover:bg-gray-900 transition duration-300 ease-in-out">
        Details
      </button>
    </div>
    <div className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between transform transition-transform hover:scale-105">
      <div>
        <Image src="/product4.jpg" alt="product" width={300} height={300} className="object-cover" />
        <h2 className="text-semibold text-lg mt-4">Sapphire Earrings</h2>
      </div>
      <button className="bg-black text-white rounded-lg mt-4 py-2 w-full hover:bg-gray-900 transition duration-300 ease-in-out">
        Details
      </button>
    </div>
    <div className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between transform transition-transform hover:scale-105">
      <div>
        <Image src="/product7.jpg" alt="product" width={320} height={320} className="object-cover" />
        <h2 className="text-semibold text-lg mt-4"> Celestial-themed Silver Drop Earrings</h2>
      </div>
      <button className="bg-black text-white rounded-lg mt-4 py-2 w-full hover:bg-gray-900 transition duration-300 ease-in-out">
        Details
      </button>
    </div>
  </div>
</section>


  )
}

export default samples
