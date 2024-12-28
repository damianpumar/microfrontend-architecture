import { useEffect } from 'react';
import { useCounter } from './store';
import './App.css';

export default () => {
	const [count, setCount] = useCounter();

	useEffect(() => {
		console.log('Store useEffect');
	}, []);

	return <button onClick={() => setCount(count + 1)}>Store Button</button>;
};
