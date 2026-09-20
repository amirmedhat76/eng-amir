document.addEventListener("DOMContentLoaded", function () {
    
    // 1. مراقب العناصر لتفعيل أنيميشن الظهور بسلاسة أثناء النزول
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // إذا أردت أن يتكرر الأنيميشن كلما صعدت ونزلت، احذف السطر التالي
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // ربط المراقب بكل العناصر التي تحمل فئات الأنيميشن
    const animatedElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    animatedElements.forEach(el => observer.observe(el));

    // 2. تأثير حركة ثلاثية الأبعاد (3D Tilt Effect) المتقدم للبطاقات
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // حساب زوايا الميلان بدقة بناءً على موقع الماوس
            const rotateX = -((y - centerY) / 8);
            const rotateY = (x - centerX) / 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
        });
    });
});