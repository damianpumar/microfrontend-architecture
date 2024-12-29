import styles from './Cookie.module.css';
import { Toppings } from './Toppings';
import { useCookiesViewModel } from './useCookiesViewModel';
import { useImage } from 'src/utils/useImage';

const Cookie = ({ cookie }: { cookie: Product }) => {
	const cookieImage = useImage('../assets/cookie.png');

	const { user, addToCart, cart } = useCookiesViewModel();

	return (
		<article className={styles.cookie}>
			<span className={styles.image}>
				<img src={cookieImage} width="35%" />
			</span>
			<span className={styles.title}>{cookie.title}</span>
			<Toppings user={user.user} cookie={cookie} />

			<div className={styles.price}>
				{user.isAdmin && (
					<button type="button" onClick={() => addToCart(cookie)}>
						{cookie.price} €
					</button>
				)}
				{cart.contains(cookie) && (
					<div className="border" data-component="store">
						<span className={styles.contains}>In your cart</span>
					</div>
				)}
			</div>
		</article>
	);
};

export default Cookie;
