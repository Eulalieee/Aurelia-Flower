const sampleProducts = [
  // Bó hoa
  { id: 1, name: "Bó hoa hồng đỏ", category: "bohoa", image: "../images/Bohoa/Hoa Hồng/Bó hoa hồng đỏ.jpg", price: "350.000₫" },
  { id: 2, name: "Bó hoa hồng vàng ", category: "bohoa", image: "../images/Bohoa/Hoa Hồng/Hoa hồng vàng.jpg", price: "300.000₫" },
  { id: 3, name: "Bó hoa hồng hồng", category: "bohoa", image: "../images/Bohoa/Hoa Hồng/Hồng hồng.jpg", price: "280.000₫" },
  { id: 4, name: "Bó hoa hồng xanh", category: "bohoa", image: "../images/Bohoa/Hoa Hồng/hồng xanh.jpg", price: "400.000₫" },
    
  { id: 1, name: "Bó hoa cẩm chướng 1", category: "bohoa", image: "../images/Bohoa/Cam_chuong/Mẫu cẩm chướng 2.jpg", price: "350.000₫" },
  { id: 2, name: "Bó hoa cẩm chướng 2", category: "bohoa", image: "../images/Bohoa/Cam_chuong/mẫu cẩm chướng 3.jpg", price: "300.000₫" },
  { id: 3, name: "Bó hoa cẩm chướng 3", category: "bohoa", image: "../images/Bohoa/Cam_chuong/Mẫu cẩm chướng 4.jpg", price: "280.000₫" },
  { id: 4, name: "Bó hoa cẩm chướng 4", category: "bohoa", image: "../images/Bohoa/Cam_chuong/Mẫu cẩm chướng mix tú cầu 1.jpg", price: "400.000₫" },

  { id: 1, name: "Bó hoa Tulip trắng phối cam", category: "bohoa", image: "../images/Bohoa/Hoa Tulip/Bó hoa tulip trắng phối cam.jpg", price: "350.000₫" },
  { id: 2, name: "Bó hoa Tulip hồng ", category: "bohoa", image: "../images/Bohoa/Hoa Tulip/Tulip hồng.jpg", price: "300.000₫" },
  { id: 3, name: "Bó hoa Tulip tím", category: "bohoa", image: "../images/Bohoa/Hoa Tulip/Tulip tím.jpg", price: "280.000₫" },
  { id: 4, name: "Bó hoa Tulip vàng", category: "bohoa", image: "../images/Bohoa/Hoa Tulip/Tulip vàng.jpg", price: "400.000₫" },

  { id: 1, name: "Hướng Dương mix hoa baby trắng", category: "bohoa", image: "../images/Bohoa/Hương Dương/Hoa Hướng Dương mix hoa baby trắng.jpg", price: "350.000₫" },
  { id: 2, name: "Hướng Dương mix lá xanh ", category: "bohoa", image: "../images/Bohoa/Hương Dương/Hoa hướng Dương mix lá xanh.jpg", price: "300.000₫" },
  { id: 3, name: "Hướng Dương cơ bản", category: "bohoa", image: "../images/Bohoa/Hương Dương/Mẫu 1 cành hoa hướng dương cơ bản 2.jpg", price: "280.000₫" },
  { id: 4, name: "Hướng dương mix hoa cúc trắng ", category: "bohoa", image:"../images/Bohoa/Hương Dương/Mẫu hoa hướng dương mix với  hoa cúc trắng 1.jpg", price: "400.000₫" },

  { id: 1, name: "Hoa mix 1", category: "bohoa", image: "../images/Bohoa/Hoa mix theo yêu cầu/Hoa mix 2.jpg", price: "350.000₫" },
  { id: 2, name: "Hoa mix 2 ", category: "bohoa", image: "../images/Bohoa/Hoa mix theo yêu cầu/mẫu mix 1.jpg", price: "300.000₫" },
  { id: 3, name: "Hoa mix 3", category: "bohoa", image: "../images/Bohoa/Hoa mix theo yêu cầu/mẫu mix 3.jpg", price: "280.000₫" },
  { id: 4, name: "Hoa mix 4", category: "bohoa", image: "../images/Bohoa/Hoa mix theo yêu cầu/mẫu mix 4.jpg", price: "400.000₫" },


  // Giỏ hoa
  { id: 5, name: "Giỏ hoa tròn 1", category: "giohoa", image: "../images/GioHoa/Giỏ hoa tròn 1.jpg", price: "500.000₫" },
  { id: 6, name: "Giỏ hoa tròn 2", category: "giohoa", image: "../images/GioHoa/Giỏ hoa tròn 2.jpg", price: "450.000₫" },
  { id: 7, name: "Giỏ hoa tròn 3", category: "giohoa", image: "../images/GioHoa/Gio hoa tròn 3.jpg", price: "420.000₫" },
  { id: 8, name: "Giỏ hoa tròn 4", category: "giohoa", image: "../images/GioHoa/Giỏ hoa tròn 4.jpg", price: "480.000₫" },

  { id: 5, name: "Giỏ hoa vuông 1", category: "giohoa", image: "../images/GioHoa/Giỏ hoa vuông 1.jpg", price: "500.000₫" },
  { id: 6, name: "Giỏ hoa vuông 2", category: "giohoa", image: "../images/GioHoa/Gio hoa vuông 2.jpg", price: "450.000₫" },
  { id: 7, name: "Giỏ hoa vuông 3", category: "giohoa", image: "../images/GioHoa/Giỏ hoa vuông 3.jpg", price: "420.000₫" },
  { id: 8, name: "Giỏ hoa vuông 4", category: "giohoa", image: "../images/GioHoa/Giỏ hoa vuông 4.jpg", price: "480.000₫" },
  { id: 5, name: "Giỏ hoa vuông 5", category: "giohoa", image: "../images/GioHoa/Gio hoa 5.jpg", price: "350.000₫" },
  { id: 6, name: "Giỏ hoa vuông 6", category: "giohoa", image: "../images/GioHoa/Gio hoa 6.jpg", price: "550.000₫" },

  // Hoa chúc mừng
  { id: 9,  name: "Hoa khai trương 1", category: "chucmung", image: "../images/HoaChucMung/Khai trương/Hoa khai trương khung dài tone cam.jpg", price: "600.000₫" },
  { id: 10, name: "Hoa khai trương 2", category: "chucmung", image: "../images/HoaChucMung/Khai trương/Hoa khai trương khung dài tone tím dịu.jpg", price: "550.000₫" },
  { id: 11, name: "Hoa khai trương 3", category: "chucmung", image: "../images/HoaChucMung/Khai trương/Hoa khai trương khung dài tone xanh dương.jpg", price: "500.000₫" },
  { id: 12, name: "Hoa khai trương 4", category: "chucmung", image: "../images/HoaChucMung/Khai trương/Hoa khai trương khung dài tone xanh.jpg", price: "650.000₫" },

  { id: 9,  name: "Hoa Sinh Nhật 1", category: "chucmung", image: "../images/HoaChucMung/Sinh Nhật ( mix theeo yêu cầu )/mẫu 1.jpg", price: "600.000₫" },
  { id: 10, name: "Hoa Sinh Nhật 2", category: "chucmung", image: "../images/HoaChucMung/Sinh Nhật ( mix theeo yêu cầu )/mẫu 2.jpg", price: "550.000₫" },
  { id: 11, name: "Hoa Sinh Nhật 3", category: "chucmung", image: "../images/HoaChucMung/Sinh Nhật ( mix theeo yêu cầu )/mẫu 3.jpg", price: "500.000₫" },
  { id: 12, name: "Hoa Sinh Nhật 4", category: "chucmung", image: "../images/HoaChucMung/Sinh Nhật ( mix theeo yêu cầu )/mẫu 4.jpg", price: "650.000₫" },

  { id: 9,  name: "Hoa Tốt Nghiệp 1", category: "chucmung", image: "../images/HoaChucMung/Tốt Nghiệp/Mẫu có bóng tròn cho nam 1.jpg", price: "600.000₫" },
  { id: 10, name: "Hoa Tốt Nghiệp 2", category: "chucmung", image: "../images/HoaChucMung/Tốt Nghiệp/Mẫu có bóng tròn cho nữ 2.jpg", price: "550.000₫" },
  { id: 11, name: "Hoa Tốt Nghiệp 3", category: "chucmung", image: "../images/HoaChucMung/Tốt Nghiệp/Mẫu hương dương đơn giản 1.jpg", price: "500.000₫" },
  { id: 12, name: "Hoa Tốt Nghiệp 4", category: "chucmung", image: "../images/HoaChucMung/Tốt Nghiệp/Mẫu gấu không hoa cơ bản (được chọn màu ).jpg", price: "650.000₫" },
    
  { id: 9,  name: "Hoa Cưới tone trắng 1", category: "chucmung", image: "../images/HoaChucMung/Hoa Cưới/hoa cưới tone trắng ( Hoa Baby).jpg", price: "600.000₫" },
  { id: 10, name: "Hoa Cưới tone trắng 2", category: "chucmung", image: "../images/HoaChucMung/Hoa Cưới/hoa cưới tone trắng ( hoa hồng ).jpg", price: "550.000₫" },
  { id: 11, name: "Hoa Cưới tone trắng 3", category: "chucmung", image: "../images/HoaChucMung/Hoa Cưới/hoa cưới tone trắng ( Hoa LiLy).jpg", price: "500.000₫" },
  { id: 12, name: "Hoa Cưới tone trắng 4", category: "chucmung", image: "../images/HoaChucMung/Hoa Cưới/hoa cưới tone trắng ( Hoa Mẫu Đơn).jpg", price: "650.000₫" },

  { id: 9,  name: "Hoa Cưới tone đỏ 1", category: "chucmung", image: "../images/HoaChucMung/Hoa Cưới/tone đỏ ( Hoa hồng + hoa chú rễ ).jpg", price: "600.000₫" },
  { id: 10, name: "Hoa Cưới tone đỏ 2", category: "chucmung", image: "../images/HoaChucMung/Hoa Cưới/tone đỏ ( Hoa loa kèn + hoa chú rễ ).jpg", price: "550.000₫" },
  { id: 11, name: "Hoa Cưới tone đỏ 3", category: "chucmung", image: "../images/HoaChucMung/Hoa Cưới/tone đỏ ( Hoa tulip mix + hoa chú rễ ).jpg", price: "500.000₫" },
  { id: 12, name: "Hoa Cưới tone đỏ 4", category: "chucmung", image: "../images/HoaChucMung/Hoa Cưới/tone đỏ ( Mix nhiều loại + có kèm hoa chú rễ theo yêu cầu ).jpg", price: "650.000₫" },


  // Hoa tang
  { id: 13, name: "Hoa tang mẫu tròn 1", category: "hoatang", image: "../images/Hoatang/Hoa tang mẫu tròn 1.jpg", price: "700.000₫" },
  { id: 14, name: "Hoa tang mẫu tròn 2", category: "hoatang", image: "../images/Hoatang/Hoa tang mẫu tròn 2.jpg", price: "680.000₫" },
  { id: 15, name: "Hoa tang mẫu tròn 3", category: "hoatang", image: "../images/Hoatang/Hoa tang mẫu tròn 3.jpg", price: "720.000₫" },
  { id: 16, name: "Hoa tang mẫu tròn 4", category: "hoatang", image: "../images/Hoatang/Hoa tang mẫu tròn 4.jpg", price: "650.000₫" },
  { id: 13, name: "Hoa tang mẫu tròn 5", category: "hoatang", image: "../images/Hoa Tang/Hoa tang mẫu tròn 5.jpg", price: "700.000₫" },
   
  { id: 13, name: "Hoa tang mẫu đứng 1", category: "hoatang", image: "../images/Hoatang/Hoa viếng mẫu đứng 1.jpg", price: "700.000₫" },
  { id: 14, name: "Hoa tang mẫu đứng 2", category: "hoatang", image: "../images/Hoatang/Hoa viếng mẫu đứng 2.jpg", price: "680.000₫" },
  { id: 15, name: "Hoa tang mẫu đứng 3", category: "hoatang", image: "../images/Hoatang/Hoa viếng mẫu đứng 3.jpg", price: "720.000₫" },
  { id: 16, name: "Hoa tang mẫu đứng 4", category: "hoatang", image: "../images/Hoa Tang/Hoa tang mẫu vuông 4.jpg", price: "650.000₫" },
  { id: 13, name: "Hoa tang mẫu đứng 5", category: "hoatang", image: "../images/Hoa Tang/Hoa tang mẫu vuông 5.jpg", price: "700.000₫" },

  
];



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


const cartBtn = document.getElementById('cart-link'); 
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


document.addEventListener('click', (e) => {
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
        renderMiniCart();
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 500);
        showToast(`${product.name} đã được thêm vào giỏ hàng!`);
        openMiniCart();
    }

   
    if (e.target.closest('.filter-btn')) {
        const button = e.target.closest('.filter-btn');
        filterProducts(button.dataset.category);

        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }
});

if (cartBtn) cartBtn.addEventListener('click', openMiniCart);
if (miniCartCloseBtn) miniCartCloseBtn.addEventListener('click', closeMiniCart);
if (miniCartBackdrop) miniCartBackdrop.addEventListener('click', closeMiniCart);

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(sampleProducts);
    updateCartIcon();

 
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) backToTop.classList.add('show');
        else backToTop.classList.remove('show');
    });
    backToTop && backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

 
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.innerText = new Date().getFullYear();
});
document.addEventListener("DOMContentLoaded", () => {

  renderProducts(sampleProducts);


  const hash = window.location.hash.replace("#", "");
  if (hash) {
    filterProducts(hash);

  
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("active");
      if (btn.dataset.category === hash) {
        btn.classList.add("active");
      }
    });
  }
});
