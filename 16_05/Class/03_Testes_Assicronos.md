# Testes assíncronos
No vídeo abaixo, vamos rever tudo que aprendemos hoje com um outro exemplo: uma aplicação que faz requisições a uma API!

- Video Trybe 

Recapitulando o código que vimos, temos:

// src/helper/index.js
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import reducer from '../../reducers';

const createMockStore = (initialState) => (
  createStore(combineReducers({ reducer }), initialState, applyMiddleware(thunk))
);

const renderWithRedux = (
  component, { initialState, store = createMockStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

export default renderWithRedux;

Aqui definimos o nosso renderWithRedux como acima, acrescentando ao mesmo o thunk para permitirmos o teste de funções assíncronas.

// src/App.test.js
import { fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import fetchMock from 'fetch-mock-jest';
import App from '../App';
import renderWithRedux from './helpers';

describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonDoguinho = queryByText('Novo Doguinho');

    expect(buttonDoguinho).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    fireEvent.click(buttonDoguinho);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});

Aqui nós usamos a biblioteca fetch-mock-jest para facilitar a nossa execução de testes assíncronos! É perfeitamente possível fazer os testes sem ela também, mas fica como sugestão para experimentarem!