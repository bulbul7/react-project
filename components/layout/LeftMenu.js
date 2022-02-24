import React from 'react';
import {Link} from "react-router-dom";

function LeftMenu() {

    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>

            <hr className="sidebar-divider my-0"/>
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="todo">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Todo List</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="registration">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Registration</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="user">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Crud API</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="basictable">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Basic Table</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="searchfilter">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Search Filter</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="pagination">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Pagination</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="controltable">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Table design</span></Link>
            </li>
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">
                Interface
            </div>
        </ul>
    );
}

export default LeftMenu;