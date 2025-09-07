document.addEventListener('DOMContentLoaded', () => {
    const cartTableBody = document.querySelector('.cart-table tbody');
    const subtotalElement = document.getElementById('subtotal');
    const totalQtyElement = document.getElementById('total-qty');
    const checkoutBtn = document.getElementById('checkout-btn');

    function renderCart() {
        const cart = getCart();
        cartTableBody.innerHTML = '';
        let subtotal = 0;
        let totalQty = 0;

        if (cart.length === 0) {
            cartTableBody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px;">Giỏ hàng của bạn đang trống.</td></tr>';
            subtotalElement.innerText = formatCurrency(0);
            totalQtyElement.innerText = 0;
            return;
        }

        cart.forEach(item => {
            subtotal += item.price * item.qty;
            totalQty += item.qty;

            const row = document.createElement('tr');
            row.dataset.productId = item.id;
            row.innerHTML = `
                <td>${escapeHtml(item.name)}</td>
                <td><img src="${item.img}" alt="${escapeHtml(item.name)}" class="cart-item-img"></td>
                <td>
                    <div class="qty-control">
                        <button class="qty-btn" data-action="decrease">-</button>
                        <input type="number" class="qty-input" value="${item.qty}" min="1">
                        <button class="qty-btn" data-action="increase">+</button>
                    </div>
                </td>
                <td>${formatCurrency(item.price)}</td>
                <td>${formatCurrency(item.price * item.qty)}</td>
                <td><button class="remove-btn" aria-label="Xóa sản phẩm này">&times;</button></td>
            `;
            cartTableBody.appendChild(row);
        });

        subtotalElement.innerText = formatCurrency(subtotal);
        totalQtyElement.innerText = totalQty;

        // cập nhật icon & mini-cart
        updateCartIcon();
        if (typeof renderMiniCart === "function") renderMiniCart();
    }

    cartTableBody.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        const productId = parseInt(row?.dataset.productId);
        if (!row || isNaN(productId)) return;

        let cart = getCart();
        const productIndex = cart.findIndex(item => item.id === productId);
        if (productIndex === -1) return;

        if (e.target.classList.contains('remove-btn')) {
            cart.splice(productIndex, 1);
            showToast('Sản phẩm đã được xóa khỏi giỏ hàng.');
        } else if (e.target.dataset.action === 'increase') {
            cart[productIndex].qty++;
        } else if (e.target.dataset.action === 'decrease') {
            cart[productIndex].qty--;
            if (cart[productIndex].qty <= 0) {
                cart.splice(productIndex, 1);
                showToast('Sản phẩm đã được xóa khỏi giỏ hàng.');
            }
        }
        saveCart(cart);
        renderCart();
    });

    // Cho phép nhập số lượng trực tiếp
    cartTableBody.addEventListener('input', (e) => {
        if (e.target.classList.contains('qty-input')) {
            const row = e.target.closest('tr');
            const productId = parseInt(row?.dataset.productId);
            let cart = getCart();
            const product = cart.find(item => item.id === productId);
            if (!product) return;
            const newQty = parseInt(e.target.value);
            if (!isNaN(newQty) && newQty > 0) {
                product.qty = newQty;
                saveCart(cart);
                renderCart();
            }
        }
    });

    renderCart();

    // Nút checkout
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (getCart().length === 0) {
                showToast('Giỏ hàng đang trống!');
                return;
            }
            window.location.href = 'dathang.html';
        });
    }

    // Footer năm hiện tại
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.innerText = new Date().getFullYear();
});
