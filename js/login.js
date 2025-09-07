document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const toggleLinks = document.querySelectorAll('.toggle-link');
    const loginCard = document.getElementById('login-card');
    const registerCard = document.getElementById('register-card');
    
    // Hàm hiển thị form login
    function showLogin() {
        loginCard.classList.add('active');
        loginCard.classList.remove('hidden');
        registerCard.classList.remove('active');
        registerCard.classList.add('hidden');
    }
    // Hàm hiển thị form register
    function showRegister() {
        registerCard.classList.add('active');
        registerCard.classList.remove('hidden');
        loginCard.classList.remove('active');
        loginCard.classList.add('hidden');
    }

    // Thêm sự kiện toggle
    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (loginCard.classList.contains('active')) showRegister();
            else showLogin();
        });
    });

    // Xử lý Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value.trim();

        if (!email || !password) {
            showToast('Vui lòng điền đầy đủ thông tin đăng nhập.', 'error');
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showToast('Email không hợp lệ.', 'error');
            return;
        }
        if (password.length < 6) {
            showToast('Mật khẩu phải có ít nhất 6 ký tự.', 'error');
            return;
        }

        console.log('Login attempt:', { email, password });
        showToast('Đăng nhập thành công. Chuyển hướng...');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    });

    // Xử lý Register
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = registerForm.querySelector('input[name="full-name"]').value.trim();
        const email = registerForm.querySelector('input[type="email"]').value.trim();
        const password = registerForm.querySelector('input[type="password"]').value.trim();

        if (!name || !email || !password) {
            showToast('Vui lòng điền đầy đủ thông tin đăng ký.', 'error');
            return;
        }
        if (password.length < 6) {
            showToast('Mật khẩu phải có ít nhất 6 ký tự.', 'error');
            return;
        }

        console.log('Registration attempt:', { name, email, password });
        showToast('Đăng ký thành công. Bây giờ bạn có thể đăng nhập.');
        registerForm.reset();
        showLogin();
    });

    // Set trạng thái ban đầu
    showLogin();
});
