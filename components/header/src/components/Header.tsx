import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import { useHeaderViewModel } from './useHeaderViewModel';
import { useImage } from 'src/utils/useImage';

const Header = () => {
	const logo = useImage('/favicon.png');
	const { logIn, user, cart } = useHeaderViewModel();

	return (
		<header className={styles.header}>
			<Link className={styles.link} to="/">
				<div className={styles.brand}>
					<img className={styles.logo} src={logo} width="40px" alt="codescouts-logo" />
					<span
						style={{
							fontWeight: 'bold',
							fontSize: '1.7rem',
						}}
					>
						<span>{'<Code'}</span>
						<span
							style={{
								color: '#ffe102',
							}}
						>
							{'Scouts/>'}
						</span>
					</span>
				</div>
			</Link>

			{!user.isLoggedIn ? (
				<button className={styles.button} onClick={logIn}>
					Log in
				</button>
			) : (
				<div className="noBorder border-store" data-component="store">
					<div
						style={{
							paddingLeft: '2px',
							paddingRight: '2px',
						}}
					>
						<Link to="/user" className={styles.link}>
							{user.user?.name} ({cart.size})
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
