/* стрелы */
let arrow_1 = document.getElementById("arrow_1");
let arrow_2 = document.getElementById("arrow_2");
let arrow_3 = document.getElementById("arrow_3");
let arrow_4 = document.getElementById("arrow_4");

/* текст стрел */
let text__arrow_1 = document.getElementById("text__arrow_1");
let text__arrow_2 = document.getElementById("text__arrow_2");
let text__arrow_3 = document.getElementById("text__arrow_3");
let text__arrow_4 = document.getElementById("text__arrow_4");

let arrow_1__img = document.getElementById("arrow_1__img");
let arrow_2__img = document.getElementById("arrow_2__img");
let arrow_3__img = document.getElementById("arrow_3__img");
let arrow_4__img = document.getElementById("arrow_4__img");

/* флаги */
let flag_1 = 0;
let flag_2 = 0;
let flag_3 = 0;
let flag_4 = 0;


/* функции */
function text_1() {
    arrow_1.addEventListener("click", function() {
        if (flag_1 == 0) {
            flag_1 = 1;
            text__arrow_1.style.display = "inline";
            arrow_1__img.classList.add("arrow_animate");
        } else {
            flag_1 -= 1;
            text__arrow_1.style.display = "none";
            arrow_1__img.classList.remove("arrow_animate");
        }
    });
}


function text_2() {
    arrow_2.addEventListener("click", function() {
        if (flag_2 == 0) {
            flag_2 = 1;
            text__arrow_2.style.display = "inline";
            arrow_2__img.classList.add("arrow_animate");
        } else {
            flag_2 -= 1;
            text__arrow_2.style.display = "none";
            arrow_2__img.classList.remove("arrow_animate");
        }
    });
}


function text_3() {
    arrow_3.addEventListener("click", function() {
        if (flag_3 == 0) {
            flag_3 = 1;
            text__arrow_3.style.display = "inline";
            arrow_3__img.classList.add("arrow_animate");
        } else {
            flag_3 -= 1;
            text__arrow_3.style.display = "none";
            arrow_3__img.classList.remove("arrow_animate");
        }
    });
}


function text_4() {
    arrow_4.addEventListener("click", function() {
        if (flag_4 == 0) {
            flag_4 = 1;
            text__arrow_4.style.display = "inline";
            arrow_4__img.classList.add("arrow_animate");
        } else {
            flag_4 -= 1;
            text__arrow_4.style.display = "none";
            arrow_4__img.classList.remove("arrow_animate");
        }
    });
}
/* вызив всех функции */
text_1();
text_2();
text_3();
text_4();