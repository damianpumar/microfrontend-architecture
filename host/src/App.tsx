import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { lazy, Suspense } from 'react';

//@ts-ignore
const Header = lazy(() => import('header/header'));
//@ts-ignore
const Front = lazy(() => import('front/front'));
//@ts-ignore
const User = lazy(() => import('user/user'));

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
						<Route path="/user" element={<User />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	);
};
