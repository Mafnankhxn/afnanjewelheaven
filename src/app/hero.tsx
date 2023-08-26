import Link from "next/link"
const hero = () => {
  return (
    <div className="w-full h-screen">
      <section className="flex justify-between content-center items-center">
        <div className="grid justify-center content-center mt-20 ml-10 gap-y-10">
        <h1 className="text-black text-5xl leading-tight">Adorn Yourself in Elegance:<br/>Discover the Sparkling Symphony of<br/>Our Exquisite Jewelry Collection.</h1>
        <p className="text-slate-500 text-xl">
        "Crafted with Precision and Worn with Pride: Your Perfect Jewelry Awaits"
        </p>
        <div className="flex gap-x-10">
        <button className="bg-black p-5 text-lg text-slate-50">Design Your Ring</button>
      <button className="bg-slate-50 outline text-lg outline-black text-black p-3">See Our Collection</button>
        </div>
        </div>
        <div className="mt-10 mr-10">
        <img src="https://www.pngall.com/wp-content/uploads/2016/05/Jewellery-Free-Download-PNG.png" alt="hero image" height={400}width={400}/>
        </div>
      </section>
    </div>
  )
}

export default hero
