import Cookie from './components/Cookie';

export default () => {
	return (
		<Cookie
			cookie={{
				id: '1',
				title: 'Main chocolate',
				price: 1.5,
				toppings: ['chocolate'],
			}}
		/>
	);
};
