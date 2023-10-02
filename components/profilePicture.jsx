import Image from 'next/image'
import styles from "@/styles/profilePicture.module.css";
import React from 'react'
import profileImage from "@/public/profile-picture.png"

export default function ProfilePicture() {
    return (
        <Image
            className={styles.profileImage}
            src={profileImage}
            alt='Profile Picture'
        />
    )
}