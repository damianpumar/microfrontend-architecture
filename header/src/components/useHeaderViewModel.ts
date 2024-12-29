import { useCart, useUser } from 'store/store';

export const useHeaderViewModel = () => {
	const [user, setUser] = useUser();
	const cart = useCart();

	const logIn = () => {
		setUser({
			from: 'header',
			isLoggedIn: true,
			user: {
				name: 'John Doe',
				email: 'john@doe.com',
				hasPreference: (ingredient) => ['chocolate', 'cocoa'].includes(ingredient),
				hasAllergy: (ingredient) => ['peanut'].includes(ingredient),
			},
			isAdmin: true,
		});
	};

	return {
		logIn,
		user,
		cart,
	};
};
