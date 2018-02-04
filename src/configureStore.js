import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import gameReducer from './reducers';
import sagas from './sagas';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import history from './configureHistory';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
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
      game: gameReducer,
      form: reduxFormReducer,
      router: routerReducer
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

  store.dispatch(push('/lobby'));

  return store;
}
