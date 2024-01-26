const Shop = () => {
  return (
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Shop Now
            </a>
          </div>
        </section>

    </div>
  );
};

export default Shop;
