function getFirstElement (arr){
    //ide írd kódod
    if (arr.length == 0) {
        return console.log("Üres a tömb!")
    }
    else{
        return arr[0];

    }
    }
    const numbers = [1, 2, 3];
    const words = ["apple", "banana", "cherry"];
    console.log(`First number: ${getFirstElement(numbers)}`);
    console.log(`First word: ${getFirstElement(words)}`);