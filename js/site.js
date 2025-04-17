
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
    // - generate numbers between start and end
    let numbers = [];

    for (let i = start; i <= end; i = i + 1) {
        // write down the number i is on
        numbers.push(i);
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

        // figure out if current number is even or odd
        let className = '';

        if (currentNumber % 2 == 0) {
            // the number is even
            className = 'even';

        } else {
            //the number is odd
            className = 'odd';
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
