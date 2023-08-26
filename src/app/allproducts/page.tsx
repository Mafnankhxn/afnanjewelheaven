import Link from "next/link"
import { CategoryDropdownMenu } from "../category"
const page = () => {
  return (
    <div className="min-h-screen grid justify-center">
      <span>
      <h1 className="mt-10 text-center font-bold text-4xl">Our Products</h1>
      <p className="text-start ml-10"><CategoryDropdownMenu/></p>
      </span>
      <div className="grid grid-cols-3 gap-10 mb-20 mt-20">
      <div className=" outline outline-2 outline-slate-300 p-5">
        <img src="catalog1.jpg" alt="product" height={300} width={300} />
        <h2 className="font-semibold mt-3 text-xl">Boho Multi-layer Beaded Necklace</h2>
        <p className="font-semibold mt-3 text-xl">25000 pkr</p>
        <button className="bg-black mt-3 h-10 px-5 text-white">buy Now</button>
      </div>
      <div className=" outline outline-2 outline-slate-300 p-5">
        <img src="catalog2.jpg" alt="product" height={300} width={300} />
        <h2 className="font-semibold mt-3 text-xl">Elegant Diamond Pendant Necklace
</h2>
        <p className="font-semibold mt-3 text-xl">20000 pkr</p>
        <button className="bg-black mt-3 h-10 px-5 text-white">buy Now</button>
      </div>
      <div className=" outline outline-2 outline-slate-300 p-5">
        <img src="catalog3.jpg" alt="product" height={300} width={300} />
        <h2 className="font-semibold mt-3 text-2xl">Vintage Pearl Choker Necklace
</h2>
        <p className="font-semibold mt-3 text-xl">22000 pkr</p>
        <button className="bg-black mt-3 h-10 px-5 text-white">buy Now</button>
      </div> 
      <div className=" outline outline-2 outline-slate-300 p-5">
        <img src="catalog4.jpg" alt="product" height={300} width={300} />
        <h2 className="font-semibold mt-3 text-xl">Minimalist Stackable Gold Ring Set
</h2>
        <p className="font-semibold mt-3 text-xl">17000 pkr</p>
        <button className="bg-black mt-3 h-10 px-5 text-white">buy Now</button>
      </div>
      <div className=" outline outline-2 outline-slate-300 p-5">
        <img src="catalog5.jpg" alt="product" height={300} width={300} />
        <h2 className="font-semibold mt-3 text-xl">Gemstone Halo Cocktail Ring
</h2>
        <p className="font-semibold mt-3 text-xl">16000 pkr</p>
        <button className="bg-black mt-3 h-10 px-5 text-white">buy Now</button>
      </div>
      <div className=" outline outline-2 outline-slate-300 p-5">
        <img src="catalog6.jpg" alt="product" height={300} width={300} />
        <h2 className="font-semibold mt-3 text-xl">Engraved Sterling Silver Promise Ring
</h2>
        <p className="font-semibold mt-3 text-xl">35000 pkr</p>
        <button className="bg-black mt-3 h-10 px-5 text-white">buy Now</button>
      </div>
      <div className=" outline outline-2 outline-slate-300 p-5">
        <img src="catalog7.jpg" alt="product" height={300} width={300} />
        <h2 className="font-semibold mt-3 text-xl">Solitaire Diamond Engagement Ring
</h2>
        <p className="font-semibold mt-3 text-xl">26500 pkr</p>
        <button className="bg-black mt-3 h-10 px-5 text-white">buy Now</button>
      </div>
      <div className=" outline outline-2 outline-slate-300 p-5">
        <img src="catalog8.jpg" alt="product" height={300} width={300} />
        <h2 className="font-semibold mt-3 text-xl">Dainty Pearl Stud Earrings
</h2>
        <p className="font-semibold mt-3 text-xl">29000 pkr</p>
        <button className="bg-black mt-3 h-10 px-5 text-white">buy Now</button>
      </div>
      <div className=" outline outline-2 outline-slate-300 p-5">
        <img src="catalog9.jpg" alt="product" height={300} width={300} />
        <h2 className="font-semibold mt-3 text-xl">Hoop Earrings with CZ Accents
</h2>
        <p className="font-semibold mt-3 text-xl">15500 pkr</p>
        <button className="bg-black mt-3 h-10 px-5 text-white">buy Now</button>
      </div>
      <div className=" outline outline-2 outline-slate-300 p-5">
        <img src="catalog10.webp" alt="product" height={300} width={300} />
        <h2 className="font-semibold mt-3 text-xl">Statement Tassel Drop Earrings
</h2>
        <p className="font-semibold mt-3 text-xl">11000 pkr</p>
        <button className="bg-black mt-3 h-10 px-5 text-white">buy Now</button>
      </div>
      <div className=" outline outline-2 outline-slate-300 p-5">
        <img src="catalog11.webp" alt="product" height={300} width={300} />
        <h2 className="font-semibold mt-3 text-xl">Geometric Gold Dangle Earrings
</h2>
        <p className="font-semibold mt-3 text-xl">16500 pkr</p>
        <button className="bg-black mt-3 h-10 px-5 text-white">buy Now</button>
      </div>
      <div className=" outline outline-2 outline-slate-300 p-5">
        <img src="catalog12.png" alt="product" height={320} width={320} />
        <h2 className="font-semibold mt-3 text-xl">Delicate Gold Chain Bracelet
</h2>
        <p className="font-semibold mt-3 text-xl">12000 pkr</p>
        <button className="bg-black mt-3 h-10 px-5 text-white">buy Now</button>
      </div>
      </div>
      <Link href=""><p className="mt-10 text-lg text-center text-slate-500 mb-10">Show more...</p></Link>
    </div>
  )
}

export default page

