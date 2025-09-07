document.addEventListener('DOMContentLoaded', () => { 
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const message = contactForm.querySelector('textarea').value.trim();

            // Validate cơ bản
            if (!name || !email || !message) {
                showToast('Vui lòng điền đầy đủ thông tin.', 'error');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showToast('Địa chỉ email không hợp lệ.', 'error');
                return;
            }

            // Giả lập gửi form (sau này có thể thay bằng fetch)
            console.log("Contact submitted:", { name, email, message });
            showToast('Tin nhắn của bạn đã được gửi thành công. Cảm ơn bạn!');
            contactForm.reset();
        });
    }

    // Footer năm hiện tại
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.innerText = new Date().getFullYear();
});
