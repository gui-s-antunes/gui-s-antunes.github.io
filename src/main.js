import './assets/css/style.css';

(function(){
    const menu_btns = document.querySelectorAll('[data-menu-target]');
    const menu_contents = document.querySelectorAll('[data-menu-content]');

    const description_imgs = document.querySelectorAll('[data-tab-target]');
    const description_texts = document.querySelectorAll('[data-tab-content]');


    menu_btns.forEach(menu_btn => {
        menu_btn.addEventListener('click', e => {
            menu_btns.forEach(menu_btn => {
                menu_btn.classList.remove('active');
            });
            menu_contents.forEach(menu_content => {
                menu_content.classList.remove('active');
            });

            menu_btn.classList.add('active');
            const text = document.querySelector(menu_btn.dataset.menuTarget);
            text.classList.add('active');
        })
    });


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