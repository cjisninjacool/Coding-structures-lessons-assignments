
toppings = [];
formbutton = document.getElementById('button');
formbutton.addEventListener('click',GetToppings);

function GetToppings(){
    toppingOne = document.getElementById("toppingone").value;
    toppingTwo = document.getElementById("toppingtwo").value;
    toppingThree = document.getElementById("toppingthree").value;    
    toppingArray = [toppingOne,toppingTwo,toppingThree];
    calculateTotal(toppingArray);
}

function calculateTotal(toppingArray) {  
    let total = 0; 
    let toppingCost = 2.50; 
    let baseCost = 5.50; 
    crust = document.getElementById('crust').value;
    sauce = document.getElementById('sauce').value;

    // order string concatenation
    let toppingString = "Toppings:";
    let orderString = crust +" With "+ sauce;

    //Calculate Topping cost
    for(i=0; i<toppingArray.length; i++){
        let topping = toppingArray[i];
        
        if (toppingArray[i] != ""){
            total += toppingCost;
            toppingString += " "+toppingArray[i];
    }
    }


    //IMPORTANT!!

    //Make it say N/A if there are no Toppings 
    //And Make it say Crust And Sauce Required if CrustString and SauceString are Empty
    //This wasn't one of the requirements but I wanted to do it for fun 
    //Thanks Mr. Penvy for an amazing class

    //End of Important statement
    console.log(orderString.length)
    if(orderString.length <= 6){
        orderString = "Error: You need to specify Crust and Sauce"
    }
    
    if(toppingString.length < 10){
        
        //If Topping String just says "Toppings:"
        toppingString = "Toppings: No Toppings"
    }



    total += baseCost;
    totalDiv = document.getElementById("Total");
    totalDiv.innerHTML = total;
    pizzaOrderDiv = document.getElementById("pizzaOrder");
    pizzaOrderDiv.innerHTML = orderString;
    ToppingsDiv = document.getElementById("Toppings");
    ToppingsDiv.innerHTML = toppingString;
    console.log(orderString)


}