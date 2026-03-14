function getActiveUrl() {
	const headerLinks = document.querySelector('#header-nav');
	const links = headerLinks.querySelectorAll('a');
	const currUrl = window.location.pathname;

	links.forEach(url => {
		if (url.pathname === currUrl) {
			url.classList.add('active');
		} else {
			url.classList.remove('active');
		}
	});

	const addPath = document.getElementById('active-url');
	addPath.innerHTML = `<code>${currUrl}</code>`;
}
document.addEventListener('DOMContentLoaded', getActiveUrl);