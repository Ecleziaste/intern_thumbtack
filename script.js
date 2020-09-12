"use strict";
// let columns = document.querySelector('.schools__row');

// let observer = new IntersectionObserver((entry, observer) => {
//     console.log('entry:', entry);
//     console.log('observer:', observer);
// });

// observer.observe(columns);



let columns = document.querySelectorAll('.schools__column');
let animations = document.querySelectorAll('.item-schools__item');
animations.classList.add('animate');
// // храним тут наши колонки с анимацией, чтобы далее добавить класс с запуском анимации
// // можно перебрать циклом в new IntersectionObserver и добавить класс к каждому?

// console.log(columns.classList);
// console.log(animations.classList);
// почему выдают undefined??

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            console.log('in the view');
            console.log(animations);
            animations.classList.add('animate');
            // КУДА ВСТАВИТЬ, ЧТОБ РАБОТАЛО??
            // document.querySelectorAll('.item-schools__item').classList.add('.animate');

            // entry.target.style.animation = 'running';
            observer.unobserve(entry.target);
        } else {
            console.log('out of view');
        }
    });
});

columns.forEach(column => {
    observer.observe(column);
});

// document.querySelectorAll('.item-schools__item').classList.add('.animate');




// // получаем элемент с классом '.schools__row',т.е. с колонками где есть нужная нам анимация этих колонок
// let columns = document.querySelectorAll('.item-schools__item');

// // function makeItVisible() {
// //     document.querySelector(".schools__row").style.visibility = "visible";
// //     // document.querySelector(".animated_column_one").style.animation = "running";
// // }

// let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1
// };

// let callback = function (columns, observer) {
//     columns.forEach(entry => {
//         if (entry.intersectionRatio > 0) {
//             entry.target.style.visibility = visible;
//         }
//     });
//     /* Content excerpted, show below */
// };

// let observer = new IntersectionObserver(callback, options);

// observer.observe(columns);



// let observer = new IntersectionObserver((entries) => {
//     console.log(entries)
// });

// observer = new IntersectionObserver((entries) => {

//     entries.forEach(entry => {
//         if (entry.intersectionRatio > 0) {
//             entry.target.style.visibility = visible;
//         }

//     })

// })

// columns.forEach(column => {
//     observer.observe(column)
// })


// //функция-обработчик события принимающая 2 параметра
// function handleAnimations(myAnim, observer) {
//     myAnim.forEach(myAnimSingle => {
//         console.log(myAnimSingle.IntersectionRatio);
//         //берет элементы с анимациями при изменении положения страницы и у этих элементов появляется свойство IntersectionRatio,
//         // которое показывает, насколько элемент пересек зону видимости
//         if (myAnimSingle.IntersectionRatio > 0) {
//             loadAnimation(myAnimSingle.target);
//         }
//     })
// }

// // function loadAnimation()

// // создаем наблюдателя(экземпляр IntersectionObserver)
// let observer = new IntersectionObserver(handleAnimations, options);
// // вешаем его на наши колонки
// columns.forEach((columns) => {
//     observer.observe(columns);
// }
// )
// //теперь объект observer с помощью метода observe следит за колонкками с классом schools__column





// let callback = function (entries, observer) {
//     /* Content excerpted, show below */
// };

// let observer = new IntersectionObserver(callback, options);

// // Создали наблюдателя, теперь создаем элемент target, за которым будем наблюдать

// let target = document.querySelector('.item-schools__item animated_column_one');
// observer.observe(target);