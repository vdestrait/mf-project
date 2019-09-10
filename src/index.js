import "./styles.scss"; // entry poin for styles
import { test } from "./app/main" // example of an ES6 import

console.log(test); // should display "it works!" in console on launch


/* TIMELINE mvtsORDION */

// Decade
var dates = document.getElementsByClassName("date-heading");
var i;

for (i = 0; i < dates.length; i++) {
  dates[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var decade = this.nextElementSibling;
    if (decade.classList.contains("open")) {
        decade.classList.remove("open");
    } else {
        decade.classList.add("open");
    }
  });
} 

// Movements
var mvts = document.getElementsByClassName("mvt-heading");
var i;

for (i = 0; i < mvts.length; i++) {
  mvts[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var mvtBody = this.nextElementSibling;
    if (mvtBody.classList.contains("open")) {
        mvtBody.classList.remove("open");
    } else {
        mvtBody.classList.add("open");
    }
  });
} 