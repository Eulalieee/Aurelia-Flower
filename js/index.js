// =================== BANNER SLIDER ===================
const slideWrapper = document.querySelector(".banner-slides");
const slides = document.querySelectorAll(".banner-slides img");
const prevBtn = document.querySelector(".banner-btn.prev");
const nextBtn = document.querySelector(".banner-btn.next");
const dots = document.querySelectorAll(".banner-dots .dot");

let current = 0;
const total = slides.length;
let slideInterval = setInterval(nextSlide, 4000);

function showSlide(index) {
  if (total === 0) return;
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;
  if (slideWrapper) {
    slideWrapper.style.transform = `translateX(-${index * 100}%)`;
  }
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
    dot.setAttribute("aria-selected", i === index ? "true" : "false");
  });
  current = index;
}
function nextSlide() { showSlide(current + 1); }
function prevSlide() { showSlide(current - 1); }
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
}

if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); resetInterval(); });
if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); resetInterval(); });
dots.forEach((dot, i) => dot.addEventListener("click", () => { showSlide(i); resetInterval(); }));
showSlide(0);

// =================== CART & MINI-CART ===================
const addCartButtons = document.querySelectorAll(".product-card .add-to-cart");

function findProductFromCard(card) {
  if (!card) return null;
  const id = Number(card.dataset.id || Date.now());
  const name = card.dataset.name || card.querySelector("h3")?.innerText || "Sản phẩm";
  let price = 0;
  if (card.dataset.price) {
    price = parseInt(card.dataset.price.replace(/[^\d]/g, ""), 10);
  }
  if (isNaN(price) || price <= 0) {
    const priceText = card.querySelector(".price")?.innerText || "0";
    price = parseInt(priceText.replace(/[^\d]/g, ""), 10);
  }
  if (isNaN(price)) price = 0;
  const img = card.dataset.img || (card.querySelector("img") ? card.querySelector("img").src : "");
  return { id, name, price, img };
}

addCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".product-card");
    const p = findProductFromCard(card);
    if (!p) return;
    let cart = getCart();
    const existing = cart.find((i) => i.id === p.id);
    if (existing) existing.qty += 1;
    else cart.push({ id: p.id, name: p.name, price: p.price, img: p.img, qty: 1 });

    saveCart(cart);
    showToast(`${p.name} đã được thêm vào giỏ hàng!`);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = dropdownToggle.parentElement;

  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault(); 
    dropdown.classList.toggle("open");
  });
});


// =================== SEARCH FUNCTION ===================
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const searchResults = document.getElementById("search-results");
const productCards = document.querySelectorAll(".product-card");

function filterProducts(keyword = "") {
  const key = keyword || (searchInput?.value.toLowerCase().trim() || "");
  productCards.forEach(card => {
    const name = card.querySelector("h3").innerText.toLowerCase();
    const price = card.querySelector(".price").innerText.toLowerCase();
    card.style.display = (name.includes(key) || price.includes(key)) ? "flex" : "none";
  });
}
function renderSuggestions(items, q) {
  searchResults.innerHTML = "";
  if (items.length === 0) {
    searchResults.innerHTML = "<div class='no-result'>Không tìm thấy sản phẩm</div>";
  } else {
    items.forEach(p => {
      const div = document.createElement("div");
      const regex = new RegExp(`(${escapeRegExp(q)})`, "ig");
      const highlighted = p.name.replace(regex, "<span class='highlight'>$1</span>");
      div.className = "item";
      div.innerHTML = `
        <img src="${p.img}">
        <div class="meta">${highlighted}</div>
        <div class="price">${formatCurrency(p.price)}</div>`;
      div.onclick = () => {
        filterProducts(p.name.toLowerCase());
        hideSuggestions();
        const card = [...productCards].find(c => Number(c.dataset.id) === p.id);
        if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      searchResults.appendChild(div);
    });
  }
  searchResults.classList.add("show");
}
function hideSuggestions() { searchResults.classList.remove("show"); searchResults.innerHTML = ""; }
function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

searchBtn && searchBtn.addEventListener("click", () => { filterProducts(); hideSuggestions(); });
searchInput && searchInput.addEventListener("keypress", e => { if (e.key === "Enter") { filterProducts(); hideSuggestions(); } });
searchInput && searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) { hideSuggestions(); return; }
  const data = [...productCards].map(findProductFromCard).filter(Boolean);
  const matches = data.filter(p => p.name.toLowerCase().includes(q) || p.price.toString().includes(q));
  renderSuggestions(matches.slice(0, 6), q);
});
document.addEventListener("click", e => { if (!e.target.closest(".search-wrapper")) hideSuggestions(); });

// =================== BACK TO TOP ===================
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) backToTop?.classList.add("show");
  else backToTop?.classList.remove("show");
});
backToTop && backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// =================== NAVBAR (hamburger) ===================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector("header nav .nav-links");
menuToggle && menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
navLinks && navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("active")));

// =================== TOOLTIP ICONS ===================
document.querySelectorAll('.icon-button').forEach(c => {
  const label = c.getAttribute("aria-label");
  if (label) {
    const tip = document.createElement("span");
    tip.className = "tooltip";
    tip.innerText = label;
    c.appendChild(tip);
  }
});

// =================== FOOTER YEAR ===================
const yearEl = document.getElementById("current-year");
yearEl && (yearEl.innerText = new Date().getFullYear());

document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const btn = document.querySelector(`.filter-btn[data-category="${hash}"]`);
    if (btn) {
      btn.click(); // Tự động bấm nút lọc
    }
  }
});
