interface User {
	name: string;
	email: string;
}

export interface State {
	isLoggedIn: boolean;
	user: User | null;
}

declare module 'store/store' {
	export function useUser(): [State, (user: State) => void];
}
