(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        const openMenuButton = document.querySelector('button[aria-label="Open main menu"]');
        const closeMenuButton = document.querySelector('button[aria-label="Close menu"]');

        if (openMenuButton) {
            openMenuButton.addEventListener('click', () => {
                console.log('Open menu button clicked');
                mobileMenu.classList.remove('hidden');
            });
        } else {
            console.error('Open menu button not found');
        }

        if (closeMenuButton) {
            closeMenuButton.addEventListener('click', () => {
                console.log('Close menu button clicked');
                mobileMenu.classList.add('hidden');
            });
        } else {
            console.error('Close menu button not found');
        }
    });
})();