import { atom, useAtom } from 'jotai';

const user = atom<UserState>({
	from: null,
	isLoggedIn: false,
	user: null,
	isAdmin: null,
});

export const useUser = () => useAtom(user);
