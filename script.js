// 1. БАЗА ДАННЫХ ТОВАРОВ (19 ШТУК)
const products = [
    // --- ПАПКА 2 (images_sait) - С ценами ---
    { 
        id: 1, 
        name: "Mounjaro KwikPen 2.5мг", 
        price: 45000, 
        image: "images/mounjaro-2.5mg.webp", 
        brand: "Eli Lilly",
        shortDesc: "1 ручка • 4 введения",
        description: "Мунджаро (тирзепатид) — препарат для снижения веса и контроля гликемии. Форма выпуска: шприц‑ручка KwikPen 2.5мг, 4 введения.",
        specs: ["Оригинальная упаковка, заводская пломба", "Поддержка менеджера по применению", "Доставка по Москве и РФ"]
    },
    { 
        id: 2, 
        name: "Mounjaro KwikPen 5мг", 
        price: 45000, 
        image: "images/mounjaro-5mg.webp", 
        brand: "Eli Lilly",
        shortDesc: "1 ручка • 4 введения",
        description: "Мунджаро (тирзепатид) — препарат для снижения веса и контроля гликемии. Форма выпуска: шприц‑ручка KwikPen 5мг, 4 введения.",
        specs: ["Оригинальная упаковка, заводская пломба", "Поддержка менеджера по применению", "Доставка по Москве и РФ"]
    },
    { 
        id: 3, 
        name: "Mounjaro KwikPen 7.5мг", 
        price: 45000, 
        image: "images/mounjaro-7.5mg.webp", 
        brand: "Eli Lilly",
        shortDesc: "1 ручка • 4 введения",
        description: "Мунджаро (тирзепатид) — препарат для снижения веса и контроля гликемии. Форма выпуска: шприц‑ручка KwikPen 7.5мг, 4 введения.",
        specs: ["Оригинальная упаковка, заводская пломба", "Поддержка менеджера по применению", "Доставка по Москве и РФ"]
    },
    { 
        id: 4, 
        name: "Mounjaro KwikPen 10мг", 
        price: 45000, 
        image: "images/mounjaro-10mg.webp", 
        brand: "Eli Lilly",
        shortDesc: "1 ручка • 4 введения",
        description: "Мунджаро (тирзепатид) — препарат для снижения веса и контроля гликемии. Форма выпуска: шприц‑ручка KwikPen 10мг, 4 введения.",
        specs: ["Оригинальная упаковка, заводская пломба", "Поддержка менеджера по применению", "Доставка по Москве и РФ"]
    },
    { 
        id: 5, 
        name: "Mounjaro KwikPen 12.5мг", 
        price: 48000, 
        image: "images/mounjaro-12.5mg.webp", 
        brand: "Eli Lilly",
        shortDesc: "1 ручка • 4 введения",
        description: "Мунджаро (тирзепатид) — препарат для снижения веса и контроля гликемии. Форма выпуска: шприц‑ручка KwikPen 12.5мг, 4 введения.",
        specs: ["Оригинальная упаковка, заводская пломба", "Поддержка менеджера по применению", "Доставка по Москве и РФ"]
    },
    { 
        id: 6, 
        name: "Mounjaro KwikPen 15мг", 
        price: 50000, 
        image: "images/mounjaro-15mg.webp", 
        brand: "Eli Lilly",
        shortDesc: "1 ручка • 4 введения",
        description: "Мунджаро (тирзепатид) — препарат для снижения веса и контроля гликемии. Форма выпуска: шприц‑ручка KwikPen 15мг, 4 введения.",
        specs: ["Оригинальная упаковка, заводская пломба", "Поддержка менеджера по применению", "Доставка по Москве и РФ"]
    },
    { 
        id: 7, 
        name: "Ozempic 1мг", 
        price: 19000, 
        image: "images/ozempic-1mg.webp", 
        brand: "Novo Nordisk",
        shortDesc: "1 ручка • 4 введения",
        description: "Оземпик (Ozempic, семаглутид) — современный препарат для лечения сахарного диабета 2 типа и контроля веса. Применяется 1 раз в неделю в виде инъекций.",
        specs: ["Оригинальная упаковка, заводская пломба", "Поддержка менеджера по применению", "Доставка по Москве и РФ"]
    },
    { 
        id: 8, 
        name: "NAD+ 1200мг", 
        price: 55000, 
        image: "images/nad-1200mg.webp", 
        brand: "BioMedika",
        shortDesc: "1 ручка • 1 введение",
        description: "Никотинамид аденин динуклеотид (НАД) — кофермент, который играет ключевую роль в метаболизме и энергетическом обмене клеток.",
        specs: ["Действующее вещество: НАД", "Дозировка: 1200 мг", "Доставка по Москве и РФ"]
    },
    { 
        id: 9, 
        name: "Immunorho Kedrion 300мкг", 
        price: 18000, 
        image: "images/immunorho-300mcg.webp", 
        brand: "Kedrion",
        shortDesc: "1 флакон • 1 введение",
        description: "Иммуноглобулин человека антирезус Rho(D). Лиофилизат для приготовления раствора для внутримышечного введения, 300 мкг.",
        specs: ["Компания производитель: Кедрион", "Оригинальная упаковка, заводская пломба", "Доставка по Москве и РФ"]
    },

    // --- ПАПКА 1 (images) - БЕЗ ЦЕН (Поставил 0, нужно поправить) ---
    { 
        id: 10, 
        name: "Mounjaro (Тирзепатид) 15 mg", 
        price: 50000, // Укажи цену
        image: "images/mounjaro-15mg.jpg", 
        brand: "Eli Lilly",
        shortDesc: "15 мг • 1 раз в неделю",
        description: "Раствор для подкожного введения в предварительно заполненной ручке. Препарат для подкожного применения, содержащий тирзепатид.",
        specs: ["Дозировка: 15 мг", "Форма: готовая инъекционная ручка", "Частота применения: 1 раз в неделю"]
    },
    { 
        id: 11, 
        name: "Ozempic (Семаглутид) 1 mg", 
        price: 54000, // Укажи цену
        image: "images/ozempic-1mg.jpg", 
        brand: "Novo Nordisk",
        shortDesc: "1 мг • 1 раз в неделю",
        description: "Раствор для подкожного введения в шприц-ручке. Препарат для инъекций, содержащий семаглутид.",
        specs: ["Дозировка: 1 мг", "Форма: шприц-ручка", "Производитель: Novo Nordisk"]
    },
    { 
        id: 12, 
        name: "MOTS-C Peptide Pen", 
        price: 20000, // Укажи цену
        image: "images/mots-c-pen.jpg", 
        brand: "Peptide",
        shortDesc: "Картридж + автоинжектор",
        description: "Пептидный препарат в виде картриджа, устанавливаемого в удобную ручку-инжектор.",
        specs: ["Формат: картридж + многоразовая ручка", "Подкожное введение", "Механизм автоматизированной подачи"]
    },
    { 
        id: 13, 
        name: "Xeloda (Капецитабин) 500 mg", 
        price: 30000, // Укажи цену
        image: "images/xeloda-500mg.jpg", 
        brand: "Roche",
        shortDesc: "Таблетки 500 мг",
        description: "Таблетки, содержащие капецитабин, в дозировке 500 мг. Упаковка блистерного типа.",
        specs: ["Дозировка: 500 мг в таблетке", "Форма: таблетки", "Международное название: Capecitabine"]
    },
    { 
        id: 14, 
        name: "Saxenda (Лираглутид) 6 mg/ml", 
        price: 18000, // Укажи цену
        image: "images/saxenda-6mgml.jpg", 
        brand: "Novo Nordisk",
        shortDesc: "Раствор для инъекций",
        description: "Шприц-ручки, содержащие раствор лираглутида для подкожных инъекций. Подходит для ежедневного применения.",
        specs: ["Концентрация: 6 mg/ml", "Формат: 3 шприц-ручки в упаковке", "Дозировка: от 0.6 до 3.0 mg"]
    },
    { 
        id: 15, 
        name: "ImmunoRho 300 mcg", 
        price: 18000, // Укажи цену
        image: "images/immuno-rho-300mcg.jpg", 
        brand: "Kedrion Biopharma",
        shortDesc: "Порошок + растворитель",
        description: "Иммуноглобулин человека Anti-D для приготовления раствора. В комплекте флакон с порошком 300 mcg и ампула растворителя.",
        specs: ["Дозировка: 300 mcg", "Форма: порошок + растворитель", "Вводится после приготовления"]
    },
    { 
        id: 16, 
        name: "Pegasys 180 mcg / 0.5 ml", 
        price: 140000, // Укажи цену
        image: "images/pegasys-180mcg.jpg", 
        brand: "Roche",
        shortDesc: "Готовый раствор в шприцах",
        description: "Препарат пегинтерферона альфа-2а для подкожного введения. Упаковка включает 4 шприца и 4 иглы.",
        specs: ["Дозировка: 180 mcg на 0.5 ml", "Форма: готовые шприцы", "Комплект: 4 шприца + 4 иглы"]
    },
    { 
        id: 17, 
        name: "Tagrisso (Осимертиниб) 80 mg", 
        price: 200000, // Укажи цену
        image: "images/tagrisso-80mg.jpg", 
        brand: "AstraZeneca",
        shortDesc: "30 таблеток",
        description: "Таблетки, покрытые пленочной оболочкой, содержащие осимертиниб 80 mg. Упаковка на 30 таблеток.",
        specs: ["Дозировка: 80 mg", "Форма: таблетки", "Количество: 30 штук"]
    },
    { 
        id: 18, 
        name: "Линпарза (Олапариб) 150 мг", 
        price: 50000, // Укажи цену
        image: "images/lynparza-150mg.jpg", 
        brand: "AstraZeneca",
        shortDesc: "56 таблеток",
        description: "Препарат в форме таблеток, покрытых плёночной оболочкой, содержащий олапариб 150 mg.",
        specs: ["Дозировка: 150 mg", "Форма: таблетки", "Количество: 56 шт"]
    },
    { 
        id: 19, 
        name: "Чампикс (Варениклин) 1 мг", 
        price: 14000, // Укажи цену
        image: "images/champix-1mg.jpg", 
        brand: "Pfizer",
        shortDesc: "112 таблеток",
        description: "Таблетированная форма с действующим веществом варениклин, предназначенная для терапии никотиновой зависимости.",
        specs: ["Дозировка: 1 mg", "Форма: таблетки", "Количество: 112 шт"]
    },
    { 
        id: 20, 
        name: "Оземпик 0.25мг (1 ручка)", 
        price: 18000, 
        image: "images/Оземпик_0.25мг(1шт).jpg", 
        brand: "Novo Nordisk",
        shortDesc: "1 шприц-ручка",
        description: "Оземпик (Семаглутид) 0.25 мг. Раствор для подкожного введения.",
        specs: ["Дозировка: 0.25 мг", "Упаковка: 1 ручка"]
    },
    { 
        id: 21, 
        name: "Оземпик 0.5мг (1 ручка)", 
        price: 18000, 
        image: "images/Оземпик_0.5мг(1шт).jpg", 
        brand: "Novo Nordisk",
        shortDesc: "1 шприц-ручка",
        description: "Оземпик (Семаглутид) 0.5 мг. Раствор для подкожного введения.",
        specs: ["Дозировка: 0.5 мг", "Упаковка: 1 ручка"]
    },
    { 
        id: 22, 
        name: "Оземпик 1мг (3 ручки)", 
        price: 54000, 
        image: "images/Оземпик_1мг(3шт).jpg", 
        brand: "Novo Nordisk",
        shortDesc: "Упаковка 3 ручки",
        description: "Оземпик (Семаглутид) 1 мг. Выгодная упаковка (3 шприц-ручки).",
        specs: ["Дозировка: 1 мг", "Упаковка: 3 ручки"]
    },
    { 
        id: 23, 
        name: "Саксенда (5 ручек)", 
        price: 22000, 
        image: "images/Саксенда(5шт).jpg", 
        brand: "Novo Nordisk",
        shortDesc: "Упаковка №5",
        description: "Саксенда (Лираглутид). Раствор для подкожных инъекций. В упаковке 5 шприц-ручек.",
        specs: ["Количество: 5 шт", "Производитель: Novo Nordisk"]
    },
    { 
        id: 24, 
        name: "Пегасис 135мкг (1 шт)", 
        price: 40000, 
        image: "images/Пегасис(135мг).jpg",
        brand: "Roche",
        shortDesc: "1 шприц-тюбик",
        description: "Пегинтерферон альфа-2а. Дозировка 135 мкг.",
        specs: ["Дозировка: 135 мкг", "Упаковка: 1 шт"]
    },
    { 
        id: 25, 
        name: "Пегасис 180мкг (4 шт)", 
        price: 140000, 
        image: "images/Пегасис_180мг(4шт).webp", 
        brand: "Roche",
        shortDesc: "Упаковка №4",
        description: "Пегинтерферон альфа-2а. Выгодная упаковка, 4 шприца.",
        specs: ["Дозировка: 180 мкг", "Упаковка: 4 шт"]
    }
];

