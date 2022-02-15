import React from 'react';
import {Link} from "react-router-dom";

function LeftMenu() {

    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="dashboard">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>
            <hr className="sidebar-divider my-0"/>
            <li className="nav-item active">
                <Link className="nav-link" to="dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">
                Interface
            </div>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                   aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link className="collapse-item" to="buttons.html">Buttons</Link>
                        <Link className="collapse-item" to="cards.html">Cards</Link>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default LeftMenu;