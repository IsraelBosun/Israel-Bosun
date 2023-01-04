import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"

const HeaderSocials = () => (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/israel-bosun/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/IsraelBosun" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/BosunIsrael" target="_blank"><BsTwitter/></a>
    </div>
)

export default HeaderSocials