import './navBar.css'
import Dropdown from './Dropdown/Dropdown';
import Sections from './Sections/Sections';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">AUDIOCLASS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Sections/>
                    <Dropdown/>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search for products" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
