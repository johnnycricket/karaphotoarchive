import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login on initial load', async () => {
  render(<App />);
  const linkElement = await screen.queryAllByText("");
  expect(linkElement).toBe(null);
});
