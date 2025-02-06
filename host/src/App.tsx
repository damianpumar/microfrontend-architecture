import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import { ShowUrl } from 'src/ShowUrl';

//@ts-ignore
const Header = lazy(() => import('header/header'));
//@ts-ignore
const Front = lazy(() => import('front/front'));
//@ts-ignore
const User = lazy(() => import('user/user'));

export default () => {
	return (
		<Suspense
			fallback={
				<div className="loading">
					<img src="/favicon.png" />
				</div>
			}
		>
			<BrowserRouter>
				<div className="app">
					<ShowUrl />
					<div className="noBorder border-header" data-component={`header - ${import.meta.env.VITE_HEADER}`}>
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
