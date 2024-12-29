import { useCart, useUser } from 'store/store';

export const useCookiesViewModel = () => {
	const [user] = useUser();
	const cart = useCart();
	const addToCart = (product: Product) => {
		cart.add(product);
	};

	return {
		user,
		cart,
		addToCart,
	};
};
