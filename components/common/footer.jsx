import React from 'react'
import styles from "@/styles/Footer.module.css"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const link = "https://github.com/sathishVarmanDev"

    const [isGithubHovered, setIsGithubHovered] = useState(false)
    const [isLinkedinHovered, setIsLinkedinHovered] = useState(false)

    return (
        <div className={`${styles.footerContainer}`}>
            <div className={`${styles.divider}`}></div>
            <div className={`${styles.footerContent}`}>
                <div className={`${styles.contentLeft}`}>Developed with ❤️ by Sathish</div>
                <div className={`${styles.contentRight}`}>
                    <a
                        className='githubIcon'
                        href={link}
                        target='_blank'
                        rel="noopener noreferrer"
                        onMouseEnter={() => setIsGithubHovered(true)}
                        onMouseLeave={() => setIsGithubHovered(false)}
                    >
                        {isGithubHovered ?
                            <FontAwesomeIcon icon={faGithub} bounce size="2xl" style={{ color: "#eef3db", }} /> :
                            <FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: "#eef3db", }} />
                        }
                    </a>

                    <a
                        className='linkedinIcon'
                        href={link}
                        target='_blank'
                        rel="noopener noreferrer"
                        onMouseEnter={() => setIsLinkedinHovered(true)}
                        onMouseLeave={() => setIsLinkedinHovered(false)}
                    >
                        {isLinkedinHovered ?
                            <FontAwesomeIcon icon={faLinkedin} bounce size="2xl" style={{ color: "#eef3db", }} /> :
                            <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: "#eef3db", }} />
                        }
                    </a>
                </div>
            </div>
        </div>
    )
}
