import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const store = configureStore(reducers, applyMiddleware(thunk));

export default store;
