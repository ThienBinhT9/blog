import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Globalstyles from './components/Globalstyles';
import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Globalstyles>
            <App />
        </Globalstyles>
    </Provider>
);
