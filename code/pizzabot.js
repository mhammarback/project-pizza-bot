
// Pizza sorts:

const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

console.log("Vegetarian Pizza", "Hawaiian Pizza","Pepperoni Pizza");


// prevent the alert to pop up. Must click "order pizza"

const orderPizza = (event) => {
    event.preventDefault();
    alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);
 

// Iteration 6 - Add functions

const orderName = prompt('Enter the name of the pizza you want to order today.');

const validateOrderName = (orderName) => {
  if ((orderName === hawaiian) || (orderName === vegetarian) || (orderName === pepperoni)) {
    return true;
  } else {
    return false;
  }
}


const calculationTotalCost = (orderQuantity, pizzaPrice) => {
  return orderQuantity * pizzaPrice;
}


const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity > 2 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

if (validateOrderName(orderName) === true) {
  const orderQuantity = prompt(`How many ${orderName}(s) do you want?`);
 /*  alert(`Great, I'll get started on your ${orderName}(s) right away, it will cost ${calculationTotalCost(orderQuantity, pizzaPrice)} kr. The pizza(s) will take ${calculateCookingTime(orderQuantity)} minutes.`); */
  document.getElementById("chat").innerHTML= (`Great I'll get started with your ${orderName}(s) right away, it will cost ${calculationTotalCost(orderQuantity, pizzaPrice)} kr. The pizza(s) will take ${calculateCookingTime(orderQuantity)} minutes."`);
} else {
  alert('Select a pizza from the menu');
}

}





