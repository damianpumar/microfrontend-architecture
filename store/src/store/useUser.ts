import { atom, useAtom } from 'jotai';

const user = atom<State>({
	from: null,
	isLoggedIn: false,
	user: null,
});

export const useUser = () => useAtom(user);
