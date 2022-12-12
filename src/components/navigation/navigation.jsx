function Navigation() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><b>Evolvan Tools</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-0">
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-light">Download</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;