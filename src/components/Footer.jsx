import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/ian-hansson/">
            <FontAwesomeIcon className="icon" icon={faLinkedin}/>
            </a>
            <a href="https://github.com/ian713hansson">
                <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
        </div>
    )
}

export default Footer