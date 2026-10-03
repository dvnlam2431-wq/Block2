// ---------- TỪ ĐIỂN ĐA NGÔN NGỮ ----------
const DICT = {
    vi: {
        navAbout: "Về nhóm", navSkills: "Kỹ năng", navProj: "Dự án", navContact: "Liên hệ",
        heroSub: "hi, we're web developers",
        heroDesc: "Chúng mình là nhóm 4 sinh viên với sở thích lập trình, luôn nỗ lực xây dựng những sản phẩm công nghệ sáng tạo, tối ưu hiệu năng và mang lại trải nghiệm người dùng tốt nhất.",
        aboutTitle: "Về chúng tôi",
        aboutDesc: "Chúng mình là nhóm sinh viên cùng học tại trường. Mỗi bạn một thế mạnh, cùng nhau xây dựng sản phẩm từ ý tưởng đến khi chạy thật. Chúng mình thích những dự án rõ ràng, giao diện gọn gàng và code dễ bảo trì. Cùng tạo ra điều gì đó thật tuyệt nhé!",
        contactTitle: "Liên hệ", contactSub: "Liên hệ với chúng tôi qua"
    },
    en: {
        navAbout: "About", navSkills: "Skills", navProj: "Projects", navContact: "Contact",
        heroSub: "hi, we're web developers",
        heroDesc: "We are a team of 4 programming students, always striving to build creative tech products, optimize performance, and deliver the best user experiences.",
        aboutTitle: "About us",
        aboutDesc: "We are a student team from the same university. Each with our own strengths, we build products together from idea to deployment. We love clear projects, clean UI, and maintainable code. Let's create something awesome!",
        contactTitle: "Let's talk", contactSub: "Reach out to us via"
    }
};

// ---------- DỮ LIỆU ĐA NGÔN NGỮ ----------
const SERVICES = [
    { vi: ["Frontend", "Xây dựng giao diện bằng HTML, CSS và JavaScript, bám sát thiết kế và chạy mượt trên mọi trình duyệt."], en: ["Frontend", "Building interfaces with HTML, CSS, and JavaScript, strictly following designs for smooth cross-browser performance."] },
    { vi: ["Responsive", "Bố cục co giãn tốt từ điện thoại đến màn hình lớn, ưu tiên trải nghiệm trên mobile."], en: ["Responsive", "Flexible layouts from mobile to large screens, prioritizing mobile-first experiences."] },
    { vi: ["Backend & API", "Xây dựng logic phía máy chủ, API và cơ sở dữ liệu cho các ứng dụng web hoàn chỉnh."], en: ["Backend & API", "Building server-side logic, APIs, and databases for full-stack web applications."] },
    { vi: ["Game & Đồ họa", "Lập trình game 2D với C++, tích hợp thư viện SFML và thiết kế asset Pixel Art."], en: ["Game & Graphics", "2D game programming with C++, SFML integration, and Pixel Art asset design."] },
    { vi: ["Teamwork với Git", "Phối hợp qua GitHub: chia nhánh, review code và giữ lịch sử thay đổi rõ ràng."], en: ["Teamwork with Git", "Collaborating via GitHub: branching, code reviewing, and maintaining clean commit histories."] },
    { vi: ["Tối ưu & Testing", "Viết test đảm bảo độ ổn định, giảm thời gian tải và viết code gọn để trang luôn nhanh."], en: ["Optimize & Testing", "Writing tests for stability, reducing load times, and keeping code clean for fast rendering."] }
];

