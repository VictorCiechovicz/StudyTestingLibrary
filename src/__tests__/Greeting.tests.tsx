// __tests__/Greeting.test.tsx
import { render, screen } from '@testing-library/react';
import Greeting from '../components/Greeting';

test('renders greeting message', () => {
  render(<Greeting name="Lucas" />);
  const linkElement = screen.getByText(/Olá, Lucas!/i);
  expect(linkElement).toBeInTheDocument();
});
