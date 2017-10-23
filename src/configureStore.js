import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import sagas from './sagas';
import { reducer as reduxFormReducer } from 'redux-form';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const middlewares = [
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    combineReducers({
      game: reducer,
      form: reduxFormReducer
    }),
    initialState,
    composeEnhancers(...enhancers)
  );

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      const newReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(newReducer);
    });
  }

  return store;
}
