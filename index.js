// Напиши скрипт який при кліку на кнопку буде виводити на екран 
// повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки

const button = document.querySelector('#button');
button.addEventListener('click', () => {
    alert('Hello World!');
});

// Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його
// в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.

let input;
const p = document.querySelector('#guessResult');
let randomNumber;
const checkGuess = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    input = document.querySelector('#guessField').value;
    if (input < 1 || input > 100) {
        return p.textContent = 'Введіть число від 1 до 100';
    } else if (input === randomNumber) {
        return p.textContent = 'Ви вгадали число!';
    } else {
        return p.textContent = 'Ви не вгадали число!';
    };
};

// Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.

const html = document.querySelector('html');
let clicks = 0;
function click() {
    return clicks += 1;
}
html.addEventListener('click', () => {
    click()
    console.log(clicks);
})

// Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного
// елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.

const applyCallbackToEachElement = (arr) => {
    arr.forEach(function callback(number) {
        console.log(number ** 2);
    });
};
const arr = [3, 2, 8, 1, 9];
const result = applyCallbackToEachElement(arr);

// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна
// приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

const discountPrice = (good, discount) => {
    console.log(good / discount);
};
discountPrice(200, 25);