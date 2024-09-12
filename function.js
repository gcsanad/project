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

function factorial(n) {
        //ide írd a kódod
        let f = [];
        if (n == 0 || n == 1)
            return 1;
          if (f[n] > 0)
            return f[n];
          return f[n] = factorial(n-1) * n;
        }
        console.log(`Factorial of 5: ${factorial(5)}`);