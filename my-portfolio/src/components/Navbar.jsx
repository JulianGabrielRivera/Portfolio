function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light w-100'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='true'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse ' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 mt-3'>
              <li className='nav-item me-2'>Home</li>

              <li className='nav-item me-2'>Portfolio</li>
              <li className='nav-item me-2'>About</li>

              <li className='nav-item me-2'>Contact</li>
            </ul>
          </div>

          <h1 className='myName'>Julian Gabriel Rivera</h1>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
