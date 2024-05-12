import React from 'react'

import { Link } from 'react-router-dom';
export default function Navbar({ options }) {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#0a58ca' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Home" style={{ color: 'white' }}>DevOps-Assignment1</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {options.map((elem) => {
                            return (

                                <li className="nav-item">
                                    <Link className={elem.name === 'Home' ? "nav-link active" : "nav-link"} to={`/${elem.name}`} style={{ color: 'white' }} key={elem.id}>
                                        {elem.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
