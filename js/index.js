const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    root: document.body,
    rootMargin: "0px",
    threshold: 0.1,
});

document.querySelectorAll('[data-animate]').forEach((element) => observer.observe(element));

const openModal = () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const modal = document.querySelector('.modal');
    if (modal.classList.contains('show')) {
        modal.classList.remove('show');
        burgerMenu.classList.remove('active')
    } else {
        modal.classList.add('show');
        burgerMenu.classList.add('active')
    }
}