// 2. Загружаем данные из памяти
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// --- ГЕНЕРАЦИЯ ОКНА ГОРОДОВ ---
function injectCityModal() {
    if (document.getElementById('city-modal')) return;
    const modalHTML = `
    <div id="city-modal" class="modal-overlay">
        <div class="modal-content">
            <div class="modal-header"><h3>Выберите ваш город</h3><span class="close-modal" onclick="closeCityModal()">×</span></div>
            <div class="modal-search-wrapper"><input type="text" id="city-search-input" placeholder="Поиск города..." onkeyup="filterCities()"></div>
            <ul class="city-list" id="city-list">
                <li onclick="selectCity('Москва и область')">Москва и область</li>
                <li onclick="selectCity('Санкт-Петербург')">Санкт-Петербург</li>
                <li onclick="selectCity('Краснодар')">Краснодар</li>
                <li onclick="selectCity('Сочи')">Сочи</li>
                <li onclick="selectCity('Казань')">Казань</li>
                <li onclick="selectCity('Екатеринбург')">Екатеринбург</li>
                <li onclick="selectCity('Новосибирск')">Новосибирск</li>
                <li onclick="selectCity('Челябинск')">Челябинск</li>
                <li onclick="selectCity('Омск')">Омск</li>
                <li onclick="selectCity('Ростов-на-Дону')">Ростов-на-Дону</li>
                <li onclick="selectCity('Уфа')">Уфа</li>
                <li onclick="selectCity('Волгоград')">Волгоград</li>
                <li onclick="selectCity('Пермь')">Пермь</li>
                <li onclick="selectCity('Воронеж')">Воронеж</li>
                <li onclick="selectCity('Саратов')">Саратов</li>
            </ul>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// --- ФУНКЦИИ КОРЗИНЫ ---
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(id) {
    const product = products.find(p => p.id == id);
    const existingItem = cart.find(item => item.id == id);
    if (existingItem) { existingItem.count++; } else { cart.push({ ...product, count: 1 }); }
    saveCart();
    console.log("Добавлено в корзину");
}

function changeCount(id, change) {
    const item = cart.find(item => item.id == id);
    if (item) {
        item.count += change;
        if (item.count < 1) item.count = 1;
        saveCart();
        renderCart();
    }
}

function removeItem(id) {
    cart = cart.filter(item => item.id != id);
    saveCart();
    renderCart();
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;
    const totalCount = cart.reduce((sum, item) => sum + item.count, 0);
    if (totalCount > 0) { badge.style.display = 'flex'; badge.innerText = totalCount; } 
    else { badge.style.display = 'none'; }
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const summaryBlock = document.getElementById('cart-summary');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-message" style="text-align:center; padding:40px;">Ваша корзина пуста 😢</div>';
        summaryBlock.style.display = 'none';
        return;
    }
    summaryBlock.style.display = 'block';
    let html = '';
    let totalPrice = 0;
    let totalItems = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.count;
        totalPrice += itemTotal;
        totalItems += item.count;
        html += `
        <div class="cart-item">
            <img src="${item.image}" class="cart-img" alt="${item.name}">
            <div class="cart-info">
                <div class="cart-price">${item.price.toLocaleString()} ₽</div>
                <div class="cart-title">${item.name}</div>
                <div class="cart-brand">${item.brand}</div>
                <div class="cart-controls">
                    <div class="counter-btn" onclick="changeCount(${item.id}, -1)">-</div>
                    <div class="counter-value">${item.count}</div>
                    <div class="counter-btn" onclick="changeCount(${item.id}, 1)">+</div>
                    <div class="delete-btn" onclick="removeItem(${item.id})">🗑️</div>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
    document.getElementById('total-price').innerText = totalPrice.toLocaleString() + ' ₽';
    document.getElementById('total-count').innerText = totalItems;
}
console.log("initDataUnsafe", window.Telegram?.WebApp?.initDataUnsafe);
console.log("user", window.Telegram?.WebApp?.initDataUnsafe?.user);

