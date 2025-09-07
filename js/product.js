// =================== DỮ LIỆU SẢN PHẨM MẪU ===================
const sampleProducts = [
  // Bó hoa
  { id: 1, name: "Bó hoa hồng đỏ", category: "bohoa", image: "../images/Bó hoa/Hoa Hồng/Bó hoa hồng đỏ.jpg", price: "350.000₫" },
  { id: 2, name: "Bó hoa hướng dương", category: "bohoa", image: "../images/Bó hoa/Hương Dương/Hoa hướng Dương mix lá xanh.jpg", price: "300.000₫" },
  { id: 3, name: "Bó hoa baby trắng", category: "bohoa", image: "../images/Bó hoa/Hương Dương/Hoa hướng Dương mix lá xanh.jpg", price: "280.000₫" },
  { id: 4, name: "Bó hoa tulip", category: "bohoa", image: "images/bohoa4.jpg", price: "400.000₫" },

  // Giỏ hoa
  { id: 5, name: "Giỏ hoa lan tím", category: "giohoa", image: "images/giohoa1.jpg", price: "500.000₫" },
  { id: 6, name: "Giỏ hoa hồng mix", category: "giohoa", image: "images/giohoa2.jpg", price: "450.000₫" },
  { id: 7, name: "Giỏ hoa cúc trắng", category: "giohoa", image: "images/giohoa3.jpg", price: "420.000₫" },
  { id: 8, name: "Giỏ hoa tulip hồng", category: "giohoa", image: "images/giohoa4.jpg", price: "480.000₫" },

  // Hoa chúc mừng
  { id: 9,  name: "Kệ hoa khai trương", category: "chucmung", image: "images/chucmung1.jpg", price: "600.000₫" },
  { id: 10, name: "Hoa hộp chúc mừng", category: "chucmung", image: "images/chucmung2.jpg", price: "550.000₫" },
  { id: 11, name: "Hoa chúc mừng sinh nhật", category: "chucmung", image: "images/chucmung3.jpg", price: "500.000₫" },
  { id: 12, name: "Hoa chúc mừng công ty", category: "chucmung", image: "images/chucmung4.jpg", price: "650.000₫" },

  // Hoa tang
  { id: 13, name: "Kệ hoa tang trắng", category: "hoatang", image: "images/hoatang1.jpg", price: "700.000₫" },
  { id: 14, name: "Vòng hoa tang sen trắng", category: "hoatang", image: "images/hoatang2.jpg", price: "680.000₫" },
  { id: 15, name: "Vòng hoa lan trắng", category: "hoatang", image: "images/hoatang3.jpg", price: "720.000₫" },
  { id: 16, name: "Kệ hoa cúc tang", category: "hoatang", image: "images/hoatang4.jpg", price: "650.000₫" },
];


