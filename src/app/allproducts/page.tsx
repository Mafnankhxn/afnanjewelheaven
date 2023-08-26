import Link from "next/link";
import { CategoryDropdownMenu } from "../category";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price }) => (
  <div className="outline outline-2 outline-slate-300 p-5">
    <img src={imageSrc} alt="product" height={300} width={300} />
    <h2 className="font-semibold mt-3 text-xl">{title}</h2>
    <p className="font-semibold mt-2 text-xl">{price} pkr</p>
    <button className="bg-black mt-3 h-10 px-5 text-white">Buy Now</button>
  </div>
);

const ProductPage: React.FC = () => {
  const products = [
    {
      imageSrc: "catalog1.jpg",
      title: "Boho Multi-layer Beaded Necklace",
      price: 25000,
    },
    {
      imageSrc: "catalog2.jpg",
      title: "Elegant Diamond Pendant Necklace",
      price: 20000,
    },
    {
      imageSrc: "catalog3.jpg",
      title: "Vintage Pearl Choker Necklace",
      price: 22000,
    },
    {
      imageSrc: "catalog4.jpg",
      title: "Minimalist Stackable Gold Ring Set",
      price: 17000,
    },
    {
      imageSrc: "catalog5.jpg",
      title: "Gemstone Halo Cocktail Ring",
      price: 16000,
    },
    {
      imageSrc: "catalog6.jpg",
      title: "Engraved Sterling Silver Promise Ring",
      price: 35000,
    },
    {
      imageSrc: "catalog7.jpg",
      title: "Solitaire Diamond Engagement Ring",
      price: 26500,
    },
    {
      imageSrc: "catalog8.jpg",
      title: "Dainty Pearl Stud Earrings",
      price: 29000,
    },
    {
      imageSrc: "catalog9.jpg",
      title: "Hoop Earrings with CZ Accents",
      price: 15500,
    },
    {
      imageSrc: "catalog10.webp",
      title: "Statement Tassel Drop Earrings",
      price: 11000,
    },
    {
      imageSrc: "catalog11.webp",
      title: "Geometric Gold Dangle Earrings",
      price: 16500,
    },
    {
      imageSrc: "catalog12.png",
      title: "Delicate Gold Chain Bracelet",
      price: 12000,
    },
  ];

  return (
    <div className="min-h-screen grid justify-center">
      <div>
        <h1 className="mt-10 text-center font-bold text-4xl">Our Products</h1>
        <p className="text-center mr-5">
          <CategoryDropdownMenu />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 mt-20">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      <Link href="">
        <p className="mt-10 text-lg text-center text-slate-500 mb-10">
          Show more...
        </p>
      </Link>
    </div>
  );
};

export default ProductPage;