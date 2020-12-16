import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verificando se existe um botão', () => {
  {/* const { getByRole } = render(<App />); apagado*/}
  const { getByTestId } = render(<App />); {/*Adicionado*/}
  const btn = getByTestId('id-send'); {/*Adicionado*/}
  {/* const btn = getByRole('button'); apagado*/}
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button'); {/*Adicionado*/}
  expect(btn).toHaveValue('Enviar'); {/*Adicionado*/}
});

test('Verificando se existe dois botões', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(2);
});