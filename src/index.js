import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
const store = ConfigureStore();
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