async function goToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.length) return;

    try {
        // Получаем данные пользователя Telegram
        const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
        
        // Опционально: если тестируете в браузере (не в Телеграм), закомментируйте эту строку
        if (!user) throw new Error('Открывайте сайт через Telegram');

        // Получаем город и убираем символ ⌄
        const cityElement = document.querySelector('.city-selector');
        let city = cityElement ? cityElement.textContent.trim() : 'Москва и область';
        city = city.replace(/\s*⌄\s*$/, '').trim();

        // Подсчёт суммы
        const total = cart.reduce((sum, item) => sum + (item.price * item.count), 0);

        const orderData = {
            user_id: user.id,
            username: user.username || null,
            first_name: user.first_name || null,
            last_name: user.last_name || null,
            city: city,
            cart: cart,
            total: total
        };

        // Отправляем запрос на сервер
        // Мы используем await, чтобы данные успели уйти до закрытия окна
        await fetch('https://n8n.biomedika.shop/webhook/bce565c3-60bc-4f90-88c6-70887ebf40e5', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        });

        // --- ИЗМЕНЕНИЕ ЗДЕСЬ ---
        // Мы убрали проверку "if (!response.ok)", которая вызывала ошибку.
        // Теперь код идет дальше к закрытию окна, что бы ни ответил сервер.

        // Закрываем WebApp
        window.Telegram.WebApp.close();

    } catch (error) {
        console.error('Checkout error:', error);
        // Если произошла совсем критическая ошибка (например, нет интернета), 
        // всё равно пробуем закрыть окно, чтобы пользователь не застрял.
        window.Telegram.WebApp.close();
    }
}

