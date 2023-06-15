// __tests__/Greeting.test.tsx
import { render, screen } from '@testing-library/react';
import Greeting from '../components/Greeting';

test('renders greeting message', () => {
  render(<Greeting name="Victor" />);
  const linkElement = screen.getByText(/Olá, Victor!/i);
  expect(linkElement).toBeInTheDocument();
});
