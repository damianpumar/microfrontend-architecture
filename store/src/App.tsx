import { useEffect } from 'react';
import { useUser } from './store';
import './App.css';

export default () => {
	const [user, setUser] = useUser();

	useEffect(() => {
		console.log('Store useEffect');
	}, []);

	return (
		<>
			<button
				onClick={() =>
					setUser({
						isLoggedIn: true,
						user: {
							name: 'John Doe',
							email: 'john@doe',
						},
					})
				}
			>
				Store Button
			</button>

			<div>{JSON.stringify(user)}</div>
		</>
	);
};
