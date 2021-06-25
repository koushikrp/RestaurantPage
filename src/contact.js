export function contactDetails() {
	let content = document.getElementById("content");
	let contact1 = document.createElement("div");
	let name1 = document.createElement("h3");
	let phone1 = document.createElement("p");
	let email1 = document.createElement("p");

	name1.textContent = "Souville Branch";
	phone1.textContent = "08215187332";
	email1.textContent = "contactMe@restaurant.eat";
	contact1.appendChild(name1);
	contact1.appendChild(phone1);
	contact1.appendChild(email1);
	content.appendChild(contact1);
}
