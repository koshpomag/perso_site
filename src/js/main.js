/**
 * Portfolio JavaScript Logic
 * — Модульная инициализация функций интерфейса
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initContactForm();
});

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

    // Автоматическое закрытие меню при клике на любую из секций-ссылок
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

        // Формирование объекта с данными
        const payload = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };

        // Логирование в консоль, чтобы ты видела работу скрипта в DevTools
        console.log('Sending message:', payload);

        // Мягкое уведомление об успешном "логировании"
        alert(`Спасибо за проявленный интерес, ${payload.name}! Данные формы успешно обработаны и сохранены (логировано в консоли браузера).`);
        
        form.reset();
    });
}