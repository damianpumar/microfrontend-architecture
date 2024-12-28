import { atom, useAtom } from 'jotai';
import { State } from 'src/@types';

const user = atom<State>({
	isLoggedIn: false,
	user: null,
});

export const useUser = () => useAtom(user);
