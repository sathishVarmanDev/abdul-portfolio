import React from 'react'
import styles from "@/styles/Home.module.css"

export default function Homepage() {
  const resumeLink = `https://drive.google.com/file/u/1/d/1zRp1yEjmpxpnMEjwk-ghYlGWT_Jko998/view?usp=sharing`
  return (
    <div className={`${styles.homepageContainer}`} id='home'>
      {/* <div className={`${styles.homepageContent}`}> */}
      <h1 className={`${styles.contentHeader}`}>Hi, MY NAME IS <span className={`${styles.headerName}`}>SATHISH</span></h1>
      <p className={`${styles.contentParagraph}`}>I am a frontend web developer with a focus on ReactJS, Javascript, Bootstrap, CSS & HTML</p>
      <a
        href={resumeLink}
        target='_blank'
        rel="noopener noreferrer"
      >
        <button className={`${styles.contentButton}`}>View Resume</button>
      </a>
      <p className={`${styles.contentEmail}`}>Email: sathish.varman.dev@gmail.com</p>
      {/* </div> */}
    </div>
  )
}
