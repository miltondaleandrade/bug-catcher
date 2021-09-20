import { Link } from 'react-router-dom';
import Github from '../assets/github.svg';
import { gitHub } from '../services';
export default function Footer() {
    return (
        <footer>
            <p><span>&copy; Ben Lowry 2021</span></p>
            <a href="#"><img id="github" src={Github} alt="Github logo" /></a>
        </footer>
    )
}