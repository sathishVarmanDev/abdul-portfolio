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
                        <p className={`${styles.aboutProvider}`}>Scrimba</p>
                        <p className={`${styles.aboutDescription}`}>During the course, I learned HTML, CSS, Bootstrap, JavaScript & ReactJS. By using these skills, I developed indie projects like MoviePitch: ChatGPT For Movies, Meme Generator, Notes App, Tenzies Game, Speed Typing Game & PicSome: e-commerce app.</p>
                    </div>
                    <div className={`${styles.aboutContent}`} data-aos="fade-up" data-aos-delay="600">
                        <p className={`${styles.aboutTitle}`}>Frontend Developer Career Path</p>
                        <p className={`${styles.aboutProvider}`}>Scrimba</p>
                        <p className={`${styles.aboutDescription}`}>During the course, I learned HTML, CSS, Bootstrap, JavaScript & ReactJS. By using these skills, I developed indie projects like MoviePitch: ChatGPT For Movies, Meme Generator, Notes App, Tenzies Game, Speed Typing Game & PicSome: e-commerce app.</p>
                    </div>
                </div>
                <div className={`${styles.aboutSubContainer}`}>
                    <p className={`${styles.aboutSubHeader}`} data-aos="fade-up" data-aos-delay="300">Experience</p>
                    <div className={`${styles.aboutContent}`} data-aos="fade-up" data-aos-delay="600">
                        <p className={`${styles.aboutTitle}`}>Frontend Developer Career Path</p>
                        <p className={`${styles.aboutProvider}`}>Scrimba</p>
                        <p className={`${styles.aboutDescription}`}>During the course, I learned HTML, CSS, Bootstrap, JavaScript & ReactJS. By using these skills, I developed indie projects like MoviePitch: ChatGPT For Movies, Meme Generator, Notes App, Tenzies Game, Speed Typing Game & PicSome: e-commerce app.</p>
                    </div>
                    <div className={`${styles.aboutContent}`} data-aos="fade-up" data-aos-delay="600">
                        <p className={`${styles.aboutTitle}`}>Frontend Developer Career Path</p>
                        <p className={`${styles.aboutProvider}`}>Scrimba</p>
                        <p className={`${styles.aboutDescription}`}>During the course, I learned HTML, CSS, Bootstrap, JavaScript & ReactJS. By using these skills, I developed indie projects like MoviePitch: ChatGPT For Movies, Meme Generator, Notes App, Tenzies Game, Speed Typing Game & PicSome: e-commerce app.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
