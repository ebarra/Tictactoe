import { Provider } from 'react-redux';
import GlobalState from './../reducers/reducers';
import { createStore } from 'redux';
import React from 'react';
import { PLAYERX, VALUES } from '../constants/constants';
import { createBrowserHistory } from 'history';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import Header from './Header';
import Main from './Main';

const history = createBrowserHistory();

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {values: VALUES, turn: PLAYERX};
        this.store = this.configureStore();
    }
    render() {
        return (
           <Provider store={ this.store }>
             <ConnectedRouter history={history}>
               <div style={{ height: '100%' }}>
                 <Header />
                 <Main />
               </div>
             </ConnectedRouter>
           </Provider>
        );
    }
    configureStore() {
        const store = createStore(
          connectRouter(history)(GlobalState),
          this.initialState
        );
        if (module.hot) {
            module.hot.accept('./../reducers/reducers', () => {
                const nextRootReducer = require('./../reducers/reducers').default;
                store.replaceReducer(nextRootReducer);
            });
        }
        return store;
    }
}
