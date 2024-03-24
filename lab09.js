//lab09 (see if I can use this later for the add to cart page on the restaurant website)
// 1. Initialize an empty inventory object
let inventory = {}; //{} makes this empty

// 2. Implement a Function to add a product to the inventory that takes the parameters for product ID, name, and quantity
// This function should add the product to the inventory object
// use what I learned in algorithms
function addProduct(id, name, quantity) { // Function addProduct() has parameters
    if (inventory[id]) {
        console.log("Product already exists in inventory.");
        inventory[id].quantity += quantity;
    } else {
        inventory[id] = { name, quantity };
        console.log("Product added to inventory.");
    }
}

// 3. Implement a function called displayInventory that displays the current inventory.
function displayInventory() { // console.log should display when I inspect the page
    console.log("Current Inventory:"); 
    console.log("ID \t| Name \t| Quantity");
    console.log("-----------------------------"); //this is just to seperate it nicely in the console
    for (let id in inventory) {
        console.log(`${id} \t| ${inventory[id].name} \t| ${inventory[id].quantity}`); // \t is tab and the pipeline is just here to break up the details to make it look neater
    }
}

// 4. Implement a function called findProduct that takes a product ID as input and checks if the product exists in the inventory.
// If the product exists, it should display its details;
// otherwise, it should display a message indicating that the product is not found
function findProduct(id) { // function
    if (inventory[id]) {
        console.log(`Product found: ${inventory[id].name}, Quantity: ${inventory[id].quantity}`); // details name and quantity, use backticks ` instead of "" or else it could be taken literally
    } else {
        console.log("Sorry, this product is not found in the inventory."); // message indicating the product is not found
    }
}

// Test for the functions, view console
addProduct("PDT1", "Pool Tube", 25);
addProduct("PDT2", "Lady's Doggy Ice Cream Cake", 29);
addProduct("PDT3", "Dog Bed", 17);
displayInventory();
findProduct("PDT2"); // should work!
findProduct("PDT4"); // should not work becuase PDT4 was not added, should display "Sorry, this product is not found in the inventory."
//seems to work. 3 products where added, details were given, and statments where shown

//UNRELATED TO LAB 9: maybe use addtocart function for website instead, I could try to give the meals certain quantities, I could may one meal display a sold out message.
//plan: watch more tutorials, check Osasre's menu page, attempt to make javascript page, link it to her page and my add to cart page, if that does not work ask sir or reddit, 
//Maybe make a seperate copy of the assignment to experiment on so I don't break her page (worse case senario we have old code on github)
//remember, I already have javascript on one of my pages and I am allowed to ask the group for help on this new page if I cannot get it
//Goal: have the javascript (rough draft) done by next weekend the lastest, show group, qna, ask for help if it does not work