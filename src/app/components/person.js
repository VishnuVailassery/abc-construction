import styles from './PersonCard.module.css';

const PersonCard = ({ image, name, quote }) => (
  <div className="person-card flex flex-col items-center m-4">
    <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden rounded-full">
      <img src={image} alt={name} className="object-cover w-full h-full" />
    </div>
    <h3 className="text-xl font-semibold mt-4">{name}</h3>
    <p className="italic text-gray-600 mt-2 text-center">{quote}</p>
  </div>
);

export default PersonCard;
