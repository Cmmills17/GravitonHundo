
function getValues() {
    // - get each <input /> by ID
    let startInput = document.getElementById('startInput');
    let endInput = document.getElementById('endInput');

    // - get the value out of the input
    let startNumber = parseInt(startInput.value);
    let endNumber = parseInt(endInput.value);
    // if the input is not a number, we get NaN

    // - validate that inputs are numbers
    if (Number.isInteger(startNumber) && Number.isInteger(endNumber)) {

        // generate the numbers between startNumber and endNumber
        let generatedNumbers = generateNumbers(startNumber, endNumber);

        generatedNumbers;
        // display the generated numbers
        displayNumbers(generatedNumbers);
    } else {
        // - tell the user to enter valid numbers
        Swal.fire(
            {
                backdrop: false,
                title: 'oops',
                text: 'Please enter valid start and end numbers',
                icon: 'error',
            }
        );
    }
}

// generate some numbers
function generateNumbers(start, end) {
    let numbers = [];

    for (let i = start; i <= end; i++) {
        if (i === 0) {
            numbers.push("fizzbuzz"); // Special case for 0
        } else if (i % 15 === 0) {
            numbers.push("fizzbuzz");
        } else if (i % 3 === 0) {
            numbers.push("fizz");
        } else if (i % 5 === 0) {
            numbers.push("buzz");
        } else {
            numbers.push(i);
        }
    }

    return numbers;
}

// display the numbers on the page
function displayNumbers(numbers) {

    let tableHtml = '';


    //go through each number in the array
    for (let index = 0; index < numbers.length; index = index + 1) {
        // -get one number out of the array
        let currentNumber = numbers[index]

        let className = '';



        if (currentNumber % 3 == 0) {
            // the number is div by 3
            className = 'fizz';



        } if (currentNumber % 5 == 0) {
            //the number is div by 5
            className = 'buzz';

        } if (currentNumber % 3 == 0 && currentNumber % 5 == 0) {
            // the number is div by 3 and 5
            className = 'fizzbuzz';

        }


        //write the HTML for that number
        tableHtml = tableHtml + `<tr><td class="${className}">${currentNumber}</td></tr>`;
    }



    // - figure out where to display them, in the table
    let tableElement = document.getElementById('resultsTable');

    //after, put that HTML in the table
    tableElement.innerHTML = tableHtml;

    // - TODO: bold the even numbers


}
