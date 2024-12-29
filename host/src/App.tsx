import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Auth, Front } from './pages';
import { lazy, Suspense } from 'react';

//@ts-ignore
const Header = lazy(() => import('header/header'));

export default () => {
	return (
		<Suspense fallback="Loading...">
			<BrowserRouter>
				<div className="app">
					<div className="border" data-component="header">
						<Header />
					</div>
					<Routes>
						<Route path="/" element={<Front />} />
						<Route path="/auth" element={<Auth />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	);
};
