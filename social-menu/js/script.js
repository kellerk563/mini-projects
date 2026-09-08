const socialToggle = document.getElementById('social-toggle');
const socialMenu = document.getElementById('social-menu');
socialToggle.addEventListener('click', function() {
    if (socialMenu.classList.contains('open')) {
        socialToggle.classList.remove('open');
        socialToggle.setAttribute('aria-exanded', 'false');
        socialMenu.classList.remove('open');
        socialMenu.setAttribute('aria-hidden', 'true');
    } else {
        socialToggle.classList.add('open');
        socialToggle.setAttribute('aria-exanded', 'true');
        socialMenu.classList.add('open');
        socialMenu.setAttribute('aria-hidden', 'false');
    }
});