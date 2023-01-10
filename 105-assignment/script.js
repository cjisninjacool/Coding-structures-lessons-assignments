var groceryList = ["Bananas", "Milk", "Eggs","Bacon"];
var message = "Please pick up the following from the store: ";
let List="";
for (let i = 0; i < groceryList.length; i++){
    console.log(groceryList.length -1);
    if (groceryList.length -1 > i){
        List += groceryList[i] + ",";
    }
    else{
        List += groceryList[i];
    }
}
console.log(message+List);