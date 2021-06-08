import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const SideBar = () => {
    const [accordion,toggleAccordion] = useState(false)
    return (
        <ul className={!accordion
                        ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                        : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"} id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span></a>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Adminstrating
            </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                <i className="fas fa-fw fa-folder" />
                <span>Collections</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <Link className="collapse-item" to="/User">Users</Link>
                        <Link className="collapse-item" to="/Book" >Books</Link>
                        <Link className="collapse-item" to="/Tran">Transactions</Link>
                    </div>
                </div>
            </li>
            {/* Nav Item - Charts */}
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area" />
                <span>Charts</span></a>
            </li>
            {/* Nav Item - Tables */}
            <li className="nav-item">
                <Link className="nav-link" to="/Approve">
                    <i className="fas fa-fw fa-table" />
                    <span>Transaction</span>
                </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={() => toggleAccordion(!accordion)} />
            </div>
        </ul>
    )
}
export default SideBar
