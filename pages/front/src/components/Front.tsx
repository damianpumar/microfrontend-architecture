import { lazy, Suspense } from 'react';
import styles from './Front.module.css';
import { useFrontViewModel } from './useFrontViewModel';

//@ts-ignore
const Cookie = lazy(() => import('cookie/cookie'));

const Front = () => {
	const { cookies } = useFrontViewModel();

	return (
		<main className="noBorder border-front" data-component={`front - ${import.meta.env.VITE_FRONT}`}>
			<h1>Cookies</h1>
			<ul className={styles.list}>
				{cookies.map((cookie) => (
					<li key={cookie.id}>
						<Suspense>
							<div className="noBorder border-cookie" data-component={`cookie - ${import.meta.env.VITE_COOKIE}`}>
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
