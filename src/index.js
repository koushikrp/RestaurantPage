import { default as pageLoad } from "./restaurant-review";
import { menuDetails } from "./menu";
import { contactDetails } from "./contact.js";
// console.log("watching");
let head = document.querySelector("header");
let home = document.createElement("button");
home.textContent = "HOME";
let menu = document.createElement("button");
menu.textContent = "MENU";
let contact = document.createElement("button");
contact.textContent = "CONTACT";
head.appendChild(home);
head.appendChild(menu);
head.appendChild(contact);

pageLoad();

home.addEventListener("click", (e) => {
	document.getElementById("content").innerHTML = "";
	pageLoad();
});
menu.addEventListener("click", (e) => {
	document.getElementById("content").innerHTML = "";
	menuDetails();
});
contact.addEventListener("click", (e) => {
	document.querySelector("#content").innerHTML = "";
	contactDetails();
});
