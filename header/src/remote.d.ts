declare module 'store/store' {
	export function useCounter(): [number, (count: number) => void];
}
