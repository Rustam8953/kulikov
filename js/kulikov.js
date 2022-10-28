const footerBlock = document.querySelector('footer');
const headerBlock = document.querySelector('header');

const landing = document.querySelector('.landing');

console.log(405*100/839)

console.log(1*100/16 + 'qwerty')

const footerHTML = `
<div class="footer">
    <div class="footer-main g-box p-sides">
        <div class="footer-soc f-50 w-soc slide-block m-bttm-30">
            <h2 class="f-title fs-16">Мы в соцсетях</h2>
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                    <a href="https://www.instagram.com/kulikov_kg" class="fw-bold">Instagram KG</a>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                    <a href="https://www.instagram.com/kulikov_kg" class="fw-bold">Instagram KZ</a>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                    <a href="https://www.instagram.com/kulikov_kg" class="fw-bold">Instagram UZ</a>
                </li>
                <li>
                    <div class="icon-vk"></div>
                    <a href="https://www.instagram.com/kulikov_kg" class="fw-bold">ВКонтакте RU</a>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                    </svg>
                    <a href="https://www.instagram.com/kulikov_kg" class="fw-bold">YouTube</a>
                </li>
            </ul>
        </div>
        <div class="footer-nav slide-block-left">
            <div class="footer-mobile footer-nav-item m-bttm-30">
                <h2 class="f-title fs-16">Мобильное приложение</h2>
                <ul>
                    <li class="footer-nav-link">
                        <a href="fs-14">Google Play</a>
                    </li>
                    <li class="footer-nav-link">
                        <a href="fs-14">Google Play</a>
                    </li>
                </ul>
            </div>
            <div class="footer-company footer-nav-item m-bttm-30">
                <h2 class="f-title fs-16">
                    КОМПАНИЯ
                </h2>
                <ul>
                    <li class="footer-nav-link" ><a href="" class="fs-14">Вакансии</a></li>
                    <li class="footer-nav-link" ><a href="" class="fs-14">Контакты</a></li>
                    <li class="footer-nav-link" ><a href="" class="fs-14">Реквезиты</a></li>
                    <li class="footer-nav-link" ><a href="" class="fs-14">О нас</a></li>
                    <li class="footer-nav-link" ><a href="" class="fs-14">Условия программы лояльности</a></li>
                    <li class="footer-nav-link" ><a href="" class="fs-14">Политика обработки персональных данных</a></li>
                </ul>
            </div>
            <div class="footer-shop footer-nav-item m-bttm-30">
                <h2 class="f-title fs-16">магазины</h2>
                <ul>
                    <li class="footer-nav-link"><a href="" class="fs-14">Кыргызстан</a></li>
                    <li class="footer-nav-link"><a href="" class="fs-14">Казахстан</a></li>
                    <li class="footer-nav-link"><a href="" class="fs-14">Россия</a></li>
                    <li class="footer-nav-link"><a href="" class="fs-14">Узбекистан</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-sponsor">
        <div class="slider-wrapper g-box pos-rel">
            <ul class="footer-sponsor-items" style="
            ">
                <li class="footer-sponsor-item w-s-item">
                    <img src="./img/sponsor/pay-box.png" alt="" style="width: 100%;">
                </li>
                <li class="footer-sponsor-item w-s-item">
                    <img src="./img/sponsor/visa.png" alt="" style="width: 100%;">
                </li>
                <li class="footer-sponsor-item w-s-item">
                    <img src="./img/sponsor/masterCard.png" alt="" style="width: 100%;">
                </li>
                <li class="footer-sponsor-item w-s-item">
                    <img src="./img/sponsor/balance.png" alt="" style="width: 100%;">
                </li>
                <li class="footer-sponsor-item w-s-item">
                    <img src="./img/sponsor/o.png" alt="" style="width: 100%;">
                </li>
                <li class="footer-sponsor-item w-s-item">
                    <img src="./img/sponsor/world.jpg" alt="" style="width: 100%;">
                </li>
            </ul>
        </div>
    </div>
    <div class="footer-text p-sides t-center">
        <p class="fs-16">© 2022 | Кондитерский дом «Куликовский» . Все права защищены.</p>
    </div>
</div>`;

