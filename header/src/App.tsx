import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';

export default () => {
	useEffect(() => {
		console.log('Header useEffect');
	}, []);

	return (
		<div className="header">
			<Header />
		</div>
	);
};
