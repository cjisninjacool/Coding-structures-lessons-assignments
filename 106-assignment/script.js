let addButton = document.getElementById('Add');
let subtractButton = document.getElementById('Subtract');
let counter = document.getElementById('Counter');
let resetButton = document.getElementById('reset');

resetButton.addEventListener('click',reset)
addButton.addEventListener("click",Add_Number,false);
subtractButton.addEventListener("click",SubtractNumber,false);

EventCounterDiv = document.getElementById('counterLogs');

var events = []

function Add_Number() {
    number = parseInt(counter.innerHTML)
    added_number = number + 1;
    counter.innerHTML = added_number;
    CurrentEvent = "number has been increased by one"
    AddEvent(CurrentEvent)
}
function SubtractNumber(){
    number = parseInt(counter.innerHTML)
    added_number = number - 1;
    counter.innerHTML = added_number;
    CurrentEvent = "number has been decreased by one"
    AddEvent(CurrentEvent)
}

function AddEvent(event){
    console.log(event);
    events.push(event);
    HtmlString = "";
    for(i=0; i<events.length; i++){
        HtmlString += "<h5>"+events[i]+"</h5>";
    }
    EventCounterDiv.innerHTML = HtmlString;
    console.log(HtmlString);
}

function reset(){
    counter.innerHTML = "0";
    CurrentEvent = "Reset the counter";
    AddEvent(CurrentEvent);
}