import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithRouterAndRedux } from './renderWith';
import mockData from './mockData';
import App from '../../App';

describe('Verifica a pagina inicial', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockData),
    });
  });

  test('Verifica os itens da pag inicial', () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.getByText(/trybewallet/i)).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Digite seu email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/digite sua senha/i)).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeDisabled();
  });

  test(' Verifica o preenchimentos dos Inputs válidos e a redenrização do Botão', async () => {
    renderWithRouterAndRedux(<App />);
    const loginButton = screen.getByRole('button', { name: 'Entrar' });
    const email = screen.getByPlaceholderText(/Digite seu email/i);
    const password = screen.getByPlaceholderText(/digite sua senha/i);

    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeDisabled();

    await userEvent.type(email, 'test@test.co');
    await userEvent.type(password, 'sdwsdasd12!');
    expect(loginButton).not.toBeDisabled();

    await userEvent.click(loginButton);
    expect(screen.getByText(/test@test\.co/i)).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /descrição/i }));
  });
});
