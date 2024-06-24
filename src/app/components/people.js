import PersonCard from '../components/person';

const people = [
    { image: '/person1.png', name: 'John Doe', quote: 'Building the future one step at a time.' },
    { image: '/person2.png', name: 'Jane Smith', quote: 'Designing dreams into reality.' },
    { image: '/person3.png', name: 'Jim Brown', quote: 'Engineering excellence in every project.' },
    { image: '/person4.png', name: 'Emily Davis', quote: 'Creating spaces that inspire.' },
  ];

const People = () => {
    return (
        <section id="people" className="my-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center">
          {people.map((person, index) => (
            <PersonCard key={index} {...person} />
          ))}
        </div>
      </div>
    </section>
    )
}
export default People;
