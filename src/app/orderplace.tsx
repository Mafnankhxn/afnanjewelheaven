const orderplace = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-4xl mb-10">How To Get Your Order?</h1>
        <p className="text-2xl font-semibold text-center text-gray-800 mt-12 leading-relaxed tracking-wide">
          Explore our catalogue to view our wide range of products. If you find something you're interested in, simply visit the contact page and get in touch with us to provide the details of the product.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-16 md:mt-20">
          <a href="/catalogue" className="bg-black text-white py-3 px-8 md:px-10 text-lg rounded-full mb-4 md:mb-0 md:mr-4 hover:bg-gray-900 transition duration-300 ease-in-out">
            Visit Catalogue
          </a>
          <a href="/contact" className="bg-white outline text-black py-3 px-8 md:px-10 text-lg rounded-full outline-black hover:bg-gray-100 transition duration-300 ease-in-out">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default orderplace;

