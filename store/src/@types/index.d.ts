interface User {
	name: string;
	email: string;
	hasPreference: (ingredient: Ingredient) => boolean;
	hasAllergy: (ingredient: Ingredient) => boolean;
}

interface UserState {
	from: 'app' | 'header' | 'host' | null;
	isLoggedIn: boolean;
	user: User | null;
	isAdmin: boolean | null;
}

interface CartState {
	products: Product[];
	size: number;
	contains: (product: Product) => boolean;
	add: (product: Product) => void;
}

type Ingredient = 'chocolate' | 'peanut' | 'cocoa' | 'marshmallow' | 'cherry';

interface Product {
	id: string;
	title: string;
	price: number;
	toppings: Ingredient[];
}

declare module 'store/store' {
	export function useUser(): [UserState, (user: UserState) => void];
	export function useCart(): CartState;
}