// =================== RENDER & FILTER SẢN PHẨM ===================
const productList = document.getElementById('product-list');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderProducts(productsToRender) {
    if (!productList) return;
    const fragment = document.createDocumentFragment();
    productsToRender.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.dataset.id = product.id;
        card.dataset.category = product.category;
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
            </div>
            <div class="product-content">
                <h3>${escapeHtml(product.name)}</h3>
                <p class="price">${formatCurrency(product.price)}</p>
                <button class="add-to-cart" aria-label="Thêm ${escapeHtml(product.name)} vào giỏ">
                    <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                </button>
            </div>
        `;
        fragment.appendChild(card);
    });
    productList.innerHTML = '';
    productList.appendChild(fragment);
}

function filterProducts(category) {
  let filtered;

  if (category === "all") {
    // Lấy 2 sản phẩm đầu mỗi loại → tổng 8 cái
    const bohoa = sampleProducts.filter(p => p.category === "bohoa").slice(0, 2);
    const giohoa = sampleProducts.filter(p => p.category === "giohoa").slice(0, 2);
    const chucmung = sampleProducts.filter(p => p.category === "chucmung").slice(0, 2);
    const hoatang = sampleProducts.filter(p => p.category === "hoatang").slice(0, 2);
    filtered = [...bohoa, ...giohoa, ...chucmung, ...hoatang];
  } else {
    filtered = sampleProducts.filter(p => p.category === category);
  }

  renderProducts(filtered);
}

// =================== MINI-CART MODULE ===================
const cartBtn = document.getElementById('cart-link'); // sửa selector đúng HTML
const miniCart = document.getElementById('mini-cart');
const miniCartCloseBtn = document.getElementById('mini-cart-close');
const miniCartBackdrop = document.getElementById('mini-cart-backdrop');
const miniCartItemsContainer = document.getElementById('mini-cart-items');
const miniCartTotalSpan = document.getElementById('mini-cart-total');

function renderMiniCart() {
    if (!miniCartItemsContainer || !miniCartTotalSpan) return;
    const cart = getCart();
    const fragment = document.createDocumentFragment();
    let total = 0;

    if (cart.length === 0) {
        miniCartItemsContainer.innerHTML = '<p class="empty-cart-message">Giỏ hàng của bạn đang trống.</p>';
        miniCartTotalSpan.innerText = formatCurrency(0);
        return;
    }

    cart.forEach(item => {
        total += item.price * item.qty;
        const div = document.createElement('div');
        div.className = 'mini-cart-item';
        div.dataset.id = item.id;
        div.innerHTML = `
            <img src="${item.image}" alt="${escapeHtml(item.name)}">
            <div class="item-info">
                <h4>${escapeHtml(item.name)}</h4>
                <p class="item-price">${formatCurrency(item.price)}</p>
                <p class="item-quantity">Số lượng: ${item.qty}</p>
            </div>
            <button class="remove-item-btn" data-id="${item.id}" aria-label="Xóa ${escapeHtml(item.name)} khỏi giỏ">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        fragment.appendChild(div);
    });
    miniCartItemsContainer.innerHTML = '';
    miniCartItemsContainer.appendChild(fragment);
    miniCartTotalSpan.innerText = formatCurrency(total);
}

function openMiniCart() {
    if (!miniCart || !document.body) return;
    miniCart.classList.add('active');
    miniCart.setAttribute('aria-hidden', 'false');
    document.body.classList.add('mini-cart-open');
    renderMiniCart();
}

function closeMiniCart() {
    if (!miniCart || !document.body) return;
    miniCart.classList.remove('active');
    miniCart.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('mini-cart-open');
}

// =================== XỬ LÝ SỰ KIỆN ===================
document.addEventListener('click', (e) => {
    // Event delegation cho nút "Thêm vào giỏ hàng"
    if (e.target.closest('.add-to-cart')) {
        const button = e.target.closest('.add-to-cart');
        const card = button.closest('.product-card');
        const product = {
            id: parseInt(card.dataset.id),
            name: card.querySelector('h3').textContent,
            price: parseInt(card.querySelector('.price').textContent.replace(/[^\d]/g, '')),
            img: card.querySelector('.product-img-wrapper img').src,
            qty: 1
        };
        let cart = getCart();
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.qty += 1;
        } else {
            cart.push(product);
        }
        saveCart(cart);
        renderMiniCart(); // cập nhật mini-cart ngay
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 500);
        showToast(`${product.name} đã được thêm vào giỏ hàng!`);
        openMiniCart();
    }

    // Event delegation cho nút lọc
    if (e.target.closest('.filter-btn')) {
        const button = e.target.closest('.filter-btn');
        filterProducts(button.dataset.category);
    }
});

if (cartBtn) cartBtn.addEventListener('click', openMiniCart);
if (miniCartCloseBtn) miniCartCloseBtn.addEventListener('click', closeMiniCart);
if (miniCartBackdrop) miniCartBackdrop.addEventListener('click', closeMiniCart);

// =================== INIT ===================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(sampleProducts);
    updateCartIcon();

    // Khởi tạo nút back to top
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) backToTop.classList.add('show');
        else backToTop.classList.remove('show');
    });
    backToTop && backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Khởi tạo năm hiện tại ở footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.innerText = new Date().getFullYear();
});
document.addEventListener("DOMContentLoaded", () => {
  // render tất cả sản phẩm trước
  renderProducts(sampleProducts);

  // kiểm tra nếu URL có hash (vd: #bohoa, #giohoa...)
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    filterProducts(hash);

    // đánh dấu nút filter tương ứng active
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("active");
      if (btn.dataset.category === hash) {
        btn.classList.add("active");
      }
    });
  }
});
