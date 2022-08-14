/* Получаем элементы с  HTML */

/* Получаем секундную стрелку */
const sec = document.querySelector('.s'),
    min = document.querySelector('.m'), /* Получаем минутную стрелку */
    hour = document.querySelector('.h'), /* Получаем часовую стрелку */
    numberHours = document.querySelector('.hours'),
    numberMinutes = document.querySelector('.minutes')

// new Date() - получает текущую дату с устройства
// let date = new Date()

// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());


function clock() {

    let time = new Date()
    let seconds = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30

    sec.style = `transform: rotate(${seconds}deg);`
    min.style = `transform: rotate(${minutes}deg);`
    hour.style = `transform: rotate(${hours}deg);`
    // innerHTML - заменяет внутренний контент HTML элемента

    numberHours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    numberMinutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()


    // рекурсия это когда функция внутри себя вызывает саму себя
    setTimeout(() => clock(), 1000);


}

clock()




// setTimeout(() => {
//     console.log('asddfdf');
// }, 2000);

// setInterval(() => {
//     console.log('interval');
// }, 3000);

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem')


// classList - работает с классами HTML элемента

links.forEach((link, i) => {
    link.addEventListener('click', (e) => {
        e.preventDefault() /* отменяет обычное поведение элемента в браузере */
        removeActiveClass(links, 'active')
        removeActiveClass(tabs, 'active')
        link.classList.add('active')
        tabs[i].classList.add('active')
    })
})


function removeActiveClass(array, className) {
    array.forEach(el => {
        el.classList.remove(className)
    })
}  


// Секундомер



const btn = document.querySelector('.stopwatch__btn'),
span = document.querySelector('.tabsLink__span'),
watchHours = document.querySelector('.stopwatch__hours'),
watchMin = document.querySelector('.stopwatch__minutes'),
watchSec = document.querySelector('.stopwatch__seconds')
let interval;


    btn.addEventListener('click', () => {
        if(btn.innerHTML == 'start'){
            stopwatch()
            btn.innerHTML = 'stop'
            span.classList.add('active')
            } else if (btn.innerHTML == 'stop'){
            btn.innerHTML = 'reset'
            span.classList.remove('active')
            span.classList.add('active_clear')
            clearTimeout(interval)
            } else if(btn.innerHTML == 'reset'){
            btn.innerHTML = 'start'
            watchHours.innerHTML = 0
            watchMin.innerHTML = 0
            watchSec.innerHTML = 0
            span.classList.remove('active_clear')
            }
    })


    
            function stopwatch () {
                    watchSec.innerHTML++                   
                        if (watchSec.innerHTML > 59){
                            watchMin.innerHTML++ 
                            watchSec.innerHTML = 0
                        } else if (watchMin.innerHTML > 59){
                            watchHours++
                            watchMin.innerHTML = 0
                        }                    
                    interval = setTimeout(() => stopwatch(), 1000);
            }



    
