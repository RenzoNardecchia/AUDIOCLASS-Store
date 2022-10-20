import './sections.css'
const Sections = () => {
    return (
        <div className="nav-item-container">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </div>
    );
}

export default Sections;
