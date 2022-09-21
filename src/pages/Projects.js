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
                <a href='https://github.com/steves3142/dynamic_polling_backend'>
                    <h1 className='project-title'>DynaSoar Polling</h1>
                </a>
                <p className='project-description'>My first project built with a team. A live polling app intended for a classroom setting or a trivia night at a bar. I was personally responsible for setting up the Backend using Sequelize, and the styling of the Frontend.</p>
                <a href='https://dynasoar.herokuapp.com/'>
                <img className='project-img' src="https://i.imgur.com/WlMdtnW.png"/>
                </a>
                <h4>Click Image to check out the site</h4>
            </div>
            
        </div>
    )
}

export default Projects