import React, { useRef, useState } from "react";
import { motion } from "framer-motion"; // Importation de Framer Motion pour les animations
import emailjs from "@emailjs/browser"; // Importation de EmailJS pour l'envoi d'e-mails

import { styles } from "../styles"; // Importation des styles
import { EarthCanvas } from "./canvas"; // Importation du composant EarthCanvas
import { SectionWrapper } from "../hoc"; // Importation du composant SectionWrapper
import { slideIn } from "../utils/motion"; // Importation de la fonction slideIn pour les animations

//template_wnzxn1g
//service_4kk5wxk
//Opv0WhMHuCne6cBqb

const Contact = () => {
  const formRef = useRef(); // Référence du formulaire
  const [form, setForm] = useState({ // État du formulaire
    name: "", // Nom
    email: "", // Email
    message: "", // Message
  });

  const [loading, setLoading] = useState(false); // État de chargement du formulaire

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { target } = e; // Cible de l'événement
    const { name, value } = target; // Nom et valeur de l'élément cible

    // Mise à jour de l'état du formulaire avec les nouvelles valeurs
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
    setLoading(true); // Démarre le chargement

    // Envoi de l'e-mail via EmailJS
    emailjs
      .send(
        'service_4kk5wxk',
        'template_wnzxn1g',
        {
          from_name: form.name,
          to_name: "Emmanuel",
          from_email: form.email,
          to_email: "preiraclement@gmail.com",
          message: form.message,
        },
        'Opv0WhMHuCne6cBqb'
      )
      .then(
        () => {
          setLoading(false); // Arrête le chargement
          alert("Merci. Je reviendrai vers vous dès que possible."); // Affiche une alerte de succès

          // Réinitialise le formulaire
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false); // Arrête le chargement
          console.error(error); // Affiche l'erreur dans la console

          alert("Oups, quelque chose s'est mal passé. Veuillez réessayer."); // Affiche une alerte d'erreur
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Section du formulaire de contact */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Contactez-moi</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Formulaire */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/* Champ du nom */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Nom</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Comment vous appelez-vous ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {/* Champ de l'e-mail */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Quelle est votre adresse e-mail ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {/* Champ du message */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Que voulez-vous dire ?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Bouton d'envoi */}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </motion.div>

      {/* Section de la Terre en rotation */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
