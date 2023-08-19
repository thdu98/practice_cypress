// Initialize a counter
let count = 0;

// Listen for a click event on a button
document.querySelector('button').addEventListener('click', () => {
    // Find the element with the attribute 'data-testid' set to 'num'
    const numElement = document.querySelector('[data-testid="num"]');

    // Increment the counter
    count += 1;

    // Use setTimeout to delay updating the displayed number
    setTimeout(() => {
        displayNumber(count);
        // console.info(count1)
    }, 1000);

    // Function to display the updated count
    function displayNumber(count) {
        numElement.textContent = count;
    }
});

// Listen for a click event on an element with the id 'callButton'
document.getElementById('callButton').addEventListener('click', callAPI);

// Function to call an API
function callAPI() {
    // Make an API call using the Fetch API
    fetch('https://hub.dummyapis.com/vj/ZHS8s7B')
        .then(response => response.json())
        .then(async data => {
            // Process the API response here
            await displayResult(data);
        })
        .catch(error => {
            console.error('Error while calling the API:', error);
        });
}

// Function to display the API result
function displayResult(data) {
    // Display the API result within an element with the id 'result'
    document.getElementById('result').textContent = JSON.stringify(data);
}
