import { lazy, Suspense } from 'react';
import styles from './Front.module.css';
import { useFrontViewModel } from './useFrontViewModel';

//@ts-ignore
const Cookie = lazy(() => import('cookie/cookie'));

const Front = () => {
	const { cookies } = useFrontViewModel();

	return (
		<main className="border" data-component="front">
			<h1>Cookies</h1>
			<ul className={styles.list}>
				{cookies.map((cookie) => (
					<li key={cookie.id}>
						<Suspense>
							<div className="border" data-component="cookie">
								<Cookie cookie={cookie} />
							</div>
						</Suspense>
					</li>
				))}
			</ul>
		</main>
	);
};

export default Front;
