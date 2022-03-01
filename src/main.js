import './assets/css/style.css';

(function(){
    const description_imgs = document.querySelectorAll('[data-tab-target]');
    const description_texts = document.querySelectorAll('[data-tab-content]');

    description_imgs.forEach(description_img => {
        description_img.addEventListener('click', e => {
            description_imgs.forEach(description_img => {
                description_img.classList.remove('mastering_img-selected');
            })
            description_texts.forEach(description_text => {
                description_text.classList.remove('description_show');
            });
            description_img.classList.add('mastering_img-selected');
            const text = document.querySelector(description_img.dataset.tabTarget);
            text.classList.add('description_show');
        });
    });
})();