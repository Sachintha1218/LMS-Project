import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header glass-panel">
      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search for courses, skills, or mentors..." />
      </div>

      <div className="header-actions">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        <div className="user-profile">
          <div className="avatar">
            <User size={20} />
          </div>
          <div className="user-info">
            <span className="user-name">Alex M.</span>
            <span className="user-role">Student</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
