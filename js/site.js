// displays a message to the user
function displayHundo() {

    let startValue = 0;
    let endValue = 100;

    //get numbers from UI
    startValue = document.getElementById("startValue").value;
    endValue = document.getElementById("endValue").value;

    //Validate our numbers- start value and end value are integers/whole numbers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //check to see if start and end values are numbers
    //use case
    //33 and Davis - True and False = False
    // 0 and 100 - True and True = True
    // Bobby and 100 - False and True = False
    //maybe limit start value and end value?

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //both numbers are intergers

        //get the numbers from the start value to the end value
        let numbers = generateNumbers(startValue, endValue);

        //display the numbers on the page
        displayNumbers(numbers)

    } else {
        //One or more are not intergers
    }

}

//generate numbers from startValue to endValue
function generateNumbers(startValue, endValue) {

    //0,1,2,3,4... an Array - a list of things seperated by commas
    let numbers = [];
    //loop over the numbers until we hit the end value by adding one (++) everytime
    for (let index = startValue; index <= endValue; index++) {

        //add each number to the array
        numbers.push(index);

    }
    return numbers;
}

//display the nubmers to the page
function displayNumbers(numbers) {

    //0 first index value
    //99 last index value
    //length = 100

    //0,1,2,3,4,5,6
    let startValue = numbers[0];
    let endIndex = numbers.length; //=100

    let ptag = document.getElementById("results")

    for (let index = 0; index < numbers.length; index++) {

        //get the actual number
        let number = numbers[index];
        ptag.innerHTML += number + " | ";

    }
}