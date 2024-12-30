import { useEffect } from 'react';
import User from './components/User';

export default () => {
	useEffect(() => {
		console.log('User useEffect');
	}, []);

	return <User />;
};
