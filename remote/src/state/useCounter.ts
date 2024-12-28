import { atom, useAtom } from 'jotai';

const counter = atom<number>(0);

export const useCounter = () => useAtom(counter);
