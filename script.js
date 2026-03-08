
let selectedPerson = "";

const cards = document.querySelectorAll(".card");
const button = document.getElementById("congratsBtn");

const mainPage = document.getElementById("mainPage");
const greetingPage = document.getElementById("greetingPage");

const greetingTitle = document.getElementById("greetingTitle");
const greetingText = document.getElementById("greetingText");



/* выбор карточки */

cards.forEach(card => {

card.addEventListener("click", () => {

cards.forEach(c => c.classList.remove("active"));

card.classList.add("active");

selectedPerson = card.dataset.person;

button.disabled = false;

});

});



/* кнопка поздравить */

button.addEventListener("click", () => {

mainPage.style.display = "none";
greetingPage.style.display = "block";

let text = "";

if(selectedPerson === "Бабушка"){
text = "Дорогая бабушка! Поздравляю тебя с 8 марта! Пусть каждый день приносит радость, тепло и улыбки. Спасибо за твою доброту и заботу!";
}

if(selectedPerson === "Мама"){
text = "Дорогая мама! С 8 марта! Спасибо за твою любовь, поддержку и заботу. Пусть в твоей жизни будет много счастья и радости!";
}

if(selectedPerson === "Сестра"){
text = "Дорогая сестра! Поздравляю тебя с 8 марта! Желаю счастья, вдохновения, прекрасного настроения и исполнения всех мечт!";
}

if(selectedPerson === "Тётя"){
text = "Дорогая тётя! С праздником 8 марта! Пусть весна принесёт радость, тепло и много счастливых моментов!";
}

if(selectedPerson === "Подруга"){
text = "Дорогая подруга! С 8 марта! Пусть в твоей жизни будет много улыбок, счастья и прекрасных моментов!";
}

greetingTitle.textContent = "С 8 марта, " + selectedPerson + "!";
greetingText.textContent = text;

});
