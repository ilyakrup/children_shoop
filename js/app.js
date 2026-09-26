/**
 * LILLE ATELIER - MULTI-PAGE E-COMMERCE CORE
 * Minimalist Architecture with Dedicated Category Pages, Top-to-Bottom Reveals & Floating Windows
 */

// Category Hub Database with Physical URLs
const CATEGORIES_DATA = [
  {
    id: 'outerwear',
    name: 'Верхняя одежда',
    desc: 'Комбинезоны-трансформеры и теплые вязаные пальто для прохладных прогулок',
    count: '2 модели',
    url: 'outerwear.html',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sweaters',
    name: 'Свитеры & кардиганы',
    desc: 'Классическая жемчужная вязка, джемперы оверсайз и пуговицы из натурального бука',
    count: '3 модели',
    url: 'sweaters.html',
    image: 'assets/images/cardigan.jpg'
  },
  {
    id: 'rompers',
    name: 'Брюки & ромперы',
    desc: 'Анатомические ромперы, бесшовные штанишки и комбинезоны на лямках',
    count: '3 модели',
    url: 'rompers.html',
    image: 'assets/images/hero.jpg'
  },
  {
    id: 'blankets',
    name: 'Пледы & текстиль',
    desc: 'Воздушные фактурные пледы из 100% шерсти мериноса для коляски и кроватки',
    count: '2 модели',
    url: 'blankets.html',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'shoes',
    name: 'Обувь & пинетки',
    desc: 'Мягкие пинетки из мериноса на завязках и первые шерстяные мокасины',
    count: '2 модели',
    url: 'shoes.html',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sets',
    name: 'Комплекты на выписку',
    desc: 'Готовые подарочные боксы и наборы первой одежды в крафтовой упаковке',
    count: '2 набора',
    url: 'sets.html',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'accessories',
    name: 'Шапочки & аксессуары',
    desc: 'Анатомические чепчики с мягкими ушками, варежки-царапки и снуды',
    count: '2 модели',
    url: 'accessories.html',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80'
  }
];

