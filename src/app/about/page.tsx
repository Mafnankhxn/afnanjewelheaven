
const page = () => {
  return (
    <section className="bg-gray-100 h-screen py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Afnan Jewel Heaven, your source for exquisite and unique jewelry pieces. 
            With a passion for craftsmanship and a commitment to quality, we bring you a stunning collection 
            that combines timeless elegance with modern aesthetics.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Our dedicated team of skilled artisans meticulously craft each piece to perfection, 
            ensuring that every item you choose is a true work of art. Whether you're looking for a 
            special gift or a piece to complement your personal style, Afnan Jewel Heaven has something 
            to capture your heart.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <img
            src="aboutimg.jpg"
            alt="About Us"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default page
