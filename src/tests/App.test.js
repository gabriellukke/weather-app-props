import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Test', () => {
  it('Testa se o teste testa', () => {
    render(<App />);
    const teste = screen.getByText('Hello CodeSandbox');
    expect(teste).toBeInTheDocument();
  });
});
