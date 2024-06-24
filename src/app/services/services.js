const Services = ({ images }) => {
    return (
      <section id="services" className="my-12">
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold text-center my-6">Our Services</h2>
          <p className="text-lg text-center mx-auto max-w-prose">
            At ABC Constructions, we offer a comprehensive range of services designed to meet all your construction needs.
            From initial planning and design to final execution and project management, our team of skilled professionals
            is committed to delivering high-quality workmanship on every project. Whether you're looking to build a new
            home, renovate an existing space, or undertake a commercial development, we have the expertise and experience
            to bring your vision to life. Our services include architectural design, general contracting, remodeling,
            and specialized construction services tailored to your unique requirements.
          </p>
        </div>
  
        <div className="w-full h-96">
          <div className="relative w-full h-full">
            <img
              src={images[0]} // Assuming images is an array of image paths
              alt="Service"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
  
        <div className="container mx-auto p-6 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Architectural Design',
              description:
                'Our architectural design services ensure your project is both aesthetically pleasing and functionally efficient.',
              imgSrc: images[1], // Assuming images[1] is for this service
            },
            {
              title: 'General Contracting',
              description:
                'We offer comprehensive general contracting services to manage your construction projects from start to finish.',
              imgSrc: images[2], // Assuming images[2] is for this service
            },
            {
              title: 'Remodeling',
              description:
                'Our remodeling services can transform your existing space into a beautiful and functional area that meets your needs.',
              imgSrc: images[3], // Assuming images[3] is for this service
            },
            {
              title: 'Specialized Construction',
              description:
                'We provide specialized construction services tailored to unique requirements, ensuring high-quality results.',
              imgSrc: images[4], // Assuming images[4] is for this service
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-32">
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;
  