document.addEventListener('DOMContentLoaded', function() {
	const themeToggle = document.getElementById('theme-toggle');
	themeToggle.addEventListener('click', function() {
		if (this.getAttribute('data-theme') === 'light') {
			document.body.classList.remove('light');
			document.body.classList.add('dark');
			this.setAttribute('data-theme', 'dark');
		} else {
			document.body.classList.remove('dark');
			document.body.classList.add('light');
			this.setAttribute('data-theme', 'light');
		}
	});

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.body.classList.add('dark');
		themeToggle.setAttribute('data-theme', 'dark');
	}
});