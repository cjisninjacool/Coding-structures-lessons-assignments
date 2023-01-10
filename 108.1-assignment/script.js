function decrece(){
    let box = document.getElementById('rectangle');
    
    let width = box.style.width;
    let num =(parseInt(width) - 10);
    box.style.width = num + 'px';
    console.log(num);   
}

function increce(){
    let box = document.getElementById('rectangle');
    
    let width = box.style.width;
    let num =(parseInt(width) + 10);
    box.style.width = num + 'px';
    console.log(num);   
}