// --- ФУНКЦИИ ИЗБРАННОГО ---
function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistIcons();
}

function toggleWishlist(id, btnElement) {
    const index = wishlist.indexOf(String(id));
    if (index === -1) { wishlist.push(String(id)); } 
    else { 
        wishlist.splice(index, 1); 
        if (document.getElementById('favorites-container')) { renderWishlist(); }
    }
    saveWishlist();
}

function updateWishlistIcons() {
    const buttons = document.querySelectorAll('.wishlist-btn');
    buttons.forEach(btn => {
        let id = btn.getAttribute('data-id');
        if (!id) {
             const parent = btn.closest('.product-card'); 
             if (parent) {
                 const buyBtn = parent.querySelector('.add-to-cart-btn');
                 if (buyBtn) {
                     id = buyBtn.getAttribute('data-id');
                     btn.setAttribute('data-id', id);
                 }
             }
        }
        if (id && wishlist.includes(String(id))) {
            btn.classList.add('active'); btn.innerText = '♥';
        } else {
            btn.classList.remove('active'); btn.innerText = '♡';
        }
    });
}

function renderWishlist() {
    const container = document.getElementById('favorites-container');
    if (!container) return;
    if (wishlist.length === 0) {
        container.innerHTML = '<div class="empty-message" style="text-align:center; padding:40px;">Нет избранных товаров</div>';
        return;
    }
    let html = '';
    wishlist.forEach(id => {
        const product = products.find(p => p.id == id);
        if (product) {
            html += `
            <div class="product-card">
                <a href="product.html?id=${product.id}" style="text-decoration: none; color: inherit;">
                    <img src="${product.image}" class="image-placeholder" style="object-fit: contain; width: 100%; height: 150px;">
                    <div class="product-info">
                        <div class="price">${product.price.toLocaleString()} ₽</div>
                        <div class="title">${product.name}</div>
                    </div>
                </a>
                <button class="wishlist-btn active" data-id="${product.id}" onclick="toggleWishlist(${product.id}, this)">♥</button>
                <button class="add-to-cart-btn" data-id="${product.id}">В корзину</button>
            </div>`;
        }
    });
    container.innerHTML = html;
    attachAddToCartEvents();
}

