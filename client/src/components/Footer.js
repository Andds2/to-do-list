import './css/Footer.css'
import { FaGithub } from "react-icons/fa6"

const Footer = () => {
    return(
        <footer>
            <div className='footer-content'>
                <h1>Criado por - Luis M. Andrade</h1>
                <a href="https://github.com/Andds2"> <FaGithub /> Andds2</a>
            </div>
        </footer>
    )
}

export default Footer