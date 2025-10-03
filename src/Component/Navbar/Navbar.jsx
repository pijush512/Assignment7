import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar max-w-[1200px] mx-auto bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
            + New Ticket
          </a>
        </div>
      </div>
    );
};

export default Navbar;