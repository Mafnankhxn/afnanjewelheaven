import Link from "next/link";
import { InputDemo } from "./search";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-stone-50 flex flex-col md:flex-row justify-between items-center md:h-20 px-6 md:px-10 border-b py-4 md:py-10">
        <div className="flex gap-x-2 items-center">
          <span className="text-center font-serif relative text-xl md:text-3xl font-semibold leading-snug tracking-wide">
            JEWELIOUS
          </span>
          <span> 
         <img className="ml-1 transform -rotate-6 w-8 md:w-10 h-8 md:h-10" src="logopic.png" alt="logo" />
          </span>
        </div>

        <ul className="flex flex-col md:flex-row gap-y-4 md:gap-x-10 text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/allproducts">All products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>

        <div className="mt-4 md:mt-0">
          <InputDemo />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
