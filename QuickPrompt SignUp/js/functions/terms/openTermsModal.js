export function openTermsModal() {
    return new Promise((resolve) => {
        const modal = document.getElementById('termsModal');
        const closeBtn = document.getElementById('closeTermsBtn');
        const acceptBtn = document.getElementById('acceptTermsBtn');

        modal.style.display = 'flex';

        const handleAccept = () => {
            cleanup();
            modal.style.display = 'none';
            resolve(true);
        };

        const handleClose = () => {
            cleanup();
            modal.style.display = 'none';
            resolve(false);
        };

        const cleanup = () => {
            closeBtn.removeEventListener('click', handleClose);
            acceptBtn.removeEventListener('click', handleAccept);
        };

        closeBtn.addEventListener('click', handleClose);
        acceptBtn.addEventListener('click', handleAccept);
    });
}
