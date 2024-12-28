//@ts-ignore
import { useUser } from 'store/store';
import './Header.css';

const Header = () => {
	const [user, setUser] = useUser();

	return (
		<header>
			<h1>Header</h1>

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
				Log in
			</button>
		</header>
	);
};

export default Header;
