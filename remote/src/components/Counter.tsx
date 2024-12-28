import { useCounter } from '../state';

export default () => {
	const [count, setCount] = useCounter();

	return <button onClick={() => setCount(count + 1)}>Remote counter: {count}</button>;
};
