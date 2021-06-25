// Page Load Function
export default function addRestaurantReview() {
	let content = document.querySelector("#content");

	let image = document.createElement("img");
	let headLine = document.createElement("h2");
	let review = document.createElement("p");
	image.setAttribute("src", "../assets/restaurant.jpg");
	image.setAttribute("alt", "Restaurant Image");
	image.style.width = "400px";
	image.style.height = "400px";
	headLine.textContent = "InfoCity Restaurant";
	review.textContent =
		"Food is very tasty and spicy at this restaurant. They have some healthy items too. Always recommend this restaurant.";
	content.appendChild(image);
	content.appendChild(headLine);
	content.appendChild(review);
}
