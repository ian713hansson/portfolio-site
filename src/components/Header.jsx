import { Link } from 'react-router-dom'
import Footer from './Footer'


const Header = () => {
    return (
        <header>
            <div className='header'>
                
                <h1>Software Engineer</h1>

                <img className='head-img' src='https://i.imgur.com/rzFIxR1.jpg'/>
                <Footer />
            </div>
            <nav className='nav'>
                <Link className='link' to='/portfolio-site'>Home</Link>
                
                <Link className='link' to='/projects'>Projects</Link>
                <Link className='link' to='/contact' >Contact Me</Link>
            </nav>
        </header>
    )
}
export default Header