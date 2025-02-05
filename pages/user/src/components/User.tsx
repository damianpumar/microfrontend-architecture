import { lazy, Suspense } from 'react';
import styles from './User.module.css';
import { useUserViewModel } from './useUserViewModel';

//@ts-ignore
const Cookie = lazy(() => import('cookie/cookie'));

const User = () => {
	const { cart } = useUserViewModel();

	return (
		<main className="noBorder border-user" data-component={`user - ${import.meta.env.VITE_USER}`}>
			<h1>In your cart</h1>
			<ul className={styles.list}>
				{cart.products.map((cookie) => (
					<li key={cookie.id}>
						<Suspense>
							<div className="noBorder" data-component={`cookie - ${import.meta.env.VITE_COOKIE}`}>
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
