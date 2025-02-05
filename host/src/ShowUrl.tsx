import { useEffect, useState } from 'react';

export const ShowUrl = () => {
	const [isShowingTheMicrofrontend, setIsShowingTheMicrofrontend] = useState(false);

	const updateBorders = () => {
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
