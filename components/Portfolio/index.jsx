import React, { useState } from 'react'
import styles from "@/styles/Portfolio.module.css"
import Image from 'next/image'
import moviePitch from "@/public/moviePitch.png"
import tenzies from "@/public/tenzies.png"
import speedTypingGame from "@/public/speedTypingGame.png"
import notesApp from "@/public/notesApp.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import 'aos/dist/aos.css'; // You can also use aos.css here, if you prefer.
import AOS from 'aos';
import { useEffect } from "react";

export default function Portfolio() {

  const [isHovered, setIsHovered] = useState(false)
  const Instance = ({ image, projectName, link }) => {
    return (
      <div className={`${styles.portfolioInstance}`} data-aos="fade-up">
        <div className={`${styles.imageContainer}`}>
          <Image
            className={`${styles.projectPicture}`}
            alt='project'
            src={image}
          />
        </div>
        <div className={`${styles.descriptionContainer}`}>
          <div className={`${styles.projectName}`}>{projectName}</div>
          <a
            href={link}
            target='_blank'
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ?
              <FontAwesomeIcon icon={faGithub} beatFade size="2xl" style={{ color: "#eef3db", }} /> :
              <FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: "#eef3db", }} />
              }
          </a>
        </div>
      </div>
    )
  }

  useEffect(() => {
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className={`${styles.portfolio}`} id='portfolio' data-aos="fade-up">
      <div className={`${styles.divider}`}></div>
      <h2 className={`${styles.portfolioHeader}`}>Portfolio</h2>
      <div className={`${styles.portfolios}`}>
        <Instance
          image={moviePitch}
          projectName="ChatGPT for Movies"
          link={`https://github.com/sathishVarmanDev/ChatGPT-For-Movies`}
        />
        <Instance
          image={tenzies}
          projectName="Tenzies Game"
          link={`https://github.com/sathishVarmanDev/tenzies`}
        />
        <Instance
          image={speedTypingGame}
          projectName="Speed Typing Game"
          link={`https://v-sathish.netlify.app/assets/speed_typing_game-d973e0a4.png`}
        />
        <Instance
          image={notesApp}
          projectName="Notes App"
          link={`https://github.com/sathishVarmanDev/notes-app`}
        />
      </div>
    </div>
  )
}
