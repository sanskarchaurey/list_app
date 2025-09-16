/* ===== demo products ===== */
const sampleProducts = [
    { id: 1, name: "1 AL 5 TAB 10TAB", manufacturer: "FDC", schedule: "5+1", mrp: 34.65, stock: 666, price: 24.76 },
    { id: 2, name: "1 AL M SYP 60ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 90.75, stock: 18, price: 64.82 },
    { id: 3, name: "1 AL M TAB 10TAB", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 110.00, stock: 16, price: 87.91 },
    { id: 4, name: "1 AL SYP 30ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 48.20, stock: 273, price: 33.00 },
    { id: 5, name: "2B12 TAB 15TAB", manufacturer: "PREMIER NUTRACEUTICAL", schedule: "10+1", mrp: 315.00, stock: 30, price: 225.01 },
    { id: 1, name: "1 BL 5 TAB 10TAB", manufacturer: "FDC", schedule: "5+1", mrp: 34.65, stock: 666, price: 24.76 },
    { id: 2, name: "1 BL M SYP 60ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 90.75, stock: 18, price: 64.82 },
    { id: 3, name: "1 BL M TAB 10TAB", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 110.00, stock: 16, price: 87.91 },
    { id: 4, name: "1 BL SYP 30ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 48.20, stock: 273, price: 33.00 },
    { id: 5, name: "2B12 TAB 15TAB", manufacturer: "PREMIER NUTRACEUTICAL", schedule: "10+1", mrp: 315.00, stock: 30, price: 225.01 },
    { id: 6, name: "1 ZL 5 TAB 10TAB", manufacturer: "FDC", schedule: "5+1", mrp: 34.65, stock: 666, price: 24.76 },
    { id: 7, name: "1 YL M SYP 60ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 90.75, stock: 18, price: 64.82 },
    { id: 8, name: "1 XL M TAB 10TAB", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 110.00, stock: 16, price: 87.91 },
    { id: 9, name: "1 WzL SYP 30ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 48.20, stock: 273, price: 33.00 },
    { id: 10, name: "2U12 TAB 15TAB", manufacturer: "PREMIER NUTRACEUTICAL", schedule: "10+1", mrp: 315.00, stock: 30, price: 225.01 },
    { id: 11, name: "1 UL 5 TAB 10TAB", manufacturer: "FDC", schedule: "5+1", mrp: 34.65, stock: 666, price: 24.76 },
    { id: 12, name: "1 VL M SYP 60ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 90.75, stock: 18, price: 64.82 },
    { id: 13, name: "1 CL M TAB 10TAB", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 110.00, stock: 16, price: 87.91 },
    { id: 14, name: "1 DL SYP 30ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 48.20, stock: 273, price: 33.00 },
    { id: 15, name: "2T12 TAB 15TAB", manufacturer: "PREMIER NUTRACEUTICAL", schedule: "10+1", mrp: 315.00, stock: 30, price: 225.01 },
    { id: 16, name: "1 EL 5 TAB 10TAB", manufacturer: "FDC", schedule: "5+1", mrp: 34.65, stock: 666, price: 24.76 },
    { id: 17, name: "1 FL M SYP 60ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 90.75, stock: 18, price: 64.82 },
    { id: 18, name: "1 GL M TAB 10TAB", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 110.00, stock: 16, price: 87.91 },
    { id: 19, name: "1 HL SYP 30ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 48.20, stock: 273, price: 33.00 },
    { id: 20, name: "2S12 TAB 15TAB", manufacturer: "PREMIER NUTRACEUTICAL", schedule: "10+1", mrp: 315.00, stock: 30, price: 225.01 },
    { id: 21, name: "1 IL 5 TAB 10TAB", manufacturer: "FDC", schedule: "5+1", mrp: 34.65, stock: 666, price: 24.76 },
    { id: 22, name: "1 JL M SYP 60ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 90.75, stock: 18, price: 64.82 },
    { id: 23, name: "1 kL M TAB 10TAB", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 110.00, stock: 16, price: 87.91 },
    { id: 24, name: "1 L SYP 30ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 48.20, stock: 273, price: 33.00 },
    { id: 25, name: "2Q12 TAB 15TAB", manufacturer: "PREMIER NUTRACEUTICAL", schedule: "10+1", mrp: 315.00, stock: 30, price: 225.01 },
    { id: 26, name: "1 ML 5 TAB 10TAB", manufacturer: "FDC", schedule: "5+1", mrp: 34.65, stock: 666, price: 24.76 },
    { id: 27, name: "1 NL M SYP 60ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 90.75, stock: 18, price: 64.82 },
    { id: 28, name: "1 OL M TAB 10TAB", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 110.00, stock: 16, price: 87.91 },
    { id: 29, name: "1 PL SYP 30ML", manufacturer: "FDC", schedule: "2.75+0.25", mrp: 48.20, stock: 273, price: 33.00 },
    { id: 30, name: "2R12 TAB 15TAB", manufacturer: "PREMIER NUTRACEUTICAL", schedule: "10+1", mrp: 315.00, stock: 30, price: 225.01 }


];

const productListEl = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const cartStatusText = document.getElementById('cartText');
const cartIcon = document.getElementById('cartIcon');
const bottomCartCount = document.getElementById('bottomCartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const openCartBtn = document.getElementById('openCartBtn');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const sendBtn = document.getElementById('sendBtn');

let cart = [];

/* Render product cards */
function renderProducts(products) {
    productListEl.innerHTML = '';
    products.forEach(p => {
        const node = document.createElement('div');
        node.className = 'product';
        node.innerHTML = `
      <div class="icon"><img src="assets/icon.jpg" alt="med"></div>
      <div class="meta">
        <h4>${p.name}</h4>
        <small>${p.manufacturer}</small>
        <div class="badges">
          <div class="badge">Sch: ${p.schedule}</div>
          <div class="badge">MRP: ₹${p.mrp.toFixed(2)}</div>
          <div class="badge">Stk: ${p.stock}</div>
        </div>
      </div>
      <div class="price-col">
        <p>INR ${p.price.toFixed(2)}</p>
        <button class="add-btn" data-id="${p.id}" title="Add to Cart">
          <img src="/assets/expand1.jpg" alt="add">
        </button>
      </div>
    `;
        productListEl.appendChild(node);
    });

    // bind add buttons
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = +btn.dataset.id;
            const prod = sampleProducts.find(x => x.id === id);
            addToCart(prod);
        });
    });
}

/* CART functions */
function addToCart(product) {
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
}
function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}
function updateCartUI() {
    if (cart.length === 0) {
        cartIcon.src = 'assets/empty_cart.jpg';
        cartStatusText.innerText = 'Your cart is empty';
        bottomCartCount.innerText = '0';
    } else {
        const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
        cartIcon.src = 'assets/icon.jpg';
        cartStatusText.innerText = `${cart.reduce((a, b) => a + b.qty, 0)} items | ₹${total.toFixed(2)}`;
        bottomCartCount.innerText = `${cart.reduce((a, b) => a + b.qty, 0)}`;
    }

    cartItemsEl.innerHTML = '';
    cart.forEach(item => {
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
      <div class="left">
        <img src="assets/icon.jpg" alt="i">
        <div class="meta">
          <div>${item.name}</div>
          <small>₹${item.price.toFixed(2)} x ${item.qty}</small>
        </div>
      </div>
      <div>
        <div style="text-align:right">
          <div>₹${(item.price * item.qty).toFixed(2)}</div>
          <button data-id="${item.id}" class="btn outline remove" style="margin-top:6px">Remove</button>
        </div>
      </div>
    `;
        cartItemsEl.appendChild(el);
    });

    document.querySelectorAll('.remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = +btn.dataset.id;
            removeFromCart(id);
        });
    });

    const qty = cart.reduce((a, b) => a + b.qty, 0);
    const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    cartCountEl.innerText = `${qty} item${qty === 1 ? '' : 's'}`;
    cartTotalEl.innerText = `₹${total.toFixed(2)}`;
}

/* Search (live) */
searchInput.addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    const filtered = sampleProducts.filter(p => {
        return p.name.toLowerCase().includes(q) || p.manufacturer.toLowerCase().includes(q) || String(p.schedule).includes(q);
    });
    renderProducts(filtered);
});

/* Filter button (placeholder) */
filterBtn.addEventListener('click', () => {
    alert('Filter panel would open here (demo).');
});

/* cart sidebar toggles */
openCartBtn.addEventListener('click', () => cartSidebar.classList.toggle('hidden'));
closeCart.addEventListener('click', () => cartSidebar.classList.add('hidden'));

/* send/checkout */
checkoutBtn.addEventListener('click', sendOrder);
sendBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        cartSidebar.classList.toggle('hidden');
    } else {
        sendOrder();
    }
});

/* send order — create WhatsApp message (demo) */
function sendOrder() {
    const business = document.getElementById('businessName').value.trim();
    const contact = document.getElementById('contactNumber').value.trim();
    if (!business || !contact) {
        alert('Fill Business Name & Contact Number in Your Details before sending.');
        return;
    }
    if (cart.length === 0) {
        alert('Cart is empty.');
        return;
    }

    let msg = `Order from ${business}%0AContact: ${contact}%0A%0AItems:%0A`;
    cart.forEach((it, idx) => {
        msg += `${idx + 1}. ${encodeURIComponent(it.name)} - ${it.qty} x ₹${it.price.toFixed(2)} = ₹${(it.qty * it.price).toFixed(2)}%0A`;
    });
    const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    msg += `%0ATotal: ₹${total.toFixed(2)}`;

    // open WhatsApp (this uses demo number — replace with supplier number)
    const waNumber = '91919993671716';
    const waUrl = `https://wa.me/${waNumber}?text=${msg}`;
    window.open(waUrl, '_blank');

    // optionally clear cart after send
    // cart = []; updateCartUI();
}

/* menu behaviour */
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', () => sideMenu.classList.toggle('hidden'));
closeMenu.addEventListener('click', () => sideMenu.classList.add('hidden'));

/* quick icon actions */
document.getElementById('phoneBtn').addEventListener('click', () => {
    window.location.href = 'tel:+91919993671716';
});
document.getElementById('waBtn').addEventListener('click', () => {
    window.open('https://wa.me/91919993671716', '_blank');
});
document.getElementById('shareBtn').addEventListener('click', () => {
    alert('Share action (placeholder).');
});

/* Right panel edit/save */
const editBtn = document.getElementById('editDetails');
const saveBtn = document.getElementById('saveDetails');
const inputs = Array.from(document.querySelectorAll('#detailsForm input'));

editBtn.addEventListener('click', () => {
    inputs.forEach(i => i.disabled = false);
    saveBtn.disabled = false;
    editBtn.disabled = true;
});
saveBtn.addEventListener('click', () => {
    const business = document.getElementById('businessName').value.trim();
    const contact = document.getElementById('contactNumber').value.trim();
    if (!business || !contact) {
        alert('Please fill Business Name and Contact Number.');
        return;
    }
    inputs.forEach(i => i.disabled = true);
    saveBtn.disabled = true;
    editBtn.disabled = false;
    alert('Details saved (in-memory).');
});

/* initial render */
renderProducts(sampleProducts);
updateCartUI();
