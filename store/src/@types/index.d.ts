interface User {
	name: string;
	email: string;
}

interface State {
	from: 'app' | 'header' | 'host' | null;
	isLoggedIn: boolean;
	user: User | null;
}

declare module 'store/store' {
	export function useUser(): [State, (user: State) => void];
}
