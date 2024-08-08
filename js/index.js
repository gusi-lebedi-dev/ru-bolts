const elements = [
    document.querySelector('.products-title'),
    document.querySelector('.products-block'),
    document.querySelector('.about-us-title'),
    document.querySelector('.about-us-block-left'),
    document.querySelector('.about-us-block-right'),
    document.querySelector('.advantages-title'),
    document.querySelector('.to-buy-title'),
    document.querySelector('.to-buy-content-item-left'),
    document.querySelector('.to-buy-content-item-right'),
    document.querySelector('.to-buy-image'),
    document.querySelector('.contact-title'),
    document.querySelector('.contacts-content-item'),
    document.querySelector('.appointment'),
    document.querySelector('.section-use'),
    document.querySelector('.section-characteristics'),
    document.querySelector('.section-temperature-conditions'),
    document.querySelector('.section-product-specification'),
    document.querySelector('.section-lift-specification-content'),
    document.querySelector('.section-helpful'),

].filter(element => element !== null && element !== undefined);

document.querySelectorAll('.product-image').forEach(element => {
    if (element !== null && element !== undefined) {
        elements.push(element);
    }
});

document.querySelectorAll('.advantages-item-image').forEach(element => {
    if (element !== null && element !== undefined) {
        elements.push(element);
    }
});

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(callback, options);

elements.forEach((element) => observer.observe(element));

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



