import { lazy, Suspense } from 'react';
import styles from './Front.module.css';
import { useFrontViewModel } from './useFrontViewModel';

//@ts-ignore
const Cookie = lazy(() => import('cookie/cookie'));

export const Front = () => {
	const { cookies } = useFrontViewModel();

	return (
		<main>
			<h1>Cookies</h1>
			<ul className={styles.list}>
				{cookies.map((cookie) => (
					<li key={cookie.id}>
						<Suspense>
							<Cookie cookie={cookie} />
						</Suspense>
					</li>
				))}
			</ul>
		</main>
	);
};
