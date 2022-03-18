import Carousel from './modules/Carousel';

import './assets/css/style.css';

(function(){
    const menu_btns = document.querySelectorAll('[data-menu-target]');
    const menu_contents = document.querySelectorAll('[data-menu-content]');

    const description_imgs = document.querySelectorAll('[data-tab-target]');
    const description_texts = document.querySelectorAll('[data-tab-content]');

    const project_headers = document.querySelectorAll('.project-header');

    const $btnCopy = document.querySelectorAll('.btn-copy');

    const $projectContainers = document.querySelectorAll('.project-container');

    $projectContainers.forEach((projectContainer, index) => {
        let arrow_left = projectContainer.querySelector('.arrow-left');
        let arrow_right = projectContainer.querySelector('.arrow-right');
        let images = projectContainer.querySelectorAll('.image-container');
        
        let imagesSlide = new Carousel(images);
        
        arrow_left.addEventListener('click', (e) => {
            imagesSlide.previousDom();
        });
        arrow_right.addEventListener('click', (e) => {
            imagesSlide.nextDom();
        });

        images.forEach(image => {
            image.addEventListener('click', () => imagesSlide.nextDom());
        })
    });

    $btnCopy.forEach(btn => {
        btn.addEventListener('click', e => {
            const textValue = btn.parentNode.querySelector('.span-highlight').textContent;
            navigator.clipboard.writeText(textValue);
        });
    });

    project_headers.forEach(project_header => {
        project_header.addEventListener('click', e => {
            const project_container = project_header.parentNode;

            let icofont = '';
            let opener_text = '';
            
            if(project_container.querySelector('.project-details.active')){
                icofont = 'icofont-arrow-down';
                opener_text = 'Abrir';
            } else{
                icofont = 'icofont-arrow-up';
                opener_text = 'Fechar';
            }

            project_header.querySelector('.container-opener p i').className = icofont;
            project_header.querySelector('.arrow-p').textContent = opener_text;

            project_container.querySelector('.project-details').classList.toggle('active');
        });
    });


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