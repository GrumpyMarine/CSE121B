/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
const fullName = "Jason Kiger";
/* Step 2 - Variables */
const currentYear = new Date().getFullYear();
const profilePicture = "images/Profile.png";

/* Step 3 - Element Variables */
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");
const nameElement = document.getElementById("name");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "portrait");

/* Step 5 - Array */
const favFoodArray = [
  " Pizza",
  " Burgers",
  " Donuts",
  " Chicken",
  " Salads",
  " Chili",
  " Tacos",
  " Pasta",
];
// favFoodArray.innerHTML = favFoodArray.join();
const newFavFood = " Ice Cream";

foodElement.innerHTML = favFoodArray;
foodElement.innerHTML += "<br>";
favFoodArray.push(newFavFood + "<br>");
foodElement.innerHTML += favFoodArray.join();
favFoodArray.shift();
foodElement.innerHTML += favFoodArray.join();
favFoodArray.pop();
foodElement.innerHTML += favFoodArray.join();
