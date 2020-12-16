import React from 'react';
import { fireEvent } from '@testing-library/react'
import renderWithRouter from './renderWithRouter'; 
// import { render } from '@testing-library/react';
import App, { NoMatch } from './App';

describe('teste da aplicação toda', () => {
  it('Verifica se, após a renderização, aparece a página inicial', () => {
    {/* const { getByText } = render(<App />); */}
    const { getByText } = renderWithRouter(<App />);

    const home = getByText('Você está na página Início');
    expect(home).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);

    fireEvent.click(getByText(/Sobre/i));

    const { pathname } = history.location;

    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-exite');

    const noMatch = getByText(/Página não encontrada/);
    expect(NoMatch).toBeInTheDocument();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    const { getByText } = renderWithRouter(<About />);
    const { aboutOnly } = getByText(/Você está na página Sobre/i);
    expect(aboutAll).toBeInTheDocument();
  });
});
