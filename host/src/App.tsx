import { lazy, Suspense } from 'react';
import './App.css';
import User from './components/User';

const Header = lazy(
	// @ts-ignore
	async () => import('header/header'),
);

export default () => {
	return (
		<>
			<div className="container">
				<Suspense fallback="loading...">
					<Header />
				</Suspense>

				<User />
			</div>
		</>
	);
};
