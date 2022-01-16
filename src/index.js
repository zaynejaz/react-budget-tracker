import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from './context/context'
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId='d1f4e9f4-39a1-4c32-99da-cf3c0e905508' language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);