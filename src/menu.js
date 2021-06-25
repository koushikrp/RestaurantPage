export function menuDetails() {
	let content = document.getElementById("content");
	let menu = document.createElement("div");
	let item1 = document.createElement("div");
	let name1 = document.createElement("h3");
	let details1 = document.createElement("p");

	let item2 = document.createElement("div");
	let name2 = document.createElement("h3");
	let details2 = document.createElement("p");

	name1.textContent = "Idli";
	details1.textContent =
		"The cakes made by steaming a batter consisting of fermented black lentils (de-husked) and rice.";
	item1.appendChild(name1);
	item1.appendChild(details1);

	name2.textContent = "Dosa";
	details2.textContent =
		" a pancake made from rice flour and ground pulses, typically served with a spiced vegetable filling";
	item2.appendChild(name2);
	item2.appendChild(details2);

	menu.appendChild(item1);
	menu.appendChild(item2);

	content.appendChild(menu);
}
