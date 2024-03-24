const displayScreen = document.getElementById("displayScreen");

function appendToDisplay(input){
    displayScreen.value += input;
}

function clearDisplay(){
    displayScreen.value = "";
}

function changeSigns(){
    try{
        displayScreen.value *= -1;
    }
    catch(error){
        displayScreen.value = 0;
    }
}

function calculateDisplay(){
    try {
        let expression = displayScreen.value;

        // Replace 'x' with '*' for multiplication
        expression = expression.replaceAll('x', '*');
        expression = expression.replaceAll('÷', '/');

        // Replace '%' with '/100' for percentage calculation
        expression = expression.replaceAll('%', '/100');

        // Evaluate the expression
        const result = eval(expression);

        // Update the display with the result
        displayScreen.value = result;
    } catch (error) {
        // Handle errors, if any
        displayScreen.value = 'Error';
    }
    
}
