document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkout-form');
    const orderSummaryList = document.getElementById('order-summary-list');
    const orderTotalSpan = document.getElementById('order-total');

    function renderOrderSummary() {
        const cart = getCart();
        orderSummaryList.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            orderSummaryList.innerHTML = '<li style="text-align:center; color: #757575;">Giỏ hàng trống</li>';
            orderTotalSpan.innerText = formatCurrency(0);
            return;
        }

        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            const li = document.createElement('li');
            li.className = 'order-summary-item';
            li.innerHTML = `
                <span>${escapeHtml(item.name)} x ${item.qty}</span>
                <span>${formatCurrency(itemTotal)}</span>
            `;
            orderSummaryList.appendChild(li);
        });
        orderTotalSpan.innerText = formatCurrency(total);
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const cart = getCart();
            if (cart.length === 0) {
                showToast('Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm vào giỏ trước khi đặt hàng.');
                return;
            }

            const name = document.getElementById('full-name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const address = document.getElementById('address').value.trim();

            if (!name || !email || !phone || !address) {
                showToast('Vui lòng điền đầy đủ thông tin bắt buộc.');
                return;
            }

            // Validate cơ bản
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showToast('Email không hợp lệ.');
                return;
            }
            const phonePattern = /^[0-9]{9,11}$/;
            if (!phonePattern.test(phone)) {
                showToast('Số điện thoại không hợp lệ.');
                return;
            }

            // Giả lập gửi đơn hàng
            console.log('Order submitted:', {
                customer: { name, email, phone, address },
                items: cart
            });

            // Clear cart
            saveCart([]);
            renderOrderSummary();
            showToast('Đơn hàng của bạn đã được gửi thành công. Cảm ơn bạn!');

            // Redirect sau 2 giây
            setTimeout(() => {
                window.location.href = 'index.html'; // hoặc trang success riêng
            }, 2000);
        });
    }

    renderOrderSummary();

    // Footer năm hiện tại
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.innerText = new Date().getFullYear();
});
