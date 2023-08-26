
const page = () => {
  return (
    <section className="min-h-screen py-10 flex justify-center mx-20 items-center">
    <div className="bg-white flex gap-x-10 w-1/3 rounded-xl shadow-xl h-1/4 p-10 justify-center items-center">
      <span className="flex-1">
        <h2 className="text-slate-700 font-bold">ADDRESS</h2>
        <p className="mt-2 text-slate-500"> Pakistan,Peshawer Main City<br/>Sarafa Bazar Shinwari market</p>
      </span>
      <span className="grid flex-1 gap-y-2">
        <span>
          <h2 className="text-slate-700 font-bold">EMAIL</h2>
          <p className="text-slate-500">afookhan66@gmail.com</p>
        </span>
        <span>
          <h2 className="text-slate-700 font-bold">PHONE</h2>
          <p className="text-slate-500">03331042710</p>
        </span>
      </span>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white p-10 rounded-xl shadow-xl flex flex-col md:ml-auto w-full md:py-8 mt-4 md:mt-0">
  <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
  <p className="leading-relaxed mb-5 text-gray-600">Schedule a Meeting</p>
  <div className="relative mb-4">
    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
  </div>
  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
  </div>
  <div className="relative mb-4">
    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
  </div>
  <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  <p className="text-xs text-gray-500 mt-3">Note. you will only be allowed to meet if you have scheduled a meeting or if you had contacted for making a purchase.</p>
</div>

  </section>
  )
}

export default page