function attachAddToCartEvents() {
    const addBtns = document.querySelectorAll('.add-to-cart-btn');
    addBtns.forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = newBtn.getAttribute('data-id');
            addToCart(id);
        });
    });
}

// --- ФУНКЦИЯ ПОИСКА ТОВАРОВ ---
function filterProducts() {
    const input = document.querySelector('.search-input');
    // Если на странице нет поиска (например, мы в корзине), выходим
    if (!input) return;

    const filter = input.value.toUpperCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        // Ищем заголовок внутри карточки
        const title = card.querySelector('.title');
        if (title) {
            const txtValue = title.textContent || title.innerText;
            // Если текст совпадает - показываем, иначе - скрываем
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        }
    });
}

// --- ЗАПУСК ---
document.addEventListener('DOMContentLoaded', () => {
    injectCityModal();
    const savedCity = localStorage.getItem('selectedCity');
    if (savedCity) { updateCityHeader(savedCity); }

    const citySelectors = document.querySelectorAll('.city-selector');
    citySelectors.forEach(el => { el.addEventListener('click', openCityModal); });

    // 6. ПОИСК ТОВАРОВ
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    updateCartBadge();
    renderCart(); 
    renderWishlist();
    attachAddToCartEvents();
    updateWishlistIcons();

    // Клик на сердечки на главной
    const wishBtns = document.querySelectorAll('.wishlist-btn');
    wishBtns.forEach(btn => {
        if (!btn.hasAttribute('onclick')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); 
                let id = btn.getAttribute('data-id');
                if (!id) {
                    const siblingBtn = btn.parentNode.querySelector('.add-to-cart-btn');
                    id = siblingBtn ? siblingBtn.getAttribute('data-id') : null;
                }
                if (id) {
                    btn.setAttribute('data-id', id);
                    toggleWishlist(id, btn);
                }
            });
        }
    });

    // --- ЛОГИКА СТРАНИЦЫ ТОВАРА (ОБНОВЛЕННАЯ) ---
    // Теперь она берет картинку и описание из базы данных products
    const productNameEl = document.getElementById('p-name');
    if (productNameEl) {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const product = products.find(p => p.id == productId);
        if (product) {
            // Заполняем данными
            productNameEl.innerText = product.name;
            document.getElementById('p-price').innerText = product.price.toLocaleString() + ' ₽';
            document.getElementById('p-short').innerText = product.shortDesc;
            document.getElementById('p-desc-text').innerText = product.description;
            document.getElementById('p-image').src = product.image; // Картинка
            
            // Список особенностей (specs)
            const ul = document.getElementById('p-specs');
            ul.innerHTML = ''; // Очистить старое
            product.specs.forEach(spec => {
                const li = document.createElement('li');
                li.innerText = spec;
                ul.appendChild(li);
            });

            const bigBtn = document.getElementById('add-btn');
            if(bigBtn) bigBtn.onclick = function() { addToCart(product.id); };
        }
    }
});

// --- UI ГОРОДА ---
function openCityModal() { document.getElementById('city-modal').style.display = 'flex'; document.body.style.overflow = 'hidden'; }
function closeCityModal() { document.getElementById('city-modal').style.display = 'none'; document.body.style.overflow = ''; }
function selectCity(cityName) { localStorage.setItem('selectedCity', cityName); updateCityHeader(cityName); closeCityModal(); }
function updateCityHeader(cityName) { const selectors = document.querySelectorAll('.city-selector'); selectors.forEach(el => { el.innerText = cityName + ' ⌄'; }); }
function filterCities() {
    const input = document.getElementById('city-search-input');
    const filter = input.value.toUpperCase();
    const li = document.getElementById("city-list").getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        const txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) { li[i].style.display = ""; } else { li[i].style.display = "none"; }
    }
}
window.onclick = function(event) { if (event.target == document.getElementById('city-modal')) { closeCityModal(); } }
