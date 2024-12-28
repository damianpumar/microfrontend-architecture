import { useCounter } from 'store/store';

export default () => {
	const [count, setCount] = useCounter();

	return <button onClick={() => setCount(count + 1)}>Host counter: {count}</button>;
};
