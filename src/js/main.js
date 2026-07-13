/**
 * Portfolio JavaScript Logic
 * — Модульная инициализация функций интерфейса
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();      // Инициализация темной темы
    initMobileNav();  // Мобильное меню
    initContactForm(); // Контактная форма
});

/**
 * Логика переключения темной/светлой темы
 */
/**
 * Логика переключения темной/светлой темы
 */
function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    
    // Если кнопка еще не появилась в DOM, подождем полной загрузки окна
    if (!toggleBtn) {
        window.addEventListener('load', initTheme);
        return;
    }

    const icon = toggleBtn.querySelector('i');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (icon) icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (icon) icon.classList.replace('fa-sun', 'fa-moon');
    }

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';

        if (currentTheme === 'light') {
            newTheme = 'dark';
            if (icon) icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            if (icon) icon.classList.replace('fa-sun', 'fa-moon');
        }

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

/**
 * Инициализация адаптивного мобильного меню (бургер)
 */
function initMobileNav() {
    const burger = document.getElementById('burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (!burger || !navLinks) return;

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
            }
        });
    });
}

/**
 * Валидация и локальная отправка формы обратной связи
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('form-name');
        const emailInput = document.getElementById('form-email');
        const messageInput = document.getElementById('form-message');

        if (!nameInput || !emailInput || !messageInput) return;

        const payload = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };

        console.log('Sending message:', payload);
        alert(`Спасибо за проявленный интерес, ${payload.name}! Данные формы успешно обработаны и сохранены.`);
        
        form.reset();
    });
}