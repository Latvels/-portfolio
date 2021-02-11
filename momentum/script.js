// DOM elements
const time = document.getElementById("time");
const dateTime = document.getElementById("date");
const dayDate = document.getElementById("day");
const grerting = document.getElementById("grerting");
const gretingName = document.getElementById("name");
const fieldFocus = document.getElementById("focus");

const BGimage = document.getElementById("background");

//Show Time

function showTime() {
    //Time
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let second = today.getSeconds();
    //Date
    let dayNumber = today.getDate();
    let dayName = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();

    //Date day
    if (dayName === 0) {
        dayDate.innerHTML = "Sunday";
    } else if (dayName === 1) {
        dayDate.innerHTML = "Monday";
    } else if (dayName === 2) {
        dayDate.innerHTML = "Tuesday";
    } else if (dayName === 3) {
        dayDate.innerHTML = "Wednesday";
    } else if (dayName === 4) {
        dayDate.innerHTML = "Thursday";
    } else if (dayName === 5) {
        dayDate.innerHTML = "Friday";
    } else if (dayName === 6) {
        dayDate.innerHTML = "Saturday";
    } else {
        dayDate.innterHTML = "The day everything works out";
    }

    //Output time
    time.innerHTML = `${hour}:${addZero(minutes)}:${addZero(second)}`;
    
    //Output date
    dateTime.innerHTML = `${addZero(dayNumber)}.${addZero(month)}.${year}`;

    setTimeout(showTime, 1000);
}

//Add zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set backround and greeting
function setBgGreet() {
    let today = new Date();
    let hour = today.getHours();

    if (hour > 6 && hour < 12) {
        //morning
        BGimage.style.backgroundImage = 'url("./assets/morning/1.jpg")'
        grerting.textContent = "Good Morning, ";
    } else if (hour > 12 && hour < 18) {
        //afternoon
        BGimage.style.backgroundImage = 'url("./assets/afternoon/1.jpg")'
        grerting.textContent = "Good Afternoon, ";
    } else if (hour > 18 && hour < 24) {
        //evening 
        BGimage.style.backgroundImage = 'url("./assets/evening/1.jpg")'
        grerting.textContent = "Good Evening, ";
    } else {
        //Night
        BGimage.style.backgroundImage = 'url("./assets/night/1.jpg")'
        grerting.textContent = "Good Night, ";
    }
}

//Get name
function getName() {
    if (localStorage.getItem("name") === null) {
        gretingName.textContent = " ";
    } else {
        gretingName.textContent = localStorage.getItem("name");
    }
}

//Set name
function setName(e) {
    if (e.type === "keypress") {
        //Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13 || e.characterCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            gretingName.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}


//Get focus
function getfocus() {
    if (localStorage.getItem("focus") === null) {
        fieldFocus.textContent = " ";
    } else {
        fieldFocus.textContent = localStorage.getItem("focus");
    }
}

//Set focus
function setFocus(e) {
    if (e.type === "keypress") {
        //Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13 || e.characterCode == 13) {
            localStorage.setItem("focus", e.target.innerText);
            fieldFocus.blur();
        }
    } else {
        localStorage.setItem("focus", e.target.innerText);
    }
}


gretingName.addEventListener("keypress", setName);
gretingName.addEventListener("blur", setName);
fieldFocus.addEventListener("keypress", setFocus);
fieldFocus.addEventListener("blur", setFocus);

//Run
showTime();
setBgGreet();
getName();
getfocus();

//Quote
document.addEventListener("DOMContentLoaded", () => {
    //DOM elements
    const button = document.getElementById("btn");
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");
  
    async function updateQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        quote.textContent = data.content;
        cite.textContent = data.author;
      } else {
        quote.textContent = "An error occured";
        console.log(data);
      }
    }
  
    button.addEventListener("click", updateQuote);

    updateQuote();
  });


//BG every 1 o'clock
const base = './assets/night/';
const images = ['1.jpg', '2.jpg', '3.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg'];
let i = 0;

function viewBgImage(data) {
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {      
    BGimage.style.backgroundImage = `url(${src})`;
  }; 
}

function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
} 

const BG_btn = document.querySelector('.next__BG__btn');
BG_btn.addEventListener('click', getImage);
