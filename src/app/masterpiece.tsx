import Image from "next/image"
const masterpiece = () => {
  return (
    <>
    <h1 className="text-4xl font-bold mt-20 text-center">Upbeat Jewel Trends</h1>
    <section className="flex justify-around gap-x-10 mx-10 mt-20">
  <div className="flex-1 relative flex items-center">
    {/* image sec */}
    <Image className="rounded-lg" src="/heroimage.jpg" alt="women with jewellery" width={4000} height={4000} />
  </div>
  <div className="flex-1 flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold text-center tracking-wider leading-snug">
      Adorning the soul just as it does the body, jewelry weaves a symphony of beauty and emotion, turning every moment into a glistening masterpiece.
    </h1>
  </div>
</section>
</>
  
  )
}

export default masterpiece
