import { useCounter } from 'store/store';
import './Header.css';

const Header = () => {
	const [count, setCount] = useCounter();

	return (
		<header>
			<h1>Header</h1>

			<button onClick={() => setCount(count + 1)}>Count: {count}</button>
		</header>
	);
};

export default Header;
