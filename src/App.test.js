import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Animal from './Animal';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/regenerates its scales/i);
  expect(linkElement).toBeInTheDocument();
});

test('animal emoji appears depending on the animal prop name listed', () => {
  render(<Animal animals="dragon" />);

  const dragonEmoji = screen.queryByText(/🐉/i);
  expect(dragonEmoji).toBeInTheDocument();
});

test('default state of parade animals is zero, clicking a parade animal once will display 1 of the clicked animal', () => {
  render(<App />);

  const dodoDefault = screen.queryAllByText(/''/i);
  expect(dodoDefault.length).toBe(0);

  const dodoButton = screen.getByText(/Dodo/i);
  fireEvent.click(dodoButton);

  const dodoClicked = screen.queryAllByText(/🦤/i);
  expect(dodoClicked.length).toBe(1);

  const greyDefault = screen.queryAllByText(/''/i);
  expect(greyDefault.length).toBe(0);

  const greyButton = screen.getByText(/Grey/i);
  fireEvent.click(greyButton);

  const greyClicked = screen.queryAllByText(/👽/i);
  expect(greyClicked.length).toBe(1);
});

test('when the open and close zoo buttons are clicked, the appropriate text will display on screener', () => {
  render(<App />);
  const closedButton = screen.queryByText(/Exit/i);
  const openButton = screen.queryByText(/Enter/i);

  fireEvent.click(closedButton);

  const closedEl = screen.queryByText('THE Jungle is closed for humans at night');
  expect(closedEl).toBeInTheDocument();

  fireEvent.click(openButton);

  const openedEl = screen.queryByText('Welcome to THE jungle');
  expect(openedEl).toBeInTheDocument();
});
