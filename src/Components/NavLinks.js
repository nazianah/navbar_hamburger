import './NavBar.css';


export const NavLinks = () => {
  return (
    <nav className="NavLinks">
        <ul>
            <li>
                <a href = "/"> Home </a>
            </li>
            <li>
                <a href = "/#services"> Services </a>
            </li>
            <li>
                <a href = "/#about"> About us </a>
            </li>
            <li>
                <a href = "/#contact"> Contact us </a>
            </li>
        </ul>

    </nav>
  )
};
export default NavLinks;