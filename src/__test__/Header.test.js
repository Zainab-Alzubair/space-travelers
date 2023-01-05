import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header component tests', () => {
  test('Header renderu', () => {
    const header = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(header).toMatchSnapshot();
  });
});
