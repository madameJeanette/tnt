import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ClientContextProvider, createClient} from "react-fetching-library";

const client = createClient({
});

ReactDOM.render(
        <ClientContextProvider client={client}>
            <App />
        </ClientContextProvider>,
        document.getElementById('root')
    );

serviceWorker.unregister();
