import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, LayoutDashboard, Compass, MessageSquare, Settings, LogOut } from 'lucide-react';
import './Sidebar.css';

import logo from '../assets/logo.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="edemy logo" className="logo-image" />
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/discover" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <Compass size={20} />
          <span>Discover</span>
        </NavLink>
        <NavLink to="/courses" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <BookOpen size={20} />
          <span>My Courses</span>
        </NavLink>
        <NavLink to="/community" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <MessageSquare size={20} />
          <span>Community</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/settings" className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
        <button className="nav-item logout-btn">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
