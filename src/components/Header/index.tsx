import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Container, Menu } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [currentPage, setCurrentPage] = useState('');
  const [mainPage, setMainPage] = useState('active');

  useEffect(() => {
    setCurrentPage(window.location.href);

    if (currentPage.includes('import')) {
      setMainPage('');
    } else {
      setMainPage('active');
    }
  }, [currentPage]);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <Menu>
          <Link to="/">Listagem</Link>
          <Link to="/import">Importar</Link>
        </Menu>
      </header>
    </Container>
  );
};

export default Header;