// Products Database
const PRODUCTS_DATA = [
  {
    id: 'lille-01',
    name: 'Кардиган «Nordic Wool»',
    category: 'sweaters',
    categoryLabel: 'Свитеры & кардиганы',
    price: 4800,
    oldPrice: 5600,
    badge: 'Бестселлер',
    badgeType: 'badge-dark',
    image: 'assets/images/cardigan.jpg',
    composition: '100% шерсть мериноса экстрафайн',
    care: 'Ручная стирка 30°C, сушка на горизонтальной поверхности',
    description: 'Нежный кардиган крупной жемчужной вязки с пуговицами из натурального массива бука. Мягкая гипоаллергенная пряжа не колется и сохраняет естественное тепло малыша с первых дней.',
    sizes: ['0-3 мес', '3-6 мес', '6-12 мес', '1-2 года'],
    colors: [
      { name: 'Молочный (Ecru)', hex: '#F5F5F0', active: true },
      { name: 'Овсяный (Oatmeal)', hex: '#DED6C9' },
      { name: 'Графит (Charcoal)', hex: '#3E3B38' }
    ]
  },
  {
    id: 'lille-02',
    name: 'Вязаный ромпер «Petit Cocoon»',
    category: 'rompers',
    categoryLabel: 'Брюки & ромперы',
    price: 3900,
    oldPrice: null,
    badge: 'Новинка',
    badgeType: 'badge-dark',
    image: 'assets/images/hero.jpg',
    composition: '80% органический меринос, 20% кашемир',
    care: 'Бережная стирка в мешочке или вручную, жидкое средство для шерсти',
    description: 'Уютный анатомический ромпер с удобными деревянными пуговицами на плечиках и ластовице для легкой смены подгузника. Бесшовная круговая вязка не натирает нежную кожу.',
    sizes: ['0-3 мес', '3-6 мес', '6-12 мес'],
    colors: [
      { name: 'Молочный (Ecru)', hex: '#F5F5F0', active: true },
      { name: 'Песочный (Sand)', hex: '#D9CEB9' },
      { name: 'Дымчатый (Heather)', hex: '#A8A29E' }
    ]
  },
  {
    id: 'lille-03',
    name: 'Комбинезон-трансформер «Polar Bear»',
    category: 'outerwear',
    categoryLabel: 'Верхняя одежда',
    price: 6800,
    oldPrice: 7900,
    badge: 'Теплый слой 0+',
    badgeType: 'badge-warm',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
    composition: '100% шерсть мериноса двойной плотности',
    care: 'Деликатная стирка для шерсти, горизонтальная сушка',
    description: 'Вязаный уличный комбинезон с глубоким капюшоном и закрывающимися манжетами-рукавичками. Надежно защищает от ветра во время прогулок в коляске.',
    sizes: ['0-3 мес', '3-6 мес', '6-12 мес', '1-2 года'],
    colors: [
      { name: 'Овсяный меланж', hex: '#DED6C9', active: true },
      { name: 'Сливочный пломбир', hex: '#F7F5EE' },
      { name: 'Темный графит', hex: '#2B2927' }
    ]
  },
  {
    id: 'lille-04',
    name: 'Вязаное пальто с капюшоном «Warm Hug»',
    category: 'outerwear',
    categoryLabel: 'Верхняя одежда',
    price: 7400,
    oldPrice: null,
    badge: 'Премиум',
    badgeType: 'badge-dark',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    composition: '85% меринос экстрафайн, 15% органический хлопок',
    care: 'Сухая чистка или бережная ручная стирка при 30°C',
    description: 'Удлиненное вязаное пальто фактурной платочной вязки с объемным уютным капюшоном и большими пуговицами из светлого ясеня.',
    sizes: ['6-12 мес', '1-2 года', '2-4 года'],
    colors: [
      { name: 'Песочно-бежевый', hex: '#D9CEB9', active: true },
      { name: 'Светло-серый', hex: '#C4C0B8' }
    ]
  },
  {
    id: 'lille-05',
    name: 'Свитер оверсайз рельефной вязки',
    category: 'sweaters',
    categoryLabel: 'Свитеры & кардиганы',
    price: 4400,
    oldPrice: 4900,
    badge: 'Хит',
    badgeType: 'badge-dark',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
    composition: '90% меринос, 10% кашемир',
    care: 'Деликатная ручная стирка, сушить в расправленном виде',
    description: 'Стильный скандинавский джемпер свободного кроя. Эластичный мягкий воротник легко проходит через голову малыша без слез и дискомфорта.',
    sizes: ['6-12 мес', '1-2 года', '2-4 года'],
    colors: [
      { name: 'Овсяный (Oatmeal)', hex: '#DED6C9', active: true },
      { name: 'Глубокий графит (Graphite)', hex: '#2B2927' },
      { name: 'Белый лен (Linen)', hex: '#FAF9F5' }
    ]
  },
  {
    id: 'lille-06',
    name: 'Джемпер фактурный «Oslo Knit»',
    category: 'sweaters',
    categoryLabel: 'Свитеры & кардиганы',
    price: 4600,
    oldPrice: null,
    badge: 'Новинка',
    badgeType: 'badge-outline',
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80',
    composition: '100% экстрафайн меринос 19.5 микрон',
    care: 'Ручная стирка, мягкий отжим в полотенце',
    description: 'Классический фактурный джемпер с узором косички по переду. Безупречно сочетается с нашими вязаными штанишками.',
    sizes: ['3-6 мес', '6-12 мес', '1-2 года'],
    colors: [
      { name: 'Молочный (Ecru)', hex: '#F5F5F0', active: true },
      { name: 'Теплый орех', hex: '#8C7B6B' }
    ]
  },
  {
    id: 'lille-07',
    name: 'Штанишки с высокой посадкой «Soft Rib»',
    category: 'rompers',
    categoryLabel: 'Брюки & ромперы',
    price: 2900,
    oldPrice: 3400,
    badge: 'База',
    badgeType: 'badge-dark',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    composition: '100% чистый меринос',
    care: 'Бережная машинная стирка «Шерсть» до 30°C',
    description: 'Эластичные штанишки в мелкий рубчик с широкой мягкой резинкой на животике, которая не давит даже после кормления малыша.',
    sizes: ['0-3 мес', '3-6 мес', '6-12 мес', '1-2 года'],
    colors: [
      { name: 'Овсяный', hex: '#DED6C9', active: true },
      { name: 'Молочный', hex: '#F5F5F0' },
      { name: 'Графит', hex: '#3E3B38' }
    ]
  },
  {
    id: 'lille-08',
    name: 'Ромпер на лямках с деревянными пуговицами',
    category: 'rompers',
    categoryLabel: 'Брюки & ромперы',
    price: 3400,
    oldPrice: null,
    badge: 'Выбор мам',
    badgeType: 'badge-warm',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
    composition: '100% тонкорунный меринос',
    care: 'Ручная стирка, жидкое экологичное средство',
    description: 'Очаровательный полукомбинезон с регулируемыми перекрестными лямками на спинке, который «растет» вместе с малышом.',
    sizes: ['0-3 мес', '3-6 мес', '6-12 мес'],
    colors: [
      { name: 'Песочный (Sand)', hex: '#D9CEB9', active: true },
      { name: 'Дымчатый серый', hex: '#A8A29E' }
    ]
  },
  {
    id: 'lille-09',
    name: 'Плед фактурной вязки «Cloud Hug»',
    category: 'blankets',
    categoryLabel: 'Пледы & текстиль',
    price: 5200,
    oldPrice: null,
    badge: '100% Меринос',
    badgeType: 'badge-outline',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    composition: '100% шерсть мериноса высшей категории',
    care: 'Стирка при 30°C без отжима, сушить горизонтально',
    description: 'Воздушный и дышащий плед размером 90×100 см. Идеален для коляски, детской кроватки или уютных семейных фотосессий. Согревает в прохладу и не дает перегреваться.',
    sizes: ['90 × 100 см'],
    colors: [
      { name: 'Сливочный (Cream)', hex: '#F7F5EE', active: true },
      { name: 'Серый меланж', hex: '#C4C0B8' },
      { name: 'Теплый орех', hex: '#8C7B6B' }
    ]
  },
  {
    id: 'lille-10',
    name: 'Ажурный плед «Pure Whisper»',
    category: 'blankets',
    categoryLabel: 'Пледы & текстиль',
    price: 5600,
    oldPrice: 6200,
    badge: 'На выписку',
    badgeType: 'badge-warm',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    composition: '80% меринос, 20% шелк',
    care: 'Бережная сухая чистка или ручная стирка',
    description: 'Шелковистый на ощупь ажурный плед с фестончатым краем. Станет семейной реликвией и украшением первых памятных фотографий.',
    sizes: ['90 × 100 см'],
    colors: [
      { name: 'Молочный шелк', hex: '#F5F5F0', active: true },
      { name: 'Нежная пудра', hex: '#EAD7D1' }
    ]
  },
  {
    id: 'lille-11',
    name: 'Теплые пинетки из мериноса с завязками',
    category: 'shoes',
    categoryLabel: 'Обувь & пинетки',
    price: 1800,
    oldPrice: null,
    badge: 'Анатомический крой',
    badgeType: 'badge-dark',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    composition: '100% шерсть мериноса экстрафайн',
    care: 'Ручная бережная стирка',
    description: 'Мягкие вязаные пинетки с эластичными шнурочками, которые надежно фиксируют изделие на ножке и не соскальзывают во время сна и бодрствования.',
    sizes: ['0-3 мес', '3-6 мес'],
    colors: [
      { name: 'Молочный (Ecru)', hex: '#F5F5F0', active: true },
      { name: 'Овсяный (Oatmeal)', hex: '#DED6C9' },
      { name: 'Графит', hex: '#3E3B38' }
    ]
  },
  {
    id: 'lille-12',
    name: 'Шерстяные сапожки-мокасины «First Step»',
    category: 'shoes',
    categoryLabel: 'Обувь & пинетки',
    price: 2400,
    oldPrice: 2800,
    badge: 'Новинка',
    badgeType: 'badge-outline',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
    composition: '100% меринос + замшевые нескользящие вставки',
    care: 'Сухая чистка щеткой для шерсти',
    description: 'Уютные мягкие сапожки для малышей, которые уже пробуют делать первые шаги. Натуральная замшевая подошва предотвращает скольжение на полу.',
    sizes: ['3-6 мес', '6-12 мес', '1-2 года'],
    colors: [
      { name: 'Песочно-бежевый', hex: '#D9CEB9', active: true },
      { name: 'Графитовый', hex: '#2B2927' }
    ]
  },
  {
    id: 'lille-13',
    name: 'Подарочный бокс на выписку «Atelier Box»',
    category: 'sets',
    categoryLabel: 'Комплекты на выписку',
    price: 8900,
    oldPrice: 10500,
    badge: 'Premium Box',
    badgeType: 'badge-warm',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80',
    composition: '100% меринос экстрафайн + массив бука',
    care: 'Включает памятку по уходу и фирменный лавандовый саше',
    description: 'Эксклюзивный подарочный набор в крафтовом дизайнерском боксе: ромпер, кардиган, чепчик, пинетки и деревянный тактильный грызунок ручной работы.',
    sizes: ['0-3 мес', '3-6 мес'],
    colors: [
      { name: 'Фирменный молочный', hex: '#F5F5F0', active: true },
      { name: 'Натуральный овсяный', hex: '#DED6C9' }
    ]
  },
  {
    id: 'lille-14',
    name: 'Комплект новорожденного «First Days Set»',
    category: 'sets',
    categoryLabel: 'Комплекты на выписку',
    price: 6500,
    oldPrice: null,
    badge: 'Капсула 0+',
    badgeType: 'badge-dark',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
    composition: '100% органический меринос',
    care: 'Бережная ручная стирка',
    description: 'Гармоничный комплект из мягкого комбинезона на пуговицах, шапочки и пинеток. Полностью закрывает потребности гардероба на первый месяц жизни.',
    sizes: ['0-3 мес'],
    colors: [
      { name: 'Молочный (Ecru)', hex: '#F5F5F0', active: true },
      { name: 'Песочный (Sand)', hex: '#D9CEB9' }
    ]
  },
  {
    id: 'lille-15',
    name: 'Анатомический чепчик «Bonnet Petit»',
    category: 'accessories',
    categoryLabel: 'Шапочки & аксессуары',
    price: 1600,
    oldPrice: null,
    badge: 'Хит',
    badgeType: 'badge-outline',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
    composition: '100% ультратонкий меринос',
    care: 'Ручная стирка, горизонтальная сушка',
    description: 'Идеально облегает голову новорожденного, прикрывая ушки от сквозняков. Мягкие плоские завязочки не натирают нежный подбородок.',
    sizes: ['0-3 мес', '3-6 мес', '6-12 мес'],
    colors: [
      { name: 'Молочный (Ecru)', hex: '#F5F5F0', active: true },
      { name: 'Овсяный', hex: '#DED6C9' },
      { name: 'Графит', hex: '#3E3B38' }
    ]
  },
  {
    id: 'lille-16',
    name: 'Комплект «Шапочка + варежки-царапки»',
    category: 'accessories',
    categoryLabel: 'Шапочки & аксессуары',
    price: 2600,
    oldPrice: 3100,
    badge: 'На выписку',
    badgeType: 'badge-warm',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    composition: '90% меринос, 10% кашемир',
    care: 'Ручная стирка в прохладной воде',
    description: 'Заботливый комплект для первых прогулок. Бесшовные варежки берегут нежные пальчики от холода и случайных царапин.',
    sizes: ['0-3 мес', '3-6 мес'],
    colors: [
      { name: 'Молочный', hex: '#F5F5F0', active: true },
      { name: 'Светло-песочный', hex: '#D9CEB9' }
    ]
  }
];

