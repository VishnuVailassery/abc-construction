const PreFooter = () => {
  return (
    <div id="prefooter" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo and Description */}
        <div>
          <img src="/abc-logo.jpg" alt="Company Logo" className="h-16 mb-4" />
          <p>
            ABC Constructions is committed to delivering high-quality construction services. 
            Our experienced team ensures every project is completed to the highest standards.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@abcconstructions.com</p>
        </div>

        {/* Location Details */}
        <div>
          <h3 className="text-xl font-bold mb-4">Location</h3>
          <p>123 Main Street</p>
          <p>Hometown, HT 12345</p>
          <p>Country</p>
        </div>

        {/* List of Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="list-disc list-inside">
            <li>Architectural Design</li>
            <li>General Contracting</li>
            <li>Remodeling</li>
            <li>Commercial Development</li>
            <li>Project Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
