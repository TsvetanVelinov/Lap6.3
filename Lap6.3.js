function sumOfNumber (input){

    let goalNumber = Number (input[0]);
    let sumOfNumber = 0;

    let index = 1;
    let cutrrentNumber = Number (input[index]);

    while(sumOfNumber < goalNumber) {
        sumOfNumber += cutrrentNumber;
        index++;
        cutrrentNumber = Number (input[index]);
    }

    console.log(sumOfNumber);




}


sumOfNumber (["100",
"10",
"20",
"30",
"40"])
