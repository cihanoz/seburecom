import { browser } from '$app/environment';

export const showLoader = () => {
	if (browser) {
		const preloader = document.getElementById('preloader');
		if (preloader) {
			preloader.style.visibility = 'hidden';
			preloader.style.opacity = '0';
		}
	}
};

export const hideLoader = () => {
	if (browser) {
		const preloader = document.getElementById('preloader');
		if (preloader) {
			preloader.style.visibility = 'visible';
			preloader.style.opacity = '1';
		}
	}
};
