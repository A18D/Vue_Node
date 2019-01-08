import React from 'react';
import {MainMenu} from '../menus';
import {FooterPage} from '../FooterMenu';

export const PageTemplate = ({children}) => (
  <p>
    <MainMenu />
    {children}
    <FooterPage />
  </p>
);
