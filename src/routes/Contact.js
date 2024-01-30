function Contact() {
  return (
    <>
    <div className="bg-gray-50 pt-5">
      
      <section className="text-gray-600 body-font relative">
      <h1 className="text-4xl text-violet-900 font-semibold  mb-0 ml-11">Contact Us</h1>
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
  width="100%"
  height="100%"
  className="absolute inset-0"
  frameBorder="0"
  title="map"
  marginHeight="0"
  marginWidth="0"
  scrolling="no"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15762.474299104671!2d38.7463865!3d9.0071998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e1f44917bd%3A0x6005a0aec6bbd54c!2sSoftnet%20Solutions%E2%84%A2%20-%20Ethiopia%20(Headquarters)!5e0!3m2!1sen!2set!4v1706594951462!5m2!1sen!2set"
  style={{ filter: "grayscale(0) contrast(1.3) opacity(0.6)" }}
></iframe>

            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Mexico , Shewa Bakery Bldg. 4th Floor
                   Addis Ababa , Ethiopia</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:example@email.com" className="text-purple-500 leading-relaxed">
                info@softnetsc.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">+251(9)77 51 04 51</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Softnet Solutions</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Submit
            </button>
            <p className="text-s text-gray-500 ml-9 mt-3">Empowering community through technology !</p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default Contact;
