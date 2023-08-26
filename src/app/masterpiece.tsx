import Image from "next/image"

const masterpiece = () => {
  return (
    <div className="bg-stone-50 py-10">
      <h1 className="text-4xl font-bold mt-10 text-center">Upbeat Jewel Trends</h1>
      <section className="flex flex-col-reverse md:flex-row justify-around gap-10 mx-10 mt-10 md:mt-20">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-xl md:text-4xl font-bold text-center tracking-wide leading-snug px-4 md:px-0">
            Adorning the soul just as it does the body, jewelry weaves a symphony of beauty and emotion, turning every moment into a glistening masterpiece.
          </h1>
        </div>
        <div className="flex-1 relative flex items-center">
          {/* image sec */}
          <Image className="rounded-lg" src="/heroimage.jpg" alt="women with jewellery" width={1200} height={800} />
        </div>
      </section>
    </div>
  );
}

export default masterpiece;
