import { motion } from 'framer-motion';

export default function Game({ random, handleImageClick }) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
    clicked: {
      scale: 0.95,
      opacity: 0.7,
      rotate: 0,
    },
  };

  return (
    <div id="card-grid">
      {random.map((character) => (
        <motion.img
          key={character.id}
          src={character.image}
          alt={`img${character.id}`}
          id={`char${character.id}`}
          onClick={() => handleImageClick(character.id)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="clicked"
          variants={cardVariants}
        />
      ))}
    </div>
  );
}
