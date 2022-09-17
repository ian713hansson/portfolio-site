import React from "react"
import About from "./About"

const Home = () => {

    const onButtonClick = () => {
        fetch('Resume July 2022.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = 'Resume July 2022.pdf'
                alink.click()
            })
        })
    }
    return (
        <div className="home">
            <div className="about-div">
                <h2>A little bit about me...</h2>
                <About />
            </div>
            <div className='download-resume'>
                <h2>Click Below To Download My Resume</h2>
                <a href="Resume.pdf" download='Resume.pdf'>
                    <img className="download-btn" src='https://i.imgur.com/diKnGrS.png' onClick={onButtonClick} />
                </a>
            </div>
        </div>
    )
}

export default Home 