// Available Filter Sizes Scale
const ALL_FILTER_SIZES = [
  'Все размеры',
  '0-3 мес',
  '3-6 мес',
  '6-12 мес',
  '1-2 года',
  '2-4 года',
  '90 × 100 см'
];

// State Management
let state = {
  cart: JSON.parse(localStorage.getItem('lille_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('lille_wishlist') || '[]'),
  currentCategory: window.PAGE_CATEGORY || 'all',
  selectedSize: 'all',
  currentSort: 'featured',
  searchQuery: ''
};

// Free Shipping Threshold
const FREE_SHIPPING_THRESHOLD = 5000;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  if (window.PAGE_CATEGORY) {
    state.currentCategory = window.PAGE_CATEGORY;
  }

  // Parse URL Search Query Parameter (?search=... or ?q=...)
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get('search') || urlParams.get('q');
  if (searchParam) {
    state.searchQuery = searchParam.trim();
    state.currentCategory = 'all';

    const searchInput = document.getElementById('catalogSearch');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    if (searchInput) searchInput.value = state.searchQuery;
    if (mobileSearchInput) mobileSearchInput.value = state.searchQuery;

    const titleEl = document.getElementById('catalogViewTitle');
    const descEl = document.getElementById('catalogViewDesc');
    if (titleEl) {
      titleEl.innerHTML = `Результаты поиска: «${escapeHtml(state.searchQuery)}» <button class="btn-clear-search" onclick="clearCatalogSearch()">Сбросить ✕</button>`;
    }
    if (descEl) {
      descEl.textContent = `Показаны модели из коллекции по вашему запросу. Нажмите «Сбросить», чтобы увидеть весь каталог.`;
    }
  }

  renderCategoryGrid();
  renderCategoryPills();
  renderSizeFilterChips();
  initCatalog(true);
  initCart();
  initWishlist();
  initEventListeners();
  initSmartSearch();
  initAccordions();
  initScrollReveal();
});