const PROJECTS = [
    {
        cat: { vi: "TÌM MÓN ĂN KHI ĐI TOUR", en: "FOOD FINDER FOR TOURS" }, name: "UIA SmartTour", url: "https://github.com/mkbang2411-oss/TDTT---U-I-A", preview: "tour", image: "UIA.png",
        desc: { vi: "Website hỗ trợ tìm kiếm và gợi ý các món ăn đặc sản địa phương khi tham gia tour du lịch.", en: "A website that helps find and recommends local food specialties during tours." }
    },
    {
        cat: { vi: "WEB QUẢN LÝ MỘ PHẦN", en: "CEMETERY MANAGEMENT WEB" }, name: "Vĩnh Phúc Viên", url: "https://github.com/torusama/SE_PRO", preview: "vinh", image: "vpy.png",
        desc: { vi: "Hệ thống quản lý thông tin và định vị vị trí mộ phần trực quan, dễ sử dụng.", en: "An intuitive and easy-to-use cemetery information management and grave positioning system." }
    },
    {
        cat: { vi: "WEB NỀN TẢNG ĐẠI HỌC", en: "UNIVERSITY PLATFORM WEB" }, name: "CampUS", url: "https://github.com/VincesPowder/CampUS", preview: "campus", image: "campus.png",
        desc: { vi: "Nền tảng hỗ trợ sinh viên tích hợp AI chatbot, quản lý tiến độ học tập và hệ thống khảo sát.", en: "Student support platform integrating AI chatbot, academic progress tracking, and survey systems." }
    },
    {
        cat: { vi: "GAME 2D C++ & SFML", en: "2D C++ & SFML GAME" }, name: "Momotaro Caro", url: "https://github.com/lkhang3000/Caro_Project_2", preview: "caro", image: "caro.png",
        desc: { vi: "Game Caro 2D với giao diện menu điều hướng và đồ họa Pixel Art lấy cảm hứng từ cổ tích Nhật Bản Momotaro.", en: "2D Tic-Tac-Toe game with a navigable menu and Pixel Art graphics inspired by the Japanese Momotaro fairytale." }
    }
];

const TAGS = ["HTML", "CSS", "JavaScript", "Git", "Responsive", "API", "Database", "UI", "GitHub", "Teamwork", "Frontend", "Backend", "Deploy", "Debug", "Design", "Code", "Web", "Node", "SQL", "React", "Python"];
const SKILL_ART = { HTML: ["</>", "#b600a8", "#6417a2"], CSS: ["#", "#b600a8", "#351047"], JavaScript: ["JS", "#f0a51a", "#6c3d0b"], Git: ["⑂", "#f05a36", "#5a172b"], Responsive: ["▣", "#29b6c7", "#164b75"], API: ["{ }", "#36c2a1", "#16505c"], Database: ["◉", "#5d8cff", "#272b73"], UI: ["◈", "#ef5da8", "#662c9c"], GitHub: ["⌘", "#d4d7e2", "#414153"], Teamwork: ["●●", "#ff8b57", "#8a286b"], Frontend: ["<>", "#48d8cd", "#154e83"], Backend: ["▤", "#786bff", "#29225d"], Deploy: ["↗", "#55d6a6", "#196c73"], Debug: ["⌕", "#ff6868", "#682e6e"], Design: ["✦", "#ff7eb6", "#5b36a0"], Code: ["{…}", "#64b5ff", "#3a287b"], Web: ["◎", "#27c3e6", "#282c77"], Node: ["⬡", "#80c342", "#25523c"], SQL: ["▤", "#f6a84a", "#6b3834"], React: ["⚛", "#57d8f2", "#3a4287"], Python: ["Py", "#ffd454", "#2868a2"] };

const $ = s => document.querySelector(s);

// ---------- TRẠNG THÁI THEME & NGÔN NGỮ ----------
let currentLang = localStorage.getItem('lang') || 'vi';
let currentTheme = localStorage.getItem('theme') || 'dark';

// Khởi tạo Theme
document.documentElement.setAttribute('data-theme', currentTheme);
const themeBtn = $('#themeToggle');
const langBtn = $('#langToggle');
if (themeBtn) themeBtn.textContent = currentTheme === 'dark' ? '☀️ LIGHT' : '🌙 DARK';
if (langBtn) langBtn.textContent = currentLang === 'vi' ? '🌐 EN' : '🌐 VI';

