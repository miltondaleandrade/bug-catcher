import Github from "./assets/github.svg"
export default function Footer() {
    return (
        <footer>
            <p><span>&copy; Ben Lowry 2021</span></p>
            <img id="github" src={Github} alt="Github logo" />
        </footer>
    )
}