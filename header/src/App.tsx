import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

export default () => {
	useEffect(() => {
		console.log('Header useEffect');
	}, []);

	return (
		<BrowserRouter>
			<div className="header">
				<Header />
			</div>
		</BrowserRouter>
	);
};
