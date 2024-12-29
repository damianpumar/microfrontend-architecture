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
			{user.isAdmin && (
				<button type="button" onClick={() => addToCart(cookie)}>
					{cookie.price} €
				</button>
			)}
			{cart.contains(cookie) && <span className={styles.contains}>In your cart</span>}
		</article>
	);
};

export default Cookie;
