import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';




/* test('descrição', () => {
  // Acessar os elementos da sua tela
  const { seletor RLT } = render();
  const  = seletor RLT();

  // Interagir com eles (se houver necessidade)
  fireEvent.change(emailInput, { target: {value: ' alberto@teste.com' }})

  // Fazer seu teste
  expect(inputEmail).Método Jest();
});
ou 
describe('descrição', () => {
  it('descrição', () => {
*/

describe('Tela de inserção do email', () => {
  it('Verifica que há um input de email na tela', () => {
    //Acessar os elementos da sua tela
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    //Interagir com eles (se houver necessidade)
    //Fazer seu teste
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('Verifica que há dois botões', () => {
    //Acessar os elementos da sua tela
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button');
    //Interagir com eles (se houver necessidade)
    //Fazer seu teste
    expect(button, length).toBe(2);
  });

  it('Verifica que há um botões', () => {
    //Acessar os elementos da sua tela
    const { getByTestId } = render(<App />);
    const button = getByTestId('id-send');
    //Interagir com eles (se houver necessidade)
    //Fazer seu teste
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');
  });

  it('Verifica que, ao inserir um email e clicar em "Enviar", o email aparece na tela', () => {
    //Acessar os elementos da sua tela
    const { getByTestId, getByLabelText } = render(<App />);
    const emailInput = getByLabelText('Email');
    const sendButton = getByTestId('id-send');
    const userEmail = getByTestId('id-email-user');
    //Interagir com eles (se houver necessidade)
    fireEvent.change(emailInput, { target: {value: ' alberto@teste.com' }})
    fireEvent.click(sendButton)
    //Fazer seu teste
    expect(emailInput.value).toBe('');
    expect(userEmail.textContent).toBe('Valor: alberto@teste.com');
  });
})