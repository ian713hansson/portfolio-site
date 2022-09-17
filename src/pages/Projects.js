const Projects = () => {
    return (
        <div className="projects">
            <h2>Click project titles to be taken to their respective Github repositories</h2>
            <div className='project-layout'>
                <a href='https://github.com/ian713hansson/80s_heavy_metal_triva'>
                    <h1 className='project-title'>1980's Heavy Metal Trivia</h1>
                </a>
                <p className='project-description'>First project built with vanilla Javascript, HTML and CSS. A fun little game based on my favorite era of heavy music</p>
                <a href='https://80s_metal_trivia.surge.sh/'>
                <img className='project-img' src="https://i.imgur.com/Fm7lnUg.jpg"/>
                </a>
                <h4>Click Image to check out the site</h4>
            </div>
            <div className='project-layout'>
                <a href='https://github.com/ian713hansson/CelestialVibrationUnit'>
                    <h1 className='project-title'>Celestial Vibration Unit</h1>
                </a>
                <p className='project-description'>My first Full Stack app is a love letter to my modular synthesizer, where you can explore different modules info and a place to listen to music created using it.</p>
                {/* <a href='https://80s_metal_trivia.surge.sh/'> */}
                {/* <img className='project-img' src="https://i.imgur.com/Fm7lnUg.jpg"/> */}
                {/* </a> */}
                <h4>As this site is not deployed yet, please check out this walkthrough</h4>
            </div>
            <div className='project-layout'>
                <a href='https://github.com/steves3142/dynamic_polling_backend'>
                    <h1 className='project-title'>DynaSoar Polling</h1>
                </a>
                <p className='project-description'>My first project built with a team. A live polling app intended for a classroom setting or a trivia night at a bar. I was personally responsible for setting up the Backend using Sequelize, and the styling of the Frontend.</p>
                <a href='https://dynasoar.herokuapp.com/'>
                <img className='project-img' src="https://i.imgur.com/WlMdtnW.png"/>
                </a>
                <h4>Click Image to check out the site</h4>
            </div>
            <div className='project-layout'>
                <a href='https://github.com/ian713hansson/preSent'>
                    <h1 className='project-title'>preSent</h1>
                </a>
                <p className='project-description'>My capstone project for my Software Engineering Immersive, is a meditation focused app. Intended as a space to relax with ambient music, guided meditations and relaxing visuals.</p>
                <a href='https://dynasoar.herokuapp.com/'>
                <img className='project-img' src="https://i.imgur.com/uekhoq3.png"/>
                </a>
                <h4>Click Image to check out a the site</h4>
            </div>
        </div>
    )
}

export default Projects