// ---------- HÀM RENDER ĐỘNG ----------
function renderContent() {
    // 1. Dịch text tĩnh
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (DICT[currentLang][key]) el.innerHTML = DICT[currentLang][key];
    });

    // 2. Chạy lại hiệu ứng tách chữ
    const an = $('#anim');
    if (an) an.innerHTML = [...an.textContent].map(c => c === ' ' ? ' ' : `<span class="ch on">${c}</span>`).join('');

    // 3. Render Skills
    const listEl = $('#list');
    if (listEl) listEl.innerHTML = SERVICES.map((s, i) => `<div class="item fade in" style="--d:${i * .1}s"><div class="num">0${i + 1}</div><div><h3>${s[currentLang][0]}</h3><p>${s[currentLang][1]}</p></div></div>`).join('');

    // 4. Render Projects
    const stackEl = $('#stack');
    if (stackEl) stackEl.innerHTML = PROJECTS.map((p, i) => `<div class="wrap"><article class="card" style="top:calc(clamp(6rem,9vw,8rem) + ${i * 28}px)">
        <div class="top"><div class="num">0${i + 1}</div><div class="meta"><small>${p.cat[currentLang]}</small><h3>${p.name}</h3><p class="proj-desc">${p.desc[currentLang]}</p></div><a class="ghost" href="${p.url}" target="_blank" rel="noopener">View Repository</a></div>
        <div class="project-shot"><img src="${p.image}" alt="Giao diện ${p.name}" loading="lazy"><span class="shot-label">GIAO DIỆN THỰC TẾ</span></div></article></div>`).join('');
}

// Chạy khởi tạo lần đầu
renderContent();

// ---------- RENDER BĂNG CHUYỀN SKILLS ----------
const tilesHTML = (items) => [...items, ...items, ...items].map((label, i) => {
    const [mark, c1, c2] = SKILL_ART[label] || ["✦", "#b600a8", "#351047"];
    const safeMark = mark.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const art = `<svg class="tile-art" viewBox="0 0 420 270" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="g${i}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient><pattern id="p${i}" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="white" stroke-opacity=".1"/></pattern></defs><rect width="420" height="270" fill="url(#g${i})"/><rect width="420" height="270" fill="url(#p${i})"/><circle cx="340" cy="65" r="100" fill="white" opacity=".08"/><circle cx="55" cy="250" r="105" fill="black" opacity=".13"/><rect x="27" y="25" width="366" height="220" rx="18" fill="none" stroke="white" stroke-opacity=".22"/><text x="210" y="158" text-anchor="middle" font-family="Arial,sans-serif" font-size="96" font-weight="700" fill="white" fill-opacity=".84">${safeMark}</text><path d="M45 52h7m12 0h7m12 0h7" stroke="white" stroke-opacity=".7" stroke-width="5" stroke-linecap="round"/></svg>`;
    return `<div class="tile">${art}<span class="tile-label">${label}</span></div>`;
}).join('');

if ($('#r1')) $('#r1').innerHTML = tilesHTML(TAGS.slice(0, 11));
if ($('#r2')) $('#r2').innerHTML = tilesHTML(TAGS.slice(11));

// ---------- SỰ KIỆN NÚT BẤM ----------
if (themeBtn) {
    themeBtn.onclick = () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        themeBtn.textContent = currentTheme === 'dark' ? '☀️ LIGHT' : '🌙 DARK';
    };
}

if (langBtn) {
    langBtn.onclick = () => {
        currentLang = currentLang === 'vi' ? 'en' : 'vi';
        localStorage.setItem('lang', currentLang);
        langBtn.textContent = currentLang === 'vi' ? '🌐 EN' : '🌐 VI';
        renderContent();
    };
}

// ---------- FADE-IN ----------
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { rootMargin: '50px' });
document.querySelectorAll('.fade').forEach(el => io.observe(el));

// ---------- CHỮ HIỆN THEO SCROLL ----------
const an = $('#anim'), txt = an.textContent;
an.innerHTML = [...txt].map(c => c === ' ' ? ' ' : `<span class="ch">${c}</span>`).join('');
const chars = [...an.querySelectorAll('.ch')];

