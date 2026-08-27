//Este módulo sirve para crear un componente de cabecera para la
//mini app que muestra una lista de canciones 

import React from 'react';
import HeaderContainer from "./styles"

const Header = () => {
  return (
    <HeaderContainer>
        <h1>Mi Biblioteca Musical</h1>
    </HeaderContainer>
  );
};

export default Header;
