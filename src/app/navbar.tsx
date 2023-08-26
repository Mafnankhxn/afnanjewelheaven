
import Link from "next/link"
import { InputDemo } from "./search"
const navbar = () => {
  return (
    <header>
        <nav className="bg-stone-50 flex justify-between items-center h-20 px-10 border-b py-10">
        <div className="grid items-center">
  <span className="text-center font-serif relative text-2xl font-semibold leading-snug tracking-wide">
    AFNAN JEWEL
  </span>
  <span className="flex justify-center">
    <p className="text-2xl font-semibold leading-relaxed font-serif tracking-wide">HEAVEN</p>
  <img className="ml-1 transform -rotate-6 w-10 h-10" src="logopic.png" alt="logo" />
  </span>
</div>

            <ul className="flex gap-x-10 text-lg">
                <Link href="/">Home</Link>
                <Link href="/allproducts">All products</Link>
                <Link href="/about">About</Link>
                <Link href="/contact"><li>Contact us</li></Link>
            </ul>
            <div className=" mr-12">
            <InputDemo/>
            </div>
        </nav>
    </header>
  )
}

export default navbar
