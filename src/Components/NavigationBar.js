import React from 'react'

function SideBar() {
  return (
    <div style={{height:"80px"}}>
        <nav className="navbar bg-dark navbar-expand-lg border-body p-3 fixed-top" data-bs-theme="dark" id='navBar'>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-start" id="offcanvasExample">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title my-2" id="offcanvasExampleLabel">Navigation</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-3 me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#navBar">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#About">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Experience">Work Experience</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Education">Education</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Contact">Contact Me</a>
                </li>
                <li className="nav-item dropdown" style={{width:"320px"}}>
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Skill-Set
                    </a>
                    <ul className="dropdown-menu px-3" >
                    <li><b>Front-End Web development</b></li>
                    <li>HTML, CSS, JavaScript</li>
                    <li>python</li>
                    <li><b>Back-End - Connections and Requests</b></li>
                    <li>PHP</li>
                    <li>DataBase Management</li>
                    <li><b>3D Modeling Basics</b></li>
                    <li>Creo and AutoCad</li>
                    <li><b>Video Editing</b></li>
                    <li>Adobe PremierPro and AfterEffects</li>
                    <li><b>Graphic Designer</b></li>
                    <li>Adobe Illustrator and PhotoShop</li>
                    </ul>
                </li>
                </ul>
                </div>
            </div>
            <h3 className="d-flex flex-row-reverse mx-3 my-1" style={{color: `white`}}>Shailesh Mohta</h3>
        </nav>
    </div>
  )
}

export default SideBar