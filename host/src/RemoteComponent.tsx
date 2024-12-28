import { lazy, Suspense } from 'react';

export const RemoteComponent = ({ component }: { component: string }) => {
	const Component = lazy(
		// @ts-ignore
		async () => import('header/header'),
	);

	return <Suspense fallback={<div>Loading...</div>}>{Component && <Component />}</Suspense>;
};
