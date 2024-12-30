import { useCart } from 'store/store';

export const useUserViewModel = () => {
	const cart = useCart();

	return {
		cart,
	};
};
