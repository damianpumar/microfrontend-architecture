import { useUser } from 'store/store';

export const useHeaderViewModel = () => {
	const [user] = useUser();

	return {
		userName: user.user?.name,
		isLoggedIn: user.isLoggedIn,
		quantity: 0,
	};
};
