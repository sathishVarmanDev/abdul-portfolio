import React from 'react'
import styles from "@/styles/Home.module.css"

export default function Homepage() {
  const resumeLink = `https://www.linkedin.com/in/abdul-mutaal-azhar-729817103/`
  return (
    <div className={`${styles.homepageContainer}`} id='home'>
      {/* <div className={`${styles.homepageContent}`}> */}
      <h1 className={`${styles.contentHeader}`}>Hi, MY NAME IS <span className={`${styles.headerName}`}>ABDUL</span></h1>
      <p className={`${styles.contentParagraph}`}>I am a frontend web developer with a focus on NextJS, ReactJS, Javascript, Tailwind CSS & HTML</p>
      <a
        href={resumeLink}
        target='_blank'
        rel="noopener noreferrer"
      >
        <button className={`${styles.contentButton}`}>View Resume</button>
      </a>
      <p className={`${styles.contentEmail}`}>Email: abdulmutaalazhar@gmail.com</p>
      {/* </div> */}
    </div>
  )
}
