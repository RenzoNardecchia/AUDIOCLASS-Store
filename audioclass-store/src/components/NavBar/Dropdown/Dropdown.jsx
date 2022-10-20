
const Dropdown = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Home Studio</a></li>
                <li><a className="dropdown-item" href="#">Musical Instruments</a></li>
            </ul>
        </li>
    );
}

export default Dropdown;