// Smooth Top-to-Bottom Scroll Reveal
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.01,
      rootMargin: '0px 0px 140px 0px'
    });

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('revealed');
      } else {
        observer.observe(el);
      }
    });
  } else {
    elements.forEach(el => el.classList.add('revealed'));
  }
}

// Covercode Categories Hub Grid (with dedicated page links)
function renderCategoryGrid() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;

  container.innerHTML = CATEGORIES_DATA.map(cat => `
    <a href="${cat.url}" class="category-card" aria-label="${cat.name} — ${cat.count}">
      <img src="${cat.image}" alt="${cat.name}" class="category-card-img" loading="lazy">
      <div class="category-card-overlay"></div>
      <div class="category-card-content">
        <div class="category-card-toprow">
          <h3 class="category-card-title">${cat.name}</h3>
          <div class="category-card-arrow" aria-hidden="true">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </div>
        <span class="category-card-count">${cat.count}</span>
      </div>
    </a>
  `).join('');
}

// Category Quick Switcher Pills (Links to individual pages)
function renderCategoryPills() {
  const pillsContainer = document.getElementById('catalogCategoryPills');
  if (!pillsContainer) return;

  const categoriesWithAll = [
    { id: 'all', name: 'Все изделия', url: 'catalog.html' },
    ...CATEGORIES_DATA
  ];

  pillsContainer.innerHTML = categoriesWithAll.map(c => `
    <a href="${c.url}" class="cat-pill-btn ${state.currentCategory === c.id ? 'active' : ''}">
      ${c.name}
    </a>
  `).join('');
}

// Size Filter Chips (Interactive size filter)
function renderSizeFilterChips() {
  const container = document.getElementById('sizeFilterChips');
  if (!container) return;

  container.innerHTML = ALL_FILTER_SIZES.map(s => {
    const isAll = s === 'Все размеры';
    const isActive = (isAll && state.selectedSize === 'all') || state.selectedSize === s;
    const value = isAll ? 'all' : s;

    return `
      <button class="size-filter-chip ${isActive ? 'active' : ''}" 
              onclick="onSizeFilterChange('${value}')">
        ${s}
      </button>
    `;
  }).join('');
}

// Size Filter Click
window.onSizeFilterChange = function(size) {
  state.selectedSize = size;
  renderSizeFilterChips();
  initCatalog(true); // Trigger cascade slide-down animation!
};

// Sort Dropdown Change
window.onSortChange = function(sortValue) {
  state.currentSort = sortValue;
  initCatalog(true);
};

