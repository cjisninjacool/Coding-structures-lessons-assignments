function arrayFilter(sentence){
    sentence = sentence.split(' ');
    var finishedSentence = [];
    for(i=0; i<sentence.length; i++){
        if (sentence[i].length > 3){
            finishedSentence.push(sentence[i]);
        }
    }
    //finishedSentence = finishedSentence.join(' ');
    return finishedSentence.join(' ');
}

console.log(arrayFilter("London is a big city in the United Kingdom"))
