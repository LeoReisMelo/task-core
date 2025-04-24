import React from "react";
import "./Header.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { FaCoins, FaTrophy, FaLevelUpAlt, FaBell } from "react-icons/fa";
import logo from "../../assets/taskcore-logo.svg";

const handleNotificationClick = () => {
  // Adicione aqui a lógica para redirecionar para as notificações
  // Por exemplo, você pode utilizar o hook useHistory do react-router-dom
  // history.push('/notificacoes');
};

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="project-name">TaskCore</span>
      </div>
      <div className="right-container">
        <div className="stats-container">
          <div className="stat-item">
            {FaCoins({ className: "stat-icon", color: "red" })}
            <span>1000</span>
          </div>
          <div className="stat-item">
            {FaTrophy({ className: "stat-icon", color: "red" })}
            <span>500</span>
          </div>
          <div className="stat-item">
            {FaLevelUpAlt({ className: "stat-icon", color: "red"})}
            <span>Nível 10</span>
          </div>
        </div>
        <div className="notification-icon" onClick={handleNotificationClick}>
          {FaBell({ className: "stat-icon", color: "red" })}
        </div>
        <ProfilePicture />
      </div>
    </header>
  );
};

export default Header;