// Catalog Rendering with Waterfall Cascade-In Animation
function initCatalog(shouldCascade = true) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  // Filter by Category, Size & Search
  let filtered = PRODUCTS_DATA.filter(p => {
    const matchesCat = state.currentCategory === 'all' || p.category === state.currentCategory;
    
    // Filter by Size
    const matchesSize = state.selectedSize === 'all' || 
      p.sizes.some(s => s.toLowerCase().includes(state.selectedSize.toLowerCase()));

    // Filter by Search Query
    const matchesSearch = !state.searchQuery || 
      p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      p.composition.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(state.searchQuery.toLowerCase());

    return matchesCat && matchesSize && matchesSearch;
  });

  // Sorting
  if (state.currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  // Update Count Badge if exists
  const countBadge = document.getElementById('catalogViewCount');
  if (countBadge) {
    countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'модель' : filtered.length < 5 ? 'модели' : 'моделей'}`;
  }

  // Empty state handling
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 70px 20px; color: var(--color-muted); background: var(--color-surface); border-radius: var(--radius-md); border: 1px dashed var(--color-border);">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" style="margin: 0 auto 16px; opacity: 0.5;">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
        <p style="font-family: var(--font-serif); font-size: 1.625rem; color: var(--color-primary); margin-bottom: 8px;">Изделий не найдено</p>
        <p style="font-size: 0.875rem; max-width: 420px; margin: 0 auto 20px;">
          В данном размере или категории сейчас нет моделей в наличии.
        </p>
        <button class="btn btn-outline btn-sm" onclick="onSizeFilterChange('all');">
          Сбросить фильтр размеров
        </button>
      </div>
    `;
    return;
  }

  // Render product cards with staggered cascade-in animation: "карточки как бы всплывают сверху вниз"
  grid.innerHTML = filtered.map((product, idx) => {
    const isWished = state.wishlist.includes(product.id);
    const selectedSize = product.sizes[0];
    const selectedColor = product.colors[0].name;

    return `
      <article class="product-card ${shouldCascade ? 'cascade-in' : ''}" 
               data-id="${product.id}" 
               data-selected-size="${selectedSize}"
               data-selected-color="${selectedColor}"
               style="--item-idx: ${idx};">
        <div class="product-media">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onclick="openQuickView('${product.id}')" style="cursor: pointer;">
          
          <div class="product-badges">
            ${product.badge ? `<span class="badge ${product.badgeType}">${product.badge}</span>` : ''}
          </div>

          <button class="wishlist-btn ${isWished ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}')" 
                  aria-label="В избранное" 
                  title="В избранное">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </button>

          <!-- Quick View Overlay without leaving page -->
          <div class="quick-view-overlay">
            <button class="btn-quick-view" onclick="openQuickView('${product.id}')">
              Быстрый просмотр
            </button>
          </div>
        </div>

        <div class="product-info">
          <span class="product-composition">${product.composition}</span>
          <h3 class="product-name" onclick="openQuickView('${product.id}')" style="cursor: pointer;">${product.name}</h3>

          <div class="product-price-row">
            <span class="product-price">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
          </div>

          <!-- Color Swatches -->
          <div class="swatch-group" title="Доступные цвета">
            ${product.colors.map((c, cIdx) => `
              <div class="swatch-circle ${cIdx === 0 ? 'active' : ''}" 
                   style="background-color: ${c.hex};" 
                   title="${c.name}"
                   onclick="selectCardColor(this, '${product.id}', '${c.name}')">
              </div>
            `).join('')}
          </div>

          <!-- Size Selection Chips -->
          <div class="size-chips" data-product="${product.id}">
            ${product.sizes.map((s, sIdx) => `
              <button class="size-chip ${sIdx === 0 ? 'active' : ''}" 
                      onclick="selectCardSize(this, '${product.id}', '${s}')">
                ${s}
              </button>
            `).join('')}
          </div>

          <button class="card-action-btn" onclick="addToCart('${product.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span class="btn-text-full">Добавить в корзину</span>
            <span class="btn-text-short">В корзину</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// Swatch & Size Selectors on Card
window.selectCardColor = function(el, productId, colorName) {
  const parent = el.closest('.swatch-group');
  parent.querySelectorAll('.swatch-circle').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  const card = el.closest('.product-card');
  if (card) card.dataset.selectedColor = colorName;
};

window.selectCardSize = function(el, productId, sizeValue) {
  const parent = el.closest('.size-chips');
  parent.querySelectorAll('.size-chip').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  const card = el.closest('.product-card');
  if (card) card.dataset.selectedSize = sizeValue;
};

// Cart Logic
function initCart() {
  updateCartCounters();
  renderCartDrawer();
}

window.addToCart = function(productId, customSize, customColor, customQty = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  const size = customSize || (card ? card.dataset.selectedSize : null) || product.sizes[0];
  const color = customColor || (card ? card.dataset.selectedColor : null) || product.colors[0].name;

  const existingIndex = state.cart.findIndex(
    item => item.id === productId && item.size === size && item.color === color
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].qty += customQty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      composition: product.composition,
      size: size,
      color: color,
      qty: customQty
    });
  }

  saveCart();
  renderCartDrawer();
  updateCartCounters();
  openCart();
  showToast(`«${product.name}» добавлен в корзину (${size})`);
};

window.updateCartQty = function(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].qty += delta;

  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }

  saveCart();
  renderCartDrawer();
  updateCartCounters();
};

window.removeCartItem = function(index) {
  state.cart.splice(index, 1);
  saveCart();
  renderCartDrawer();
  updateCartCounters();
  showToast('Товар удален из корзины');
};

function saveCart() {
  localStorage.setItem('lille_cart', JSON.stringify(state.cart));
}

function updateCartCounters() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count-badge').forEach(badge => {
    badge.textContent = totalQty;
    badge.style.display = totalQty > 0 ? 'flex' : 'none';
  });
}

function renderCartDrawer() {
  const body = document.getElementById('drawerCartBody');
  const footer = document.getElementById('drawerCartFooter');
  const shippingInfo = document.getElementById('shippingProgressText');
  const shippingBar = document.getElementById('shippingProgressBar');

  if (!body) return;

  const totalAmount = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Free shipping bar calculation
  if (shippingInfo && shippingBar) {
    if (totalAmount >= FREE_SHIPPING_THRESHOLD) {
      shippingInfo.innerHTML = `✨ <strong>Поздравляем!</strong> Доставка для вас бесплатна`;
      shippingBar.style.width = '100%';
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - totalAmount;
      const pct = Math.min(100, Math.round((totalAmount / FREE_SHIPPING_THRESHOLD) * 100));
      shippingInfo.innerHTML = `До бесплатной доставки осталось <strong>${formatPrice(remaining)}</strong>`;
      shippingBar.style.width = `${pct}%`;
    }
  }

  if (state.cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" style="margin: 0 auto 16px; opacity: 0.4;">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <p style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-primary); margin-bottom: 6px;">Корзина пока пуста</p>
        <p style="font-size: 0.8125rem;">Выберите вязаные изделия из нашей новой коллекции малышам.</p>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';

  body.innerHTML = state.cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-meta">${item.size} • ${item.color}</span>
        <span class="cart-item-price">${formatPrice(item.price * item.qty)}</span>

        <div class="cart-qty-ctrl">
          <button class="qty-btn" onclick="updateCartQty(${index}, -1)" aria-label="Уменьшить">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${index}, 1)" aria-label="Увеличить">+</button>
        </div>
      </div>

      <button class="cart-item-remove" onclick="removeCartItem(${index})" aria-label="Удалить">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
  `).join('');

  const subEl = document.getElementById('cartSubtotal');
  const totEl = document.getElementById('cartTotal');
  if (subEl) subEl.textContent = formatPrice(totalAmount);
  if (totEl) totEl.textContent = formatPrice(totalAmount);
}

// Drawer Cart Controls (Floating slide-over)
window.openCart = function() {
  document.getElementById('drawerCart').classList.add('open');
  document.getElementById('drawerBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeCart = function() {
  document.getElementById('drawerCart').classList.remove('open');
  document.getElementById('drawerBackdrop').classList.remove('open');
  document.body.style.overflow = '';
};

// Wishlist Logic
function initWishlist() {
  updateWishlistCounters();
}

window.toggleWishlist = function(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast('Удалено из избранного');
  } else {
    state.wishlist.push(productId);
    showToast('Добавлено в избранное');
  }
  localStorage.setItem('lille_wishlist', JSON.stringify(state.wishlist));
  updateWishlistCounters();
  initCatalog(false);
};