// ---------- PROFILE POPUP ----------
const profiles = {
    lam: { name: 'Đoàn Võ Ngọc Lâm', student: 'MSSV 24127435', description: 'Thành viên nhóm phát triển website, tập trung xây dựng giao diện và trải nghiệm người dùng.' },
    loc: { name: 'Khả Phước Lộc', student: 'MSSV 24127073', description: 'Thành viên nhóm phát triển website, tham gia xây dựng chức năng và hoàn thiện sản phẩm.' },
    duy: { name: 'Nguyễn Trần Lan Duy', student: 'MSSV 24127158', description: 'Thành viên nhóm, đảm nhiệm phát triển game 2D, lập trình C++ và xây dựng nền tảng web.' },
    tram: { name: 'Nguyễn Thị Ngọc Trâm', student: 'MSSV 24127132', description: 'Thành viên nhóm, phối hợp phát triển, kiểm thử chức năng và hoàn thiện các dự án phần mềm.' }
};
const profileBackdrop = $('#profileBackdrop'), profileClose = $('.profile-close');
let profileOpener = null;
function closeProfile() { profileBackdrop.classList.remove('open'); profileBackdrop.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; if (profileOpener) profileOpener.focus() }
document.querySelectorAll('[data-profile]').forEach(button => button.addEventListener('click', e => {
    profileOpener = button; const p = profiles[button.dataset.profile];
    $('#profileName').textContent = p.name; $('#profileStudent').textContent = p.student; $('#profileDescription').textContent = p.description;
    profileBackdrop.classList.add('open'); profileBackdrop.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; profileClose.focus();
}));
profileClose.addEventListener('click', closeProfile);
profileBackdrop.addEventListener('click', e => { if (e.target === profileBackdrop) closeProfile() });
document.querySelectorAll('[data-profile]').forEach(button => button.addEventListener('click', e => {
    profileOpener = button; 
    const p = profiles[button.dataset.profile];
    
    // Cập nhật thông tin text
    $('#profileName').textContent = p.name; 
    $('#profileStudent').textContent = p.student; 
    $('#profileDescription').textContent = p.description;
    
    // THÊM DÒNG NÀY: Lấy chữ cái đầu tiên của từ cuối cùng trong tên (Ví dụ "Nguyễn Thị Ngọc Trâm" -> "T")
    const initial = p.name.split(' ').pop().charAt(0);
    document.querySelector('.profile-avatar').textContent = initial;

    // Hiển thị popup
    profileBackdrop.classList.add('open'); 
    profileBackdrop.setAttribute('aria-hidden', 'false'); 
    document.body.style.overflow = 'hidden'; 
    profileClose.focus();
}));
// ---------- SCROLL ----------
const mq = $('.marquee'), r1 = $('#r1'), r2 = $('#r2'), cards = [...document.querySelectorAll('.card')], stack = $('#stack');
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
function onScroll() {
    const H = innerHeight, y = scrollY;
    // marquee
    const top = mq.getBoundingClientRect().top + y;
    const off = (y - top + H) * .3;
    r1.style.transform = `translateX(${off - 200}px)`;
    r2.style.transform = `translateX(${-(off - 200)}px)`;
    // chữ about
    const r = an.getBoundingClientRect();
    const p = clamp((H * .8 - r.top) / (r.height + H * .6), 0, 1);
    chars.forEach((c, i) => c.classList.toggle('on', i / chars.length < p));
    // stacking cards
    const sr = stack.getBoundingClientRect();
    const prog = clamp(-sr.top / Math.max(1, sr.height - H * .5) + .15, 0, 1);
    cards.forEach((c, i) => {
        const t = 1 - (cards.length - 1 - i) * .03, start = i / cards.length;
        const k = clamp((prog - start) / (1 - start), 0, 1);
        c.style.transform = `scale(${1 + (t - 1) * k})`;
    });
}
addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll();