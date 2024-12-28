declare module 'remote/state' {
	export function useCounter(): [number, (count: number) => void];
}
