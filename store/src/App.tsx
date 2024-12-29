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
						from: 'app',
						isLoggedIn: true,
						user: {
							name: 'John Doe',
							email: 'john@doe',
							hasPreference: (ingredient) => true,
							hasAllergy: (ingredient) => false,
						},
						isAdmin: true,
					})
				}
			>
				Store Button
			</button>

			<div>{JSON.stringify(user)}</div>
		</>
	);
};
