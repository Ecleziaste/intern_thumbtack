"use strict";

let columns = document.querySelectorAll('.schools__column');
let animations = document.querySelectorAll('.item-schools__item');
// // храним тут наши колонки с анимацией, чтобы далее добавить класс с запуском анимации
// // можно перебрать циклом в new IntersectionObserver и добавить класс к каждому?

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            // console.log('in the view');
            // console.log(animations);
            for (let i = 0; i < 2; i++) {
                animations[i].classList.add('animate');
            };
            observer.unobserve(entry.target);
        }
        //  else {
        //     console.log('out of view');
        // }
    });
});

// observer.observe(column);

columns.forEach(column => {
    observer.observe(column);
});
