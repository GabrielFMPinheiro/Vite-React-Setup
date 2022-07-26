import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from '../App';

test('Renders main page correctly', async () => {
  render(<App />);
  const button = await screen.findByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('count is 0');

  user.click(button);

  expect(button).toHaveTextContent('count is 1');
});