function updateWishlistCounters() {
  const count = state.wishlist.length;
  document.querySelectorAll('.wishlist-count-badge').forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

// Quick View Modal without leaving page (Floating down smoothly)
let qvCurrentQty = 1;

window.openQuickView = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const container = document.getElementById('quickViewContent');
  qvCurrentQty = 1;

  container.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-media">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="quickview-details">
        <div class="quickview-badge-row">
          <span class="product-composition">${product.composition}</span>
          ${product.badge ? `<span class="badge ${product.badgeType}">${product.badge}</span>` : ''}
        </div>
        <h2 class="quickview-title">${product.name}</h2>
        
        <div class="product-price-row quickview-price-row">
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>

        <p class="quickview-desc">
          ${product.description}
        </p>

        <!-- Color Selector -->
        <div class="quickview-option-block">
          <label class="quickview-option-label">
            Цвет: <span id="qvSelectedColorName" class="quickview-color-val">${product.colors[0].name}</span>
          </label>
          <div class="swatch-group">
            ${product.colors.map((c, i) => `
              <div class="swatch-circle ${i === 0 ? 'active' : ''}" 
                   style="background-color: ${c.hex};" 
                   title="${c.name}"
                   onclick="selectQvColor(this, '${c.name}')">
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Size Selector -->
        <div class="quickview-option-block">
          <div class="quickview-size-header">
            <label class="quickview-option-label">Размер</label>
            <button class="quickview-sizeguide-link" onclick="openSizeGuide()">Таблица размеров</button>
          </div>
          <div class="size-chips">
            ${product.sizes.map((s, i) => `
              <button class="size-chip ${i === 0 ? 'active' : ''}" 
                      onclick="selectQvSize(this, '${s}')">
                ${s}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Action Row: Quantity + Wishlist + Add To Cart -->
        <div class="quickview-action-container">
          <div class="quickview-qty-row">
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="stepQvQty(-1)">-</button>
              <span class="qty-val" id="qvQtyDisplay">1</span>
              <button class="qty-btn" onclick="stepQvQty(1)">+</button>
            </div>
            <button class="qv-wishlist-btn ${state.wishlist.includes(product.id) ? 'active' : ''}" onclick="toggleWishlist('${product.id}')" aria-label="В избранное" title="В избранное">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${state.wishlist.includes(product.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
              <span>В избранное</span>
            </button>
          </div>

          <button class="btn btn-primary qv-add-btn" onclick="addQuickViewToCart('${product.id}')">
            Добавить в корзину
          </button>
        </div>

        <div class="quickview-features">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span>100% органический меринос • 0+ • Доставка с примеркой</span>
        </div>

      </div>
    </div>
  `;

  modal.dataset.currentSize = product.sizes[0];
  modal.dataset.currentColor = product.colors[0].name;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.stepQvQty = function(delta) {
  qvCurrentQty = Math.max(1, qvCurrentQty + delta);
  const display = document.getElementById('qvQtyDisplay');
  if (display) display.textContent = qvCurrentQty;
};

window.closeQuickView = function() {
  document.getElementById('quickViewModal').classList.remove('open');
  document.body.style.overflow = '';
};

window.selectQvColor = function(el, colorName) {
  el.parentElement.querySelectorAll('.swatch-circle').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  const label = document.getElementById('qvSelectedColorName');
  if (label) label.textContent = colorName;
  document.getElementById('quickViewModal').dataset.currentColor = colorName;
};

window.selectQvSize = function(el, size) {
  el.parentElement.querySelectorAll('.size-chip').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('quickViewModal').dataset.currentSize = size;
};

window.addQuickViewToCart = function(productId) {
  const modal = document.getElementById('quickViewModal');
  const size = modal.dataset.currentSize;
  const color = modal.dataset.currentColor;
  const qty = qvCurrentQty || 1;
  closeQuickView();
  addToCart(productId, size, color, qty);
};

// Size Guide Modal (Floating down smoothly)
window.openSizeGuide = function() {
  document.getElementById('sizeGuideModal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeSizeGuide = function() {
  document.getElementById('sizeGuideModal').classList.remove('open');
  if (!document.getElementById('quickViewModal').classList.contains('open')) {
    document.body.style.overflow = '';
  }
};

// Checkout Modal (Floating down smoothly)
window.openCheckout = function() {
  if (state.cart.length === 0) {
    showToast('Ваша корзина пуста');
    return;
  }
  closeCart();
  const modal = document.getElementById('checkoutModal');
  const totalAmount = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('checkoutOrderTotal').textContent = formatPrice(totalAmount);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeCheckout = function() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
};

window.submitCheckout = function(e) {
  e.preventDefault();
  const name = document.getElementById('orderName').value;
  const phone = document.getElementById('orderPhone').value;
  const address = document.getElementById('orderAddress').value;

  // Clear cart
  state.cart = [];
  saveCart();
  updateCartCounters();
  closeCheckout();

  // Show success modal or toast
  showToast(`Спасибо за заказ, ${name}! Наш консультант свяжется с вами в течение 15 минут.`);
};

// Global Mobile Navigation & Search Controls
window.openMobileMenu = function() {
  const mobileNav = document.getElementById('mobileNav');
  const backdrop = document.getElementById('mobileNavBackdrop');
  if (mobileNav) {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  if (backdrop) backdrop.classList.add('open');
};

window.closeMobileMenu = function() {
  const mobileNav = document.getElementById('mobileNav');
  const backdrop = document.getElementById('mobileNavBackdrop');
  if (mobileNav) {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  if (backdrop) backdrop.classList.remove('open');
};

window.toggleMobileSearch = function(force) {
  const bar = document.getElementById('mobileSearchBar');
  const input = document.getElementById('mobileSearchInput');
  if (!bar) return;
  const isOpen = typeof force === 'boolean' ? force : !bar.classList.contains('open');
  if (isOpen) {
    bar.classList.add('open');
    if (input) {
      setTimeout(() => {
        input.focus();
        renderSmartSearchResults(input.value.trim(), 'mobile');
      }, 100);
    }
  } else {
    bar.classList.remove('open');
  }
};

window.goToCatalogWishlist = function() {
  const catalogEl = document.getElementById('catalog');
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = 'catalog.html#catalog';
  }
};

// ==========================================================================
// SMART SEARCH ENGINE (Live suggestions, highlighting, catalog sync)
// ==========================================================================
const POPULAR_SEARCH_TAGS = ['Меринос', 'Комбинезон', 'Кардиган', 'Плед', 'Штанишки', 'Пинетки', 'Экрю', '100% шерсть'];

function initSmartSearch() {
  const desktopSearchWrap = document.querySelector('.header-search-desktop');
  const searchInput = document.getElementById('catalogSearch');
  const mobileSearchBar = document.getElementById('mobileSearchBar');
  const mobileSearchInput = document.getElementById('mobileSearchInput');

  // Ensure Desktop Dropdown Exists
  let desktopDropdown = document.getElementById('desktopSearchResults');
  if (desktopSearchWrap && !desktopDropdown) {
    desktopDropdown = document.createElement('div');
    desktopDropdown.id = 'desktopSearchResults';
    desktopDropdown.className = 'smart-search-dropdown';
    desktopSearchWrap.appendChild(desktopDropdown);
  }

  // Ensure Mobile Results Container Exists
  let mobileResults = document.getElementById('mobileSearchResults');
  if (mobileSearchBar && !mobileResults) {
    mobileResults = document.createElement('div');
    mobileResults.id = 'mobileSearchResults';
    mobileResults.className = 'mobile-search-results';
    mobileSearchBar.appendChild(mobileResults);
  }

  // Desktop search events
  if (searchInput && desktopDropdown) {
    searchInput.addEventListener('focus', () => {
      renderSmartSearchResults(searchInput.value.trim(), 'desktop');
      desktopDropdown.classList.add('open');
    });

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      state.searchQuery = q;
      if (mobileSearchInput && mobileSearchInput.value !== e.target.value) {
        mobileSearchInput.value = e.target.value;
      }
      renderSmartSearchResults(q, 'desktop');
      desktopDropdown.classList.add('open');
      
      if (document.getElementById('productGrid')) {
        initCatalog(true);
      }
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const q = searchInput.value.trim();
        desktopDropdown.classList.remove('open');
        window.location.href = 'catalog.html?search=' + encodeURIComponent(q);
      } else if (e.key === 'Escape') {
        desktopDropdown.classList.remove('open');
        searchInput.blur();
      }
    });
  }

  // Mobile search events
  if (mobileSearchInput && mobileResults) {
    mobileSearchInput.addEventListener('focus', () => {
      renderSmartSearchResults(mobileSearchInput.value.trim(), 'mobile');
    });

    mobileSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      state.searchQuery = q;
      if (searchInput && searchInput.value !== e.target.value) {
        searchInput.value = e.target.value;
      }
      renderSmartSearchResults(q, 'mobile');

      if (document.getElementById('productGrid')) {
        initCatalog(true);
      }
    });

    mobileSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const q = mobileSearchInput.value.trim();
        toggleMobileSearch(false);
        window.location.href = 'catalog.html?search=' + encodeURIComponent(q);
      }
    });
  }

  // Close desktop search dropdown on click outside
  document.addEventListener('click', (e) => {
    if (desktopDropdown && !desktopDropdown.contains(e.target) && !desktopSearchWrap.contains(e.target)) {
      desktopDropdown.classList.remove('open');
    }
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

function highlightMatch(text, query) {
  if (!query) return escapeHtml(text);
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return escapeHtml(text).replace(regex, '<mark>$1</mark>');
}

function renderSmartSearchResults(query, mode = 'desktop') {
  const container = mode === 'desktop' 
    ? document.getElementById('desktopSearchResults') 
    : document.getElementById('mobileSearchResults');
  if (!container) return;

  const cleanQuery = query.toLowerCase().trim();

  // If query is empty, show Quick Search Tags & Featured Products
  if (!cleanQuery) {
    const featuredItems = PRODUCTS_DATA.slice(0, 3);
    container.innerHTML = `
      <div class="search-section-label">
        <span>Популярные запросы</span>
      </div>
      <div class="search-quick-tags">
        ${POPULAR_SEARCH_TAGS.map(tag => `
          <button type="button" class="search-tag-chip" onclick="applySearchTag('${escapeHtml(tag)}', '${mode}')">${escapeHtml(tag)}</button>
        `).join('')}
      </div>

      <div class="search-section-label" style="margin-top: 14px;">
        <span>Хиты коллекции</span>
      </div>
      <div class="search-items-list">
        ${featuredItems.map(p => `
          <div class="search-item-card" onclick="openQuickView('${p.id}'); closeSmartSearch();">
            <img src="${p.image}" alt="${p.name}" class="search-item-img" loading="lazy">
            <div class="search-item-body">
              <div class="search-item-meta">${p.categoryLabel} • ${p.composition}</div>
              <div class="search-item-name">${p.name}</div>
              <div class="search-item-price-row">
                <span class="search-item-price">${formatPrice(p.price)}</span>
                ${p.oldPrice ? `<span class="search-item-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
              </div>
            </div>
            <button type="button" class="search-item-qv-btn" onclick="event.stopPropagation(); openQuickView('${p.id}'); closeSmartSearch();">
              Просмотр
            </button>
          </div>
        `).join('')}
      </div>
      <a href="catalog.html" class="search-view-all-link">Смотреть весь каталог изделий (16) →</a>
    `;
    return;
  }

  // Multi-criteria smart search
  const matches = PRODUCTS_DATA.filter(p => {
    const inName = p.name.toLowerCase().includes(cleanQuery);
    const inCat = p.categoryLabel.toLowerCase().includes(cleanQuery) || p.category.toLowerCase().includes(cleanQuery);
    const inComp = p.composition.toLowerCase().includes(cleanQuery);
    const inDesc = p.description.toLowerCase().includes(cleanQuery);
    const inColor = p.colors.some(c => c.name.toLowerCase().includes(cleanQuery));
    const inBadge = p.badge && p.badge.toLowerCase().includes(cleanQuery);
    return inName || inCat || inComp || inDesc || inColor || inBadge;
  });

  // Relevance sorting: title match first
  matches.sort((a, b) => {
    const aName = a.name.toLowerCase().includes(cleanQuery);
    const bName = b.name.toLowerCase().includes(cleanQuery);
    if (aName && !bName) return -1;
    if (!aName && bName) return 1;
    return 0;
  });

  if (matches.length > 0) {
    const displayedItems = matches.slice(0, 5);
    const countWord = matches.length === 1 ? 'модель' : matches.length < 5 ? 'модели' : 'моделей';
    container.innerHTML = `
      <div class="search-section-label">
        <span>Найдено: ${matches.length} ${countWord}</span>
      </div>
      <div class="search-items-list">
        ${displayedItems.map(p => `
          <div class="search-item-card" onclick="openQuickView('${p.id}'); closeSmartSearch();">
            <img src="${p.image}" alt="${p.name}" class="search-item-img" loading="lazy">
            <div class="search-item-body">
              <div class="search-item-meta">${p.categoryLabel} • ${p.composition}</div>
              <div class="search-item-name">${highlightMatch(p.name, query)}</div>
              <div class="search-item-price-row">
                <span class="search-item-price">${formatPrice(p.price)}</span>
                ${p.oldPrice ? `<span class="search-item-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
              </div>
            </div>
            <button type="button" class="search-item-qv-btn" onclick="event.stopPropagation(); openQuickView('${p.id}'); closeSmartSearch();">
              Просмотр
            </button>
          </div>
        `).join('')}
      </div>
      <a href="catalog.html?search=${encodeURIComponent(query)}" class="search-view-all-link">
        Показать все в каталоге (${matches.length}) →
      </a>
    `;
  } else {
    container.innerHTML = `
      <div class="search-empty-state">
        <div class="search-empty-title">По запросу «${escapeHtml(query)}» ничего не найдено</div>
        <p class="search-empty-desc">Проверьте написание или выберите один из популярных разделов:</p>
        <div class="search-quick-tags" style="justify-content: center;">
          ${POPULAR_SEARCH_TAGS.map(tag => `
            <button type="button" class="search-tag-chip" onclick="applySearchTag('${escapeHtml(tag)}', '${mode}')">${escapeHtml(tag)}</button>
          `).join('')}
        </div>
        <a href="catalog.html" class="search-view-all-link" style="margin-top: 14px;">Перейти в каталог (все 16 моделей)</a>
      </div>
    `;
  }
}

window.applySearchTag = function(tag, mode) {
  const searchInput = document.getElementById('catalogSearch');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  if (searchInput) searchInput.value = tag;
  if (mobileSearchInput) mobileSearchInput.value = tag;
  state.searchQuery = tag;
  renderSmartSearchResults(tag, mode);

  if (document.getElementById('productGrid')) {
    initCatalog(true);
  }
};

window.closeSmartSearch = function() {
  const desktopDropdown = document.getElementById('desktopSearchResults');
  if (desktopDropdown) desktopDropdown.classList.remove('open');
  toggleMobileSearch(false);
};

window.clearCatalogSearch = function() {
  state.searchQuery = '';
  const searchInput = document.getElementById('catalogSearch');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  if (searchInput) searchInput.value = '';
  if (mobileSearchInput) mobileSearchInput.value = '';

  const titleEl = document.getElementById('catalogViewTitle');
  const descEl = document.getElementById('catalogViewDesc');
  if (titleEl) titleEl.textContent = 'Все изделия коллекции';
  if (descEl) descEl.textContent = 'Премиальные вязаные изделия из ультратонкой шерсти мериноса экстрафайн и монгольского кашемира';

  // Remove search param from URL
  if (window.history && window.history.replaceState) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  initCatalog(true);
};

// Event Listeners for Filters, Search & Navigation
function initEventListeners() {

  // Announcement Bar Close
  const annClose = document.getElementById('closeAnnouncement');
  if (annClose) {
    annClose.addEventListener('click', () => {
      const annBar = document.getElementById('announcementBar');
      if (annBar) annBar.style.display = 'none';
    });
  }

  // Mobile Menu Triggers
  const mobileToggle = document.getElementById('mobileMenuToggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', openMobileMenu);
  }

  const closeNavBtn = document.getElementById('closeMobileNav');
  if (closeNavBtn) {
    closeNavBtn.addEventListener('click', closeMobileMenu);
  }

  const navBackdrop = document.getElementById('mobileNavBackdrop');
  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Escape key handler for drawers and search
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      toggleMobileSearch(false);
      closeCart();
      closeQuickView();
      closeSizeGuide();
      closeCheckout();
    }
  });

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      const email = emailInput ? emailInput.value : '';
      showToast(`Промокод на скидку 10% отправлен на ${email}`);
      newsletterForm.reset();
    });
  }
}

// Accordion (Care Guide)
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      item.classList.toggle('active');
    });
  });
}

// Toast Notifications System
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 300ms ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Price Formatter Helper
function formatPrice(num) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(num);
}
