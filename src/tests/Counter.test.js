import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByText("0");
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText("+"));
  const count = screen.getByText("1");
  expect(count).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText("-"))
  const count = screen.getByText("-1");
  expect(count).toBeInTheDocument();
});
