import { useUser } from 'store/store';

export default () => {
	const [user, setUser] = useUser();

	return (
		<>
			{JSON.stringify(user)}

			<button
				onClick={() =>
					setUser({
						from: 'host',
						isLoggedIn: true,
						user: {
							name: 'John Doe',
							email: 'john@doe',
						},
					})
				}
			>
				Log in
			</button>
		</>
	);
};
