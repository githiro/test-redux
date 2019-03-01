import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'// 作成したStoreを全Componentにくばるためのもの

import './index.css';
import reducer from './reducers'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)// すべてのreducerを１箇所にまとめる


ReactDOM.render(
	// Providerを使うことで、すべてに対してreducerで整形したstateが分配され、どこからでも参照できるようになる
	// つまりcomponentのpropsを使って値をバケツリレーする必要がなくなる
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
