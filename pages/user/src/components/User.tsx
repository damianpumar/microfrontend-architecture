import { lazy, Suspense } from 'react';
import styles from './User.module.css';
import { useUserViewModel } from './useUserViewModel';

//@ts-ignore
const Cookie = lazy(() => import('cookie/cookie'));

const User = () => {
	const { cart } = useUserViewModel();

	return (
		<main className="border" data-component="user">
			<h1>In your cart</h1>
			<ul className={styles.list}>
				{cart.products.map((cookie) => (
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

export default User;
