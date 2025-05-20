import { useEffect, useState } from 'react';

export const ShowUrl = () => {
	const [loaded, setLoaded] = useState(false);
	const [isShowingTheMicrofrontend, setIsShowingTheMicrofrontend] = useState(false);

	useEffect(() => {
		const showBoundaries = localStorage.getItem('showBoundaries');

		setIsShowingTheMicrofrontend(showBoundaries === 'true');

		setLoaded(true);
	}, []);

	const updateBorders = () => {
		if (!loaded) {
			return;
		}

		if (isShowingTheMicrofrontend) {
			document.querySelectorAll('.noBorder').forEach((element) => {
				element.classList.add('border');
				element.classList.remove('noBorder');
			});
		} else {
			document.querySelectorAll('.border').forEach((element) => {
				element.classList.remove('border');
				element.classList.add('noBorder');
			});
		}

		localStorage.setItem('showBoundaries', isShowingTheMicrofrontend.toString());
	};

	useEffect(() => {
		updateBorders();
	}, [isShowingTheMicrofrontend]);

	useEffect(() => {
		const observer = new MutationObserver(() => {
			updateBorders();
		});
		observer.observe(document.body, { attributes: true, childList: true, subtree: true });

		return () => {
			observer.disconnect();
		};
	}, [isShowingTheMicrofrontend]);

	return (
		<>
			<input type="checkbox" checked={isShowingTheMicrofrontend} onChange={(event) => setIsShowingTheMicrofrontend(event.target.checked)} />
			<label>Show boundaries</label>
		</>
	);
};
