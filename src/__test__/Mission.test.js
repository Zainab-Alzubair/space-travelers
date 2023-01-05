import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Mission from '../components/pages/Mission';
import store from '../redux/configureStore';

describe('Missions tests', () => {
  test('should render', () => {
    const missions = render(
      <Provider store={store}>
        <BrowserRouter>
          <Mission />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(missions).toMatchSnapshot();
  });
});
