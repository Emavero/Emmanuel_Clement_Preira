import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const CenteredImage = ({ src, alt }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '40vh', // pour centrer verticalement
    }}>
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: '100%', // pour que l'image reste centrée quelle que soit la taille de l'appareil
          maxHeight: '100%', // pour que l'image reste centrée quelle que soit la taille de l'appareil
          width: 'auto', // rétablir la largeur automatique pour l'image
          height: 'auto', // rétablir la hauteur automatique pour l'image
        }}
      />
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <CenteredImage src="src\assets\maphoto.jpeg" alt="Ma photo" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        //className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       Je suis un étudiant en génie logiciel à l'ENSIAS,
        une école reconnue pour son excellence en informatique au Maroc, 
        je suis passionné par le développement de logiciels. 
        Mon engagement dans ce domaine me pousse à explorer constamment de nouvelles connaissances et compétences.
        Mon désir de faire une différence et ma volonté d'utiliser la technologie pour résoudre des problèmes complexes 
        et améliorer les expériences humaines sont des moteurs essentiels de mon parcours. Je suis déterminé à poursuivre
        un chemin d'apprentissage continu et de développement personnel, contribuant ainsi à façonner l'avenir de la technologie.
      </motion.p>

     <div className='mt-10 flex flex-wrap gap-8'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(About, "about");