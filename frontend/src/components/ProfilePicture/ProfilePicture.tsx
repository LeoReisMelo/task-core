import React, { useState } from 'react';
import './ProfilePicture.css';

const ProfilePicture = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleMenuItemClick = (item: string) => {
    console.log(`Clicou em ${item}`);
    handleCloseMenu();
  };

  return (
    <div className="profile-picture-container">
      <img
        src={""}
        alt="Foto de Perfil"
        className="profile-picture"
        onClick={handleToggleMenu}
      />
      {showMenu && (
        <div className="menu-container">
          <ul>
            <li>
              <button onClick={() => handleMenuItemClick('Meu Perfil')}>
                Meu Perfil
              </button>
            </li>
            <li>
              <button onClick={() => handleMenuItemClick('Configurações')}>
                Configurações
              </button>
            </li>
            <li>
              <button onClick={() => handleMenuItemClick('Sair')}>
                Sair
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;