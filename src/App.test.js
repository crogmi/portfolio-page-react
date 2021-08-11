import { render, screen } from '@testing-library/react';
import App from './App';

describe ("App", () => {
  it("renders the page without crashing", () => {
    render(<App />);
    screen.debug();
  });
});