const Shop = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-[70vh] relative">
        <section
          className="bg-cover bg-center flex items-center h-[70vh]"
          style={{
            backgroundImage:
              "url('https://s3.ap-southeast-1.amazonaws.com/localiiz-prod/uploads/cny-lunar-new-year-displays-decorations-hong-kong-ifc.jpg?mtime=20210209023619&focal=none')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 mx-4 md:mx-8 lg:mx-12"></div>
          <div className="container mx-auto text-center text-white relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Dream Craft Events
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              Your one-stop shop for event accessories
            </p>
            <a
              href="#shop"
              className="bg-gradient-to-r from-rose-700 to-pink-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Shop Now
            </a>
          </div>
        </section>
      </div>

      {/* shopping cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-auto max-w-screen-xl mt-10 gap-5 mb-10">

        {/* single card  */}
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://assets-global.website-files.com/6481774ac8e2ed2234eb16cb/6492f7c77f093e3ab80a5cab_balloons-p-500.webp"
            alt="Product Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Product Name
            </h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-700 font-semibold">$19.99</span>
              <button className="bg-gradient-to-r from-rose-700 to-pink-600 text-white px-4 py-2 rounded-md flex">
                <span>
                Add to Cart
                </span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* single card end */}
        {/* single card  */}
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://assets-global.website-files.com/6481774ac8e2ed2234eb16cb/6492f76df64e0d5c5c806b4f_balloons%20photo-p-500.webp"
            alt="Product Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Product Name
            </h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-700 font-semibold">$19.99</span>
              <button className="bg-gradient-to-r from-rose-700 to-pink-600 text-white px-4 py-2 rounded-md flex">
                <span>
                Add to Cart
                </span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* single card end */}
        {/* single card  */}
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://assets-global.website-files.com/6481774ac8e2ed2234eb16cb/6492f6bd61b2697423136d86_birthday%20image%20small-p-500.webp"
            alt="Product Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Product Name
            </h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-700 font-semibold">$19.99</span>
              <button className="bg-gradient-to-r from-rose-700 to-pink-600 text-white px-4 py-2 rounded-md flex">
                <span>
                Add to Cart
                </span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* single card end */}

        {/* single card  */}
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://assets-global.website-files.com/6481774ac8e2ed2234eb16cb/6492f7c77f093e3ab80a5cab_balloons-p-500.webp"
            alt="Product Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Product Name
            </h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-700 font-semibold">$19.99</span>
              <button className="bg-gradient-to-r from-rose-700 to-pink-600 text-white px-4 py-2 rounded-md flex">
                <span>
                Add to Cart
                </span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* single card end */}
        {/* single card  */}
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://assets-global.website-files.com/6481774ac8e2ed2234eb16cb/6492f76df64e0d5c5c806b4f_balloons%20photo-p-500.webp"
            alt="Product Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Product Name
            </h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-700 font-semibold">$19.99</span>
              <button className="bg-gradient-to-r from-rose-700 to-pink-600 text-white px-4 py-2 rounded-md flex">
                <span>
                Add to Cart
                </span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* single card end */}
        {/* single card  */}
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://assets-global.website-files.com/6481774ac8e2ed2234eb16cb/6492f6bd61b2697423136d86_birthday%20image%20small-p-500.webp"
            alt="Product Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Product Name
            </h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-700 font-semibold">$19.99</span>
              <button className="bg-gradient-to-r from-rose-700 to-pink-600 text-white px-4 py-2 rounded-md flex">
                <span>
                Add to Cart
                </span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* single card end */}


      </div>
      {/* shopping cards end */}
    </div>
  );
};

export default Shop;
