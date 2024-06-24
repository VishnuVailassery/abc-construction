import '../styles.css'

const About = () => {
    return (
        <>
            <section id="about">
                <div className="background-image-container w-full h-96 bg-cover bg-center" >
                    {/* Other content can go here if needed */}
                </div>

                {/* Adjust the height (h-96) and image path (/about-image.jpg) as needed */}
                <div className="container mx-auto p-6">
                    <h2 className="text-3xl font-bold text-center my-6">About Us</h2>
                    <p className="text-lg text-center mx-auto max-w-prose">
                        ABC Constructions is a leading construction company dedicated to building your dreams into reality.
                        With years of experience in the industry, we pride ourselves on delivering high-quality projects
                        on time and within budget. Our team of skilled professionals works closely with clients to ensure
                        that every detail is perfect, from initial design to final construction.
                    </p>
                </div>

                
            </section >
        </>
    )
}
export default About;