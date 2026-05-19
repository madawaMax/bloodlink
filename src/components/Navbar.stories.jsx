import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default = () => <Navbar />;