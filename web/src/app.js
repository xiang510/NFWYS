import React, { Component} from 'react';
import { Provider } from 'react-redux';
import store from './stores';
import Router from './routers';

import ToastMessage from './components/ToastMessage.jsx';

import './assets/css/reset.css';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <Provider store={store}>
                <Router />
                <ToastMessage />
            </Provider>
        )
    }
}

export default App;