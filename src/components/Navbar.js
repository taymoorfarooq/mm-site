import {Link, useResolvedPath, useMatch} from "react-router-dom"
import '../styles/Navbar.css';

export default function Navbar() {

    return <nav className="nav">
    <ul id="leftmenu">
        <a href="#top">MUSTAFA MIR</a>
    </ul>

    <ul id="rightmenu">
        <a href="/#aboutsection">About</a>
        <a href="/#experiencesection">Experience</a>
        <a href="#contactsection">Contact</a>
    </ul>

</nav>

}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

  