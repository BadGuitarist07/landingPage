// src/components/__tests__/MiComponente.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Background from '../components/Background';
import Footer from '../components/Footer';
import FullPage from '../components/FullPage';
import Header from '../components/Header';
import Main from '../components/Main';

test('Renderiza MiComponente con un mensaje', () => {
    // Renderiza el componente con un mensaje específico
    const { getByText } = render(<Background mensaje="Hola, Background" />);
});
