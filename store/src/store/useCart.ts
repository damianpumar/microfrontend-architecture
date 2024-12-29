import { atom, useAtom } from 'jotai';

const productsAtom = atom<Product[]>([]);

export const useCart = (): CartState => {
	const [products, setProducts] = useAtom(productsAtom);

	return {
		size: products.length,
		contains: (product: Product) => products.includes(product),
		add: (product: Product) => {
			setProducts([...products, product]);
		},
	};
};
