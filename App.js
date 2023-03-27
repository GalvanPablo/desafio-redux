import React from 'react';
import MainNav from './src/navigators/MainNav';

import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
    return (
        <Provider store={store}>
            <MainNav />
        </Provider>
    );
}
