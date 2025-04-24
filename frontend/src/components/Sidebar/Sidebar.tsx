import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaTasks, FaStar, FaTrophy, FaShoppingBag, FaComments } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          {FaTachometerAlt({ className: "sidebar-icon" })}
          <span>Dashboard</span>
        </li>
        <li>
          {FaTasks({ className: "sidebar-icon" })}
          <span>Tasks</span>
        </li>
        <li>
          {FaStar({ className: "sidebar-icon" })}
          <span>Stoints</span>
        </li>
        <li>
          {FaTrophy({ className: "sidebar-icon" })}
          <span>Leaderboard</span>
        </li>
        <li>
          {FaShoppingBag({ className: "sidebar-icon" })}
          <span>Shop</span>
        </li>
        <li>
          {FaComments({ className: "sidebar-icon" })}
          <span>Chat</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;