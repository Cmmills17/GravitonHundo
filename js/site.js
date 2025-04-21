
function getValues() {
    // - get each <input /> by ID
    // Divi Input
    let startInputElement = document.getElementById('startInput');

    //Buzz input
    let endInputElement = document.getElementById('endInput');

    // - get the value out of the input
    let startNumber = parseInt(startInputElement.value);
    let endNumber = parseInt(endInputElement.value);


    // - validate that inputs are numbers
    if (Number.isInteger(startNumber) == false || Number.isInteger(endNumber) == false) {
        // if not, show the user an error
        Swal.fire(
            {
                backdrop: false,
                title: 'oops',
                text: 'Please enter valid Divv and Buzz numbers',
                icon: 'error',
            }
        );

    } else {

        // generate the numbers between startNumber and endNumber
        let generatedNumbers = generateNumbers(startNumber, endNumber);


        // display the generated numbers
        displayNumbers(generatedNumbers);

    }
}

// generate some numbers
function generateNumbers(start, end) {

    let numbers = [];

    for (let i = 1; i <= 100; i = i + 1) {



        if (i % start == 0 && i % end == 0) {
            numbers.push('DivvBuzz');

        } else if (i % start == 0) {
            numbers.push('Divv');

        } else if (i % end == 0) {
            numbers.push('Buzz');

        } else {
            numbers.push(i);

        }



    }

    return numbers;
}

// display the numbers on the page
function displayNumbers(numbers) {

    let tableElement = document.getElementById('resultsTable');


    let tableHtml = '';


    //go through each number in the array
    for (let index = 0; index < numbers.length; index = index + 1) {
        // -get one number out of the array
        let currentNumber = numbers[index];

        let className = currentNumber;


        //write the HTML for that number
        tableHtml = tableHtml + `<tr><td class="${className}">${currentNumber}</td></tr>`;
    }

    //after, put that HTML in the table
    tableElement.innerHTML = tableHtml;

}