const headerHTML = `
<div class="header">
    <div class="header-items g-box">
            <div class="header-logo p-std">
                <a href="./index.html">
                    <img src="./img/logo/logo.png" alt="">
                </a>
            </div>
    </div>
    <div class="mobile g-bg-color">
        <div class="g-box">
            <div class="mobile-btn">
                <a href="./mobile.html" class="link">
                    <button class="mobile-btn link btn-font btn-bg btn-p-1 fs-12 fw-bold c-pink md-1-button btn-bg-active">мобильное приложение</button>    
                </a>
            </div>
        </div>
    </div>
</div>`

headerBlock.insertAdjacentHTML('beforeend', headerHTML);
footerBlock.insertAdjacentHTML('beforeend', footerHTML);

console.log(screen.width)


const landingItem = document.querySelectorAll('.landing-item');

for (let i = 0; i < landingItem.length; i++) {
    landingItem[i].style.width = 450
}

window.addEventListener('DOMContentLoaded', () => {
    sliderFun()
    landingSlider()
})

window.addEventListener('resize', () => {
    sliderFun()
    landingSlider()
})

function sliderFun() {
    const footerSponsor = document.querySelector('.footer-sponsor');
    const footerSponsorItems = document.querySelector('.footer-sponsor-items');
    const footerSponsorItem = document.querySelectorAll('.footer-sponsor-item');
    const sliderWrapper = document.querySelector('.slider-wrapper')

    if(screen.width < 1140) {
        footerSponsor.classList.add('slider');
        footerSponsorItems.classList.add('slider__items');
        sliderWrapper.classList.add('slider__wrapper')
        for(let i = 0; i < footerSponsorItem.length; i++) {
            footerSponsorItem[i].classList.add('slider__item')
        }

        const slider = new ChiefSlider('.slider', {
            swipe: true,
            autoplay: true,
            interval: 5000,
            loop: true
        })
        if(!document.querySelector('.btn-control')) {
            const prevBtn = document.createElement('div');
            const nextBtn = document.createElement('div');
            sliderWrapper.appendChild(prevBtn)
            sliderWrapper.appendChild(nextBtn)
            const iconNextHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>`;
            const iconPrevHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>`;
            prevBtn.classList.add('slider__control', 'btn-control')
            nextBtn.classList.add('slider__control', 'btn-control')
            prevBtn.dataset.slide = "prev";
            nextBtn.dataset.slide = "next";
            nextBtn.innerHTML = iconNextHTML;
            prevBtn.innerHTML = iconPrevHTML;
        } else {
            false
        }
    } else if(screen.width > 1140) {
        footerSponsor.classList.remove('slider');
        footerSponsorItems.classList.remove('slider__items');
        sliderWrapper.classList.remove('slider__wrapper')
        for(let i = 0; i < footerSponsorItem.length; i++) {
            footerSponsorItem[i].classList.remove('slider__item')
        }
        footerSponsorItem.forEach((item) => {
            item.classList.remove('slider__item_active');
        })

        const allControl = document.querySelectorAll('.slider__control')

        for(let i = 0; i < allControl.length; i++) {
            allControl[i].remove()
        }
    }
}

function landingSlider() {
    if(landing)
    if(screen.width < 990) {
        const landingWrapper = document.querySelector('.landing-block');
        const landingItems = document.querySelector('.landing-items');

        landing.classList.add('slider__landing');
        landingWrapper.classList.add('slider__wrapper');
        landingItems.classList.add('slider__items');
        for(let i = 0; i < landingItem.length; i++) {
            landingItem[i].classList.add('slider__item');
        }

        const slider = new ChiefSlider('.slider__landing', {
            swipe: true,
            loop: true,
            autoplay: true,
            interval: 5000,
            refresh: true,
        })
    }
    return
}

function toInt(n) {
    return Math.round(Number(n))
}