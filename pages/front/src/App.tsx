import { useEffect } from 'react';
import Front from './components/Front';

export default () => {
	useEffect(() => {
		console.log('Front useEffect');
	}, []);

	return <Front />;
};
