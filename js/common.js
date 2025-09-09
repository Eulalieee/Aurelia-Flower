function getCart() {
    try {
        return JSON.parse(localStorage.getItem('cart')) || [];
    } catch (e) {
        console.error('Failed to parse cart data from localStorage', e);
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();
}

function updateCartIcon() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const iconContainer = document.querySelector('.icon-button#cartBtn');
    if (!iconContainer) return;
    let span = iconContainer.querySelector('.cart-count');

    if (count > 0) {
        if (!span) {
            span = document.createElement('span');
            span.className = 'cart-count';
            iconContainer.appendChild(span);
        }
        span.innerText = count;
    } else if (span) {
        span.remove();
    }
}

function formatCurrency(v) {
    const num = parseInt(String(v).replace(/[^\d]/g, ''), 10);
    if (isNaN(num) || num <= 0) return '0₫';
    return num.toLocaleString('vi-VN') + '₫';
}

function showToast(message) {
    let toast = document.querySelector('.toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.style.cssText = `
            position:fixed;bottom:20px;right:20px;
            background:#4096ff;color:#fff;
            padding:12px 20px;border-radius:5px;
            z-index:99999;opacity:0;transition:opacity 0.5s;
        `;
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = 0;
    requestAnimationFrame(() => { toast.style.opacity = 1; });
    toast.classList.add('show');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.style.opacity = 0;
        setTimeout(() => toast.classList.remove('show'), 500);
    }, 2500);
}

function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"']/g, m =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])
    );
}
