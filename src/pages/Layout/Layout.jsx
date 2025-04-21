import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ProgressDialog from "../../components/ProgressDialog/ProgressDialog";
import "./Layout.scss";

const Layout = () => {
  const [isProgressDialogOpen, setProgressDialogOpen] = useState(false);

  return (
    <div className="layout">
      <header className="main-header">
        <div className="app-title">
          <div className="title-container">
            {/* <img
              src={`${process.env.PUBLIC_URL}/logo192.png`}
              alt="Code City Builder Logo"
              className="app-logo"
            /> */}
            <h1>Code City Builder</h1>
          </div>
        </div>
        <nav className="main-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/city"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            City View
          </NavLink>
          <button
            className="log-progress-button"
            onClick={() => setProgressDialogOpen(true)}
          >
            Log Progress
          </button>
        </nav>
      </header>
      <main className="main-content">
        <div className="content-container">
          <Outlet />
          <ProgressDialog
            isOpen={isProgressDialogOpen}
            onClose={() => setProgressDialogOpen(false)}
          />
        </div>
      </main>
    </div>
  );
};

export default Layout;
