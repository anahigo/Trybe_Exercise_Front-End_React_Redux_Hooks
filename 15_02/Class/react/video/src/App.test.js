import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';

test('Verifica que, quando recebe uma piada, mostra ela na tela', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: "Whiteboards ... are remarkable.",
    status: 200,
  }; 

  {/* const response = { json: jest.fn().mockImplementation(() => Promisse.resolve(joke)); } 
  const response = { json: jest.fn().mockResolvedValue(joke); } //Sintaxe equivalente
  global.fecth = jest.fn().mockResolvedValue(joke); */}

  global.fecth = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke)
  });

  {/* const { findByText } = render(<App />);
  await findByText('Whiteboards ... are remarkable.'); */}

  const { getByText } = render(<App />);
  await waitFor(() => getByText('Whiteboards ... are remarkable.'));

});
