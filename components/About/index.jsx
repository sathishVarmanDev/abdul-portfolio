import React from 'react'
import styles from "@/styles/About.module.css"
import 'aos/dist/aos.css'; // You can also use aos.css here, if you prefer.
import AOS from 'aos';
import { useEffect } from "react";

export default function About() {
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
        <div className={`${styles.aboutContainer}`} id='about' data-aos="fade-up">
            <div className={`${styles.divider}`}></div>
            <h2 className={`${styles.aboutHeader}`} data-aos="fade-up" data-aos-delay="300">About</h2>
            <div className={`${styles.aboutFlex}`}>
                <div className={`${styles.aboutSubContainer}`}>
                    <p className={`${styles.aboutSubHeader}`} data-aos="fade-up" data-aos-delay="300">Education</p>
                    <div className={`${styles.aboutContent}`} data-aos="fade-up" data-aos-delay="600">
                        <p className={`${styles.aboutTitle}`}>Frontend Developer Career Path</p>
                        <p className={`${styles.aboutProvider}`}>Udemy</p>
                        <p className={`${styles.aboutDescription}`}>During the course, I learned HTML, CSS, Bootstrap, JavaScript & ReactJS. By using these skills, I developed indie projects like MoviePitch: ChatGPT For Movies, Meme Generator, Notes App, Tenzies Game, Speed Typing Game & PicSome: e-commerce app.</p>
                    </div>
                    <div className={`${styles.aboutContent}`} data-aos="fade-up" data-aos-delay="600">
                        <p className={`${styles.aboutTitle}`}>Bachelors Degree in Computer Science</p>
                        <p className={`${styles.aboutProvider}`}>Ghulam Ishaq Khan Institute of Engineering</p>
                        <p className={`${styles.aboutDescription}`}>Completed my bachelors in computer science. I had an opportunity to learn from some amazing professors and work on projects with excellent students. My favorite courses were: Object-oriented programming, Software Engineering, Discrete mathematics, Data Structures</p>
                    </div>
                </div>
                <div className={`${styles.aboutSubContainer}`}>
                    <p className={`${styles.aboutSubHeader}`} data-aos="fade-up" data-aos-delay="300">Experience</p>
                    <div className={`${styles.aboutContent}`} data-aos="fade-up" data-aos-delay="600">
                        <p className={`${styles.aboutTitle}`}>
                            Senior Frontend Developer</p>
                        <p className={`${styles.aboutProvider}`}>Lukuku</p>
                        <p className={`${styles.aboutDescription}`}>Working as a React/NextJS developer. Creating web animations using React Spring. Using latest styling libraries like TailwindCSS and styled components. Using latest statement management libraries like React query/tanstack query, Jotai and Zustand.</p>
                    </div>
                    <div className={`${styles.aboutContent}`} data-aos="fade-up" data-aos-delay="600">
                        <p className={`${styles.aboutTitle}`}>Senior Software Engineer</p>
                        <p className={`${styles.aboutProvider}`}>QisstPay</p>
                        <p className={`${styles.aboutDescription}`}>Joined the team that had 5 engineers. Left the team when company had 150 employees. 10,000 plus sales. 1000 clients/merchants. Leading a team of young frontend developers as well as giving Jira training to manage new ideas. Converting figma designs into reality using Reactjs, React Native and Nextjs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
