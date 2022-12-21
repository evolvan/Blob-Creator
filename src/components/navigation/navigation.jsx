function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ borderBottom: '1px solid black', backgroundColor: '#198754' }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{ color: '#ffffff', fontSize: '2rem' }}
        >
          <b>Evolvan Tools</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-0">
            <li
              className="nav-item"
              style={{ color: '#ffffff', fontSize: '1.5rem' }}
            >
              <b>Blob Creator App</b>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
