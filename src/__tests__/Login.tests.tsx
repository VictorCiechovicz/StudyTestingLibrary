// __tests__/Login.test.tsx
import { render, fireEvent, screen } from '@testing-library/react';
import Login from '../components/Login';

test('permite ao usuário fazer login', () => {
  render(<Login />);
  
  fireEvent.change(screen.getByTestId('username-input'), {
    target: { value: 'meuUsuario' },
  });
  
  fireEvent.change(screen.getByTestId('password-input'), {
    target: { value: 'minhaSenha' },
  });

  fireEvent.click(screen.getByTestId('submit-button'));


});
