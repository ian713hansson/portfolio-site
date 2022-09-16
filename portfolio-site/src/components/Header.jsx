import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <header>
            <div className='header'>
                <h1>Ian Hansson</h1>
                <h1>Software Engineer</h1>
                <img className='head-img' src='https://i.imgur.com/rzFIxR1.jpg'/>
            </div>
            <nav className='nav'>
                <Link className='link' to='/'>Home</Link>
                
                <Link className='link' to='/projects'>Projects</Link>
            </nav>
            <i class="fa-brands fa-linkedin"></i>
        </header>
    )
}
export default Header