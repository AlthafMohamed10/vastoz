import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
    {/* Navbar */}
<nav className="navbar fixed-top navbar-expand-xl navbar-light bg-light">
  {/* Container wrapper */}
  <div className="container-fluid">
    {/* Toggle button */}
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="bi bi-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* Navbar brand */}
      <Link className="navbar-brand mt-2 mt-lg-0" href="/NonCms">
        <img src="/assets/img/logo/logo.png" height={15} alt="MDB Logo" loading="lazy" />
      </Link>
      {/* Left links */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" href="/NonCms/Cameras">Cameras</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/NonCms/Appliances">Appliances</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/NonCms/Laptops">Laptops</Link>
        </li>
      </ul>
      {/* Left links */}
    </div>
    {/* Collapsible wrapper */}
    {/* Right elements */}
    <div className="d-flex align-items-center">
      {/* Icon */}
      <Link className="text-reset me-3" href="/NonCms/Cart">
        <i className="bi bi-cart2" />
        <span className="badge rounded-pill badge-notification bg-danger">1</span>
        {/* <Link href="/NonCms/Cameras" className="btn btn-primary">Shop Camera</Link> */}
      </Link>
      {/* Notifications */}
      <div className="dropdown">
        <Link className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-bell" />
          {/* <span className="badge rounded-pill badge-notification bg-danger">1</span> */}
        </Link>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <Link className="dropdown-item" href="#">Some news</Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">Another news</Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">Something else here</Link>
          </li>
        </ul>
      </div>
      {/* Avatar */}
      <div className="dropdown">
        <Link className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
          <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height={25} alt="Black and White Portrait of a Man" loading="lazy" />
        </Link>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
          <li>
            <Link className="dropdown-item" href="#">My profile</Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">Settings</Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
    {/* Right elements */}
  </div>
  {/* Container wrapper */}
</nav>
{/* Navbar */}


    </div>
  )
}

export default NavBar