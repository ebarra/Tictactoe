import { Provider } from 'react-redux';
import GlobalState from './../reducers/reducers';
import { createStore } from 'redux';
import React from 'react';
import { PLAYERX, VALUES } from '../constants/constants';
import App from './App';

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {values: VALUES, turn: PLAYERX};
        this.store = this.configureStore();
    }
    render() {
        return (
           <Provider store={ this.store }>
            <div style={{ height: '100%' }}>
            <App store={ this.store } />
            </div>
            </Provider>
        );
    }
    configureStore() {
        const store = createStore(GlobalState, this.initialState);
        if (module.hot) {
            module.hot.accept('./../reducers/reducers', () => {
                const nextRootReducer = require('./../reducers/reducers').default;
                store.replaceReducer(nextRootReducer);
            });
        }
        return store;
    }
}
