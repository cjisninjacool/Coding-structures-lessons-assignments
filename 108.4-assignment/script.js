async function fetchCat() {
    let CatFact = await fetch('https://catfact.ninja/fact?max_length=140').then(res => res.json());
    factWrapper = document.getElementById('factWrapper');
    console.log(CatFact);
    fact = CatFact.fact;
    console.log('status: ', fact);
    h3 = document.createElement('h3');
    p = document.createElement('p');
    h3 =  factWrapper.appendChild(h3).id = "h3";
    p = factWrapper.appendChild(p).id = "p";
    document.getElementById("p").innerHTML = fact
    document.getElementById("h3").innerHTML = "Random Cat Fact"

}

fetchCat();
console.log("test")